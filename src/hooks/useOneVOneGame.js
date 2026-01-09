import { useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, onValue, off, remove, update } from 'firebase/database';
import { database } from '../config/firebase';
import { auth } from '../config/firebase';

/**
 * Generate a random 6-digit game code
 */
function generateGameCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Hook for managing 1v1 game state in Firebase Realtime Database
 */
export function useOneVOneGame(gameCode = null, isHost = false, speedrun = false) {
  const [gameState, setGameState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const gameRef = useRef(null);
  const user = auth.currentUser;

  // Cleanup listener on unmount
  useEffect(() => {
    return () => {
      if (gameRef.current) {
        off(gameRef.current);
        gameRef.current = null;
      }
    };
  }, []);

  // Listen to game state changes
  useEffect(() => {
    if (!gameCode) return;

    const gamePath = `onevone/${gameCode}`;
    const dbRef = ref(database, gamePath);
    gameRef.current = dbRef;

    setLoading(true);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setGameState(data);
      setLoading(false);
      setError(null);
    }, (err) => {
      setError(err.message);
      setLoading(false);
    });

    return () => {
      off(dbRef);
    };
  }, [gameCode]);

  /**
   * Create a new game (host)
   */
  const createGame = useCallback(async () => {
    if (!user) throw new Error('User must be signed in to host a game');

    const code = generateGameCode();
    const gamePath = `onevone/${code}`;
    const gameData = {
      hostId: user.uid,
      hostName: user.displayName || user.email || 'Player 1',
      hostReady: false,
      guestId: null,
      guestName: null,
      guestReady: false,
      status: 'waiting', // waiting, ready, playing, finished
      currentTurn: null, // 'host' or 'guest'
      solution: null,
      hostGuesses: [],
      guestGuesses: [],
      hostColors: [], // Colors for each guess (for opponent to see)
      guestColors: [],
      winner: null, // 'host', 'guest', or null
      speedrun: speedrun, // Whether speedrun mode is enabled
      hostTimeMs: null, // Time taken by host (in speedrun mode)
      guestTimeMs: null, // Time taken by guest (in speedrun mode)
      hostStartTime: null, // When host started solving (in speedrun mode)
      guestStartTime: null, // When guest started solving (in speedrun mode)
      // Rematch handshake flags
      hostRematch: false,
      guestRematch: false,
      createdAt: Date.now(),
      startedAt: null
    };

    try {
      await set(ref(database, gamePath), gameData);
      return code;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Join an existing game
   */
  const joinGame = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in to join a game');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Check if game exists
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game code not found');
      }

      const gameData = snapshot.val();
      
      // If user is already the host or guest, allow them to continue (game might have started)
      if (gameData.hostId === user.uid) {
        // User is already the host, no need to join
        return code;
      }

      if (gameData.guestId === user.uid) {
        // User is already the guest, no need to join again
        return code;
      }

      // If game has started and user is not part of it, don't allow joining
      if (gameData.status !== 'waiting') {
        throw new Error('Game has already started');
      }

      if (gameData.guestId && gameData.guestId !== user.uid) {
        throw new Error('Game is full');
      }

      // Join as guest (only if game is still waiting and guest slot is empty)
      await update(gameDataRef, {
        guestId: user.uid,
        guestName: user.displayName || user.email || 'Player 2'
      });

      return code;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Set ready status
   */
  const setReady = useCallback(async (code, ready = true) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      if (isHost) {
        await update(gameDataRef, { hostReady: ready });
      } else {
        await update(gameDataRef, { guestReady: ready });
      }

      // If both players are ready, start the game
      if (ready && gameData.hostReady && gameData.guestReady) {
        // This will be handled separately to set solution
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Start the game with one or more solution words.
   * Also clears any previous round state (guesses, colors, winner, timers, rematch flags).
   * - `solutionsOrSolution` may be a single word (string) or an array of words.
   */
  const startGame = useCallback(async (code, solutionsOrSolution) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      if (!isHost) {
        throw new Error('Only host can start the game');
      }

      // Check both players are ready
      if (!gameData.hostReady || !gameData.guestReady) {
        throw new Error('Both players must be ready to start');
      }
      
      // Randomly decide who goes first
      const firstTurn = Math.random() < 0.5 ? 'host' : 'guest';
      const now = Date.now();

      const solutionsArray = Array.isArray(solutionsOrSolution)
        ? solutionsOrSolution
        : [solutionsOrSolution];

      await update(gameDataRef, {
        status: 'playing',
        // Keep single `solution` field for backwards compatibility, but
        // also store full `solutions` array for multi-board support.
        solution: solutionsArray[0],
        solutions: solutionsArray,
        currentTurn: gameData.speedrun ? null : firstTurn,
        startedAt: now,
        // Clear previous round state
        hostGuesses: [],
        guestGuesses: [],
        hostColors: [],
        guestColors: [],
        winner: null,
        hostTimeMs: null,
        guestTimeMs: null,
        // Initialize start times for speedrun mode (timer starts when game starts)
        hostStartTime: gameData.speedrun ? now : null,
        guestStartTime: gameData.speedrun ? now : null,
        // Clear rematch flags once new round starts
        hostRematch: false,
        guestRematch: false,
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Submit a guess
   */
  const submitGuess = useCallback(async (code, guess, colors) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      const isSpeedrun = gameData.speedrun || false;
      if (!isSpeedrun) {
        const isMyTurn = gameData.currentTurn === (isHost ? 'host' : 'guest');
        if (!isMyTurn) {
          throw new Error('Not your turn');
        }
      }

      const now = Date.now();

      // Normalize to an array of solutions so we can correctly determine
      // when a player has finished *all* boards in multi-board speedrun.
      const solutionArray =
        Array.isArray(gameData.solutions) && gameData.solutions.length > 0
          ? gameData.solutions
          : gameData.solution
          ? [gameData.solution]
          : [];

      // Track time if finished in speedrun mode
      const updateData = {};
      
      if (isHost) {
        const hostGuesses = [...(gameData.hostGuesses || []), guess];
        const hostColors = [...(gameData.hostColors || []), colors];
        
        updateData.hostGuesses = hostGuesses;
        updateData.hostColors = hostColors;
        if (!isSpeedrun) {
          updateData.currentTurn = 'guest';
        }
        
        if (isSpeedrun && !gameData.hostTimeMs && solutionArray.length > 0) {
          const hostSolvedAll = solutionArray.every((sol) => hostGuesses.includes(sol));
          if (hostSolvedAll) {
            const startTime = gameData.hostStartTime || gameData.startedAt || now;
            updateData.hostTimeMs = now - startTime;
          }
        }
      } else {
        const guestGuesses = [...(gameData.guestGuesses || []), guess];
        const guestColors = [...(gameData.guestColors || []), colors];
        
        updateData.guestGuesses = guestGuesses;
        updateData.guestColors = guestColors;
        if (!isSpeedrun) {
          updateData.currentTurn = 'host';
        }
        
        if (isSpeedrun && !gameData.guestTimeMs && solutionArray.length > 0) {
          const guestSolvedAll = solutionArray.every((sol) => guestGuesses.includes(sol));
          if (guestSolvedAll) {
            const startTime = gameData.guestStartTime || gameData.startedAt || now;
            updateData.guestTimeMs = now - startTime;
          }
        }
      }
      
      await update(gameDataRef, updateData);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Switch turn without adding a guess (for when a player has finished)
   */
  const switchTurn = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      if (gameData.speedrun) {
        // No turn switching in speedrun mode.
        return;
      }
      const isHost = gameData.hostId === user.uid;
      const isMyTurn = gameData.currentTurn === (isHost ? 'host' : 'guest');

      if (!isMyTurn) {
        throw new Error('Not your turn');
      }

      // Just switch the turn without adding a guess
      if (isHost) {
        await update(gameDataRef, {
          currentTurn: 'guest'
        });
      } else {
        await update(gameDataRef, {
          currentTurn: 'host'
        });
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Set game winner
   */
  const setWinner = useCallback(async (code, winner) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      await update(gameDataRef, {
        status: 'finished',
        winner: winner
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

/**
   * Update friendRequestStatus for this 1v1 game (e.g. 'pending', 'declined').
   * We also track who initiated the request in `friendRequestFrom` so that only
   * that player sees their button disabled.
   */
  const setFriendRequestStatus = useCallback(async (code, status) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      if (status === 'pending') {
        const updateData = {
          friendRequestStatus: 'pending',
        };
        if (isHost) {
          updateData.hostFriendRequestSent = true;
        } else {
          updateData.guestFriendRequestSent = true;
        }
        await update(gameDataRef, updateData);
      } else if (status === 'declined') {
        await update(gameDataRef, {
          friendRequestStatus: null,
          friendRequestFrom: null,
          hostFriendRequestSent: false,
          guestFriendRequestSent: false,
        });
      } else {
        // Fallback / explicit clear.
        await update(gameDataRef, {
          friendRequestStatus: null,
          friendRequestFrom: null,
          hostFriendRequestSent: false,
          guestFriendRequestSent: false,
        });
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Player requests a rematch. Sets their rematch flag; Game component
   * is responsible for starting a new round when both flags are true.
   */
  const requestRematch = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      const updateData = isHost ? { hostRematch: true } : { guestRematch: true };
      await update(gameDataRef, updateData);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Reset game back to waiting state (used if players abandon or restart lobby).
   * NOTE: Normal rematch flow should prefer rematch flags + startGame instead of this.
   */
  const resetGame = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await new Promise((resolve, reject) => {
        onValue(gameDataRef, resolve, reject, { onlyOnce: true });
      });

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      
      // Reset game state but keep players, game code, speedrun flag, and clear rematch flags
      await update(gameDataRef, {
        status: 'waiting',
        hostReady: false,
        guestReady: false,
        solution: null,
        hostGuesses: [],
        guestGuesses: [],
        hostColors: [],
        guestColors: [],
        currentTurn: null,
        winner: null,
        startedAt: null,
        hostTimeMs: null,
        guestTimeMs: null,
        hostStartTime: null,
        guestStartTime: null,
        hostRematch: false,
        guestRematch: false,
        // Keep speedrun flag
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Leave/delete game
   */
  const leaveGame = useCallback(async (code) => {
    if (!gameCode) return;

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // If user is host, delete the game
      // If user is guest, just remove guest info
      if (user) {
        const snapshot = await new Promise((resolve, reject) => {
          onValue(gameDataRef, resolve, reject, { onlyOnce: true });
        });

        if (snapshot.exists()) {
          const gameData = snapshot.val();
          if (gameData.hostId === user.uid) {
            await remove(gameDataRef);
          } else if (gameData.guestId === user.uid) {
            await update(gameDataRef, {
              guestId: null,
              guestName: null,
              guestReady: false
            });
          }
        }
      }
    } catch (err) {
      setError(err.message);
    }
  }, [user, gameCode]);

  return {
    gameState,
    error,
    loading,
    createGame,
    joinGame,
    setReady,
    startGame,
    submitGuess,
    switchTurn,
    setWinner,
    requestRematch,
    resetGame,
    leaveGame,
    setFriendRequestStatus,
  };
}
