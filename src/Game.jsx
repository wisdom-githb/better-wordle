// src/Game.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { loadJSON, saveJSON, makeSolvedKey, makeDailyKey, makeMarathonKey } from "./lib/persist";

const WORD_LENGTH = 5;

// Flip settings - tiles flip sequentially
const FLIP_MS = 500;      // how long a single tile flip takes
const FLIP_DELAY_PER_TILE = 300;  // delay between each tile starting its flip
// Total time for all tiles to finish flipping: flip duration + (number of tiles - 1) * delay per tile
const FLIP_COMPLETE_MS = FLIP_MS + (WORD_LENGTH - 1) * FLIP_DELAY_PER_TILE;

const KEYBOARD_ROWS = [
  "QWERTYUIOP".split(""),
  "ASDFGHJKL".split(""),
  ["BACK", ..."ZXCVBNM".split(""), "ENTER"]
];

const KEYBOARD_HEIGHT = 190;

async function loadWordLists() {
  const baseUrl = import.meta.env.BASE_URL;
  const [answersRes, guessesRes] = await Promise.all([
    fetch(`${baseUrl}wordle-answers-alphabetical.txt`),
    fetch(`${baseUrl}valid-wordle-words.txt`)
  ]);

  if (!answersRes.ok) {
    throw new Error(`Failed to load answers: ${answersRes.status} ${answersRes.statusText}`);
  }
  if (!guessesRes.ok) {
    throw new Error(`Failed to load guesses: ${guessesRes.status} ${guessesRes.statusText}`);
  }

  const answersText = await answersRes.text();
  const guessesText = await guessesRes.text();

  const ANSWER_WORDS = answersText
    .split("\n")
    .filter((w) => w.trim().length === 5)
    .map((w) => w.trim().toUpperCase());

  const ALLOWED_GUESSES = guessesText
    .split("\n")
    .filter((w) => w.trim().length === 5)
    .map((w) => w.trim().toUpperCase());

  return { ANSWER_WORDS, ALLOWED_GUESSES };
}

// +1 per board, but don't reach the next milestone's value early.
function getMaxTurns(numBoards) {
  const milestones = [
    { boards: 1, turns: 6 },
    { boards: 8, turns: 12 },
    { boards: 16, turns: 21 },
    { boards: 32, turns: 37 }
  ];

  if (numBoards <= 1) return 6;

  for (let i = 0; i < milestones.length - 1; i++) {
    const cur = milestones[i];
    const next = milestones[i + 1];

    if (numBoards === next.boards) return next.turns;

    if (numBoards > cur.boards && numBoards < next.boards) {
      const linear = cur.turns + (numBoards - cur.boards);
      return Math.min(linear, next.turns - 1);
    }
  }

  const last = milestones[milestones.length - 1];
  return last.turns + (numBoards - last.boards);
}

// Wordle-like scoring (greens first, then yellows)
function scoreGuess(guess, solution) {
  const result = Array(WORD_LENGTH).fill("grey");
  const solArr = solution.split("");
  const guessArr = guess.split("");
  const used = Array(WORD_LENGTH).fill(false);

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (guessArr[i] === solArr[i]) {
      result[i] = "green";
      used[i] = true;
    }
  }

  for (let i = 0; i < WORD_LENGTH; i++) {
    if (result[i] === "green") continue;
    const ch = guessArr[i];
    let found = -1;
    for (let j = 0; j < WORD_LENGTH; j++) {
      if (!used[j] && solArr[j] === ch) {
        found = j;
        break;
      }
    }
    if (found !== -1) {
      result[i] = "yellow";
      used[found] = true;
    }
  }

  return result;
}

function createBoardState(solution) {
  return {
    solution,
    guesses: [], // each: { word, colors }
    isSolved: false,
    isDead: false
  };
}

const STATUS_PRIORITY = { none: 0, grey: 1, yellow: 2, green: 3 };

function mergeStatus(oldStatus, newStatus) {
  const a = STATUS_PRIORITY[oldStatus || "none"] ?? 0;
  const b = STATUS_PRIORITY[newStatus || "none"] ?? 0;
  return b > a ? newStatus : oldStatus;
}

function colorForStatus(status) {
  if (status === "green") return "#6aaa64";
  if (status === "yellow") return "#c9b458";
  if (status === "grey") return "#3a3a3c";
  return "#818384";
}

function colorForMiniCell(status) {
  if (status === "green") return "#6aaa64";
  if (status === "yellow") return "#c9b458";
  if (status === "grey") return "#3a3a3c";
  return "#121213";
}

function buildLetterMapFromGuesses(guesses) {
  const map = {};
  for (const g of guesses) {
    const letters = g.word.split("");
    for (let i = 0; i < letters.length; i++) {
      const L = letters[i];
      const st = g.colors[i];
      map[L] = mergeStatus(map[L], st);
    }
  }
  return map;
}

function getGreenPattern(guesses) {
  const pattern = Array(WORD_LENGTH).fill("");
  for (const g of guesses) {
    const letters = g.word.split("");
    for (let i = 0; i < WORD_LENGTH; i++) {
      if (g.colors[i] === "green") pattern[i] = letters[i];
    }
  }
  return pattern;
}

// Global turns used = max guess rows among boards
function getTurnsUsed(boards) {
  if (!boards || boards.length === 0) return 0;
  return Math.max(...boards.map((b) => b.guesses.length));
}

// Calculate score for non-speedrun modes
function calculateNonSpeedrunScore(boards, turnsUsed, maxTurns, numBoards) {
  const solvedCount = boards.filter((b) => b.isSolved).length;
  const allSolved = solvedCount === numBoards;
  const minGuesses = numBoards; // Minimum guesses possible (one per board)

  if (allSolved) {
    // All boards solved: score 50-100 based on efficiency
    // Minimum 50 even if all guesses used
    if (turnsUsed <= minGuesses) {
      return 100;
    }
    if (turnsUsed >= maxTurns) {
      return 50; // Minimum for solved
    }
    // Linear interpolation: 100 at minGuesses, 50 at maxTurns
    const score = 100 - (turnsUsed - minGuesses) * (50 / (maxTurns - minGuesses));
    return Math.max(50, Math.min(100, Math.round(score)));
  } else {
    // Not all solved: score 30-50
    // Base score from solved ratio
    const solvedRatio = solvedCount / numBoards;
    let score = 30 + solvedRatio * 15; // 30-45 from solved ratio
    
    // Add partial credit for unsolved boards based on how close they were
    const unsolvedBoards = boards.filter((b) => !b.isSolved);
    if (unsolvedBoards.length > 0) {
      const avgProgress = unsolvedBoards.reduce((sum, b) => {
        return sum + (b.guesses.length / maxTurns);
      }, 0) / unsolvedBoards.length;
      score += avgProgress * 5; // Up to 5 more points for progress on unsolved
    }
    
    return Math.max(30, Math.min(50, Math.round(score)));
  }
}

