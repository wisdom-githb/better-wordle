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
import HamburgerMenu from "./components/HamburgerMenu";
import FeedbackModal from "./components/FeedbackModal";
import OneVOneWaitingRoom from "./components/game/OneVOneWaitingRoom";
import OpponentBoardView from "./components/game/OpponentBoardView";
import Keyboard from "./components/Keyboard";
import { useOneVOneGame } from "./hooks/useOneVOneGame";
import { useAuth } from "./hooks/useAuth";
import { submitSpeedrunScore } from "./hooks/useLeaderboard";
import { useTimedMessage } from "./hooks/useTimedMessage";
import { useShare } from "./hooks/useShare";

const Game = ({
  marathonLevels = [1, 2, 3, 4]
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Get game params from URL
  const mode = searchParams.get("mode") || "daily";
  const speedrunEnabled = searchParams.get("speedrun") === "true";
  const boardsParam = searchParams.get("boards");
  const isOneVOne = mode === "1v1";
  const isHost = searchParams.get("host") === "true";
  const gameCode = searchParams.get("code") || null;
  
// 1v1 game hook
  const { user: authUser, sendFriendRequest, isVerifiedUser } = useAuth();
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
  
  // Determine numBoards
  const numBoards = mode === "marathon" 
    ? marathonLevels[marathonIndex] 
    : (boardsParam ? parseInt(boardsParam, 10) : 1);
  const [boards, setBoards] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");

  const { message, setMessage, setTimedMessage, clearMessageTimer } = useTimedMessage("");

  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [friendRequestSent, setFriendRequestSent] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);
  const endingGameRef = useRef(false);
  const popupClosedRef = useRef(false);
  const shouldShowPopupAfterFlipRef = useRef(false);

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
          navigate(`/game?mode=1v1&code=${code}&host=true&speedrun=${speedrunEnabled}`, { replace: true });
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
  }, [isOneVOne, isHost, gameCode, authUser, oneVOneGame, navigate]);

  useEffect(() => {
    async function initGame() {
      // Skip regular init for 1v1 mode
      if (isOneVOne) return;
      
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
      const { status, solution, hostId, hostGuesses = [], guestGuesses = [], hostColors = [], guestColors = [] } = gameState;
      const isPlayerHost = hostId === authUser.uid;
      
      // Initialize game boards when game starts
      if (status === 'playing' && solution) {
        if (boards.length === 0) {
          // Word lists should already be loaded in initOneVOne, but ensure they're loaded
          if (allowedSet.size === 0) {
            setIsLoading(true);
            const { ALLOWED_GUESSES } = await loadWordLists();
            setAllowedSet(new Set(ALLOWED_GUESSES));
            setIsLoading(false);
          }
          
          // Set maxTurns to a very high number for speedrun mode (unlimited)
        const isSpeedrun = gameState.speedrun || false;
        const turns = isSpeedrun ? 999 : getMaxTurns(1);
        setMaxTurns(turns);
        setIsUnlimited(isSpeedrun);
        }
        
        // Update board with player's guesses
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;
        const newGuesses = myGuesses.map(word => {
          const colors = scoreGuess(word, solution);
          return { word, colors };
        });
        
        const isSolved = newGuesses.some(g => g.word === solution);
        const isSpeedrun = gameState.speedrun || false;
        const isDead = !isSpeedrun && !isSolved && newGuesses.length >= maxTurns;
        
        if (boards.length === 0 || boards[0].guesses.length !== newGuesses.length) {
          setBoards([{
            solution,
            guesses: newGuesses,
            isSolved: isSolved,
            isDead: isDead
          }]);
        }
      }
      
      // Handle game finished - mark that we should show popup after flip completes
      // Don't reopen if user manually closed it
      if (status === 'finished' && !popupClosedRef.current && !shouldShowPopupAfterFlipRef.current) {
        // Mark that popup should show, but the separate effect will handle timing
        shouldShowPopupAfterFlipRef.current = true;
        return;
      }
      
      // Auto-switch turn if current player has finished (solved or exhausted guesses)
      if (status === 'playing' && solution && authUser) {
        const currentTurn = gameState.currentTurn;
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;
        const mySolved = myGuesses.includes(solution);
        const isSpeedrun = gameState.speedrun || false;
        const myFinished = mySolved || (!isSpeedrun && myGuesses.length >= maxTurns);
        const isMyTurn = currentTurn === (isPlayerHost ? 'host' : 'guest');
        
        // If it's my turn but I've finished, automatically switch turn
        if (isMyTurn && myFinished) {
          try {
            await oneVOneGame.switchTurn(gameCode || '');
          } catch (error) {
            // Ignore errors - might already be switching
          }
        }
      }
      
      // Check if both players are done (either solved or exhausted guesses)
      // Only end game if both are done AND game is still playing
      if (status === 'playing' && solution && !endingGameRef.current) {
        const myGuesses = isPlayerHost ? hostGuesses : guestGuesses;
        const opponentGuesses = isPlayerHost ? guestGuesses : hostGuesses;
        const mySolved = myGuesses.includes(solution);
        const opponentSolved = opponentGuesses.includes(solution);
        
        const isSpeedrun = gameState.speedrun || false;
        // A player is "finished" if they solved OR (in non-speedrun mode) exhausted all guesses
        const myFinished = mySolved || (!isSpeedrun && myGuesses.length >= maxTurns);
        const opponentFinished = opponentSolved || (!isSpeedrun && opponentGuesses.length >= maxTurns);
        
        // Only end game when BOTH players have finished
        // This ensures that if one player solves, the other player can still take their turn
        if (myFinished && opponentFinished) {
          // Prevent multiple calls to setWinner
          endingGameRef.current = true;
          
          // Determine winner
          let winner = null;
          if (isSpeedrun) {
            // Speedrun mode: use time to determine winner
            const myTimeMs = isPlayerHost ? (gameState.hostTimeMs || null) : (gameState.guestTimeMs || null);
            const opponentTimeMs = isPlayerHost ? (gameState.guestTimeMs || null) : (gameState.hostTimeMs || null);
            
            if (mySolved && !opponentSolved) {
              winner = isPlayerHost ? 'host' : 'guest';
            } else if (opponentSolved && !mySolved) {
              winner = isPlayerHost ? 'guest' : 'host';
            } else if (mySolved && opponentSolved && myTimeMs !== null && opponentTimeMs !== null) {
              // Both solved - check who solved faster
              if (myTimeMs < opponentTimeMs) {
                winner = isPlayerHost ? 'host' : 'guest';
              } else if (opponentTimeMs < myTimeMs) {
                winner = isPlayerHost ? 'guest' : 'host';
              }
              // If same time, winner stays null (tie)
            }
          } else {
            // Normal mode: use guesses to determine winner
            if (mySolved && !opponentSolved) {
              winner = isPlayerHost ? 'host' : 'guest';
            } else if (opponentSolved && !mySolved) {
              winner = isPlayerHost ? 'guest' : 'host';
            } else if (mySolved && opponentSolved) {
              // Both solved - check who solved first (fewer guesses)
              const mySolveIndex = myGuesses.indexOf(solution);
              const opponentSolveIndex = opponentGuesses.indexOf(solution);
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
  }, [isFlipping, isOneVOne]);

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
      
      // In 1v1 mode, disable keyboard input if not player's turn
      if (isOneVOne && oneVOneGame.gameState) {
        const gameState = oneVOneGame.gameState;
        const isPlayerHost = authUser && gameState.hostId === authUser.uid;
        const isMyTurn = gameState.currentTurn === (isPlayerHost ? 'host' : 'guest');
        if (!isMyTurn || gameState.status !== 'playing') return;
      }
      
      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key)) addLetter(key);
      else if (key === "BACKSPACE") removeLetter();
      else if (key === "ENTER") submitGuess();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPopup, showOutOfGuesses, currentGuess, boards, maxTurns, allowedSet, isUnlimited, isOneVOne, oneVOneGame.gameState, authUser]);

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
      const isMyTurn = gameState.currentTurn === (isPlayerHost ? 'host' : 'guest');
      
      if (!isMyTurn) {
        setTimedMessage("Not your turn!", 3000);
        return;
      }
      
      if (!gameState.solution) return;
      
      // Check if player has already finished
      const myGuesses = isPlayerHost ? (gameState.hostGuesses || []) : (gameState.guestGuesses || []);
      const mySolved = myGuesses.includes(gameState.solution);
      const isSpeedrun = gameState.speedrun || false;
      const myFinished = mySolved || (!isSpeedrun && myGuesses.length >= maxTurns);
      
      if (myFinished) {
        // Player has finished - switch turn without adding a guess
        try {
          await oneVOneGame.switchTurn(gameCode);
          setTimedMessage("You have already finished! Switching turn...", 2000);
        } catch (error) {
          setTimedMessage(error.message || "Failed to switch turn", 3000);
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
        await oneVOneGame.submitGuess(gameCode, guessToSubmit, colors);
        
        // Trigger flip animation
        setRevealId((x) => x + 1);
        setIsFlipping(true);
        
        setTimeout(() => {
          setIsFlipping(false);
        }, FLIP_COMPLETE_MS);
        
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
    
    // In 1v1 mode, disable keyboard input if not player's turn
    if (isOneVOne && oneVOneGame.gameState) {
      const gameState = oneVOneGame.gameState;
      const isPlayerHost = authUser && gameState.hostId === authUser.uid;
      const isMyTurn = gameState.currentTurn === (isPlayerHost ? 'host' : 'guest');
      if (!isMyTurn || gameState.status !== 'playing') return;
    }
    
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
      // Select a random word based on game code and timestamp (not daily word)
      const { ANSWER_WORDS } = await loadWordLists();
      // Use game code + timestamp as seed to get a different word each game
      const seed = parseInt(gameCode) + Date.now();
      const rng = new SeededRandom(seed);
      const index = Math.floor(rng.next() * ANSWER_WORDS.length);
      const solution = ANSWER_WORDS[index];
      
      await oneVOneGame.startGame(gameCode, solution);
    } catch (error) {
      setTimedMessage(error.message || "Failed to start game", 5000);
    }
  }, [gameCode, oneVOneGame]);

  const handleAddFriendRequest = useCallback(async (opponentName, opponentId) => {
    if (!authUser) {
      return;
    }
    if (!opponentId) {
      return;
    }
    try {
      await sendFriendRequest(opponentName, opponentId);
      setFriendRequestSent(true);
    } catch (err) {
      console.error('Failed to send friend request:', err);
    }
  }, [authUser, sendFriendRequest]);

  // Show waiting room for 1v1 mode (check before loading screen)
  if (isOneVOne && oneVOneGame.gameState && oneVOneGame.gameState.status === 'waiting') {
    const gameState = oneVOneGame.gameState;
    const isPlayerHost = authUser && gameState.hostId === authUser.uid;
    
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121213", color: "#ffffff" }}>
        <GameHeader
          mode={mode}
          numBoards={1}
          speedrunEnabled={false}
          solutionsText=""
          maxTurns={6}
          stageElapsedMs={0}
          displayTotalMs={0}
          formatElapsed={formatElapsed}
          onBack={handleBack}
          onOpenFeedback={() => setShowFeedbackModal(true)}
        />
        <OneVOneWaitingRoom
          gameCode={gameCode || ""}
          gameState={gameState}
          isHost={isPlayerHost}
          onReady={handleOneVOneReady}
          onStartGame={handleOneVOneStart}
          friendRequestSent={friendRequestSent}
          onShareCode={handleShareCode}
          onAddFriend={(opponentName) => {
            const opponentId = isPlayerHost ? gameState.guestId : gameState.hostId;
            handleAddFriendRequest(opponentName, opponentId);
          }}
        />
      </div>
    );
  }

  // For 1v1 mode, if we're still loading game state or joining, show appropriate message
  if (isOneVOne) {
    // Show error if there's one
    if (oneVOneGame.error) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#121213",
            color: "#ffffff",
            flexDirection: "column",
            gap: "16px",
            padding: "20px"
          }}
        >
          <div style={{ color: "#f06272", textAlign: "center" }}>
            Error: {oneVOneGame.error}
          </div>
          <button
            onClick={() => navigate("/")}
            style={{
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontSize: 16,
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Go Home
          </button>
        </div>
      );
    }
    
    // Wait for gameState to load (either from hook's listener or after joining)
    if (isLoading || oneVOneGame.loading || (gameCode && !oneVOneGame.gameState)) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#121213",
            color: "#ffffff",
            flexDirection: "column",
            gap: "16px"
          }}
        >
          {!authUser ? (
            <>Loading authentication...</>
          ) : gameCode && !oneVOneGame.gameState ? (
            <>Connecting to game...</>
          ) : isLoading ? (
            <>Loading word lists...</>
          ) : (
            <>Loading game...</>
          )}
        </div>
      );
    }
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
        onOpenFeedback={() => setShowFeedbackModal(true)}
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

        {/* 1v1 Mode: Show player board and opponent board */}
        {isOneVOne && oneVOneGame.gameState && (oneVOneGame.gameState.status === 'playing' || oneVOneGame.gameState.status === 'finished') ? (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
            {/* Scores and turn indicator */}
            <div style={{ textAlign: "center", fontSize: 14, color: "#d7dadc", marginBottom: "8px" }}>
              {oneVOneGame.gameState.status === 'finished' ? (
                <div style={{ display: "flex", justifyContent: "center", gap: "24px", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>
                      {oneVOneGame.gameState.speedrun ? "Your Time" : "Your Score"}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>
                      {(() => {
                        const isSpeedrun = oneVOneGame.gameState.speedrun || false;
                        if (isSpeedrun) {
                          const myTimeMs = (authUser?.uid === oneVOneGame.gameState.hostId) 
                            ? (oneVOneGame.gameState.hostTimeMs || null) 
                            : (oneVOneGame.gameState.guestTimeMs || null);
                          return myTimeMs !== null ? formatElapsed(myTimeMs) : "N/A";
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
                      })()}
                    </div>
                  </div>
                  <div style={{ fontSize: 20, color: "#818384" }}>vs</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>
                      {oneVOneGame.gameState.speedrun ? "Opponent's Time" : "Opponent's Score"}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>
                      {(() => {
                        const isSpeedrun = oneVOneGame.gameState.speedrun || false;
                        if (isSpeedrun) {
                          const opponentTimeMs = (authUser?.uid === oneVOneGame.gameState.hostId) 
                            ? (oneVOneGame.gameState.guestTimeMs || null) 
                            : (oneVOneGame.gameState.hostTimeMs || null);
                          return opponentTimeMs !== null ? formatElapsed(opponentTimeMs) : "N/A";
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
                      })()}
                    </div>
                  </div>
                </div>
              ) : oneVOneGame.gameState.speedrun ? (
                <div style={{ display: "flex", justifyContent: "center", gap: "24px", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>Your Time</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>
                      {(() => {
                        const isSpeedrun = oneVOneGame.gameState.speedrun || false;
                        if (!isSpeedrun) return "N/A";
                        const myTimeMs = (authUser?.uid === oneVOneGame.gameState.hostId) 
                          ? (oneVOneGame.gameState.hostTimeMs || null) 
                          : (oneVOneGame.gameState.guestTimeMs || null);
                        if (myTimeMs !== null) {
                          return formatElapsed(myTimeMs);
                        }
                        // Show elapsed time if not yet solved
                        const myStartTime = (authUser?.uid === oneVOneGame.gameState.hostId) 
                          ? (oneVOneGame.gameState.hostStartTime || oneVOneGame.gameState.startedAt) 
                          : (oneVOneGame.gameState.guestStartTime || oneVOneGame.gameState.startedAt);
                        if (myStartTime) {
                          return formatElapsed(oneVOneNowMs - myStartTime);
                        }
                        return "0:00";
                      })()}
                    </div>
                  </div>
                  <div style={{ fontSize: 20, color: "#818384" }}>vs</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>Opponent's Time</div>
                    <div style={{ fontSize: 16, fontWeight: "bold", color: "#ffffff" }}>
                      {(() => {
                        const isSpeedrun = oneVOneGame.gameState.speedrun || false;
                        if (!isSpeedrun) return "N/A";
                        const opponentTimeMs = (authUser?.uid === oneVOneGame.gameState.hostId) 
                          ? (oneVOneGame.gameState.guestTimeMs || null) 
                          : (oneVOneGame.gameState.hostTimeMs || null);
                        if (opponentTimeMs !== null) {
                          return formatElapsed(opponentTimeMs);
                        }
                        // Show elapsed time if not yet solved
                        const opponentStartTime = (authUser?.uid === oneVOneGame.gameState.hostId) 
                          ? (oneVOneGame.gameState.guestStartTime || oneVOneGame.gameState.startedAt) 
                          : (oneVOneGame.gameState.hostStartTime || oneVOneGame.gameState.startedAt);
                        if (opponentStartTime) {
                          return formatElapsed(oneVOneNowMs - opponentStartTime);
                        }
                        return "0:00";
                      })()}
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: "#818384", marginTop: "8px", width: "100%", textAlign: "center" }}>
                    {oneVOneGame.gameState.currentTurn === (authUser?.uid === oneVOneGame.gameState.hostId ? 'host' : 'guest')
                      ? "Your turn"
                      : "Opponent's turn"}
                  </div>
                </div>
              ) : (
                oneVOneGame.gameState.currentTurn === (authUser?.uid === oneVOneGame.gameState.hostId ? 'host' : 'guest')
                  ? "Your turn"
                  : "Opponent's turn"
              )}
            </div>

            {/* Boards side by side */}
            <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
              {/* Add Friend Button */}
              {oneVOneGame.gameState && authUser && (
                <div style={{ width: "100%", textAlign: "center", marginBottom: "12px" }}>
                  <button
                    onClick={() => {
                      if (friendRequestSent) return;
                      const opponentName = authUser?.uid === oneVOneGame.gameState.hostId 
                        ? oneVOneGame.gameState.guestName 
                        : oneVOneGame.gameState.hostName;
                      const opponentId = authUser?.uid === oneVOneGame.gameState.hostId 
                        ? oneVOneGame.gameState.guestId 
                        : oneVOneGame.gameState.hostId;
                      if (opponentName && opponentId) {
                        handleAddFriendRequest(opponentName, opponentId);
                      }
                    }}
                    disabled={friendRequestSent}
                    style={{
                      padding: "8px 14px",
                      borderRadius: "8px",
                      border: "1px solid #3a3a3c",
                      background: "transparent",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: "bold",
                      cursor: friendRequestSent ? "not-allowed" : "pointer",
                      letterSpacing: "0.5px",
                      transition: "all 0.2s ease",
                      opacity: friendRequestSent ? 0.6 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!friendRequestSent) {
                        e.target.style.background = "rgba(255, 255, 255, 0.05)";
                        e.target.style.borderColor = "#565758";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!friendRequestSent) {
                        e.target.style.background = "transparent";
                        e.target.style.borderColor = "#3a3a3c";
                      }
                    }}
                  >
                    {friendRequestSent ? "Friend request sent" : `Add ${oneVOneGame.gameState.hostId === authUser?.uid ? oneVOneGame.gameState.guestName : oneVOneGame.gameState.hostName} as Friend`}
                  </button>
                </div>
              )}
              
              {/* Opponent Board */}
              {oneVOneGame.gameState && (
                <div style={{ flex: "0 0 auto", width: "auto" }}>
                  <div style={{ fontSize: 14, color: "#818384", marginBottom: "8px", textAlign: "center" }}>
                    Opponent's Board
                  </div>
                  <OpponentBoardView
                    opponentColors={authUser?.uid === oneVOneGame.gameState.hostId
                      ? (oneVOneGame.gameState.guestColors || [])
                      : (oneVOneGame.gameState.hostColors || [])}
                    opponentGuesses={authUser?.uid === oneVOneGame.gameState.hostId
                      ? (oneVOneGame.gameState.guestGuesses || [])
                      : (oneVOneGame.gameState.hostGuesses || [])}
                    solution={oneVOneGame.gameState.solution}
                    maxTurns={maxTurns}
                    playerSolved={boards.length > 0 && boards[0].isSolved}
                  />
                </div>
              )}
              
              {/* Player Board */}
              {boards.length > 0 && (
                <div style={{ flex: "0 0 auto", width: "auto" }}>
                  <div style={{ fontSize: 14, color: "#818384", marginBottom: "8px", textAlign: "center" }}>
                    Your Board
                  </div>
                  <GameBoard
                    board={boards[0]}
                    index={0}
                    numBoards={1}
                    maxTurns={maxTurns}
                    isUnlimited={false}
                    currentGuess={currentGuess}
                    invalidCurrentGuess={invalidCurrentGuess}
                    revealId={revealId}
                    isSelected={false}
                    onToggleSelect={() => {}}
                    boardRef={(el) => {
                      boardRefs.current[0] = el;
                    }}
                    speedrunEnabled={false}
                  />
                </div>
              )}
            </div>
          </div>
        ) : (
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
        )}
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

      {/* Rematch button on game page when game is finished */}
      {isOneVOne && oneVOneGame.gameState && oneVOneGame.gameState.status === 'finished' && (
        <div style={{ 
          position: "fixed", 
          bottom: KEYBOARD_HEIGHT + 20, 
          left: "50%", 
          transform: "translateX(-50%)", 
          zIndex: 1100,
          pointerEvents: "auto"
        }}>
          <button
            onClick={async () => {
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
            }}
            style={{
              padding: "12px 24px",
              borderRadius: 10,
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)"
            }}
          >
            Rematch
          </button>
        </div>
      )}

      <FeedbackModal
        isOpen={showFeedbackModal}
        onRequestClose={() => setShowFeedbackModal(false)}
      />
    </div>
  );
};

export default Game;
