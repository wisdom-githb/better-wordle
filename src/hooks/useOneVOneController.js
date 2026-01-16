import { useCallback, useEffect, useMemo, useState } from 'react';
import { loadWordLists } from '../lib/wordLists';
import { getMaxTurns, scoreGuess } from '../lib/wordle';
import { SeededRandom } from '../lib/dailyWords';

/**
 * Central controller for 1v1 mode. Encapsulates:
 * - initialisation/joining/hosting of games
 * - syncing local multi-board state from Firebase gameState
 * - winner + auto-rematch logic
 * - popup-after-flip timing
 * - 1v1-specific handlers and friend-request helpers
 */
export function useOneVOneController({
  // Mode / routing
  isOneVOne,
  isHost,
  gameCode,
  speedrunEnabled,
  boardsParam,
  numBoards,
  // Room configuration passed from query params (optional)
  maxPlayersParam,
  publicParam,

  // Auth / user
  authUser,
  isVerifiedUser,

  // 1v1 game hook instance
  oneVOneGame,

  // Shared state & setters owned by Game.jsx
  boards,
  setBoards,
  maxTurns,
  setMaxTurns,
  allowedSet,
  setAllowedSet,
  setIsUnlimited,
  setIsLoading,
  setShowPopup,
  setCurrentGuess,
  setIsFlipping,
  revealId,
  isFlipping,

  // Navigation / messaging
  navigate,
  setTimedMessage,

  // 1v1-only refs from Game.jsx (used for winner/popup coordination)
  endingGameRef,
  popupClosedRef,
  shouldShowPopupAfterFlipRef,

  // Friend system helpers
  sendFriendRequest,
  cancelSentChallenge,

  // Game config limits
  maxOneVOneBoards,
}) {
  // Internal next-round configuration selected from the end-of-game UI.
  // When null, rematches reuse the previous board count & speedrun flag.
  const [oneVOneNextConfig, setOneVOneNextConfig] = useState(null);

  // Host-only 1v1 configuration modal state.
  const [isOneVOneConfigModalOpen, setIsOneVOneConfigModalOpen] = useState(false);
  const [oneVOneConfigBoardsDraft, setOneVOneConfigBoardsDraft] = useState(1);
  const [oneVOneConfigSpeedrunDraft, setOneVOneConfigSpeedrunDraft] = useState(false);

  // Helper: derive a stable players array from gameState (or fall back to host/guest).
  const getPlayersArray = (gs) => {
    if (!gs) return [];
    if (gs.players && typeof gs.players === 'object') {
      return Object.values(gs.players).map((p) => ({
        id: p.id,
        name: p.name,
        isHost: !!p.isHost,
        ready: !!p.ready,
        guesses: Array.isArray(p.guesses) ? p.guesses : [],
        timeMs: typeof p.timeMs === 'number' ? p.timeMs : null,
        rematch: !!p.rematch,
      }));
    }

    // Legacy fallback: synthesise players array from host/guest fields.
    const players = [];
    if (gs.hostId) {
      players.push({
        id: gs.hostId,
        name: gs.hostName || 'Player 1',
        isHost: true,
        ready: !!gs.hostReady,
        guesses: Array.isArray(gs.hostGuesses) ? gs.hostGuesses : [],
        timeMs: typeof gs.hostTimeMs === 'number' ? gs.hostTimeMs : null,
        rematch: !!gs.hostRematch,
      });
    }
    if (gs.guestId) {
      players.push({
        id: gs.guestId,
        name: gs.guestName || 'Player 2',
        isHost: false,
        ready: !!gs.guestReady,
        guesses: Array.isArray(gs.guestGuesses) ? gs.guestGuesses : [],
        timeMs: typeof gs.guestTimeMs === 'number' ? gs.guestTimeMs : null,
        rematch: !!gs.guestRematch,
      });
    }
    return players;
  };

  const getCurrentPlayerGuesses = (gs) => {
    if (!gs || !authUser) return [];
    if (gs.players && gs.players[authUser.uid] && Array.isArray(gs.players[authUser.uid].guesses)) {
      return gs.players[authUser.uid].guesses;
    }
    // Legacy fallback.
    if (gs.hostId === authUser.uid) return gs.hostGuesses || [];
    if (gs.guestId === authUser.uid) return gs.guestGuesses || [];
    return [];
  };

  const getOpponentGuesses = (gs) => {
    if (!gs || !authUser) return [];
    // For 2-player games, return the other player's guesses; for multi-player,
    // callers typically handle all opponents explicitly.
    if (gs.players && typeof gs.players === 'object') {
      const entries = Object.values(gs.players);
      if (entries.length === 2) {
        const other = entries.find((p) => p.id !== authUser.uid);
        return other && Array.isArray(other.guesses) ? other.guesses : [];
      }
    }
    const isHost = gs.hostId === authUser.uid;
    if (isHost) return gs.guestGuesses || [];
    if (gs.guestId === authUser.uid) return gs.hostGuesses || [];
    return [];
  };

  const getPlayerCount = (gs) => {
    if (!gs) return 0;
    if (gs.players && typeof gs.players === 'object') {
      return Object.keys(gs.players).length;
    }
    let count = 0;
    if (gs.hostId) count += 1;
    if (gs.guestId) count += 1;
    return count;
  };

  // Derived friend-request state based on live gameState.
  const friendRequestSent = useMemo(() => {
    if (!isOneVOne || !oneVOneGame.gameState || !authUser) return false;
    const gs = oneVOneGame.gameState;
    const isPlayerHost = gs.hostId === authUser.uid;
    return isPlayerHost ? !!gs.hostFriendRequestSent : !!gs.guestFriendRequestSent;
  }, [isOneVOne, oneVOneGame.gameState, authUser]);

  // Track whether the LOCAL player has solved all of their boards in 1v1 / multiplayer.
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

    const myGuesses = getCurrentPlayerGuesses(gs);

    return solutionArray.every((sol) => myGuesses.includes(sol));
  }, [isOneVOne, oneVOneGame.gameState, authUser]);

  // 1v1 mode initialization (host/join, load word lists, guard on verification).
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

        // If host, create game (room). Respect optional room config params.
        if (isHost && !gameCode) {
          let maxPlayersOpt = undefined;
          if (maxPlayersParam != null) {
            const parsed = parseInt(maxPlayersParam, 10);
            if (Number.isFinite(parsed)) {
              maxPlayersOpt = Math.max(2, Math.min(16, parsed));
            }
          }
          const isPublicOpt = publicParam == null ? undefined : publicParam === 'true';

          let boardsForRoom = 1;
          if (boardsParam != null) {
            const parsedBoards = parseInt(boardsParam, 10);
            if (Number.isFinite(parsedBoards)) {
              const upper = Number.isFinite(maxOneVOneBoards) ? maxOneVOneBoards : 32;
              boardsForRoom = Math.max(1, Math.min(upper, parsedBoards));
            }
          }

          const code = await oneVOneGame.createGame({
            speedrun: speedrunEnabled,
            maxPlayers: maxPlayersOpt,
            isPublic: isPublicOpt,
            numBoards: boardsForRoom,
          });
          const boardsQuery = boardsParam ? `&boards=${boardsParam}` : '';
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
        console.error('1v1 init error:', error);
        setTimedMessage(error.message || 'Failed to initialize 1v1 game', 5000);
        setIsLoading(false);
      }
    }

    initOneVOne();
  }, [
    isOneVOne,
    isHost,
    gameCode,
    authUser,
    isVerifiedUser,
    oneVOneGame,
    navigate,
    boardsParam,
    speedrunEnabled,
    maxPlayersParam,
    publicParam,
    maxPlayersParam,
    publicParam,
    maxOneVOneBoards,
    setAllowedSet,
    setIsLoading,
    setTimedMessage,
  ]);

  // Handle 1v1 game state changes and initialization of local multi-board state.
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
      } = gameState;
      const isPlayerHost = hostId === authUser.uid;
      const isSpeedrun = gameState.speedrun || false;

      const playersArr = getPlayersArray(gameState);

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

        // Update boards with the LOCAL player's guesses (one board per solution).
        const myGuesses = getCurrentPlayerGuesses(gameState);

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

      // Turn-based 1v1 has been removed; all players can guess concurrently,
      // so we no longer auto-switch turns.
      const isTwoPlayer = getPlayerCount(gameState) <= 2;
      const enableTurnBased = false;
      if (enableTurnBased && !gameState.speedrun && isTwoPlayer && status === 'playing' && solutionArray.length > 0 && authUser) {
        const currentTurn = gameState.currentTurn;
        const myGuesses = getCurrentPlayerGuesses(gameState);
        const opponentGuesses = getOpponentGuesses(gameState);

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

      // Check if all players are done (either solved or exhausted guesses).
      // Only end game when everyone is finished AND game is still playing.
      if (status === 'playing' && solutionArray.length > 0 && !endingGameRef.current) {
        const playersArrLocal = getPlayersArray(gameState);
        const isMultiPlayer = playersArrLocal.length > 2;

        // Helper to determine finished state for a player.
        const isFinished = (guesses) => {
          const solvedAll = solutionArray.every((sol) => guesses.includes(sol));
          return solvedAll || (!isSpeedrun && guesses.length >= maxTurns);
        };

        if (!isMultiPlayer) {
          const myGuesses = getCurrentPlayerGuesses(gameState);
          const opponentGuesses = getOpponentGuesses(gameState);

          const myFinished = isFinished(myGuesses);
          const opponentFinished = isFinished(opponentGuesses);

          if (myFinished && opponentFinished) {
            endingGameRef.current = true;

            // Determine winner (2-player rules, largely unchanged).
            let winner = null;
            const primarySolution = solutionArray[0];
            const mySolvedPrimary = myGuesses.includes(primarySolution);
            const opponentSolvedPrimary = opponentGuesses.includes(primarySolution);

            if (isSpeedrun) {
              const myTimeMs = isPlayerHost ? (gameState.hostTimeMs || null) : (gameState.guestTimeMs || null);
              const opponentTimeMs = isPlayerHost ? (gameState.guestTimeMs || null) : (gameState.hostTimeMs || null);

              if (mySolvedPrimary && !opponentSolvedPrimary) {
                winner = isPlayerHost ? 'host' : 'guest';
              } else if (opponentSolvedPrimary && !mySolvedPrimary) {
                winner = isPlayerHost ? 'guest' : 'host';
              } else if (mySolvedPrimary && opponentSolvedPrimary && myTimeMs !== null && opponentTimeMs !== null) {
                if (myTimeMs < opponentTimeMs) {
                  winner = isPlayerHost ? 'host' : 'guest';
                } else if (opponentTimeMs < myTimeMs) {
                  winner = isPlayerHost ? 'guest' : 'host';
                }
              }
            } else {
              if (mySolvedPrimary && !opponentSolvedPrimary) {
                winner = isPlayerHost ? 'host' : 'guest';
              } else if (opponentSolvedPrimary && !mySolvedPrimary) {
                winner = isPlayerHost ? 'guest' : 'host';
              } else if (mySolvedPrimary && opponentSolvedPrimary) {
                const mySolveIndex = myGuesses.indexOf(primarySolution);
                const opponentSolveIndex = opponentGuesses.indexOf(primarySolution);
                if (mySolveIndex < opponentSolveIndex) {
                  winner = isPlayerHost ? 'host' : 'guest';
                } else if (opponentSolveIndex < mySolveIndex) {
                  winner = isPlayerHost ? 'guest' : 'host';
                }
              }
            }

            await oneVOneGame.setWinner(gameCode || '', winner);
          }
        } else {
          // Multi-player winner logic: all players must be finished.
          const allFinished = playersArrLocal.length > 0 && playersArrLocal.every((p) => isFinished(p.guesses || []));
          if (!allFinished) return;

          endingGameRef.current = true;

          // Determine winner based on primary solution and either guesses or time.
          const primarySolution = solutionArray[0];

          let winnerPlayer = null;
          if (isSpeedrun) {
            // Among players who solved the primary solution, pick fastest time.
            const candidates = playersArrLocal.filter(
              (p) => Array.isArray(p.guesses) && p.guesses.includes(primarySolution) && typeof p.timeMs === 'number',
            );
            candidates.sort((a, b) => a.timeMs - b.timeMs);
            winnerPlayer = candidates[0] || null;
          } else {
            // Standard: fewest guesses to solve the primary solution.
            const candidates = playersArrLocal
              .map((p) => {
                const guesses = p.guesses || [];
                const idx = guesses.indexOf(primarySolution);
                return idx === -1 ? null : { player: p, solveIndex: idx };
              })
              .filter(Boolean);

            candidates.sort((a, b) => a.solveIndex - b.solveIndex);
            if (candidates.length > 0) {
              // Tie handling: if top two have same solve index, treat as tie.
              if (candidates.length === 1 || candidates[0].solveIndex < candidates[1].solveIndex) {
                winnerPlayer = candidates[0].player;
              } else {
                winnerPlayer = null;
              }
            }
          }

          // Map winnerPlayer.id back to 'host' / 'guest' when possible for legacy field.
          let winnerKey = null;
          if (winnerPlayer && gameState.hostId && winnerPlayer.id === gameState.hostId) {
            winnerKey = 'host';
          } else if (winnerPlayer && gameState.guestId && winnerPlayer.id === gameState.guestId) {
            winnerKey = 'guest';
          } else {
            // For >2 players without a clear host/guest mapping, we keep null,
            // which represents either a tie or a non-host/guest winner.
            winnerKey = null;
          }

          await oneVOneGame.setWinner(gameCode || '', winnerKey);
        }
      }
    }

    handleOneVOneGame();
  }, [
    isOneVOne,
    oneVOneGame.gameState,
    authUser,
    maxTurns,
    gameCode,
    oneVOneGame,
    boards,
    allowedSet,
    revealId,
    setBoards,
    setAllowedSet,
    setIsLoading,
    setIsUnlimited,
    setMaxTurns,
    endingGameRef,
    popupClosedRef,
    shouldShowPopupAfterFlipRef,
  ]);

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
            const upper = Number.isFinite(maxOneVOneBoards) ? maxOneVOneBoards : 32;
            const clampedBoards = Math.max(1, Math.min(upper, oneVOneNextConfig.numBoards));
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
        setCurrentGuess('');
        setShowPopup(false);
        shouldShowPopupAfterFlipRef.current = false;
        popupClosedRef.current = false;
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to auto-start 1v1 rematch:', err);
      }
    })();
  }, [
    isOneVOne,
    oneVOneGame.gameState,
    authUser,
    gameCode,
    oneVOneGame,
    oneVOneNextConfig,
    maxOneVOneBoards,
    setBoards,
    setCurrentGuess,
    setShowPopup,
    setIsLoading,
    shouldShowPopupAfterFlipRef,
    popupClosedRef,
  ]);

  // Handle showing popup after flip animation completes for 1v1.
  // Mirrors the original Game.jsx behavior, keyed off the flip animation flag
  // and current game status.
  useEffect(() => {
    const status = oneVOneGame.gameState && oneVOneGame.gameState.status;
    if (
      isOneVOne &&
      shouldShowPopupAfterFlipRef.current &&
      !isFlipping &&
      !popupClosedRef.current
    ) {
      // Ensure the flip is truly complete before showing popup
      setTimeout(() => {
        if (shouldShowPopupAfterFlipRef.current && !popupClosedRef.current) {
          setShowPopup(true);
          shouldShowPopupAfterFlipRef.current = false;
        }
      }, 50);
    }
  }, [
    isFlipping,
    isOneVOne,
    oneVOneGame.gameState && oneVOneGame.gameState.status,
    popupClosedRef,
    setShowPopup,
    shouldShowPopupAfterFlipRef,
  ]);

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
      setTimedMessage(error.message || 'Failed to set ready status', 5000);
    }
  }, [gameCode, oneVOneGame, authUser, isVerifiedUser, setTimedMessage]);

  const handleOneVOneStart = useCallback(async () => {
    if (!gameCode) return;
    if (!isVerifiedUser) {
      setTimedMessage('You must verify your email or sign in with Google to play 1v1.', 8000);
      return;
    }
    try {
      const { ANSWER_WORDS } = await loadWordLists();
      // For the initial 1v1 round, respect the boards count selected on the host
      // screen (boardsParam). Fall back to the current numBoards (derived from
      // existing boards/solutions) if no explicit boardsParam is present.
      let boardsForThisGame = 1;
      if (boardsParam != null) {
        const parsed = parseInt(boardsParam, 10);
        if (Number.isFinite(parsed)) {
          const upper = Number.isFinite(maxOneVOneBoards) ? maxOneVOneBoards : 32;
          boardsForThisGame = Math.max(1, Math.min(upper, parsed));
        }
      } else {
        boardsForThisGame = Math.max(1, numBoards || 1);
      }
      const seed = parseInt(gameCode, 10) + Date.now();
      const rng = new SeededRandom(seed);
      const solutions = Array.from({ length: boardsForThisGame }).map(() => {
        const index = Math.floor(rng.next() * ANSWER_WORDS.length);
        return ANSWER_WORDS[index];
      });

      await oneVOneGame.startGame(gameCode, solutions);
    } catch (error) {
      setTimedMessage(error.message || 'Failed to start game', 5000);
    }
  }, [gameCode, oneVOneGame, numBoards, isVerifiedUser, setTimedMessage]);

  const handleCancelHostedChallenge = useCallback(async () => {
    if (!gameCode) {
      navigate('/');
      return;
    }
    try {
      await cancelSentChallenge(gameCode);
    } catch (error) {
      setTimedMessage(error.message || 'Failed to cancel challenge', 5000);
    }
    navigate('/');
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
        : multiBoardCount);
    const defaultSpeedrun =
      (oneVOneNextConfig && typeof oneVOneNextConfig.speedrun === 'boolean')
        ? oneVOneNextConfig.speedrun
        : !!gs.speedrun;

    setOneVOneConfigBoardsDraft(defaultBoards);
    setOneVOneConfigSpeedrunDraft(defaultSpeedrun);
    setIsOneVOneConfigModalOpen(true);
  }, [
    isOneVOne,
    oneVOneGame.gameState,
    authUser,
    oneVOneNextConfig,
    boards,
  ]);

  const applyOneVOneConfig = useCallback(() => {
    const upper = Number.isFinite(maxOneVOneBoards) ? maxOneVOneBoards : 32;
    const clampedBoards = Math.max(1, Math.min(upper, oneVOneConfigBoardsDraft));
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
  }, [
    maxOneVOneBoards,
    oneVOneConfigBoardsDraft,
    oneVOneConfigSpeedrunDraft,
    setTimedMessage,
  ]);

  return {
    friendRequestSent,
    hasPlayerSolvedAllOneVOneBoards,
    isOneVOneConfigModalOpen,
    oneVOneConfigBoardsDraft,
    oneVOneConfigSpeedrunDraft,
    setIsOneVOneConfigModalOpen,
    setOneVOneConfigBoardsDraft,
    setOneVOneConfigSpeedrunDraft,
    handleOneVOneReady,
    handleOneVOneStart,
    handleCancelHostedChallenge,
    handleAddFriendRequest,
    openOneVOneConfigFromEnd,
    applyOneVOneConfig,
  };
}
