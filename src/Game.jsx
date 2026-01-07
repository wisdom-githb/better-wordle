// src/Game.js
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { loadJSON, saveJSON, makeSolvedKey, makeDailyKey, makeMarathonKey, marathonMetaKey } from "./lib/persist";
import {
  WORD_LENGTH,
  KEYBOARD_ROWS,
  KEYBOARD_HEIGHT,
  getMaxTurns,
  scoreGuess,
  createBoardState,
  buildLetterMapFromGuesses,
  getTurnsUsed,
  formatElapsed,
  colorForStatus,
  colorForMiniCell
} from "./lib/wordle";
import { FLIP_MS, FLIP_COMPLETE_MS } from "./lib/gameConstants";
import { loadWordLists } from "./lib/wordLists";
import {
  calculateNonSpeedrunScore,
  calculateSpeedrunScore,
  generateShareText
} from "./lib/gameUtils";
import { selectDailyWords, getCurrentDateString } from "./lib/dailyWords";
import GameHeader from "./components/game/GameHeader";
import GameToast from "./components/game/GameToast";
import GameBoard from "./components/game/GameBoard";
import GamePopup from "./components/game/GamePopup";
import OutOfGuessesPopup from "./components/game/OutOfGuessesPopup";
import BoardSelector from "./components/game/BoardSelector";
import NextStageBar from "./components/game/NextStageBar";
import Keyboard from "./components/Keyboard";

