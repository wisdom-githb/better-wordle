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
  sumMs,
  colorForStatus,
  colorForMiniCell
} from "./lib/wordle";
import { FLIP_MS, FLIP_COMPLETE_MS } from "./lib/gameConstants";
import { loadWordLists } from "./lib/wordLists";
import {
  calculateNonSpeedrunScore,
  calculateSpeedrunScore,
  generateShareText,
  isMobileDevice
} from "./lib/gameUtils";
import { selectDailyWords, getCurrentDateString, SeededRandom } from "./lib/dailyWords";
import GameHeader from "./components/game/GameHeader";
import GameToast from "./components/game/GameToast";
import GameBoard from "./components/game/GameBoard";
import GamePopup from "./components/game/GamePopup";
import OutOfGuessesPopup from "./components/game/OutOfGuessesPopup";
import BoardSelector from "./components/game/BoardSelector";
import NextStageBar from "./components/game/NextStageBar";
import FeedbackModal from "./components/FeedbackModal";
import SiteHeader from "./components/SiteHeader";
import OneVOneWaitingRoom from "./components/game/OneVOneWaitingRoom";
import OpponentBoardView from "./components/game/OpponentBoardView";
import Keyboard from "./components/Keyboard";
import OneVOneGameView from "./components/game/OneVOneGameView";
import Modal from "./components/Modal";
import { useOneVOneGame } from "./hooks/useOneVOneGame";
import { useAuth } from "./hooks/useAuth";
import { submitSpeedrunScore } from "./hooks/useLeaderboard";
import { useTimedMessage } from "./hooks/useTimedMessage";
import { useShare } from "./hooks/useShare";
import { useSinglePlayerGame } from "./hooks/useSinglePlayerGame";
import { useKeyboard } from "./hooks/useKeyboard";
import "./Game.css";

const ONE_V_ONE_BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

