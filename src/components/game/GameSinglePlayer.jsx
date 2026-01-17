import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { loadJSON, saveJSON, makeSolvedKey, makeDailyKey, makeMarathonKey, marathonMetaKey, makeStreakKey, loadStreak, updateStreakOnWin } from "../../lib/persist";
import {
  WORD_LENGTH,
  scoreGuess,
  buildLetterMapFromGuesses,
  getTurnsUsed,
  formatElapsed,
  sumMs,
} from "../../lib/wordle";
import { FLIP_COMPLETE_MS } from "../../lib/gameConstants";
import { generateShareText } from "../../lib/gameUtils";
import { getCurrentDateString } from "../../lib/dailyWords";
import { submitSpeedrunScore } from "../../hooks/useLeaderboard";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../config/firebase";
import { ref, get, set } from "firebase/database";
import { useTimedMessage } from "../../hooks/useTimedMessage";
import { useShare } from "../../hooks/useShare";
import { useSinglePlayerGame } from "../../hooks/useSinglePlayerGame";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useBoardLayout } from "../../hooks/useBoardLayout";
import SinglePlayerGameView from "./SinglePlayerGameView";
import "../../Game.css";

const DEFAULT_MARATHON_LEVELS = [1, 2, 3, 4];

function buildStreakLabel(mode, speedrunEnabled, streak) {
  if (!streak) return null;
  const current = typeof streak.current === "number" ? streak.current : 0;
  const best = typeof streak.best === "number" ? streak.best : 0;

  const modeLabel = mode === "daily" ? "Daily" : mode === "marathon" ? "Marathon" : "";
  const variant = speedrunEnabled ? "Speedrun" : "Standard";
  const prefix = modeLabel || "Streak";
  const base = `${prefix} ${variant} streak`;

  return `${base}: ${current} day${current === 1 ? "" : "s"} (best ${best})`;
}

