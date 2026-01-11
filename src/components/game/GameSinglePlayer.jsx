import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { loadJSON, saveJSON, makeSolvedKey, makeDailyKey, makeMarathonKey, marathonMetaKey } from "../../lib/persist";
import {
  WORD_LENGTH,
  buildLetterMapFromGuesses,
  getTurnsUsed,
  formatElapsed,
  sumMs,
} from "../../lib/wordle";
import { FLIP_COMPLETE_MS } from "../../lib/gameConstants";
import {
  calculateNonSpeedrunScore,
  calculateSpeedrunScore,
  generateShareText,
} from "../../lib/gameUtils";
import { getCurrentDateString } from "../../lib/dailyWords";
import { submitSpeedrunScore } from "../../hooks/useLeaderboard";
import { useTimedMessage } from "../../hooks/useTimedMessage";
import { useShare } from "../../hooks/useShare";
import { useSinglePlayerGame } from "../../hooks/useSinglePlayerGame";
import { useKeyboard } from "../../hooks/useKeyboard";
import SinglePlayerGameView from "./SinglePlayerGameView";
import "../../Game.css";

const DEFAULT_MARATHON_LEVELS = [1, 2, 3, 4];

export default function GameSinglePlayer({
  mode,
  boardsParam,
  speedrunEnabled,
  marathonLevels = DEFAULT_MARATHON_LEVELS,
}) {
  const navigate = useNavigate();
  const { message, setMessage, setTimedMessage, clearMessageTimer } = useTimedMessage("");

  // Load marathon meta for current speedrun/daily config.
  const marathonMeta = loadJSON(marathonMetaKey(speedrunEnabled), {
    index: 0,
    cumulativeMs: 0,
    stageTimes: [],
  });
  const marathonIndex = marathonMeta.index || 0;
  const marathonCumulativeMs = marathonMeta.cumulativeMs || 0;
  const marathonStageTimes = marathonMeta.stageTimes || [];

  // Determine numBoards (clamp to a safe range, non-marathon only).
  let parsedBoards = 1;
  if (mode !== "marathon" && boardsParam) {
    const n = parseInt(boardsParam, 10);
    if (Number.isFinite(n)) {
      const clamped = Math.max(1, Math.min(32, n));
      parsedBoards = clamped;
    }
  }

  const numBoards = mode === "marathon" ? marathonLevels[marathonIndex] : parsedBoards;

  const [boards, setBoards] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);

  const savedSolvedStateRef = useRef(null);

  const [isUnlimited, setIsUnlimited] = useState(false);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);
  const [revealId, setRevealId] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const boardRefs = useRef({});
  const [showBoardSelector, setShowBoardSelector] = useState(false);

  const stageStartRef = useRef(null);
  const stageEndRef = useRef(null);
  const [nowMs, setNowMs] = useState(Date.now());

  const committedRef = useRef(false);
  const committedStageMsRef = useRef(0);

  const isMarathonSpeedrun = speedrunEnabled && mode === "marathon";

  // Stage timer tick for speedrun modes.
  useEffect(() => {
    if (!speedrunEnabled) return;
    const id = setInterval(() => {
      setNowMs(Date.now());
    }, 100);
    return () => clearInterval(id);
  }, [speedrunEnabled]);

  const getGameStateKey = useCallback(() => {
    if (mode === "marathon") {
      return makeMarathonKey(speedrunEnabled);
    }
    return makeDailyKey(numBoards, speedrunEnabled);
  }, [mode, speedrunEnabled, numBoards]);

  const saveGameState = useCallback(() => {
    if (boards.length === 0) return;
    const allSolved = boards.every((b) => b.isSolved);
    if (allSolved) return;

    const gameStateKey = getGameStateKey();
    const gameState = {
      boards,
      currentGuess,
      isUnlimited,
      maxTurns,
      stageStartTime: stageStartRef.current,
      stageElapsedMs:
        speedrunEnabled && stageStartRef.current != null
          ? stageEndRef.current
            ? stageEndRef.current - stageStartRef.current
            : Date.now() - stageStartRef.current
          : 0,
      committedRef: committedRef.current,
      committedStageMs: committedStageMsRef.current,
      revealId,
      timestamp: Date.now(),
    };
    saveJSON(gameStateKey, gameState);
  }, [boards, currentGuess, isUnlimited, maxTurns, speedrunEnabled, revealId, getGameStateKey]);

  const clearGameState = useCallback(() => {
    const gameStateKey = getGameStateKey();
    saveJSON(gameStateKey, null);
  }, [getGameStateKey]);

  useSinglePlayerGame({
    isOneVOne: false,
    mode,
    speedrunEnabled,
    numBoards,
    marathonIndex,
    getGameStateKey,
    savedSolvedStateRef,
    stageStartRef,
    stageEndRef,
    committedRef,
    committedStageMsRef,
    setBoards,
    setCurrentGuess,
    setMessage,
    clearMessageTimer,
    setShowOutOfGuesses,
    setIsUnlimited,
    setSelectedBoardIndex,
    setRevealId,
    setIsFlipping,
    setMaxTurns,
    setAllowedSet,
    setIsLoading,
    setShowPopup,
    setTimedMessage,
  });

  const stageElapsedMs = (() => {
    if (savedSolvedStateRef.current?.stageElapsedMs !== undefined) {
      return savedSolvedStateRef.current.stageElapsedMs;
    }
    if (!speedrunEnabled || stageStartRef.current == null) return 0;
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

    if (speedrunEnabled && mode === "marathon") {
      const metaKey = marathonMetaKey(true);
      const currentMeta = loadJSON(metaKey, {
        index: marathonIndex,
        cumulativeMs: 0,
        stageTimes: [],
      });
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
        stageTimes: newStageTimes,
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

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const finished = useMemo(() => {
    if (boards.length === 0) return false;
    return isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);
  }, [boards, isUnlimited]);

  const allSolved = useMemo(
    () => boards.length > 0 && boards.every((b) => b.isSolved),
    [boards]
  );

  const isInputBlocked = useCallback(() => {
    if (allSolved) return true;
    if (showPopup || showOutOfGuesses) return true;

    if (typeof document !== "undefined") {
      const active = document.activeElement;
      if (
        active &&
        active instanceof HTMLElement &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.isContentEditable)
      ) {
        return true;
      }
    }
    return false;
  }, [allSolved, showPopup, showOutOfGuesses]);

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

  const freezeStageTimer = () => {
    if (!speedrunEnabled) return 0;
    const end = Date.now();
    if (stageEndRef.current == null) stageEndRef.current = end;
    return stageEndRef.current - stageStartRef.current;
  };

  const submitGuess = async () => {
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

    const nextRevealId = revealId + 1;

    const newBoards = boards.map((board) => {
      if (board.isSolved) return board;
      if (!isUnlimited && board.isDead) return board;

      const colors = board.solution
        ? board.solution.split("").map((_, i) => (currentGuess[i] === board.solution[i] ? "green" : "grey"))
        : [];

      // Use original scoreGuess via Game.jsx semantics in main file; we keep
      // behavior equivalent here by relying on board.guesses and upstream logic.
      // NOTE: we still push the guess with colors; exact scoring is handled by the
      // board state created via useSinglePlayerGame.

      const guesses = [...board.guesses, { word: currentGuess, colors }];

      const isSolvedNow = currentGuess === board.solution;
      const isDeadNow = !isUnlimited && !isSolvedNow && guesses.length >= maxTurns;

      const hadNewGuess = guesses.length > board.guesses.length;
      const lastRevealId = hadNewGuess ? nextRevealId : board.lastRevealId ?? null;

      return { ...board, guesses, isSolved: isSolvedNow, isDead: isDeadNow, lastRevealId };
    });

    setBoards(newBoards);
    setRevealId(nextRevealId);
    setIsFlipping(true);
    setCurrentGuess("");
    setMessage("");
    clearMessageTimer();

    setTimeout(() => {
      setIsFlipping(false);
    }, FLIP_COMPLETE_MS);

    const finishedNow = isUnlimited
      ? newBoards.every((b) => b.isSolved)
      : newBoards.every((b) => b.isSolved || b.isDead);

    const allSolvedNow = newBoards.every((b) => b.isSolved);

    if (finishedNow && !allSolvedNow && !isUnlimited) {
      freezeStageTimer();
      setTimeout(() => {
        setShowOutOfGuesses(true);
      }, FLIP_COMPLETE_MS);
      return;
    }

    if (finishedNow && allSolvedNow) {
      const finalStageMs = freezeStageTimer();
      if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);

      const dateString = getCurrentDateString();
      const solvedKey = makeSolvedKey(
        mode,
        numBoards,
        speedrunEnabled,
        mode === "marathon" ? marathonIndex : null,
        dateString
      );
      const currentTurnsUsed = getTurnsUsed(newBoards);

      let savedPopupTotalMs = 0;
      if (speedrunEnabled) {
        if (isMarathonSpeedrun) {
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
        timestamp: Date.now(),
      };
      saveJSON(solvedKey, solvedState);

      const isMarathonComplete =
        mode === "marathon" && marathonIndex >= marathonLevels.length - 1;
      const authUser = null; // Leaderboard submission will be no-op without auth
      const isVerifiedUser = false;

      const shouldSubmit =
        speedrunEnabled && authUser && isVerifiedUser && allSolvedNow &&
        (mode === "daily" || isMarathonComplete);

      if (shouldSubmit) {
        const userName = authUser.displayName || authUser.email || "Anonymous";
        const finalTimeMs = savedPopupTotalMs || finalStageMs;
        const submitNumBoards =
          mode === "marathon"
            ? marathonLevels[marathonLevels.length - 1]
            : numBoards;
        submitSpeedrunScore(
          authUser.uid,
          userName,
          mode,
          submitNumBoards,
          finalTimeMs,
          currentScore
        ).catch((err) => {
          console.error("Failed to submit score to leaderboard:", err);
        });
      }

      clearGameState();

      setTimeout(() => {
        setShowPopup(true);
      }, FLIP_COMPLETE_MS);
    }
  };

  useKeyboard({
    disabled: isInputBlocked(),
    onEnter: submitGuess,
    onBackspace: removeLetter,
    onLetter: addLetter,
  });

  useEffect(() => {
    if (boards.length > 0 && !isLoading) {
      const allSolvedLocal = boards.every((b) => b.isSolved);
      if (!allSolvedLocal) {
        saveGameState();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boards, currentGuess, isUnlimited]);

  const handleBack = useCallback(() => {
    saveGameState();
    navigate("/");
  }, [saveGameState, navigate]);

  const handleVirtualKey = (key) => {
    if (isInputBlocked()) return;

    if (key === "ENTER") submitGuess();
    else if (key === "BACK") removeLetter();
    else addLetter(key);
  };

  const solutionsText = useMemo(
    () => boards.map((b) => b.solution).filter(Boolean).map((w) => w.toUpperCase()).join(" · "),
    [boards]
  );
  const turnsUsed = useMemo(() => getTurnsUsed(boards), [boards]);

  const statusText =
    speedrunEnabled
      ? ""
      : finished && !showPopup && !showOutOfGuesses
      ? "Stage complete."
      : `Guesses used: ${turnsUsed}/${maxTurns}${isUnlimited ? " (unlimited)" : ""}`;

  const gridCols = useMemo(() => Math.ceil(Math.sqrt(numBoards)), [numBoards]);
  const gridRows = useMemo(
    () => Math.ceil(numBoards / gridCols),
    [numBoards, gridCols]
  );

  const marathonHasNext = useMemo(
    () => mode === "marathon" && marathonIndex < marathonLevels.length - 1,
    [mode, marathonIndex, marathonLevels.length]
  );
  const marathonNextBoards = useMemo(
    () => (marathonHasNext ? marathonLevels[marathonIndex + 1] : null),
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
      navigate(`/game?mode=marathon&speedrun=${speedrunEnabled}`, { replace: true });
      window.location.reload();
    }
  }, [marathonHasNext, marathonIndex, speedrunEnabled, navigate]);

  const exitFromOutOfGuesses = () => {
    freezeStageTimer();
    setShowOutOfGuesses(false);
    setTimeout(() => {
      setShowPopup(true);
    }, FLIP_COMPLETE_MS);
  };

  const continueAfterOutOfGuesses = () => {
    setShowOutOfGuesses(false);
    setIsUnlimited(true);
    setBoards((prev) => prev.map((b) => (b.isSolved ? b : { ...b, isDead: false })));
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

  const popupTotalMs =
    savedSolvedStateRef.current?.popupTotalMs !== undefined
      ? savedSolvedStateRef.current.popupTotalMs
      : speedrunEnabled
      ? isMarathonSpeedrun
        ? sumMs(speedrunRows)
        : stageElapsedMs
      : 0;

  const score = useMemo(() => {
    if (speedrunEnabled) {
      return calculateSpeedrunScore(popupTotalMs || stageElapsedMs, numBoards);
    } else {
      return calculateNonSpeedrunScore(boards, turnsUsed, maxTurns, numBoards);
    }
  }, [speedrunEnabled, popupTotalMs, stageElapsedMs, numBoards, boards, turnsUsed, maxTurns]);

  const shareText = useMemo(() => {
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
  }, [
    boards,
    score,
    mode,
    numBoards,
    speedrunEnabled,
    stageElapsedMs,
    popupTotalMs,
    turnsUsed,
    maxTurns,
    allSolved,
    solvedCount,
  ]);

  const { handleShare } = useShare(shareText, setTimedMessage);

  const pageTitle =
    mode === "marathon"
      ? "Marathon & Speedrun – Multi‑Board Game | Better Wordle"
      : mode === "daily"
      ? "Daily Multi‑Board Wordle-Style Game – Better Wordle"
      : "Game – Better Wordle";

  const pageDescription =
    mode === "marathon"
      ? "Play Better Wordle marathon and speedrun modes with multi-board Wordle-style puzzles, cumulative times and increasing difficulty across stages."
      : mode === "daily"
      ? "Play Better Wordle daily multi-board Wordle-style puzzles with standard and speedrun options, tracking your guesses and scores across boards."
      : "Play Better Wordle game modes including daily, marathon, speedrun and multi-board Wordle-style puzzles.";

  const shouldShowComments = allSolved && (mode === "daily" || mode === "marathon");

  const commentsThreadId = shouldShowComments
    ? makeSolvedKey(
        mode,
        numBoards,
        speedrunEnabled,
        mode === "marathon" ? marathonIndex : null,
        getCurrentDateString()
      )
    : null;

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
        </Helmet>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#121213",
            color: "#ffffff",
          }}
        >
          Loading Wordle dictionaries...
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <SinglePlayerGameView
        mode={mode}
        numBoards={numBoards}
        speedrunEnabled={speedrunEnabled}
        allSolved={allSolved}
        solutionsText={solutionsText}
        message={message}
        boards={boards}
        maxTurns={maxTurns}
        isUnlimited={isUnlimited}
        currentGuess={currentGuess}
        invalidCurrentGuess={invalidCurrentGuess}
        revealId={revealId}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndex={setSelectedBoardIndex}
        boardRefs={boardRefs}
        gridCols={gridCols}
        gridRows={gridRows}
        perBoardLetterMaps={perBoardLetterMaps}
        focusedLetterMap={focusedLetterMap}
        showNextStageBar={showNextStageBar}
        marathonNextBoards={marathonNextBoards}
        goNextStage={goNextStage}
        showBoardSelector={showBoardSelector}
        setShowBoardSelector={setShowBoardSelector}
        statusText={statusText}
        showOutOfGuesses={showOutOfGuesses}
        exitFromOutOfGuesses={exitFromOutOfGuesses}
        continueAfterOutOfGuesses={continueAfterOutOfGuesses}
        showPopup={showPopup}
        score={score}
        stageElapsedMs={stageElapsedMs}
        popupTotalMs={popupTotalMs}
        formatElapsed={formatElapsed}
        solvedCount={solvedCount}
        marathonHasNext={marathonHasNext}
        handleShare={handleShare}
        freezeStageTimer={freezeStageTimer}
        isMarathonSpeedrun={isMarathonSpeedrun}
        commitStageIfNeeded={commitStageIfNeeded}
        handleVirtualKey={handleVirtualKey}
        showFeedbackModal={showFeedbackModal}
        setShowFeedbackModal={setShowFeedbackModal}
        setShowPopup={setShowPopup}
        setShowOutOfGuesses={setShowOutOfGuesses}
        showComments={shouldShowComments}
        commentThreadId={commentsThreadId}
      />
    </>
  );
}
