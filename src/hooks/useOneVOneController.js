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

  // Derived friend-request state based on live gameState.
  const friendRequestSent = useMemo(() => {
    if (!isOneVOne || !oneVOneGame.gameState || !authUser) return false;
    const gs = oneVOneGame.gameState;
    const isPlayerHost = gs.hostId === authUser.uid;
    return isPlayerHost ? !!gs.hostFriendRequestSent : !!gs.guestFriendRequestSent;
  }, [isOneVOne, oneVOneGame.gameState, authUser]);

  // Track whether the LOCAL player has solved all of their boards in 1v1.
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

        // If host, create game
        if (isHost && !gameCode) {
          const code = await oneVOneGame.createGame({ speedrun: speedrunEnabled });
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