const Game = ({
  marathonLevels = [1, 4, 8, 16, 32]
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get game params from URL
  const mode = searchParams.get("mode") || "daily";
  const speedrunEnabled = searchParams.get("speedrun") === "true";
  const boardsParam = searchParams.get("boards");
  
  // Load marathon state from localStorage
  const marathonMeta = loadJSON(marathonMetaKey(speedrunEnabled), { index: 0, cumulativeMs: 0, stageTimes: [] });
  const marathonIndex = marathonMeta.index || 0;
  const marathonCumulativeMs = marathonMeta.cumulativeMs || 0;
  const marathonStageTimes = marathonMeta.stageTimes || [];
  
  // Determine numBoards
  const numBoards = mode === "marathon" 
    ? marathonLevels[marathonIndex] 
    : (boardsParam ? parseInt(boardsParam, 10) : 1);
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

  // No need for popstate handler - React Router handles browser back button automatically

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
  const getGameStateKey = useCallback(() => {
    if (mode === "marathon") {
      return makeMarathonKey(speedrunEnabled);
    }
    return makeDailyKey(numBoards, speedrunEnabled);
  }, [mode, speedrunEnabled, numBoards]);

  // Helper function to save incomplete game state
  const saveGameState = useCallback(() => {
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
  }, [boards, currentGuess, isUnlimited, maxTurns, speedrunEnabled, revealId, getGameStateKey]);

  // Helper function to clear saved game state
  const clearGameState = useCallback(() => {
    const gameStateKey = getGameStateKey();
    saveJSON(gameStateKey, null);
  }, [getGameStateKey]);

  useEffect(() => {
    async function initGame() {
      try {
        setIsLoading(true);

        // Check if this mode has already been solved (for today's date)
        const dateString = getCurrentDateString();
        const solvedKey = makeSolvedKey(mode, numBoards, speedrunEnabled, mode === "marathon" ? marathonIndex : null, dateString);
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

        // Select daily words deterministically based on date
        const marathonIndexForSeed = mode === "marathon" ? marathonIndex : null;
        const dailySolutions = selectDailyWords(ANSWER_WORDS, numBoards, mode, speedrunEnabled, marathonIndexForSeed);
        const newBoards = dailySolutions.map(solution => createBoardState(solution));

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

    // Save marathon stage time to localStorage
    if (speedrunEnabled && mode === "marathon") {
      const metaKey = marathonMetaKey(true);
      const currentMeta = loadJSON(metaKey, { index: marathonIndex, cumulativeMs: 0, stageTimes: [] });
      const newStageTimes = [...(currentMeta.stageTimes || [])];
      const existing = newStageTimes.findIndex((st) => st.boards === numBoards);
      if (existing >= 0) {
        newStageTimes[existing] = { boards: numBoards, ms };
      } else {
        newStageTimes.push({ boards: numBoards, ms });
      }
      const cumulative = newStageTimes.reduce((sum, st) => sum + st.ms, 0);
      saveJSON(metaKey, {
        ...currentMeta,
        index: marathonIndex,
        cumulativeMs: cumulative,
        stageTimes: newStageTimes
      });
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
      
      // Save solved state (for today's date)
      const dateString = getCurrentDateString();
      const solvedKey = makeSolvedKey(mode, numBoards, speedrunEnabled, mode === "marathon" ? marathonIndex : null, dateString);
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
  const handleBack = useCallback(() => {
    saveGameState();
    navigate("/");
  }, [saveGameState, navigate]);

  const handleVirtualKey = (key) => {
    if (showPopup || showOutOfGuesses) return;
    if (key === "ENTER") submitGuess();
    else if (key === "BACK") removeLetter();
    else addLetter(key);
  };

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const finished = useMemo(() => {
    if (boards.length === 0) return false;
    return isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);
  }, [boards, isUnlimited]);

  const allSolved = useMemo(() => boards.length > 0 && boards.every((b) => b.isSolved), [boards]);

  const solutionsText = useMemo(() => boards.map((b) => b.solution).join(" · "), [boards]);
  const turnsUsed = useMemo(() => getTurnsUsed(boards), [boards]);

  const statusText =
    speedrunEnabled
      ? ""
      : finished && !showPopup && !showOutOfGuesses
      ? "Stage complete."
      : `Guesses used: ${turnsUsed}/${maxTurns}${isUnlimited ? " (unlimited)" : ""}`;

  const gridCols = useMemo(() => Math.ceil(Math.sqrt(numBoards)), [numBoards]);
  const gridRows = useMemo(() => Math.ceil(numBoards / gridCols), [numBoards, gridCols]);

  const marathonHasNext = useMemo(() => 
    mode === "marathon" && marathonIndex < marathonLevels.length - 1,
    [mode, marathonIndex, marathonLevels.length]
  );
  const marathonNextBoards = useMemo(() => 
    marathonHasNext ? marathonLevels[marathonIndex + 1] : null,
    [marathonHasNext, marathonLevels, marathonIndex]
  );

  const showNextStageBar =
    mode === "marathon" && allSolved && !showPopup && !showOutOfGuesses && marathonHasNext;

  const goNextStage = useCallback(() => {
    if (marathonHasNext) {
      const newIndex = marathonIndex + 1;
      const metaKey = marathonMetaKey(speedrunEnabled);
      const meta = loadJSON(metaKey, { index: marathonIndex });
      saveJSON(metaKey, { ...meta, index: newIndex });
      // Navigate to new stage (URL will reload with new marathonIndex from localStorage)
      navigate(`/game?mode=marathon&speedrun=${speedrunEnabled}`, { replace: true });
      window.location.reload(); // Reload to get new marathonIndex
    }
  }, [marathonHasNext, marathonIndex, speedrunEnabled, navigate]);

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

      <GameHeader
        mode={mode}
        numBoards={numBoards}
        speedrunEnabled={speedrunEnabled}
        solutionsText={solutionsText}
        maxTurns={maxTurns}
        stageElapsedMs={stageElapsedMs}
        displayTotalMs={displayTotalMs}
        formatElapsed={formatElapsed}
        onBack={handleBack}
      />

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

        <GameToast message={message} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(auto-fit, minmax(${numBoards >= 16 ? 160 : 180}px, 1fr))`,
            gap: 16
          }}
        >
          {boards.map((board, index) => (
            <GameBoard
              key={index}
              board={board}
              index={index}
              numBoards={numBoards}
              maxTurns={maxTurns}
              isUnlimited={isUnlimited}
              currentGuess={currentGuess}
              invalidCurrentGuess={invalidCurrentGuess}
              revealId={revealId}
              isSelected={selectedBoardIndex === index}
              onToggleSelect={() => setSelectedBoardIndex((prev) => (prev === index ? null : index))}
              boardRef={(el) => {
                boardRefs.current[index] = el;
              }}
              speedrunEnabled={speedrunEnabled}
            />
          ))}
        </div>
        </div>
      </main>

      {showNextStageBar && (
        <NextStageBar marathonNextBoards={marathonNextBoards} onNextStage={goNextStage} />
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

      <BoardSelector
        numBoards={numBoards}
        showBoardSelector={showBoardSelector}
        setShowBoardSelector={setShowBoardSelector}
        boards={boards}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndex={setSelectedBoardIndex}
        boardRefs={boardRefs}
        isUnlimited={isUnlimited}
        speedrunEnabled={speedrunEnabled}
        statusText={statusText}
      />

      {showOutOfGuesses && (
        <OutOfGuessesPopup
          maxTurns={maxTurns}
          mode={mode}
          marathonHasNext={marathonHasNext}
          onExit={exitFromOutOfGuesses}
          onContinue={continueAfterOutOfGuesses}
          onNextStage={goNextStage}
          freezeStageTimer={freezeStageTimer}
          setShowOutOfGuesses={setShowOutOfGuesses}
          setShowPopup={setShowPopup}
        />
      )}

      {showPopup && (
        <GamePopup
          allSolved={allSolved}
          boards={boards}
          score={score}
          speedrunEnabled={speedrunEnabled}
          stageElapsedMs={stageElapsedMs}
          popupTotalMs={popupTotalMs}
          formatElapsed={formatElapsed}
          solvedCount={solvedCount}
          mode={mode}
          marathonHasNext={marathonHasNext}
          onShare={handleShare}
          onClose={() => setShowPopup(false)}
          onNextStage={goNextStage}
          freezeStageTimer={freezeStageTimer}
          isMarathonSpeedrun={isMarathonSpeedrun}
          commitStageIfNeeded={commitStageIfNeeded}
        />
      )}
    </div>
  );
};

export default Game;