// Calculate score for speedrun modes
function calculateSpeedrunScore(timeMs, numBoards) {
  const timeSeconds = timeMs / 1000;
  
  // Define excellent, very good, and good times based on number of boards
  // Interpolate between known points:
  // 1 board: excellent=10s, veryGood=20s, good=30s
  // 4 boards: excellent=30s, veryGood=40s, good=60s
  // 8 boards: excellent=60s, veryGood=70s, good=90s
  
  // Use linear interpolation for other board counts
  const getTimeThreshold = (board1, board4, board8, numBoards) => {
    if (numBoards <= 1) return board1;
    if (numBoards >= 8) {
      // Extrapolate beyond 8 boards: linear extension
      return board8 + (numBoards - 8) * ((board8 - board4) / 4);
    }
    if (numBoards <= 4) {
      // Interpolate between 1 and 4
      return board1 + (numBoards - 1) * ((board4 - board1) / 3);
    }
    // Interpolate between 4 and 8
    return board4 + (numBoards - 4) * ((board8 - board4) / 4);
  };
  
  const excellentTime = getTimeThreshold(10, 30, 60, numBoards);
  const veryGoodTime = getTimeThreshold(20, 40, 70, numBoards);
  const goodTime = getTimeThreshold(30, 60, 90, numBoards);
  
  // Score mapping:
  // excellent time or faster: 100
  // very good time: 85
  // good time: 70
  // Beyond good time: linear decrease, minimum 30
  
  if (timeSeconds <= excellentTime) {
    return 100;
  } else if (timeSeconds <= veryGoodTime) {
    // Linear interpolation between excellent and very good
    const ratio = (timeSeconds - excellentTime) / (veryGoodTime - excellentTime);
    return Math.round(100 - ratio * 15); // 100 to 85
  } else if (timeSeconds <= goodTime) {
    // Linear interpolation between very good and good
    const ratio = (timeSeconds - veryGoodTime) / (goodTime - veryGoodTime);
    return Math.round(85 - ratio * 15); // 85 to 70
  } else {
    // Beyond good time: linear decrease to minimum 30
    // Extend the trend: good time gives 70, then decrease
    // Use 2x good time as the point where score reaches 30
    const extendedTime = goodTime * 2;
    if (timeSeconds >= extendedTime) {
      return 30;
    }
    const ratio = (timeSeconds - goodTime) / (extendedTime - goodTime);
    return Math.max(30, Math.round(70 - ratio * 40)); // 70 down to 30
  }
}

function formatElapsed(ms) {
  const total = Math.max(0, Math.floor(ms));
  const minutes = Math.floor(total / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const tenths = Math.floor((total % 1000) / 100);
  const mm = String(minutes).padStart(2, "0");
  const ss = String(seconds).padStart(2, "0");
  return `${mm}:${ss}.${tenths}`;
}

function sumMs(rows) {
  return rows.reduce((acc, r) => acc + (r.ms || 0), 0);
}

function bgForColor(color) {
  if (color === "green") return "#6aaa64";
  if (color === "yellow") return "#c9b458";
  if (color === "grey") return "#3a3a3c";
  return "#121213";
}

// Convert color to emoji for sharing
function colorToEmoji(color) {
  if (color === "green") return "🟩";
  if (color === "yellow") return "🟨";
  if (color === "grey") return "⬛";
  return "⬛";
}

// Convert number to emoji number (0-9)
function numberToEmoji(num) {
  const emojiNumbers = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  return num.toString().split("").map(digit => emojiNumbers[parseInt(digit)]).join("");
}

// Detect if the device is mobile
function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (typeof window !== "undefined" && window.innerWidth <= 768 && "ontouchstart" in window)
  );
}

// Generate share text for the game results
function generateShareText(boards, score, mode, numBoards, speedrunEnabled, stageElapsedMs, popupTotalMs, formatElapsed, turnsUsed, maxTurns, allSolved, solvedCount) {
  const lines = [];
  
  // Guard against empty boards
  if (!boards || boards.length === 0) {
    return "Play Better Wordle!";
  }
  
  // Add header based on mode
  if (numBoards === 1) {
    // Single board: show Wordle-style grid
    const board = boards[0];
    if (board && board.guesses) {
      board.guesses.forEach((guess) => {
        const row = guess.colors.map(colorToEmoji).join("");
        lines.push(row);
      });
    }
    
    lines.push(""); // Empty line
    lines.push(`Score: ${score}`);
    if (speedrunEnabled) {
      const timeMs = popupTotalMs || stageElapsedMs;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
    }
    lines.push(`Guesses: ${turnsUsed}/${maxTurns}`);
    lines.push(allSolved ? "✅ Solved!" : "❌ Not solved");
  } else {
    // Multiple boards: show guess counts for each board in emoji format
    const modePrefix = mode === "marathon" ? "Marathon" : "Daily";
    lines.push(`🙂 ${modePrefix} Better Wordle ${numBoards > 4 ? numBoards : ""}`);
    
    // Create guess count emojis for each board (like 7️⃣5️⃣4️⃣6️⃣)
    const guessCounts = boards.map(board => board.guesses.length);
    const guessCountsEmoji = guessCounts.map(count => numberToEmoji(count)).join("");
    lines.push(guessCountsEmoji);
    lines.push(""); // Empty line
    
    lines.push(`Better Wordle - ${numBoards} boards`);
    lines.push(`Score: ${score}`);
    if (speedrunEnabled) {
      const timeMs = popupTotalMs || stageElapsedMs;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
    }
    lines.push(`Solved: ${solvedCount}/${numBoards}`);
    if (mode === "marathon") {
      lines.push("Marathon Mode");
    }
  }
  
  lines.push(""); // Empty line
  lines.push("Play Better Wordle!");
  lines.push("https://wisdom-githb.github.io/better-wordle/");
  
  return lines.join("\n");
}