const Game = ({
  marathonLevels = [1, 2, 3, 4]
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get game params from URL with guards for missing/invalid values
  const rawMode = searchParams.get("mode");
  let mode = rawMode === "daily" || rawMode === "marathon" || rawMode === "1v1" ? rawMode : "daily";

  let speedrunEnabled = false;
  let boardsParam = null;

  // Only honor speedrun/boards when a supported mode is explicitly requested.
  if (rawMode === "daily" || rawMode === "marathon" || rawMode === "1v1") {
    speedrunEnabled = searchParams.get("speedrun") === "true";
    boardsParam = searchParams.get("boards");
  }

  const isOneVOne = mode === "1v1";
  const isHost = searchParams.get("host") === "true";
  const gameCode = searchParams.get("code") || null;
  
  // 1v1 game hook
  const { user: authUser, sendFriendRequest, isVerifiedUser, friends, cancelSentChallenge } = useAuth();
  const oneVOneGame = useOneVOneGame(
    isOneVOne ? (gameCode || null) : null,
    isHost,
    speedrunEnabled
  );
  
  // Load marathon state from localStorage
  const marathonMeta = loadJSON(marathonMetaKey(speedrunEnabled), { index: 0, cumulativeMs: 0, stageTimes: [] });
  const marathonIndex = marathonMeta.index || 0;
  const marathonCumulativeMs = marathonMeta.cumulativeMs || 0;
  const marathonStageTimes = marathonMeta.stageTimes || [];
  
  // Determine numBoards (clamp daily/1v1 board counts to a safe range)
  let parsedBoards = 1;
  if (mode !== "marathon" && boardsParam) {
    const n = parseInt(boardsParam, 10);
    if (Number.isFinite(n)) {
      const clamped = Math.max(1, Math.min(32, n));
      parsedBoards = clamped;
    }
  }

  const numBoards = mode === "marathon" 
    ? marathonLevels[marathonIndex] 
    : parsedBoards;
  const [boards, setBoards] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const { message, setMessage, setTimedMessage, clearMessageTimer } = useTimedMessage("");

  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);
  const endingGameRef = useRef(false);
  const popupClosedRef = useRef(false);
  const shouldShowPopupAfterFlipRef = useRef(false);

  // 1v1-only: next-round configuration chosen by the host from the end-of-game UI.
  // When null, the next round reuses the previous mode/board count.
  const [oneVOneNextConfig, setOneVOneNextConfig] = useState(null);
  const [isOneVOneConfigModalOpen, setIsOneVOneConfigModalOpen] = useState(false);
  const [oneVOneConfigBoardsDraft, setOneVOneConfigBoardsDraft] = useState(1);
  const [oneVOneConfigSpeedrunDraft, setOneVOneConfigSpeedrunDraft] = useState(false);

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
  const [oneVOneNowMs, setOneVOneNowMs] = useState(Date.now());

  // Prevent double commit + keep last committed stage ms for display
  const committedRef = useRef(false);
  const committedStageMsRef = useRef(0);

  const isMarathonSpeedrun = speedrunEnabled && mode === "marathon";
  const isDailySpeedrun = speedrunEnabled && mode === "daily";

  // Derived friend request state for 1v1 waiting room / in-game UI, based on
  // live Firebase gameState so updates are realtime without reloads.
  const friendRequestSent = (() => {
    if (!isOneVOne || !oneVOneGame.gameState || !authUser) return false;
    const gs = oneVOneGame.gameState;
    const isPlayerHost = gs.hostId === authUser.uid;
    return isPlayerHost ? !!gs.hostFriendRequestSent : !!gs.guestFriendRequestSent;
  })();

  useEffect(() => {
    if (!speedrunEnabled && !(isOneVOne && oneVOneGame.gameState?.speedrun)) return;
    const id = setInterval(() => {
      setNowMs(Date.now());
      if (isOneVOne && oneVOneGame.gameState?.speedrun) {
        setOneVOneNowMs(Date.now());
      }
    }, 100);
    return () => clearInterval(id);
  }, [speedrunEnabled, isOneVOne, oneVOneGame.gameState]);

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
      stageElapsedMs: speedrunEnabled && stageStartRef.current != null
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

  // 1v1 mode initialization
  useEffect(() => {
    async function initOneVOne() {
      if (!isOneVOne || !authUser) {
        // If not 1v1 mode or not authenticated, don't block loading
        if (!isOneVOne) return;
        // If 1v1 but not authenticated, wait for auth
        return;
      }

      if (!isVerifiedUser) {
        setTimedMessage('You must verify your email or sign in with Google to play 1v1.', 8000);
        return;
      }
      
      try {
        setIsLoading(true);
        
        // Load word lists early for 1v1 (needed for validation)
        const { ALLOWED_GUESSES } = await loadWordLists();
        setAllowedSet(new Set(ALLOWED_GUESSES));
        
        // If host, create game
        if (isHost && !gameCode) {
          const code = await oneVOneGame.createGame();
          const boardsQuery = boardsParam ? `&boards=${boardsParam}` : "";
          navigate(
            `/game?mode=1v1&code=${code}&host=true&speedrun=${speedrunEnabled}${boardsQuery}`,
            { replace: true }
          );
          setIsLoading(false);
          return;
        }
        
        // If joining, join the game (only if not already joined)
        if (!isHost && gameCode) {
          // Check if user is already part of the game via gameState
          if (oneVOneGame.gameState) {
            const isAlreadyGuest = oneVOneGame.gameState.guestId === authUser.uid;
            const isAlreadyHost = oneVOneGame.gameState.hostId === authUser.uid;
            
            if (isAlreadyGuest || isAlreadyHost) {
              // User is already part of the game, no need to join
              setIsLoading(false);
            } else {
              // User is not part of game, try to join
              try {
                await oneVOneGame.joinGame(gameCode);
                // Don't set loading to false yet - wait for gameState to load via the listener
              } catch (error) {
                // Error joining - will be handled by error display
                throw error;
              }
            }
          } else {
            // No gameState yet, try to join (listener will load gameState)
            try {
              await oneVOneGame.joinGame(gameCode);
              // Don't set loading to false yet - wait for gameState to load via the listener
            } catch (error) {
              // Error joining - will be handled by error display
              throw error;
            }
          }
        } else {
          // For host, we can set loading to false after creating game
          setIsLoading(false);
        }
      } catch (error) {
        console.error("1v1 init error:", error);
        setTimedMessage(error.message || "Failed to initialize 1v1 game", 5000);
        setIsLoading(false);
      }
    }
    
    initOneVOne();
  }, [isOneVOne, isHost, gameCode, authUser, oneVOneGame, navigate, boardsParam, speedrunEnabled]);

  useSinglePlayerGame({
    isOneVOne,
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

  // Handle 1v1 game state changes and initialization
  useEffect(() => {
    async function handleOneVOneGame() {
      if (!isOneVOne || !authUser) {
        // If we have a gameCode but no gameState yet, keep loading
        if (isOneVOne && gameCode && !oneVOneGame.gameState) {
          return;
        }
        return;
      }
      
      // Once we have gameState, ensure loading is false
      if (oneVOneGame.gameState) {
        setIsLoading(false);
      }
      
      if (!oneVOneGame.gameState) return;
      
      const gameState = oneVOneGame.gameState;
      const {
        status,
        solution,
        solutions,
        hostId,
        hostGuesses = [],
        guestGuesses = [],
        hostColors = [],
        guestColors = [],
      } = gameState;
      const isPlayerHost = hostId === authUser.uid;
      const isSpeedrun = gameState.speedrun || false;

      // Normalize to an array of solutions for multi-board support
      const solutionArray =
        Array.isArray(solutions) && solutions.length > 0
          ? solutions
          : solution
          ? [solution]
          : [];
      const boardCount = solutionArray.length || 1;
      
      // Initialize game boards when game starts
      if (status === 'playing' && solutionArray.length > 0) {
        if (boards.length === 0) {
          // Word lists should already be loaded in initOneVOne, but ensure they're loaded
          if (allowedSet.size === 0) {
            setIsLoading(true);
            const { ALLOWED_GUESSES } = await loadWordLists();
            setAllowedSet(new Set(ALLOWED_GUESSES));
            setIsLoading(false);
          }
          
          // Set maxTurns based on number of boards (same curve as daily mode).
          const turns = isSpeedrun ? 999 : getMaxTurns(boardCount);
          setMaxTurns(turns);
          setIsUnlimited(isSpeedrun);
        }
        
        // Update boards with player's guesses (one board per solution)
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;

        const newBoards = solutionArray.map((sol, idx) => {
          const prevBoard = boards[idx];

          // Once a particular board is solved, subsequent guesses should NOT appear
          // on that board. We therefore truncate the guess list at the first time
          // this solution is guessed.
          const firstSolveIndex = myGuesses.indexOf(sol);
          const limit = firstSolveIndex === -1 ? myGuesses.length : firstSolveIndex + 1;

          const guessesWithColors = myGuesses.slice(0, limit).map((word) => {
            const colors = scoreGuess(word, sol);
            return { word, colors };
          });

          const isSolved = firstSolveIndex !== -1;
          const isDead =
            !isSpeedrun && !isSolved && guessesWithColors.length >= maxTurns;

          const prevGuessCount = prevBoard?.guesses?.length ?? 0;
          const hadNewGuess = guessesWithColors.length > prevGuessCount;
          // In 1v1, revealId is already incremented by submitGuess before this runs,
          // so we record the current revealId for boards that just gained a row.
          const lastRevealId = hadNewGuess ? revealId : prevBoard?.lastRevealId ?? null;

          return {
            solution: sol,
            guesses: guessesWithColors,
            isSolved,
            isDead,
            lastRevealId,
          };
        });

        // Only update local boards when guess counts change to avoid loops
        if (
          boards.length !== newBoards.length ||
          newBoards.some(
            (b, idx) => b.guesses.length !== (boards[idx]?.guesses.length || 0)
          )
        ) {
          setBoards(newBoards);
        }
      }
      
      // Handle game finished - mark that we should show popup after flip completes
      // Don't reopen if user manually closed it
      if (status === 'finished' && !popupClosedRef.current && !shouldShowPopupAfterFlipRef.current) {
        // Mark that popup should show, but the separate effect will handle timing
        shouldShowPopupAfterFlipRef.current = true;
        return;
      }

      // When a new round starts (status === 'playing' with solutions), reset
      // end-of-game sentinels so winner logic and popups work again.
      if (status === 'playing' && solutionArray.length > 0) {
        endingGameRef.current = false;
        popupClosedRef.current = false;
        shouldShowPopupAfterFlipRef.current = false;
        // Do not force-close showPopup here; it is controlled elsewhere.
      }
      
      // Auto-switch turn if current player has finished (solved or exhausted guesses)
      // BUT only while the opponent is *not* finished. Once both players are done,
      // we stop switching turns to avoid ping-ponging currentTurn after game end.
      // This logic is only used in non-speedrun mode; speedrun has no turns.
      if (!gameState.speedrun && status === 'playing' && solutionArray.length > 0 && authUser) {
        const currentTurn = gameState.currentTurn;
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;
        const opponentGuesses = isPlayerHost ? guestGuesses : hostGuesses;

        // Finished = all boards solved OR, in non-speedrun, ran out of guesses
        const mySolvedAll = solutionArray.every((sol) => myGuesses.includes(sol));
        const opponentSolvedAll = solutionArray.every((sol) => opponentGuesses.includes(sol));

        const myFinished = mySolvedAll || (!isSpeedrun && myGuesses.length >= maxTurns);
        const opponentFinished = opponentSolvedAll || (!isSpeedrun && opponentGuesses.length >= maxTurns);

        const isMyTurn = currentTurn === (isPlayerHost ? 'host' : 'guest');
        
        // If it's my turn, I've finished, and opponent is *not* finished yet,
        // automatically pass the turn. Once opponentFinished is true, we no longer
        // auto-switch, preventing infinite turn flipping.
        if (isMyTurn && myFinished && !opponentFinished) {
          try {
            await oneVOneGame.switchTurn(gameCode || '');
          } catch (error) {
            // Ignore errors - might already be switching
          }
        }
      }
      
      // Check if both players are done (either solved or exhausted guesses)
      // Only end game if both are done AND game is still playing
      if (status === 'playing' && solutionArray.length > 0 && !endingGameRef.current) {
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;
        const opponentGuesses = isPlayerHost ? guestGuesses : hostGuesses;

        const mySolvedAll = solutionArray.every((sol) => myGuesses.includes(sol));
        const opponentSolvedAll = solutionArray.every((sol) => opponentGuesses.includes(sol));

        // A player is "finished" if they solved all boards OR (in non-speedrun mode) exhausted all guesses
        const myFinished = mySolvedAll || (!isSpeedrun && myGuesses.length >= maxTurns);
        const opponentFinished = opponentSolvedAll || (!isSpeedrun && opponentGuesses.length >= maxTurns);
        
        // Only end game when BOTH players have finished across all boards
        // This ensures that if one player solves some boards, the other can still take their turns.
        if (myFinished && opponentFinished) {
          // Prevent multiple calls to setWinner
          endingGameRef.current = true;
          
          // Determine winner
          let winner = null;

          // For winner logic, treat the "primary" solution as the first in the array, to
          // keep existing behavior mostly intact. Game only ends once all boards are done,
          // but winner is decided based on who did better on the first board / time.
          const primarySolution = solutionArray[0];
          const mySolvedPrimary = myGuesses.includes(primarySolution);
          const opponentSolvedPrimary = opponentGuesses.includes(primarySolution);

          if (isSpeedrun) {
            // Speedrun mode: use time to determine winner
            const myTimeMs = isPlayerHost ? (gameState.hostTimeMs || null) : (gameState.guestTimeMs || null);
            const opponentTimeMs = isPlayerHost ? (gameState.guestTimeMs || null) : (gameState.hostTimeMs || null);
            
            if (mySolvedPrimary && !opponentSolvedPrimary) {
              winner = isPlayerHost ? 'host' : 'guest';
            } else if (opponentSolvedPrimary && !mySolvedPrimary) {
              winner = isPlayerHost ? 'guest' : 'host';
            } else if (mySolvedPrimary && opponentSolvedPrimary && myTimeMs !== null && opponentTimeMs !== null) {
              // Both solved - check who solved faster
              if (myTimeMs < opponentTimeMs) {
                winner = isPlayerHost ? 'host' : 'guest';
              } else if (opponentTimeMs < myTimeMs) {
                winner = isPlayerHost ? 'guest' : 'host';
              }
              // If same time, winner stays null (tie)
            }
          } else {
            // Normal mode: use guesses on the primary board to determine winner
            if (mySolvedPrimary && !opponentSolvedPrimary) {
              winner = isPlayerHost ? 'host' : 'guest';
            } else if (opponentSolvedPrimary && !mySolvedPrimary) {
              winner = isPlayerHost ? 'guest' : 'host';
            } else if (mySolvedPrimary && opponentSolvedPrimary) {
              // Both solved primary board - check who solved first (fewer guesses)
              const mySolveIndex = myGuesses.indexOf(primarySolution);
              const opponentSolveIndex = opponentGuesses.indexOf(primarySolution);
              if (mySolveIndex < opponentSolveIndex) {
                winner = isPlayerHost ? 'host' : 'guest';
              } else if (opponentSolveIndex < mySolveIndex) {
                winner = isPlayerHost ? 'guest' : 'host';
              }
              // If same index, winner stays null (tie)
            }
          }
          // If neither solved, winner stays null (both failed)
          
          // Set winner (this will change status to 'finished')
          await oneVOneGame.setWinner(gameCode || '', winner);
          // Popup will be shown when status changes to 'finished' on next update
        }
      }
    }
    
    handleOneVOneGame();
  }, [isOneVOne, oneVOneGame.gameState, authUser, maxTurns, gameCode, oneVOneGame, boards, isFlipping]);

  // Host-only effect: automatically start a new 1v1 round when both players
  // have requested a rematch, skipping the ready screen. If the host has chosen
  // a new configuration (boards/speedrun) from the end-of-game UI, that config
  // is applied to the next round.
  useEffect(() => {
    if (!isOneVOne) return;
    const gameState = oneVOneGame.gameState;
    if (!gameState || !authUser) return;

    const { hostId, hostRematch, guestRematch, status } = gameState;
    const isPlayerHost = hostId === authUser.uid;

    // Only host orchestrates starting the next round.
    if (!isPlayerHost) return;

    // Only trigger from a finished game where both players have clicked rematch.
    if (status !== 'finished' || !hostRematch || !guestRematch) return;

    (async () => {
      try {
        // Select random word(s) based on game code and timestamp (not daily word).
        const { ANSWER_WORDS } = await loadWordLists();
        const previousSolutions = Array.isArray(gameState.solutions)
          ? gameState.solutions
          : gameState.solution
          ? [gameState.solution]
          : [];

        // Default: reuse previous board count and speedrun flag.
        let boardsForThisGame = Math.max(previousSolutions.length || 1, 1);
        let speedrunForNextRound = !!gameState.speedrun;

        // If host configured a custom next-round mode, apply it.
        if (oneVOneNextConfig) {
          if (Number.isFinite(oneVOneNextConfig.numBoards)) {
            const clampedBoards = Math.max(1, Math.min(ONE_V_ONE_BOARD_OPTIONS.length, oneVOneNextConfig.numBoards));
            boardsForThisGame = clampedBoards;
          }
          if (typeof oneVOneNextConfig.speedrun === 'boolean') {
            speedrunForNextRound = oneVOneNextConfig.speedrun;
          }
        }

        // Use game code + timestamp as seed to get different words each game
        const seed = parseInt(gameCode, 10) + Date.now();
        const rng = new SeededRandom(seed);
        const solutions = Array.from({ length: boardsForThisGame }).map(() => {
          const index = Math.floor(rng.next() * ANSWER_WORDS.length);
          return ANSWER_WORDS[index];
        });

        await oneVOneGame.startGame(gameCode, solutions, { speedrun: speedrunForNextRound });

        // Local UI reset for new round
        setBoards([]);
        setCurrentGuess("");
        setShowPopup(false);
        shouldShowPopupAfterFlipRef.current = false;
        popupClosedRef.current = false;
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to auto-start 1v1 rematch:', err);
      }
    })();
  }, [isOneVOne, oneVOneGame.gameState, authUser, gameCode, oneVOneGame, oneVOneNextConfig]);

  // Handle showing popup after flip animation completes for 1v1
  useEffect(() => {
    if (isOneVOne && shouldShowPopupAfterFlipRef.current && !isFlipping && !popupClosedRef.current) {
      // Ensure the flip is truly complete before showing popup
      setTimeout(() => {
        if (shouldShowPopupAfterFlipRef.current && !popupClosedRef.current) {
          setShowPopup(true);
          shouldShowPopupAfterFlipRef.current = false;
        }
      }, 50);
    }
  }, [isFlipping, isOneVOne, oneVOneGame.gameState && oneVOneGame.gameState.status]);

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

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const finished = useMemo(() => {
    if (boards.length === 0) return false;
    return isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);
  }, [boards, isUnlimited]);

  const allSolved = useMemo(() => boards.length > 0 && boards.every((b) => b.isSolved), [boards]);

  // In 1v1, track whether the LOCAL player has solved all of their boards,
  // even if the opponent is still playing. We use this both to disable input
  // and to hide the on-screen keyboard for that player.
  const hasPlayerSolvedAllOneVOneBoards = useMemo(() => {
    if (!isOneVOne || !oneVOneGame.gameState || !authUser) return false;
    const gs = oneVOneGame.gameState;

    const solutionArray =
      Array.isArray(gs.solutions) && gs.solutions.length > 0
        ? gs.solutions
        : gs.solution
        ? [gs.solution]
        : [];

    if (solutionArray.length === 0) return false;

    const myGuesses = gs.hostId === authUser.uid ? gs.hostGuesses || [] : gs.guestGuesses || [];

    return solutionArray.every((sol) => myGuesses.includes(sol));
  }, [isOneVOne, oneVOneGame.gameState, authUser]);

  // Centralized helper for whether keyboard input should be blocked
  const isInputBlocked = useCallback(() => {
    // Once all boards are solved in any mode, block input so physical
    // keyboard presses do nothing and rely on the solved UI instead.
    if (allSolved) return true;

    // In 1v1, also block input once *this* player has solved all of their boards,
    // even if the opponent is still finishing.
    if (hasPlayerSolvedAllOneVOneBoards) return true;

    if (showPopup || showOutOfGuesses) return true;

    // If the user is typing into a text field/textarea/contentEditable element
    // (e.g., in a modal), don't let the global game keyboard handler run.
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

    // In 1v1 mode, disable keyboard input if not player's turn (non-speedrun only).
    if (isOneVOne && oneVOneGame.gameState) {
      const gameState = oneVOneGame.gameState;
      if (gameState.status !== "playing") return true;
      if (!gameState.speedrun) {
        const isPlayerHost = authUser && gameState.hostId === authUser.uid;
        const isMyTurn = gameState.currentTurn === (isPlayerHost ? "host" : "guest");
        if (!isMyTurn) return true;
      }
    }

    return false;
  }, [allSolved, hasPlayerSolvedAllOneVOneBoards, showPopup, showOutOfGuesses, isOneVOne, oneVOneGame.gameState, authUser]);


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

  const submitGuess = async () => {
    if (showPopup || showOutOfGuesses) return;
    if (currentGuess.length !== WORD_LENGTH) return;

    if (!allowedSet.has(currentGuess)) {
      setTimedMessage("Not in word list.", 5000);
      setCurrentGuess("");
      return;
    }

    // Handle 1v1 mode
    if (isOneVOne && oneVOneGame.gameState) {
      const gameState = oneVOneGame.gameState;
      const isPlayerHost = authUser && gameState.hostId === authUser.uid;
      const isSpeedrun = gameState.speedrun || false;
      const isMyTurn = gameState.currentTurn === (isPlayerHost ? 'host' : 'guest');
      
      if (!isSpeedrun && !isMyTurn) {
        setTimedMessage("Not your turn!", 3000);
        return;
      }
      
      // For multi-board 1v1, consider all solutions, not just the primary one
      const solutionArray =
        Array.isArray(gameState.solutions) && gameState.solutions.length > 0
          ? gameState.solutions
          : gameState.solution
          ? [gameState.solution]
          : [];
      if (solutionArray.length === 0) return;
      
      // Check if player has already finished (all boards solved or out of guesses),
      // matching the logic used in handleOneVOneGame.
      const myGuesses = isPlayerHost ? (gameState.hostGuesses || []) : (gameState.guestGuesses || []);
      const mySolvedAll = solutionArray.every((sol) => myGuesses.includes(sol));
      const myFinished = mySolvedAll || (!isSpeedrun && myGuesses.length >= maxTurns);
      
      if (myFinished) {
        // In non-speedrun mode, once you're finished we auto-pass the turn.
        if (!isSpeedrun) {
          try {
            await oneVOneGame.switchTurn(gameCode);
            setTimedMessage("You have already finished! Switching turn...", 2000);
          } catch (error) {
            setTimedMessage(error.message || "Failed to switch turn", 3000);
          }
        } else {
          setTimedMessage("You have already finished!", 2000);
        }
        return;
      }
      
      const colorStrings = scoreGuess(currentGuess, gameState.solution);
      // Convert color strings to numbers for Firebase: grey=0, yellow=1, green=2
      const colors = colorStrings.map(c => c === "green" ? 2 : c === "yellow" ? 1 : 0);
      const isSolved = currentGuess === gameState.solution;
      
      // Save the guess before clearing from state
      const guessToSubmit = currentGuess;
      
      // Clear current guess immediately before Firebase updates
      setCurrentGuess("");
      setMessage("");
      clearMessageTimer();
      
      try {
        // Trigger flip animation immediately so we can reliably wait for it
        // before showing the end-of-game popup.
        setRevealId((x) => x + 1);
        setIsFlipping(true);
        
        setTimeout(() => {
          setIsFlipping(false);
        }, FLIP_COMPLETE_MS);

        await oneVOneGame.submitGuess(gameCode, guessToSubmit, colors);
        
        // Note: Game ending logic is handled in the useEffect that monitors gameState
        // This ensures we check after Firebase updates both players' states
        // The game will only end when both players have finished (solved or exhausted guesses)
      } catch (error) {
        setTimedMessage(error.message || "Failed to submit guess", 5000);
      }
      return;
    }

    const allOver = isUnlimited
      ? boards.every((b) => b.isSolved)
      : boards.every((b) => b.isSolved || b.isDead);

    if (allOver) return;

    // Compute the next revealId up front so boards can record which reveal
    // created their newest row. This lets TileRow animate the solve row once,
    // even if the board is now solved, without re-flipping on later reveals.
    const nextRevealId = revealId + 1;

    const newBoards = boards.map((board) => {
      if (board.isSolved) return board;
      if (!isUnlimited && board.isDead) return board;

      const colors = scoreGuess(currentGuess, board.solution);
      const guesses = [...board.guesses, { word: currentGuess, colors }];

      const isSolvedNow = currentGuess === board.solution;
      const isDeadNow = !isUnlimited && !isSolvedNow && guesses.length >= maxTurns;

      const hadNewGuess = guesses.length > board.guesses.length;
      const lastRevealId = hadNewGuess ? nextRevealId : board.lastRevealId ?? null;

      return { ...board, guesses, isSolved: isSolvedNow, isDead: isDeadNow, lastRevealId };
    });

    setBoards(newBoards);

    // trigger reveal animation for the row that was just added
    setRevealId(nextRevealId);

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
      
      // Submit to leaderboard if user is signed in and speedrun mode
      // For daily: submit when stage completes
      // For marathon: only submit when marathon is fully complete (last stage)
      const isMarathonComplete = mode === 'marathon' && marathonIndex >= marathonLevels.length - 1;
      const shouldSubmit = speedrunEnabled && authUser && isVerifiedUser && allSolvedNow && 
        (mode === 'daily' || isMarathonComplete);
      
      if (shouldSubmit) {
        const userName = authUser.displayName || authUser.email || 'Anonymous';
        const finalTimeMs = savedPopupTotalMs || finalStageMs;
        // For marathon, use the total cumulative time across all stages
        const submitNumBoards = mode === 'marathon' 
          ? marathonLevels[marathonLevels.length - 1] // Use final stage boards for marathon
          : numBoards;
        submitSpeedrunScore(
          authUser.uid,
          userName,
          mode,
          submitNumBoards,
          finalTimeMs,
          currentScore
        ).catch(err => {
          console.error('Failed to submit score to leaderboard:', err);
          // Don't block the game flow if submission fails
        });
      }
      
      // Clear incomplete game state since game is now solved
      clearGameState();
      
      // Wait for flip animation to complete before showing popup
      setTimeout(() => {
        setShowPopup(true);
      }, FLIP_COMPLETE_MS);
    }
  };

  // Hook up global physical keyboard handling after handlers are defined
  useKeyboard({
    disabled: isInputBlocked(),
    onEnter: submitGuess,
    onBackspace: removeLetter,
    onLetter: addLetter,
  });

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

  const { handleShare, handleShareCode } = useShare(shareText, setTimedMessage);

  // 1v1 mode handlers
  const handleOneVOneReady = useCallback(async () => {
    if (!gameCode) return;
    if (!isVerifiedUser) {
      setTimedMessage('You must verify your email or sign in with Google to play 1v1.', 8000);
      return;
    }
    try {
      const currentReady = oneVOneGame.gameState?.hostId === authUser?.uid
        ? oneVOneGame.gameState.hostReady
        : oneVOneGame.gameState?.guestReady;
      await oneVOneGame.setReady(gameCode, !currentReady);
    } catch (error) {
      setTimedMessage(error.message || "Failed to set ready status", 5000);
    }
  }, [gameCode, oneVOneGame, authUser]);

  const handleOneVOneStart = useCallback(async () => {
    if (!gameCode) return;
    if (!isVerifiedUser) {
      setTimedMessage('You must verify your email or sign in with Google to play 1v1.', 8000);
      return;
    }
    try {
      const { ANSWER_WORDS } = await loadWordLists();
      // For 1v1, always pick fresh random words so each hosted game uses new words.
      const boardsForThisGame = Math.max(1, numBoards || 1);
      const seed = parseInt(gameCode, 10) + Date.now();
      const rng = new SeededRandom(seed);
      const solutions = Array.from({ length: boardsForThisGame }).map(() => {
        const index = Math.floor(rng.next() * ANSWER_WORDS.length);
        return ANSWER_WORDS[index];
      });
      
      await oneVOneGame.startGame(gameCode, solutions);
    } catch (error) {
      setTimedMessage(error.message || "Failed to start game", 5000);
    }
  }, [gameCode, oneVOneGame, numBoards, isVerifiedUser, setTimedMessage]);

  const handleCancelHostedChallenge = useCallback(async () => {
    if (!gameCode) {
      navigate("/");
      return;
    }
    try {
      await cancelSentChallenge(gameCode);
    } catch (error) {
      setTimedMessage(error.message || "Failed to cancel challenge", 5000);
    }
    navigate("/");
  }, [gameCode, cancelSentChallenge, navigate, setTimedMessage]);

  const handleAddFriendRequest = useCallback(async (opponentName, opponentId) => {
    if (!authUser) {
      return;
    }
    if (!opponentId) {
      return;
    }
    try {
      await sendFriendRequest(opponentName, opponentId);
      if (isOneVOne && gameCode && oneVOneGame) {
        // Mark as pending in 1v1 game state so both players see live status.
        try {
          await oneVOneGame.setFriendRequestStatus(gameCode, 'pending');
        } catch (e) {
          console.error('Failed to mark 1v1 friend request pending:', e);
        }
      }
    } catch (err) {
      console.error('Failed to send friend request:', err);
    }
  }, [authUser, sendFriendRequest, isOneVOne, gameCode, oneVOneGame]);

  const openOneVOneConfigFromEnd = useCallback(() => {
    if (!isOneVOne) return;
    if (!oneVOneGame.gameState || !authUser) return;
    const gs = oneVOneGame.gameState;

    // Prefer any previously-saved next config; otherwise, mirror the current round.
    const multiBoardCount = Math.max(
      (Array.isArray(gs.solutions) && gs.solutions.length) || boards.length || 0,
      1
    );
    const defaultBoards = (oneVOneNextConfig && oneVOneNextConfig.numBoards) ||
      (Array.isArray(gs.solutions) && gs.solutions.length > 0
        ? gs.solutions.length
        : gs.solution
        ? 1
        : multiBoardCount || numBoards || 1);
    const defaultSpeedrun =
      (oneVOneNextConfig && typeof oneVOneNextConfig.speedrun === 'boolean')
        ? oneVOneNextConfig.speedrun
        : !!gs.speedrun;

    setOneVOneConfigBoardsDraft(defaultBoards);
    setOneVOneConfigSpeedrunDraft(defaultSpeedrun);
    setIsOneVOneConfigModalOpen(true);
  }, [isOneVOne, oneVOneGame.gameState, authUser, oneVOneNextConfig, boards, numBoards]);

  const applyOneVOneConfig = useCallback(() => {
    const clampedBoards = Math.max(1, Math.min(ONE_V_ONE_BOARD_OPTIONS.length, oneVOneConfigBoardsDraft));
    setOneVOneNextConfig({
      numBoards: clampedBoards,
      speedrun: !!oneVOneConfigSpeedrunDraft,
    });
    setIsOneVOneConfigModalOpen(false);
    const modeLabel = oneVOneConfigSpeedrunDraft ? 'speedrun' : 'standard';
    setTimedMessage(
      `Next rematch will use ${clampedBoards} board${clampedBoards > 1 ? 's' : ''} (${modeLabel} mode).`,
      5000
    );
  }, [oneVOneConfigBoardsDraft, oneVOneConfigSpeedrunDraft, setTimedMessage]);

  // For 1v1 mode, delegate rendering to OneVOneGameView
  if (isOneVOne) {
    // In 1v1, the true multi-board count comes from the active boards, not the URL
    const multiBoardCount = Math.max(boards.length || 0, 1);
    const gridCols1v1 = Math.ceil(Math.sqrt(multiBoardCount));
    const gridRows1v1 = Math.ceil(multiBoardCount / gridCols1v1);

    return (
      <>
        {/* Global toast for 1v1 mode (e.g., invalid words, turn errors) */}
        <GameToast message={message} />

        {/* Host-only 1v1 config modal for choosing next-round mode/boards */}
        <Modal
          isOpen={isOneVOneConfigModalOpen}
          onRequestClose={() => setIsOneVOneConfigModalOpen(false)}
        >
          <div style={{ padding: '24px' }}>
            <h2
              style={{
                margin: 0,
                marginBottom: '24px',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
              }}
            >
              1v1 Game Configuration
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: '#d7dadc',
                    fontSize: 14,
                  }}
                >
                  Number of Boards
                </label>
                <select
                  value={oneVOneConfigBoardsDraft}
                  onChange={(e) => setOneVOneConfigBoardsDraft(parseInt(e.target.value, 10))}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: 6,
                    border: '1px solid #3a3a3c',
                    background: '#1a1a1b',
                    color: '#ffffff',
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  {ONE_V_ONE_BOARD_OPTIONS.map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <input
                  type="checkbox"
                  id="onevone-speedrun-config-checkbox"
                  checked={oneVOneConfigSpeedrunDraft}
                  onChange={(e) => setOneVOneConfigSpeedrunDraft(e.target.checked)}
                  style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                />
                <label
                  htmlFor="onevone-speedrun-config-checkbox"
                  style={{ color: '#d7dadc', fontSize: 14, cursor: 'pointer', margin: 0 }}
                >
                  Speedrun Mode (Unlimited guesses, timed)
                </label>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <button
                  onClick={() => setIsOneVOneConfigModalOpen(false)}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: 8,
                    border: '1px solid #3a3a3c',
                    background: 'transparent',
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={applyOneVOneConfig}
                  style={{
                    flex: 1,
                    padding: '12px',
                    borderRadius: 8,
                    border: 'none',
                    background: '#6aaa64',
                    color: '#ffffff',
                    fontSize: 14,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Save for Rematch
                </button>
              </div>
            </div>
          </div>
        </Modal>

        <OneVOneGameView
          mode={mode}
          gameCode={gameCode}
          authUser={authUser}
          oneVOneGame={oneVOneGame}
          isLoading={isLoading}
          initialNumBoards={numBoards}
          maxTurns={maxTurns}
          currentGuess={currentGuess}
          invalidCurrentGuess={invalidCurrentGuess}
          revealId={revealId}
          boardRefs={boardRefs}
          boards={boards}
          selectedBoardIndex={selectedBoardIndex}
          setSelectedBoardIndex={setSelectedBoardIndex}
          friendRequestSent={friendRequestSent}
          onAddFriendRequest={handleAddFriendRequest}
          onShareCode={handleShareCode}
          onReady={handleOneVOneReady}
          onStartGame={handleOneVOneStart}
          onBack={handleBack}
          onOpenFeedback={() => setShowFeedbackModal(true)}
          onCancelChallenge={handleCancelHostedChallenge}
          onRematch={async () => {
            if (!gameCode) return;
            try {
              await oneVOneGame.requestRematch(gameCode);
              // Close popup locally; opponent will see a rematch notice via gameState.
              setShowPopup(false);
              popupClosedRef.current = true;
            } catch (error) {
              setTimedMessage(error.message || "Failed to request rematch", 5000);
            }
          }}
          setShowFeedbackModal={setShowFeedbackModal}
          setTimedMessage={setTimedMessage}
          oneVOneNowMs={oneVOneNowMs}
          onChangeMode={openOneVOneConfigFromEnd}
          friends={friends}
        />

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
            onClose={() => {
              setShowPopup(false);
              popupClosedRef.current = true;
            }}
            onNextStage={goNextStage}
            freezeStageTimer={freezeStageTimer}
            isMarathonSpeedrun={isMarathonSpeedrun}
            commitStageIfNeeded={commitStageIfNeeded}
            isOneVOne={true}
            oneVOneGameState={oneVOneGame.gameState}
            myScore={oneVOneGame.gameState ? (() => {
              const isSpeedrun = oneVOneGame.gameState.speedrun || false;
              if (isSpeedrun) {
                // Return time in milliseconds for speedrun mode
                return (authUser?.uid === oneVOneGame.gameState.hostId)
                  ? (oneVOneGame.gameState.hostTimeMs || null)
                  : (oneVOneGame.gameState.guestTimeMs || null);
              } else {
                const myGuesses = (authUser?.uid === oneVOneGame.gameState.hostId)
                  ? (oneVOneGame.gameState.hostGuesses || [])
                  : (oneVOneGame.gameState.guestGuesses || []);
                const mySolved = myGuesses.includes(oneVOneGame.gameState.solution);
                const mockBoard = {
                  guesses: myGuesses.map(word => ({ word, colors: [] })),
                  isSolved: mySolved
                };
                return calculateNonSpeedrunScore([mockBoard], myGuesses.length, maxTurns, 1);
              }
            })() : null}
            opponentScore={oneVOneGame.gameState ? (() => {
              const isSpeedrun = oneVOneGame.gameState.speedrun || false;
              if (isSpeedrun) {
                // Return time in milliseconds for speedrun mode
                return (authUser?.uid === oneVOneGame.gameState.hostId)
                  ? (oneVOneGame.gameState.guestTimeMs || null)
                  : (oneVOneGame.gameState.hostTimeMs || null);
              } else {
                const opponentGuesses = (authUser?.uid === oneVOneGame.gameState.hostId)
                  ? (oneVOneGame.gameState.guestGuesses || [])
                  : (oneVOneGame.gameState.hostGuesses || []);
                const opponentSolved = opponentGuesses.includes(oneVOneGame.gameState.solution);
                const mockBoard = {
                  guesses: opponentGuesses.map(word => ({ word, colors: [] })),
                  isSolved: opponentSolved
                };
                return calculateNonSpeedrunScore([mockBoard], opponentGuesses.length, maxTurns, 1);
              }
            })() : null}
            winner={oneVOneGame.gameState ? oneVOneGame.gameState.winner : null}
            isPlayerHost={oneVOneGame.gameState && authUser ? (oneVOneGame.gameState.hostId === authUser.uid) : false}
            onRematch={async () => {
              if (!gameCode) return;
              try {
                await oneVOneGame.requestRematch(gameCode);
                setShowPopup(false);
                popupClosedRef.current = true;
              } catch (error) {
                setTimedMessage(error.message || "Failed to request rematch", 5000);
              }
            }}
            onChangeMode={() => {
              // Close the end-game popup so the 1v1 config modal is visible.
              setShowPopup(false);
              popupClosedRef.current = true;
              openOneVOneConfigFromEnd();
            }}
          />
        )}

        <FeedbackModal
          isOpen={showFeedbackModal}
          onRequestClose={() => setShowFeedbackModal(false)}
        />

        {/* Floating board selector button & popup for multi-board 1v1 (same UX as daily) */}
        <BoardSelector
          numBoards={multiBoardCount}
          showBoardSelector={showBoardSelector}
          setShowBoardSelector={setShowBoardSelector}
          boards={boards}
          selectedBoardIndex={selectedBoardIndex}
          setSelectedBoardIndex={setSelectedBoardIndex}
          boardRefs={boardRefs}
          isUnlimited={false}
          speedrunEnabled={speedrunEnabled}
          statusText={statusText}
        />

      {/* Fixed keyboard footer (multi-board aware) - only while game is playing
          and this player has not yet solved all of their boards. */}
        {oneVOneGame.gameState &&
          oneVOneGame.gameState.status === 'playing' &&
          !hasPlayerSolvedAllOneVOneBoards && (
            <footer className="keyboardFooter">
              <Keyboard
                numBoards={multiBoardCount}
                selectedBoardIndex={selectedBoardIndex}
                perBoardLetterMaps={perBoardLetterMaps}
                focusedLetterMap={focusedLetterMap}
                gridCols={gridCols1v1}
                gridRows={gridRows1v1}
                onVirtualKey={handleVirtualKey}
              />
            </footer>
          )}
      </>
    );
  }

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

      <SiteHeader onOpenFeedback={() => setShowFeedbackModal(true)} />

      <main
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          // Reserve extra space at the bottom only while the on-screen keyboard
          // is visible, so once all boards are solved the content can sit
          // closer to the bottom of the viewport.
          paddingBottom:
            (allSolved ? 16 : KEYBOARD_HEIGHT) + (showNextStageBar ? 62 : 16),
        }}
      >
        <GameHeader
          mode={mode}
          numBoards={numBoards}
          speedrunEnabled={speedrunEnabled}
        />

        {solutionsText && solutionsText.length > 0 && (
          <div
            style={{
              padding: "0 16px 8px",
              fontSize: 12,
              color: "#d7dadc",
              textTransform: "uppercase",
              fontWeight: "normal",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {solutionsText}
          </div>
        )}

        <div style={{ padding: "16px" }}>
        {/* Status bar: boards, guesses, timer */}
        <div
          style={{
            marginBottom: 12,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid #3a3a3c",
            background: "#18181a",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* Left: boards count */}
          <div
            style={{
              fontSize: 12,
              color: "#d7dadc",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            Boards:{" "}
            <span style={{ fontWeight: "bold" }}>{numBoards}</span>
          </div>

          {/* Center: big timer for speedrun, guesses used for standard */}
          <div style={{ flex: 1, textAlign: "center" }}>
            {speedrunEnabled ? (
              <div
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  color: "#ffffff",
                }}
              >
                {isMarathonSpeedrun ? (
                  <>
                    {formatElapsed(stageElapsedMs || 0)}
                    <span
                      style={{
                        display: "block",
                        marginTop: 2,
                        fontSize: 11,
                        fontWeight: "normal",
                        color: "#a1a1aa",
                      }}
                    >
                      Total {formatElapsed(displayTotalMs || 0)}
                    </span>
                  </>
                ) : (
                  <>{formatElapsed(stageElapsedMs || 0)}</>
                )}
              </div>
            ) : (
              <div
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                Guesses: {turnsUsed}/{maxTurns}
              </div>
            )}
          </div>

          {/* Right: guesses descriptor */}
          <div
            style={{
              fontSize: 12,
              color: "#d7dadc",
              textTransform: "uppercase",
              letterSpacing: 0.5,
              textAlign: "right",
            }}
          >
            Guesses:{" "}
            <span style={{ fontWeight: "bold" }}>
              {speedrunEnabled ? "Unlimited" : maxTurns}
            </span>
          </div>
        </div>

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

      {/* Fixed keyboard footer - hide once all boards are solved so the
          keyboard disappears instead of just blocking input. */}
      {!allSolved && (
        <footer className="keyboardFooter">
          <Keyboard
            numBoards={numBoards}
            selectedBoardIndex={selectedBoardIndex}
            perBoardLetterMaps={perBoardLetterMaps}
            focusedLetterMap={focusedLetterMap}
            gridCols={gridCols}
            gridRows={gridRows}
            onVirtualKey={handleVirtualKey}
          />
        </footer>
      )}

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
          onClose={() => {
            setShowPopup(false);
            popupClosedRef.current = true;
          }}
          onNextStage={goNextStage}
          freezeStageTimer={freezeStageTimer}
          isMarathonSpeedrun={isMarathonSpeedrun}
          commitStageIfNeeded={commitStageIfNeeded}
          isOneVOne={isOneVOne}
          oneVOneGameState={isOneVOne ? oneVOneGame.gameState : null}
          myScore={isOneVOne && oneVOneGame.gameState ? (() => {
            const isSpeedrun = oneVOneGame.gameState.speedrun || false;
            if (isSpeedrun) {
              // Return time in milliseconds for speedrun mode
              return (authUser?.uid === oneVOneGame.gameState.hostId) 
                ? (oneVOneGame.gameState.hostTimeMs || null) 
                : (oneVOneGame.gameState.guestTimeMs || null);
            } else {
              const myGuesses = (authUser?.uid === oneVOneGame.gameState.hostId) 
                ? (oneVOneGame.gameState.hostGuesses || []) 
                : (oneVOneGame.gameState.guestGuesses || []);
              const mySolved = myGuesses.includes(oneVOneGame.gameState.solution);
              const mockBoard = { 
                guesses: myGuesses.map(word => ({ word, colors: [] })), 
                isSolved: mySolved 
              };
              return calculateNonSpeedrunScore([mockBoard], myGuesses.length, maxTurns, 1);
            }
          })() : null}
          opponentScore={isOneVOne && oneVOneGame.gameState ? (() => {
            const isSpeedrun = oneVOneGame.gameState.speedrun || false;
            if (isSpeedrun) {
              // Return time in milliseconds for speedrun mode
              return (authUser?.uid === oneVOneGame.gameState.hostId) 
                ? (oneVOneGame.gameState.guestTimeMs || null) 
                : (oneVOneGame.gameState.hostTimeMs || null);
            } else {
              const opponentGuesses = (authUser?.uid === oneVOneGame.gameState.hostId) 
                ? (oneVOneGame.gameState.guestGuesses || []) 
                : (oneVOneGame.gameState.hostGuesses || []);
              const opponentSolved = opponentGuesses.includes(oneVOneGame.gameState.solution);
              const mockBoard = { 
                guesses: opponentGuesses.map(word => ({ word, colors: [] })), 
                isSolved: opponentSolved 
              };
              return calculateNonSpeedrunScore([mockBoard], opponentGuesses.length, maxTurns, 1);
            }
          })() : null}
          winner={isOneVOne && oneVOneGame.gameState ? oneVOneGame.gameState.winner : null}
          isPlayerHost={isOneVOne && oneVOneGame.gameState && authUser ? (oneVOneGame.gameState.hostId === authUser.uid) : false}
          onRematch={isOneVOne ? async () => {
            if (!gameCode) return;
            try {
              await oneVOneGame.resetGame(gameCode);
              setShowPopup(false);
              popupClosedRef.current = false;
              // Clear boards and reset state
              setBoards([]);
              setCurrentGuess("");
              setIsLoading(true);
            } catch (error) {
              setTimedMessage(error.message || "Failed to rematch", 5000);
            }
          } : undefined}
        />
      )}

      <FeedbackModal
        isOpen={showFeedbackModal}
        onRequestClose={() => setShowFeedbackModal(false)}
      />
    </div>
  );
};

export default Game;