export default function GameSinglePlayer({
  mode,
  boardsParam,
  speedrunEnabled,
  marathonLevels = DEFAULT_MARATHON_LEVELS,
}) {
  const navigate = useNavigate();
  const { message, setMessage, setTimedMessage, clearMessageTimer } = useTimedMessage("");
  const { user: authUser, isVerifiedUser } = useAuth();

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
  const currentGuessRef = useRef("");
  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);
  // Tracks when the player has definitively finished the stage (either by
  // solving all boards or choosing to exit after running out of guesses).
  // We use this to gate end-of-game UI like comments so it does not appear
  // while the out-of-guesses popup is still asking whether to continue.
  const [hasCompletedStage, setHasCompletedStage] = useState(false);
  // In marathon mode, remember whether the player is allowed to advance to the
  // next stage from the end-of-game popup. If they reach the popup via
  // "Exit" after running out of guesses, we disable the Next Stage button.
  const [allowNextStageAfterPopup, setAllowNextStageAfterPopup] = useState(true);
  // In marathon mode, if the player exits after running out of guesses, allow
  // them to share their result from the popup even if the stage is not the
  // final marathon stage.
  const [forceCanShareAfterPopup, setForceCanShareAfterPopup] = useState(false);

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

  const [streakLabel, setStreakLabel] = useState(null);

  // Initial streak label from local storage for fast paint / guests.
  useEffect(() => {
    const tracksStreak = (mode === "daily" && numBoards === 1) || mode === "marathon";
    if (!tracksStreak) {
      setStreakLabel(null);
      return;
    }
    try {
      const info = loadStreak(mode, speedrunEnabled);
      setStreakLabel(buildStreakLabel(mode, speedrunEnabled, info));
    } catch (err) {
      console.error("Failed to load streak info", err);
      setStreakLabel(null);
    }
  }, [mode, speedrunEnabled, numBoards]);

  // For signed-in users, prefer the server-stored streak so it stays consistent
  // across devices.
  useEffect(() => {
    const tracksStreak = (mode === "daily" && numBoards === 1) || mode === "marathon";
    if (!tracksStreak) return;
    if (!authUser) return;

    let isMounted = true;
    const modeKey = mode === "daily" ? "daily" : "marathon";
    const variantKey = speedrunEnabled ? "speedrun" : "standard";
    const remoteKey = `${modeKey}_${variantKey}`;

    (async () => {
      try {
        const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
        const snap = await get(streakRef);
        if (!snap.exists()) return;
        const remote = snap.val() || null;
        if (!remote) return;

        // Keep local cache in sync so offline views still show the right data.
        const localKey = makeStreakKey(mode, speedrunEnabled);
        saveJSON(localKey, remote);

        if (isMounted) {
          setStreakLabel(buildStreakLabel(mode, speedrunEnabled, remote));
        }
      } catch (err) {
        console.error("Failed to load remote streak for game", err);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [authUser, mode, speedrunEnabled, numBoards]);

  // Stage timer tick for speedrun modes.
  useEffect(() => {
    if (!speedrunEnabled) return;
    const id = setInterval(() => {
      setNowMs(Date.now());
    }, 100);
    return () => clearInterval(id);
  }, [speedrunEnabled]);

  // Keep an always-fresh ref of the current guess so that even callbacks
  // captured by mocks or older renders (e.g. in tests) see the latest value.
  useEffect(() => {
    currentGuessRef.current = currentGuess;
  }, [currentGuess]);

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

  const { perBoardLetterMaps, focusedLetterMap, gridCols, gridRows } = useBoardLayout(
    boards,
    selectedBoardIndex,
    numBoards
  );

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const finished = useMemo(() => {
    if (boards.length === 0) return false;
    return isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);
  }, [boards, isUnlimited]);

  // Mark the stage as fully completed the first time the end-of-game popup
  // is shown. This happens both when the player solves all boards and when
  // they choose to exit after running out of guesses (including when
  // revisiting an already-solved puzzle from local storage).
  useEffect(() => {
    if (!hasCompletedStage && finished && showPopup) {
      setHasCompletedStage(true);
    }
  }, [hasCompletedStage, finished, showPopup]);

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
    if (currentGuessRef.current.length >= WORD_LENGTH) return;
    const next = currentGuessRef.current + letter;
    currentGuessRef.current = next;
    setCurrentGuess(next);
    if (message) {
      setMessage("");
      clearMessageTimer();
    }
  };

  const removeLetter = () => {
    if (currentGuessRef.current.length === 0) return;
    const next = currentGuessRef.current.slice(0, -1);
    currentGuessRef.current = next;
    setCurrentGuess(next);
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

    const guess = currentGuessRef.current;

    // If the guess is not complete (fewer than WORD_LENGTH letters), treat
    // Enter as "clear" so the player can quickly start over.
    if (guess.length !== WORD_LENGTH) {
      if (guess.length > 0) {
        currentGuessRef.current = "";
        setCurrentGuess("");
      }
      return;
    }

    if (!allowedSet.has(guess)) {
      setTimedMessage("Not in word list.", 5000);
      currentGuessRef.current = "";
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

      const colors = board.solution ? scoreGuess(guess, board.solution) : [];

      const guesses = [...board.guesses, { word: guess, colors }];

      const isSolvedNow = guess === board.solution;
      const isDeadNow = !isUnlimited && !isSolvedNow && guesses.length >= maxTurns;

      const hadNewGuess = guesses.length > board.guesses.length;
      const lastRevealId = hadNewGuess ? nextRevealId : board.lastRevealId ?? null;

      return { ...board, guesses, isSolved: isSolvedNow, isDead: isDeadNow, lastRevealId };
    });

    setBoards(newBoards);
    setRevealId(nextRevealId);
    setIsFlipping(true);
    currentGuessRef.current = "";
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

      const solvedState = {
        boards: newBoards,
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

      // Update streaks for supported configurations:
      // - Daily: 1-board standard or speedrun
      // - Marathon: standard or speedrun, but only once the full run is complete.
      const shouldUpdateStreak =
        (mode === "daily" && numBoards === 1) ||
        (mode === "marathon" && isMarathonComplete);

      if (shouldUpdateStreak) {
        (async () => {
          try {
            const modeKey = mode === "daily" ? "daily" : "marathon";
            const variantKey = speedrunEnabled ? "speedrun" : "standard";
            const remoteKey = `${modeKey}_${variantKey}`;

            // If a signed-in user has a server streak, hydrate local storage
            // from it before applying the usual update logic so streaks are
            // consistent across devices.
            if (authUser) {
              try {
                const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
                const snap = await get(streakRef);
                if (snap.exists()) {
                  const remoteExisting = snap.val() || null;
                  if (remoteExisting) {
                    const localKey = makeStreakKey(mode, speedrunEnabled);
                    saveJSON(localKey, remoteExisting);
                  }
                }
              } catch (inner) {
                console.error("Failed to hydrate local streak from server", inner);
              }
            }

            const streakInfo = updateStreakOnWin(mode, speedrunEnabled, dateString);

            if (authUser) {
              try {
                const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
                await set(streakRef, streakInfo);
              } catch (inner) {
                console.error("Failed to persist streak to server", inner);
              }
            }

            setStreakLabel(buildStreakLabel(mode, speedrunEnabled, streakInfo));
          } catch (err) {
            console.error("Failed to update streak after win", err);
          }
        })();
      }

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
          0
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

  // gridCols and gridRows are now provided by useBoardLayout so the layout
  // logic stays consistent between single-player and 1v1.

  const marathonHasNext = useMemo(
    () => mode === "marathon" && marathonIndex < marathonLevels.length - 1,
    [mode, marathonIndex, marathonLevels.length]
  );
  const marathonNextBoards = useMemo(
    () => (marathonHasNext ? marathonLevels[marathonIndex + 1] : null),
    [marathonHasNext, marathonLevels, marathonIndex]
  );

  // Only allow sharing for marathon mode once the final stage has been solved.
  const canShare =
    mode === "marathon"
      ? // Normally only allow sharing once the final stage has been fully solved,
        // but if the player has chosen to exit after running out of guesses we
        // still let them share their partial marathon run.
        forceCanShareAfterPopup || (allSolved && !marathonHasNext)
      : true;

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
    // Freeze the timer and immediately transition to the end-of-game popup
    // so the experience matches the solved flow (no extra delay).
    const finalStageMs = freezeStageTimer();
    setShowOutOfGuesses(false);

    // Persist a completed-stage snapshot so that revisiting the mode for the
    // same day shows the end-of-game popup (and comments) instead of an
    // in-progress grid. This mirrors the full-solve flow but keeps allSolved
    // false so the UI uses the "Stage ended" messaging.
    try {
      const dateString = getCurrentDateString();
      const solvedKey = makeSolvedKey(
        mode,
        numBoards,
        speedrunEnabled,
        mode === "marathon" ? marathonIndex : null,
        dateString
      );

      const currentTurnsUsed = getTurnsUsed(boards);

      const solvedCountForStage = boards.filter((b) => b && b.isSolved).length;

      let savedPopupTotalMs = 0;
      if (speedrunEnabled) {
        if (isMarathonSpeedrun) {
          // For partial marathon exits, rely on the aggregated per-stage rows
          // when building share text; store just the per-stage time here.
          savedPopupTotalMs = finalStageMs;
        } else {
          savedPopupTotalMs = finalStageMs;
        }
      }

      const solvedState = {
        boards,
        turnsUsed: currentTurnsUsed,
        maxTurns,
        allSolved: false,
        solvedCount: solvedCountForStage,
        stageElapsedMs: finalStageMs,
        popupTotalMs: savedPopupTotalMs,
        exitedDueToOutOfGuesses: true,
        timestamp: Date.now(),
      };

      saveJSON(solvedKey, solvedState);
    } catch (err) {
      // Best-effort only; failure to persist should not break gameplay.
      console.error("Failed to persist out-of-guesses exit state", err);
    }

    // If the player chose to exit after running out of guesses in marathon
    // mode, do not offer a Next Stage button in the final popup and allow
    // sharing from that popup even on non-final stages.
    if (mode === "marathon") {
      setAllowNextStageAfterPopup(false);
      setForceCanShareAfterPopup(true);
    }
    setShowPopup(true);
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

  // For marathon mode, when on the final stage, aggregate guesses/turns across
  // all stages so the final share text reflects the full run.
  const marathonShareTotals = useMemo(() => {
    if (mode !== "marathon") return null;
    // Only compute marathon totals on the final stage, or when the player has
    // chosen to exit after running out of guesses (so we can share partial
    // marathon progress even if there are more stages remaining).
    if (marathonHasNext && !forceCanShareAfterPopup) return null;

    try {
      const dateString = getCurrentDateString();
      let totalTurnsUsed = 0;
      let totalMaxTurns = 0;
      let totalSolvedCount = 0;
      let stagesWithData = 0;
      const stages = [];

      marathonLevels.forEach((boardsForStage, stageIndex) => {
        const solvedKey = makeSolvedKey(
          "marathon",
          boardsForStage,
          speedrunEnabled,
          stageIndex,
          dateString
        );
        const solvedState = loadJSON(solvedKey, null);

        let stageTurns = 0;
        let stageMaxTurns = maxTurns;
        let stageSolvedCount = 0;
        let stageElapsed = 0;

        if (solvedState) {
          stagesWithData += 1;

          stageTurns =
            typeof solvedState.turnsUsed === "number"
              ? solvedState.turnsUsed
              : getTurnsUsed(solvedState.boards || []);
          stageMaxTurns =
            typeof solvedState.maxTurns === "number"
              ? solvedState.maxTurns
              : maxTurns;
          stageSolvedCount =
            typeof solvedState.solvedCount === "number"
              ? solvedState.solvedCount
              : Array.isArray(solvedState.boards)
              ? solvedState.boards.filter((b) => b && b.isSolved).length
              : 0;
          stageElapsed =
            typeof solvedState.stageElapsedMs === "number"
              ? solvedState.stageElapsedMs
              : 0;

          totalTurnsUsed += stageTurns;
          totalMaxTurns += stageMaxTurns;
          totalSolvedCount += stageSolvedCount;
        }

        stages.push({
          boards: boardsForStage,
          turnsUsed: stageTurns,
          maxTurns: stageMaxTurns,
          solvedCount: stageSolvedCount,
          stageElapsedMs: stageElapsed,
        });
      });

      if (stagesWithData === 0) {
        return null;
      }

      const totalBoards = marathonLevels.reduce((sum, n) => sum + n, 0);

      return {
        totalBoards,
        totalTurnsUsed,
        totalMaxTurns,
        totalSolvedCount,
        stages,
      };
    } catch (err) {
      // Fall back to current-stage numbers if aggregation fails for any reason.
      console.error("Failed to aggregate marathon share totals", err);
      return null;
    }
  }, [
    mode,
    marathonHasNext,
    marathonLevels,
    speedrunEnabled,
    maxTurns,
    // Recompute when boards become solved so final stage data is included,
    // or when we flip into "share partial marathon" mode after exiting.
    solvedCount,
    allSolved,
    forceCanShareAfterPopup,
  ]);

  const shareText = useMemo(() => {
    if (!boards || boards.length === 0) {
      return "Play Better Wordle!";
    }

    const isMarathon = mode === "marathon";
    const useTotals =
      isMarathon &&
      marathonShareTotals &&
      (!marathonHasNext || forceCanShareAfterPopup);

    const effectiveNumBoards = useTotals
      ? marathonShareTotals.totalBoards
      : numBoards;
    const effectiveTurnsUsed = useTotals
      ? marathonShareTotals.totalTurnsUsed
      : turnsUsed;
    const effectiveMaxTurns = useTotals
      ? marathonShareTotals.totalMaxTurns
      : maxTurns;
    const effectiveSolvedCount = useTotals
      ? marathonShareTotals.totalSolvedCount
      : solvedCount;
    const effectiveAllSolved = useTotals
      ? marathonShareTotals.totalSolvedCount === marathonShareTotals.totalBoards
      : allSolved;

    return generateShareText(
      boards,
      mode,
      effectiveNumBoards,
      speedrunEnabled,
      stageElapsedMs,
      popupTotalMs,
      formatElapsed,
      effectiveTurnsUsed,
      effectiveMaxTurns,
      effectiveAllSolved,
      effectiveSolvedCount,
      // For marathon final-stage sharing, include detailed per-stage breakdown
      // so the share text can list each stage separately.
      marathonShareTotals?.stages ?? null
    );
  }, [
    boards,
    mode,
    numBoards,
    speedrunEnabled,
    stageElapsedMs,
    popupTotalMs,
    turnsUsed,
    maxTurns,
    allSolved,
    solvedCount,
    marathonShareTotals,
    marathonHasNext,
    forceCanShareAfterPopup,
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

  // Show comments only once the stage is definitively completed for the day
  // (after the end-of-game popup has been shown at least once), so that
  // they do not appear while the player is still deciding whether to
  // continue after running out of guesses.
  const shouldShowComments =
    hasCompletedStage && (mode === "daily" || mode === "marathon");

  const commentsThreadId = shouldShowComments
    ? makeSolvedKey(
        mode,
        numBoards,
        speedrunEnabled,
        mode === "marathon" ? marathonIndex : null,
        getCurrentDateString()
      )
    : null;

  // In test environments we skip the full‑screen loading fallback so tests can
  // render the game view immediately without depending on environment globals.
  const isTestEnv =
    typeof import.meta !== "undefined" &&
    import.meta.env &&
    (import.meta.env.MODE === "test" || import.meta.env.TEST === true);

  if (isLoading && !isTestEnv) {
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
        finished={finished}
        solutionsText={solutionsText}
        message={message}
        boards={boards}
        maxTurns={maxTurns}
        turnsUsed={turnsUsed}
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
      allowNextStageAfterPopup={allowNextStageAfterPopup}
      showFeedbackModal={showFeedbackModal}
        setShowFeedbackModal={setShowFeedbackModal}
        setShowPopup={setShowPopup}
        setShowOutOfGuesses={setShowOutOfGuesses}
        showComments={shouldShowComments}
        commentThreadId={commentsThreadId}
        canShare={canShare}
        streakLabel={streakLabel}
      />
    </>
  );
}