const Game = ({
  mode,
  numBoards,
  marathonIndex = 0,
  marathonLevels = [1, 4, 8, 16, 32],
  onMarathonNext,
  onBack,

  speedrunEnabled = false,

  marathonCumulativeMs = 0,
  marathonStageTimes = [], // [{boards, ms}]
  onCommitMarathonStageTime
}) => {
  const [boards, setBoards] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const [message, setMessage] = useState("");
  const messageTimeoutRef = useRef(null);

  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);

  // Track if we're showing a previously solved game
  const savedSolvedStateRef = useRef(null);

  // Unlimited (true in speedrun from the start; otherwise enabled after "Continue")
  const [isUnlimited, setIsUnlimited] = useState(false);

  const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);

  // Flip animation trigger for the latest submitted guess row
  const [revealId, setRevealId] = useState(0);
  // Track if a flip animation is currently in progress
  const [isFlipping, setIsFlipping] = useState(false);
  
  // Refs for each board element for scrolling
  const boardRefs = useRef({});
  // Track if board selection popup is open
  const [showBoardSelector, setShowBoardSelector] = useState(false);

  // Speedrun timing (PER STAGE)
  const stageStartRef = useRef(null);
  const stageEndRef = useRef(null); // set when stage ends to freeze time
  const [nowMs, setNowMs] = useState(Date.now());

  // Prevent double commit + keep last committed stage ms for display
  const committedRef = useRef(false);
  const committedStageMsRef = useRef(0);

  const isMarathonSpeedrun = speedrunEnabled && mode === "marathon";
  const isDailySpeedrun = speedrunEnabled && mode === "daily";

  useEffect(() => {
    if (!speedrunEnabled) return;
    const id = setInterval(() => setNowMs(Date.now()), 100);
    return () => clearInterval(id);
  }, [speedrunEnabled]);

  // Scroll to top when game component mounts or mode changes
  useEffect(() => {
    // Scroll to top of the page when game starts
    window.scrollTo({ top: 0, behavior: "instant" });
    // Also try scrolling the main element if it exists
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
  }, [mode, numBoards, speedrunEnabled]);

  const clearMessageTimer = () => {
    if (messageTimeoutRef.current) {
      clearTimeout(messageTimeoutRef.current);
      messageTimeoutRef.current = null;
    }
  };

  const setTimedMessage = (text, ms = 5000) => {
    clearMessageTimer();
    setMessage(text);
    messageTimeoutRef.current = setTimeout(() => {
      setMessage("");
      messageTimeoutRef.current = null;
    }, ms);
  };

  useEffect(() => {
    return () => clearMessageTimer();
  }, []);

  // Helper function to get the game state key for incomplete games
  const getGameStateKey = () => {
    if (mode === "marathon") {
      return makeMarathonKey(speedrunEnabled);
    }
    return makeDailyKey(numBoards, speedrunEnabled);
  };

  // Helper function to save incomplete game state
  const saveGameState = () => {
    if (boards.length === 0) return; // Don't save empty state
    
    const allSolved = boards.every((b) => b.isSolved);
    if (allSolved) return; // Don't save if all solved (handled by solved state)
    
    const gameStateKey = getGameStateKey();
    const gameState = {
      boards,
      currentGuess,
      isUnlimited,
      maxTurns,
      stageStartTime: stageStartRef.current,
      stageElapsedMs: speedrunEnabled && stageStartRef.current 
        ? (stageEndRef.current ? (stageEndRef.current - stageStartRef.current) : (Date.now() - stageStartRef.current))
        : 0,
      committedRef: committedRef.current,
      committedStageMs: committedStageMsRef.current,
      revealId,
      timestamp: Date.now()
    };
    saveJSON(gameStateKey, gameState);
  };

  // Helper function to clear saved game state
  const clearGameState = () => {
    const gameStateKey = getGameStateKey();
    saveJSON(gameStateKey, null);
  };

  useEffect(() => {
    async function initGame() {
      try {
        setIsLoading(true);

        // Check if this mode has already been solved
        const solvedKey = makeSolvedKey(mode, numBoards, speedrunEnabled, mode === "marathon" ? marathonIndex : null);
        const solvedState = loadJSON(solvedKey, null);

        if (solvedState && solvedState.allSolved) {
          // Mode already solved - load saved state and show popup
          savedSolvedStateRef.current = solvedState;
          setBoards(solvedState.boards);
          setCurrentGuess("");
          setMessage("");
          clearMessageTimer();
          setShowOutOfGuesses(false);
          setIsUnlimited(false);
          setSelectedBoardIndex(null);
          
          // Reset flip state and revealId to prevent any animations
          setRevealId(0);
          setIsFlipping(false);
          
          const turns = getMaxTurns(numBoards);
          setMaxTurns(turns);
          
          // For speedrun, restore timing state
          if (speedrunEnabled) {
            stageStartRef.current = Date.now() - (solvedState.stageElapsedMs || 0);
            stageEndRef.current = Date.now();
          } else {
            stageStartRef.current = Date.now();
            stageEndRef.current = null;
          }
          
          committedRef.current = true;
          committedStageMsRef.current = solvedState.stageElapsedMs || 0;
          
          const { ALLOWED_GUESSES } = await loadWordLists();
          setAllowedSet(new Set(ALLOWED_GUESSES));
          
          setIsLoading(false);
          
          // Delay popup to ensure any potential animations are complete
          // Wait for flip animation time in case there are any animations
          setTimeout(() => {
            setShowPopup(true);
          }, FLIP_COMPLETE_MS);
          return;
        }
        
        // Reset saved state ref when starting a new game
        savedSolvedStateRef.current = null;

        // Check if there's an incomplete game state to resume
        const gameStateKey = getGameStateKey();
        const savedGameState = loadJSON(gameStateKey, null);

        if (savedGameState && savedGameState.boards && savedGameState.boards.length > 0) {
          // Check if the saved state matches current configuration
          const allSolvedInSaved = savedGameState.boards.every((b) => b.isSolved);
          if (!allSolvedInSaved) {
            // Resume incomplete game
            const { ALLOWED_GUESSES } = await loadWordLists();
            setAllowedSet(new Set(ALLOWED_GUESSES));
            
            setBoards(savedGameState.boards);
            setCurrentGuess(savedGameState.currentGuess || "");
            setMaxTurns(savedGameState.maxTurns || getMaxTurns(numBoards));
            setIsUnlimited(savedGameState.isUnlimited || false);
            setSelectedBoardIndex(null);
            
            // Restore timing state
            if (speedrunEnabled && savedGameState.stageStartTime) {
              if (savedGameState.stageElapsedMs > 0 && savedGameState.stageElapsedMs === savedGameState.committedStageMs) {
                // Was frozen/committed
                stageStartRef.current = savedGameState.stageStartTime;
                stageEndRef.current = savedGameState.stageStartTime + (savedGameState.stageElapsedMs || 0);
                committedRef.current = savedGameState.committedRef || false;
                committedStageMsRef.current = savedGameState.committedStageMs || 0;
              } else {
                // Was active, resume timing
                const elapsed = savedGameState.stageElapsedMs || 0;
                stageStartRef.current = Date.now() - elapsed;
                stageEndRef.current = null;
                committedRef.current = false;
                committedStageMsRef.current = 0;
              }
            } else {
              stageStartRef.current = Date.now();
              stageEndRef.current = null;
              committedRef.current = false;
              committedStageMsRef.current = 0;
            }
            
            setRevealId(savedGameState.revealId || 0);
            setIsFlipping(false); // No animation in progress when resuming
            setShowPopup(false);
            setShowOutOfGuesses(false);
            setMessage("");
            clearMessageTimer();
            
            setIsLoading(false);
            return;
          }
        }

        // No saved state - start new game
        const { ANSWER_WORDS, ALLOWED_GUESSES } = await loadWordLists();
        setAllowedSet(new Set(ALLOWED_GUESSES));

        const turns = getMaxTurns(numBoards);
        setMaxTurns(turns);

        const newBoards = [];
        for (let i = 0; i < numBoards; i++) {
          const solution = ANSWER_WORDS[Math.floor(Math.random() * ANSWER_WORDS.length)];
          newBoards.push(createBoardState(solution));
        }

        setBoards(newBoards);
        setCurrentGuess("");
        setMessage("");
        clearMessageTimer();
        setShowPopup(false);
        setShowOutOfGuesses(false);

        // Speedrun starts unlimited immediately
        setIsUnlimited(!!speedrunEnabled);
        setSelectedBoardIndex(null);

        // Reset stage timer + commit guard for each stage
        stageStartRef.current = Date.now();
        stageEndRef.current = null;
        committedRef.current = false;
        committedStageMsRef.current = 0;

        // Reset flip id and state
        setRevealId(0);
        setIsFlipping(false);

        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing game:", error);
        setIsLoading(false);
        setTimedMessage("Failed to load word lists. Please refresh the page.", 10000);
      }
    }

    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numBoards, mode, speedrunEnabled, marathonIndex]);

  const stageElapsedMs = (() => {
    if (savedSolvedStateRef.current?.stageElapsedMs !== undefined) {
      return savedSolvedStateRef.current.stageElapsedMs;
    }
    if (!speedrunEnabled || !stageStartRef.current) return 0;
    const end = stageEndRef.current ?? nowMs;
    return end - stageStartRef.current;
  })();

  const hasThisStageCommittedInProps =
    isMarathonSpeedrun && marathonStageTimes.some((x) => x.boards === numBoards);

  const displayTotalMs = isMarathonSpeedrun
    ? marathonCumulativeMs +
      (hasThisStageCommittedInProps
        ? 0
        : committedRef.current
        ? committedStageMsRef.current
        : stageElapsedMs)
    : stageElapsedMs;

  const commitStageIfNeeded = (ms) => {
    if (!isMarathonSpeedrun) return;
    if (committedRef.current) return;

    committedRef.current = true;
    committedStageMsRef.current = ms;

    if (typeof onCommitMarathonStageTime === "function") {
      onCommitMarathonStageTime(numBoards, ms);
    }
  };

  const invalidCurrentGuess =
    currentGuess.length === WORD_LENGTH && !allowedSet.has(currentGuess);

  const perBoardLetterMaps = useMemo(
    () => boards.map((b) => buildLetterMapFromGuesses(b.guesses)),
    [boards]
  );

  const focusedLetterMap = useMemo(() => {
    if (selectedBoardIndex == null) return null;
    return perBoardLetterMaps[selectedBoardIndex];
  }, [selectedBoardIndex, perBoardLetterMaps]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showPopup || showOutOfGuesses) return;
      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) addLetter(key);
      else if (key === "BACKSPACE") removeLetter();
      else if (key === "ENTER") submitGuess();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopup, showOutOfGuesses, currentGuess, boards, maxTurns, allowedSet, isUnlimited]);

  const addLetter = (letter) => {
    if (currentGuess.length >= WORD_LENGTH) return;
    setCurrentGuess((prev) => prev + letter);
    if (message) {
      setMessage("");
      clearMessageTimer();
    }
  };

  const removeLetter = () => {
    if (currentGuess.length === 0) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
    if (message) {
      setMessage("");
      clearMessageTimer();
    }
  };

  // Freeze and return final stage ms
  const freezeStageTimer = () => {
    if (!speedrunEnabled) return 0;
    const end = Date.now();
    if (stageEndRef.current == null) stageEndRef.current = end;
    return stageEndRef.current - stageStartRef.current;
  };

  const submitGuess = () => {
    if (showPopup || showOutOfGuesses) return;
    if (currentGuess.length !== WORD_LENGTH) return;

    if (!allowedSet.has(currentGuess)) {
      setTimedMessage("Not in word list.", 5000);
      setCurrentGuess("");
      return;
    }

    const allOver = isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);

    if (allOver) return;

    const newBoards = boards.map((board) => {
      if (board.isSolved) return board;
      if (!isUnlimited && board.isDead) return board;

      const colors = scoreGuess(currentGuess, board.solution);
      const guesses = [...board.guesses, { word: currentGuess, colors }];

      const isSolvedNow = currentGuess === board.solution;
      const isDeadNow = !isUnlimited && !isSolvedNow && guesses.length >= maxTurns;

      return { ...board, guesses, isSolved: isSolvedNow, isDead: isDeadNow };
    });

    setBoards(newBoards);

    // trigger reveal animation for the row that was just added
    setRevealId((x) => x + 1);
    
    // Mark that flip animation is in progress
    setIsFlipping(true);

    // Clear current guess immediately but delay showing next row until animation completes
    setCurrentGuess("");
    setMessage("");
    clearMessageTimer();
    
    // Allow next row to show after flip animation completes
    setTimeout(() => {
      setIsFlipping(false);
    }, FLIP_COMPLETE_MS);

    const finished = isUnlimited
      ? newBoards.every((b) => b.isSolved)
      : newBoards.every((b) => b.isSolved || b.isDead);

    const allSolvedNow = newBoards.every((b) => b.isSolved);

    if (finished && !allSolvedNow && !isUnlimited) {
      freezeStageTimer();
      // Wait for flip animation to complete before showing popup
      setTimeout(() => {
        setShowOutOfGuesses(true);
      }, FLIP_COMPLETE_MS);
      return;
    }

    if (finished && allSolvedNow) {
      const finalStageMs = freezeStageTimer();
      if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);
      
      // Save solved state
      const solvedKey = makeSolvedKey(mode, numBoards, speedrunEnabled, mode === "marathon" ? marathonIndex : null);
      const currentTurnsUsed = getTurnsUsed(newBoards);
      
      // Calculate popupTotalMs for saving (same logic as display)
      let savedPopupTotalMs = 0;
      if (speedrunEnabled) {
        if (isMarathonSpeedrun) {
          // For marathon speedrun, calculate total from all stages
          // Since we just committed, the stage should be in marathonStageTimes after commit
          // But to be safe, we'll calculate it: if already committed, use cumulative, else add current
          const stageAlreadyCommitted = marathonStageTimes.some((x) => x.boards === numBoards);
          savedPopupTotalMs = stageAlreadyCommitted 
            ? marathonCumulativeMs 
            : marathonCumulativeMs + finalStageMs;
        } else {
          savedPopupTotalMs = finalStageMs;
        }
      }
      
      const currentScore = speedrunEnabled 
        ? calculateSpeedrunScore(savedPopupTotalMs || finalStageMs, numBoards)
        : calculateNonSpeedrunScore(newBoards, currentTurnsUsed, maxTurns, numBoards);
      
      const solvedState = {
        boards: newBoards,
        score: currentScore,
        turnsUsed: currentTurnsUsed,
        maxTurns,
        allSolved: true,
        solvedCount: newBoards.length,
        stageElapsedMs: finalStageMs,
        popupTotalMs: savedPopupTotalMs,
        timestamp: Date.now()
      };
      saveJSON(solvedKey, solvedState);
      
      // Clear incomplete game state since game is now solved
      clearGameState();
      
      // Wait for flip animation to complete before showing popup
      setTimeout(() => {
        setShowPopup(true);
      }, FLIP_COMPLETE_MS);
    }
  };

  // Save game state whenever boards change (for incomplete games)
  useEffect(() => {
    if (boards.length > 0 && !isLoading) {
      const allSolved = boards.every((b) => b.isSolved);
      if (!allSolved) {
        saveGameState();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boards, currentGuess, isUnlimited]);

  // Save game state when user navigates back
  const handleBack = () => {
    saveGameState();
    onBack();
  };

  const handleVirtualKey = (key) => {
    if (showPopup || showOutOfGuesses) return;
    if (key === "ENTER") submitGuess();
    else if (key === "BACK") removeLetter();
    else addLetter(key);
  };

  const solvedCount = boards.filter((b) => b.isSolved).length;

  const finished = isUnlimited
    ? boards.length > 0 && boards.every((b) => b.isSolved)
    : boards.length > 0 && boards.every((b) => b.isSolved || b.isDead);

  const allSolved = boards.length > 0 && boards.every((b) => b.isSolved);

  const solutionsText = boards.map((b) => b.solution).join(" · ");
  const turnsUsed = getTurnsUsed(boards);

  const statusText =
    speedrunEnabled
      ? ""
      : finished && !showPopup && !showOutOfGuesses
      ? "Stage complete."
      : `Guesses used: ${turnsUsed}/${maxTurns}${isUnlimited ? " (unlimited)" : ""}`;

  const gridCols = Math.ceil(Math.sqrt(numBoards));
  const gridRows = Math.ceil(numBoards / gridCols);

  const marathonHasNext = mode === "marathon" && marathonIndex < marathonLevels.length - 1;
  const marathonNextBoards = marathonHasNext ? marathonLevels[marathonIndex + 1] : null;

  const showNextStageBar =
    mode === "marathon" && allSolved && !showPopup && !showOutOfGuesses && marathonHasNext;

  const goNextStage = () => {
    if (marathonHasNext && typeof onMarathonNext === "function") onMarathonNext();
  };

  const exitFromOutOfGuesses = () => {
    freezeStageTimer();
    setShowOutOfGuesses(false);
    // Wait for any flip animations to complete before showing popup
    setTimeout(() => {
      setShowPopup(true);
    }, FLIP_COMPLETE_MS);
  };

  const continueAfterOutOfGuesses = () => {
    setShowOutOfGuesses(false);
    setIsUnlimited(true);
    setBoards((prev) => prev.map((b) => (b.isSolved ? b : { ...b, isDead: false })));
  };

  const canManualEnd = isUnlimited && !allSolved && !showPopup && !showOutOfGuesses;

  const manualEndGame = () => {
    if (!canManualEnd) return;
    const finalStageMs = freezeStageTimer();
    if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);
    // Wait for any flip animations to complete before showing popup
    setTimeout(() => {
      setShowPopup(true);
    }, FLIP_COMPLETE_MS);
  };

  const speedrunRows = useMemo(() => {
    if (!speedrunEnabled) return [];

    if (isMarathonSpeedrun) {
      const rows = marathonStageTimes.slice();
      if (!rows.some((x) => x.boards === numBoards)) rows.push({ boards: numBoards, ms: stageElapsedMs });

      const order = new Map(marathonLevels.map((b, i) => [b, i]));
      return rows
        .slice()
        .sort((a, b) => (order.get(a.boards) ?? 999) - (order.get(b.boards) ?? 999));
    }

    return [{ boards: numBoards, ms: stageElapsedMs }];
  }, [speedrunEnabled, isMarathonSpeedrun, marathonStageTimes, numBoards, stageElapsedMs, marathonLevels]);

  const popupTotalMs = savedSolvedStateRef.current?.popupTotalMs !== undefined
    ? savedSolvedStateRef.current.popupTotalMs
    : speedrunEnabled
    ? isMarathonSpeedrun
      ? sumMs(speedrunRows)
      : stageElapsedMs
    : 0;

  // Calculate score
  const score = useMemo(() => {
    if (speedrunEnabled) {
      return calculateSpeedrunScore(popupTotalMs || stageElapsedMs, numBoards);
    } else {
      return calculateNonSpeedrunScore(boards, turnsUsed, maxTurns, numBoards);
    }
  }, [speedrunEnabled, popupTotalMs, stageElapsedMs, numBoards, boards, turnsUsed, maxTurns]);

  // Generate share text
  const shareText = useMemo(() => {
    // Guard against empty boards
    if (!boards || boards.length === 0) {
      return "Play Better Wordle!";
    }
    return generateShareText(
      boards,
      score,
      mode,
      numBoards,
      speedrunEnabled,
      stageElapsedMs,
      popupTotalMs,
      formatElapsed,
      turnsUsed,
      maxTurns,
      allSolved,
      solvedCount
    );
  }, [boards, score, mode, numBoards, speedrunEnabled, stageElapsedMs, popupTotalMs, turnsUsed, maxTurns, allSolved, solvedCount]);

  // Handle share button click
  const handleShare = async () => {
    const isMobile = isMobileDevice();
    
    try {
      // Mobile: Use native share API
      if (isMobile && navigator.share) {
        try {
          await navigator.share({
            title: "Better Wordle",
            text: shareText
          });
          return; // Successfully shared, exit
        } catch (shareErr) {
          // If user cancelled, don't show error
          if (shareErr.name === "AbortError") {
            return;
          }
          // If share failed, fall through to clipboard
          console.error("Share failed, falling back to clipboard:", shareErr);
        }
      }
      
      // Desktop (or mobile if share failed): Copy to clipboard
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(shareText);
        setTimedMessage("Copied to clipboard!", 2000);
      } else {
        // Fallback for older browsers that don't support clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = shareText;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.width = "2em";
        textArea.style.height = "2em";
        textArea.style.padding = "0";
        textArea.style.border = "none";
        textArea.style.outline = "none";
        textArea.style.boxShadow = "none";
        textArea.style.background = "transparent";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
          const successful = document.execCommand("copy");
          if (successful) {
            setTimedMessage("Copied to clipboard!", 2000);
          } else {
            setTimedMessage("Failed to copy. Please copy manually.", 3000);
          }
        } catch (err) {
          console.error("Fallback copy failed:", err);
          setTimedMessage("Failed to copy. Please copy manually.", 3000);
        }
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error("Error in handleShare:", err);
      setTimedMessage("Failed to copy. Please copy manually.", 3000);
    }
  };

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121213",
          color: "#ffffff"
        }}
      >
        Loading Wordle dictionaries...
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#121213",
        color: "#ffffff"
      }}
    >
      {/* Wordle-style 2-sided flip: back face is colored and only visible after 90deg */}
      <style>{`
        .mw-tile {
          flex-shrink: 0;
          perspective: 900px;
        }

        .mw-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        @keyframes mwFlipCard {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }

        .mw-flip {
          animation: mwFlipCard ${FLIP_MS}ms ease-in-out both;
          animation-fill-mode: both;
        }

        .mw-face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          border-radius: 4px;
          text-transform: uppercase;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .mw-front { transform: rotateX(0deg); }
        .mw-back  { transform: rotateX(180deg); }
      `}</style>

      <header
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #3a3a3c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12
        }}
      >
        <button
          onClick={handleBack}
          style={{
            border: "none",
            background: "transparent",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: 16,
            whiteSpace: "nowrap"
          }}
        >
          ← Home
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: "bold", letterSpacing: 2 }}>
            {mode === "marathon" ? `MARATHON (${numBoards} boards)` : "DAILY GAME"}
            {speedrunEnabled ? " · SPEEDRUN" : ""}
          </div>

          <div
            style={{
              marginTop: 4,
              fontSize: 12,
              color: "#d7dadc",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            title={solutionsText}
          >
            Solution{boards.length > 1 ? "s" : ""}: {solutionsText}
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#d7dadc", whiteSpace: "nowrap", textAlign: "right" }}>
          <div>Boards: {numBoards}</div>
          <div>Max turns: {maxTurns}</div>
          {speedrunEnabled && (
            <>
              <div>Stage: {formatElapsed(stageElapsedMs)}</div>
              <div>Total: {formatElapsed(displayTotalMs)}</div>
            </>
          )}
        </div>
      </header>

      <main
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          paddingBottom: KEYBOARD_HEIGHT + (showNextStageBar ? 62 : 16)
        }}
      >
        <div style={{ padding: "16px" }}>
        {/* End game button row - only show if needed */}
        {canManualEnd && (
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <button
              onClick={manualEndGame}
              style={{
                marginLeft: "auto",
                padding: "8px 10px",
                borderRadius: 10,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase"
              }}
            >
              End game
            </button>
          </div>
        )}

        {/* Toast message - displayed above popups */}
        {message && (
          <div
            style={{
              position: "fixed",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#1a1a1b",
              color: "#f06272",
              padding: "12px 20px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: "bold",
              border: "1px solid #3a3a3c",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              zIndex: 3000,
              pointerEvents: "none",
              maxWidth: "90vw",
              textAlign: "center"
            }}
          >
            {message}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(${numBoards >= 16 ? 160 : 180}px, 1fr))`,
            gap: 16
          }}
        >
          {boards.map((board, index) => {
            const isSelected = selectedBoardIndex === index;

            const guessCount = board.guesses.length;

            // No extra empty row after solved
            const rowsToShow = board.isSolved
              ? guessCount
              : Math.min(guessCount + 1, Math.max(maxTurns, guessCount + 1));

            const greenPattern = getGreenPattern(board.guesses);

            // Calculate tile size based on number of boards to ensure proper fit
            // 5 tiles: tileWidth + (2 * margin) = per tile, so total = 5 * (tileWidth + 4)
            // For smaller boards, reduce tile size and margin proportionally
            const tileSize = numBoards >= 16 ? 28 : 32;
            const tileMargin = numBoards >= 16 ? 1.5 : 2;
            const rowWidth = 5 * (tileSize + tileMargin * 2);

            return (
              <div
                key={index}
                ref={(el) => {
                  boardRefs.current[index] = el;
                }}
                onClick={() => setSelectedBoardIndex((prev) => (prev === index ? null : index))}
                style={{
                  borderRadius: 8,
                  border: isSelected ? "2px solid #facc15" : "1px solid #3a3a3c",
                  padding: 8,
                  background: "#1a1a1b",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 0 0 1px rgba(250,204,21,0.53)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  width: "100%",
                  boxSizing: "border-box"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 6,
                    fontSize: 12,
                    color: "#d7dadc"
                  }}
                >
                  <span>
                    Board {index + 1} {isSelected ? "· focused" : ""}
                  </span>
                  {!speedrunEnabled && (
                    <span>
                      {board.isSolved
                        ? "Solved"
                        : !isUnlimited && board.isDead
                        ? "Failed"
                        : `${board.guesses.length}/${maxTurns}`}
                    </span>
                  )}
                </div>

                {Array.from({ length: rowsToShow }).map((_, rowIdx) => {
                  const row = board.guesses[rowIdx];

                  const isCurrentRow =
                    !row &&
                    !board.isSolved &&
                    (isUnlimited || !board.isDead) &&
                    rowIdx === board.guesses.length;

                  const isInvalidRow = isCurrentRow && invalidCurrentGuess;

                  // Only animate the last committed guess row (the one just added)
                  const isJustRevealedRow = !!row && rowIdx === board.guesses.length - 1;

                  return (
                    <div 
                      key={rowIdx} 
                      style={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center", 
                        marginBottom: 4, 
                        minHeight: `${tileSize + 4}px`, 
                        flexShrink: 0, 
                        height: `${tileSize + 4}px`,
                        width: "100%",
                        maxWidth: `${rowWidth}px`,
                        marginLeft: "auto",
                        marginRight: "auto"
                      }}
                    >
                      {Array.from({ length: WORD_LENGTH }).map((__, colIdx) => {
                        const typedChar = isCurrentRow ? currentGuess[colIdx] : "";

                        const displayChar = row
                          ? row.word[colIdx]
                          : typedChar
                          ? typedChar
                          : isCurrentRow
                          ? greenPattern[colIdx]
                          : "";

                        const isPlaceholder =
                          !row && isCurrentRow && !typedChar && !!greenPattern[colIdx];

                        const color = row ? row.colors[colIdx] : undefined;

                        // Input/current row (no flip, no reveal coloring)
                        if (!row) {
                          let bg = "#121213";
                          let borderColor = isCurrentRow ? "#565758" : "#3a3a3c";
                          let fg = isPlaceholder ? "rgba(255,255,255,0.45)" : "#ffffff";

                          if (isInvalidRow) {
                            borderColor = "#ef4444";
                            bg = "#2a0f10";
                            fg = "#ffffff";
                          }

                          return (
                            <div
                              key={colIdx}
                              style={{
                                width: tileSize,
                                height: tileSize,
                                margin: tileMargin,
                                borderRadius: 4,
                                border: `2px solid ${borderColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                fontSize: numBoards >= 16 ? 16 : 18,
                                backgroundColor: bg,
                                textTransform: "uppercase",
                                color: fg,
                                flexShrink: 0,
                                boxSizing: "border-box"
                              }}
                            >
                              {displayChar}
                            </div>
                          );
                        }

                        // Revealed rows:
                        // - If this is NOT the newest revealed row, show static colored tile (no card)
                        if (!isJustRevealedRow) {
                          const bg = bgForColor(color);
                          return (
                            <div
                              key={colIdx}
                              style={{
                                width: tileSize,
                                height: tileSize,
                                margin: tileMargin,
                                borderRadius: 4,
                                border: "2px solid transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                fontSize: numBoards >= 16 ? 16 : 18,
                                backgroundColor: bg,
                                textTransform: "uppercase",
                                color: "#ffffff",
                                flexShrink: 0,
                                boxSizing: "border-box"
                              }}
                            >
                              {displayChar}
                            </div>
                          );
                        }

                        // Newest revealed row: always flip, even if board is solved
                        // This ensures the flip animation plays for the correct word guess too
                        const frontBg = "#121213";
                        const frontBorder = "#3a3a3c";
                        const backBg = bgForColor(color);

                        // Tiles flip sequentially with a delay per tile
                        const delayMs = colIdx * FLIP_DELAY_PER_TILE;

                        return (
                          <div 
                            key={colIdx} 
                            className="mw-tile"
                            style={{
                              width: tileSize,
                              height: tileSize,
                              margin: tileMargin
                            }}
                          >
                            <div
                              key={`${revealId}-${index}-${rowIdx}-${colIdx}`}
                              className="mw-card mw-flip"
                              style={{ animationDelay: `${delayMs}ms` }}
                            >
                              <div
                                className="mw-face mw-front"
                                style={{
                                  backgroundColor: frontBg,
                                  border: `2px solid ${frontBorder}`,
                                  color: "#ffffff",
                                  fontSize: numBoards >= 16 ? 16 : 18
                                }}
                              >
                                {displayChar}
                              </div>

                              <div
                                className="mw-face mw-back"
                                style={{
                                  backgroundColor: backBg,
                                  border: "2px solid transparent",
                                  color: "#ffffff",
                                  fontSize: numBoards >= 16 ? 16 : 18
                                }}
                              >
                                {displayChar}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        </div>
      </main>

      {/* Next-stage bar (unchanged: only when all solved) */}
      {showNextStageBar && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: KEYBOARD_HEIGHT,
            zIndex: 1200,
            padding: "10px 12px",
            background: "rgba(18,18,19,0.92)",
            borderTop: "1px solid #3a3a3c"
          }}
        >
          <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", gap: 10, alignItems: "center" }}>
            <div style={{ color: "#d7dadc", fontSize: 13 }}>Stage cleared. Continue marathon?</div>
            <button
              onClick={goNextStage}
              style={{
                marginLeft: "auto",
                padding: "10px 14px",
                borderRadius: 10,
                border: "none",
                background: "#c9b458",
                color: "#121213",
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase"
              }}
            >
              Next: {marathonNextBoards} boards
            </button>
          </div>
        </div>
      )}

      {/* Fixed keyboard footer */}
      <footer
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          borderTop: "1px solid #3a3a3c",
          padding: "8px 4px calc(16px + env(safe-area-inset-bottom, 0px))",
          background: "#121213"
        }}
      >
        <div style={{ maxWidth: "100%", width: "100%", padding: "0 4px", margin: "0 auto", display: "flex", flexDirection: "column", gap: 6 }}>
          {KEYBOARD_ROWS.map((row, rIndex) => (
            <div key={rIndex} style={{ display: "flex", justifyContent: "center", gap: 3, padding: "0 2px" }}>
              {row.map((key) => {
                const isAction = key === "ENTER" || key === "BACK";
                const isLetter = /^[A-Z]$/.test(key);

                const isMultiNoFocus = numBoards > 1 && selectedBoardIndex == null;
                let baseBg = "#818384";

                if (!isMultiNoFocus && isLetter) {
                  const map = selectedBoardIndex == null ? perBoardLetterMaps[0] : focusedLetterMap;
                  const status = map && map[key] ? map[key] : "none";
                  baseBg = status === "none" ? "#818384" : colorForStatus(status);
                }

                const display = key === "BACK" ? "⌫" : key;

                const showGridOverlay = isLetter && isMultiNoFocus;
                const multiStatuses = isLetter ? perBoardLetterMaps.map((m) => m[key] ?? "none") : [];

                // Calculate responsive sizes for mobile
                const isMobile = window.innerWidth <= 768;
                const actionButtonMaxWidth = isMobile ? "none" : 92;
                const letterButtonMaxWidth = isMobile ? "none" : 44;
                const buttonGap = isMobile ? 3 : 4;
                const buttonHeight = isMobile ? 42 : 52;
                const buttonPadding = isMobile ? (isAction ? "4px 4px" : "4px 2px") : "6px 4px";
                // Font size is 70% of button height for letters, smaller for action buttons to fit text
                // On mobile, use even smaller font for action buttons to prevent overflow
                const fontSize = isAction 
                  ? isMobile 
                    ? `${Math.round(buttonHeight * 0.4)}px`
                    : `${Math.round(buttonHeight * 0.5)}px`
                  : `${Math.round(buttonHeight * 0.7)}px`;

                return (
                  <button
                    key={key}
                    onClick={() => handleVirtualKey(key)}
                    style={{
                      position: "relative",
                      flex: isAction ? 1.6 : 1,
                      maxWidth: isAction ? actionButtonMaxWidth : letterButtonMaxWidth,
                      minWidth: 0,
                      height: buttonHeight,
                      padding: buttonPadding,
                      borderRadius: 6,
                      border: "none",
                      backgroundColor: baseBg,
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: fontSize,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <div style={{ position: "relative", zIndex: 2, lineHeight: `${buttonHeight}px`, overflow: "hidden", textOverflow: "ellipsis", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: isAction ? "0 4px" : "0" }}>{display}</div>

                    {showGridOverlay && (
                      <div
                        style={{
                          position: "absolute",
                          left: 6,
                          right: 6,
                          bottom: 6,
                          height: 22,
                          display: "grid",
                          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
                          gap: 2,
                          opacity: 0.95
                        }}
                      >
                        {multiStatuses.map((st, idx) => (
                          <div
                            key={idx}
                            style={{
                              borderRadius: 2,
                              backgroundColor: colorForMiniCell(st),
                              border: "1px solid rgba(0,0,0,0.25)"
                            }}
                          />
                        ))}
                        {Array.from({ length: gridCols * gridRows - numBoards }).map((_, i) => (
                          <div key={`pad-${i}`} style={{ borderRadius: 2, backgroundColor: "rgba(0,0,0,0.12)" }} />
                        ))}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </footer>

      {/* Floating board selector button - bottom left (only show when more than 1 board) */}
      {numBoards > 1 && (
        <button
          onClick={() => setShowBoardSelector(!showBoardSelector)}
          style={{
            position: "fixed",
            bottom: KEYBOARD_HEIGHT + 20,
            left: 20,
            padding: "6px 12px",
            borderRadius: 6,
            backgroundColor: "#121213",
            border: "1px solid #ffffff",
            color: "#ffffff",
            fontSize: 11,
            fontWeight: "bold",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(0,0,0,0.7)",
            transition: "all 0.3s ease",
            outline: "none",
            whiteSpace: "nowrap"
          }}
          aria-label={showBoardSelector ? "Close board selection" : "Open board selection"}
        >
          {showBoardSelector ? "Close" : "Board Selection"}
        </button>
      )}

      {/* Board selector popup (only show when more than 1 board) */}
      {numBoards > 1 && showBoardSelector && (
        <div
          style={{
            position: "fixed",
            bottom: KEYBOARD_HEIGHT + 90,
            left: 20,
            backgroundColor: "#1a1a1b",
            borderRadius: 12,
            padding: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.8)",
            zIndex: 9998,
            border: "1px solid #3a3a3c",
            maxWidth: "90vw",
            minWidth: 200
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Status text (only show if not speedrun mode) */}
            {!speedrunEnabled && statusText && (
              <div style={{ fontSize: 14, color: "#d7dadc", fontWeight: "bold", marginBottom: 4 }}>
                {statusText}
              </div>
            )}
            
            {/* Board number buttons */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
              {boards.map((board, index) => {
                const isSelected = selectedBoardIndex === index;
                const isSolved = board.isSolved;
                const isDead = !isUnlimited && board.isDead;
                
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedBoardIndex(index);
                      setShowBoardSelector(false);
                      const boardElement = boardRefs.current[index];
                      if (boardElement) {
                        boardElement.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    style={{
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: isSelected ? "2px solid #facc15" : "1px solid #3a3a3c",
                      background: isSolved
                        ? "#6aaa64"
                        : isDead
                        ? "#3a3a3c"
                        : isSelected
                        ? "#1a1a1b"
                        : "transparent",
                      color: isSolved || isDead ? "#ffffff" : "#ffffff",
                      fontSize: 13,
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      minWidth: 40,
                      textAlign: "center"
                    }}
                  >
                    B{index + 1}
                  </button>
                );
              })}
            </div>
            
            {/* Go back to home button */}
            <button
              onClick={() => {
                setShowBoardSelector(false);
                onBack();
              }}
              style={{
                padding: "8px 16px",
                borderRadius: 6,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontSize: 13,
                fontWeight: "bold",
                cursor: "pointer",
                transition: "all 0.2s",
                marginTop: 4,
                textAlign: "center"
              }}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      )}

      {/* Out-of-guesses popup */}
      {showOutOfGuesses && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2100
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1a1b",
              borderRadius: 16,
              padding: 24,
              maxWidth: 520,
              width: "92vw",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
            }}
          >
            <h2 style={{ margin: 0, marginBottom: 10, fontSize: 20, fontWeight: "bold" }}>
              All guesses used
            </h2>

            <div style={{ marginBottom: 16, fontSize: 14, color: "#d7dadc", lineHeight: 1.4 }}>
              You reached the max turns ({maxTurns}). Do you want to exit, continue with unlimited guesses,
              {mode === "marathon" && marathonHasNext ? " or go to the next stage?" : "?"}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={exitFromOutOfGuesses}
                style={{
                  flex: 1,
                  minWidth: 160,
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "1px solid #3a3a3c",
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Exit
              </button>

              <button
                onClick={continueAfterOutOfGuesses}
                style={{
                  flex: 1,
                  minWidth: 160,
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#c9b458",
                  color: "#121213",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Continue
              </button>

              {mode === "marathon" && marathonHasNext && (
                <button
                  onClick={() => {
                    freezeStageTimer();
                    setShowOutOfGuesses(false);
                    setShowPopup(false);
                    goNextStage();
                  }}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    padding: "12px 0",
                    borderRadius: 10,
                    border: "none",
                    background: "#6aaa64",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                    cursor: "pointer",
                    letterSpacing: 1,
                    textTransform: "uppercase"
                  }}
                >
                  Next stage
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* End popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.82)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2000
          }}
        >
          <div
            style={{
              backgroundColor: "#1a1a1b",
              borderRadius: 16,
              padding: 24,
              maxWidth: 560,
              width: "92vw",
              maxHeight: "80vh",
              overflowY: "auto",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
            }}
          >
            <h2
              style={{
                margin: 0,
                marginBottom: 10,
                fontSize: 22,
                fontWeight: "bold",
                letterSpacing: 1,
                color: allSolved ? "#6aaa64" : "#d7dadc"
              }}
            >
              {allSolved ? "Congratulations!" : "Stage ended"}
            </h2>

            {speedrunEnabled && (
              <div style={{ marginBottom: 12, color: "#d7dadc", fontSize: 15 }}>
                <div>Total time: {formatElapsed(popupTotalMs)}</div>
                <div>Stage time: {formatElapsed(stageElapsedMs)}</div>
              </div>
            )}

            <div style={{ marginBottom: 14, fontSize: 16, color: "#d7dadc" }}>
              {allSolved
                ? `You solved all ${boards.length} word${boards.length > 1 ? "s" : ""}.`
                : `You solved ${solvedCount} of ${boards.length} word${boards.length > 1 ? "s" : ""}.`}
            </div>

            <div style={{ marginBottom: 14, fontSize: 20, color: "#ffffff", fontWeight: "bold" }}>
              Score: {score}
            </div>

            <div style={{ marginBottom: 10, color: "#ffffff", fontWeight: "bold" }}>Solutions</div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 16
              }}
            >
              {boards.map((b, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: b.isSolved ? "#6aaa64" : "#3a3a3c",
                    color: "#ffffff",
                    padding: "8px 10px",
                    borderRadius: 8,
                    fontSize: 13
                  }}
                >
                  Board {i + 1}: {b.solution}
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={handleShare}
                style={{
                  flex: 1,
                  minWidth: 160,
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#6aaa64",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Share
              </button>

              <button
                onClick={() => setShowPopup(false)}
                style={{
                  flex: 1,
                  minWidth: 160,
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "1px solid #3a3a3c",
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Close
              </button>

              <button
                onClick={onBack}
                style={{
                  flex: 1,
                  minWidth: 160,
                  padding: "12px 0",
                  borderRadius: 10,
                  border: "none",
                  background: "#c9b458",
                  color: "#121213",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase"
                }}
              >
                Home
              </button>

              {mode === "marathon" && marathonHasNext && (
                <button
                  onClick={() => {
                    const finalStageMs = freezeStageTimer();
                    if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);

                    setShowPopup(false);
                    goNextStage();
                  }}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    padding: "12px 0",
                    borderRadius: 10,
                    border: "none",
                    background: "#6aaa64",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                    cursor: "pointer",
                    letterSpacing: 1,
                    textTransform: "uppercase"
                  }}
                >
                  Next stage
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
