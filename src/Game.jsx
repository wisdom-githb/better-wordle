// src/Game.js
import React, { useEffect, useMemo, useRef, useState } from "react";

const WORD_LENGTH = 5;

// Flip settings (one-by-one but not painfully slow)
const FLIP_MS = 500;      // how long a single tile flip takes
const FLIP_STEP_MS = 180; // how long until the next tile starts (sequential feel, faster overall)
// Total time for all tiles to finish flipping: last tile delay + flip duration
const FLIP_COMPLETE_MS = (WORD_LENGTH - 1) * FLIP_STEP_MS + FLIP_MS;

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

  // Unlimited (true in speedrun from the start; otherwise enabled after "Continue")
  const [isUnlimited, setIsUnlimited] = useState(false);

  const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);

  // Flip animation trigger for the latest submitted guess row
  const [revealId, setRevealId] = useState(0);

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

  useEffect(() => {
    async function initGame() {
      setIsLoading(true);

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

      setIsLoading(false);

      // Reset stage timer + commit guard for each stage
      stageStartRef.current = Date.now();
      stageEndRef.current = null;
      committedRef.current = false;
      committedStageMsRef.current = 0;

      // Reset flip id
      setRevealId(0);
    }

    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numBoards]);

  const stageElapsedMs = (() => {
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

    setCurrentGuess("");
    setMessage("");
    clearMessageTimer();

    const finished = isUnlimited
      ? newBoards.every((b) => b.isSolved)
      : newBoards.every((b) => b.isSolved || b.isDead);

    const allSolvedNow = newBoards.every((b) => b.isSolved);

    if (finished && !allSolvedNow && !isUnlimited) {
      freezeStageTimer();
      setShowOutOfGuesses(true);
      return;
    }

    if (finished && allSolvedNow) {
      const finalStageMs = freezeStageTimer();
      if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);
      // Wait for flip animation to complete before showing popup
      setTimeout(() => {
        setShowPopup(true);
      }, FLIP_COMPLETE_MS);
    }
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
    finished && !showPopup && !showOutOfGuesses
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

  const popupTotalMs = speedrunEnabled
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
          width: 32px;
          height: 32px;
          margin: 2px;
          perspective: 900px;
        }

        .mw-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        @keyframes mwFlipCard {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }

        .mw-flip {
          animation: mwFlipCard ${FLIP_MS}ms ease-in-out both;
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
          onClick={onBack}
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
          display: "flex",
          flexDirection: "column",
          padding: 16,
          overflowY: "auto",
          paddingBottom: KEYBOARD_HEIGHT + (showNextStageBar ? 62 : 16)
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
          <div style={{ fontSize: 14, color: "#d7dadc" }}>{statusText}</div>

          {canManualEnd && (
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
          )}
        </div>

        {message && <div style={{ marginBottom: 8, color: "#f06272", fontSize: 13 }}>{message}</div>}

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

            return (
              <div
                key={index}
                onClick={() => setSelectedBoardIndex((prev) => (prev === index ? null : index))}
                style={{
                  borderRadius: 8,
                  border: isSelected ? "2px solid #facc15" : "1px solid #3a3a3c",
                  padding: 8,
                  background: "#1a1a1b",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 0 0 1px rgba(250,204,21,0.53)" : "none"
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
                  <span>
                    {board.isSolved
                      ? "Solved"
                      : !isUnlimited && board.isDead
                      ? "Failed"
                      : `${board.guesses.length}/${maxTurns}`}
                  </span>
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
                    <div key={rowIdx} style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
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
                                width: 32,
                                height: 32,
                                margin: 2,
                                borderRadius: 4,
                                border: `2px solid ${borderColor}`,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                fontSize: 18,
                                backgroundColor: bg,
                                textTransform: "uppercase",
                                color: fg
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
                                width: 32,
                                height: 32,
                                margin: 2,
                                borderRadius: 4,
                                border: "2px solid transparent",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontWeight: "bold",
                                fontSize: 18,
                                backgroundColor: bg,
                                textTransform: "uppercase",
                                color: "#ffffff"
                              }}
                            >
                              {displayChar}
                            </div>
                          );
                        }

                        // Newest revealed row: flip sequentially (one by one, fast)
                        const frontBg = "#121213";
                        const frontBorder = "#3a3a3c";
                        const backBg = bgForColor(color);

                        // each tile starts after a fixed step (sequential feel, not too slow)
                        const delayMs = colIdx * FLIP_STEP_MS;

                        return (
                          <div key={colIdx} className="mw-tile">
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
                                  color: "#ffffff"
                                }}
                              >
                                {displayChar}
                              </div>

                              <div
                                className="mw-face mw-back"
                                style={{
                                  backgroundColor: backBg,
                                  border: "2px solid transparent",
                                  color: "#ffffff"
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
          padding: "8px 8px 16px",
          background: "#121213"
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 6 }}>
          {KEYBOARD_ROWS.map((row, rIndex) => (
            <div key={rIndex} style={{ display: "flex", justifyContent: "center", gap: 4 }}>
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

                return (
                  <button
                    key={key}
                    onClick={() => handleVirtualKey(key)}
                    style={{
                      position: "relative",
                      flex: isAction ? 1.6 : 1,
                      maxWidth: isAction ? 92 : 44,
                      height: 52,
                      padding: "6px 4px",
                      borderRadius: 8,
                      border: "none",
                      backgroundColor: baseBg,
                      color: "#ffffff",
                      fontWeight: "bold",
                      fontSize: isAction ? 20 : 25,
                      cursor: "pointer",
                      textTransform: "uppercase",
                      overflow: "hidden"
                    }}
                  >
                    <div style={{ position: "relative", zIndex: 2, lineHeight: "22px" }}>{display}</div>

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
