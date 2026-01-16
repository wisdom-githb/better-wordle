import { useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, onValue, off, remove, update, get } from 'firebase/database';
import { database } from '../config/firebase';
import { auth } from '../config/firebase';

/**
 * Generate a random 6-digit game code
 */
function generateGameCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Hook for managing 1v1/multiplayer game state in Firebase Realtime Database.
 *
 * This has been extended to support "rooms" with N players via a `players` map
 * while keeping legacy host/guest fields in sync for the first two players so
 * existing data and code paths continue to function.
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
 *
 * `options.speedrun` (optional) can override the hook's default `speedrun` flag
 * so callers (e.g., friend challenges) can configure per-game mode.
 *
 * `options.maxPlayers` and `options.isPublic` configure the room. These are
 * stored on the game object so other clients can discover/join via an
 * "Open Rooms" list.
 */
const createGame = useCallback(async (options = {}) => {
    if (!user) throw new Error('User must be signed in to host a game');

    const effectiveSpeedrun = Object.prototype.hasOwnProperty.call(options, 'speedrun')
      ? !!options.speedrun
      : !!speedrun;

    const requestedMaxPlayers = Number.isFinite(options.maxPlayers)
      ? options.maxPlayers
      : 2;
    const clampedMaxPlayers = Math.max(2, Math.min(16, requestedMaxPlayers));
    const isPublic = options.isPublic !== false; // default public unless explicitly false

    const requestedBoards = Number.isFinite(options.numBoards)
      ? options.numBoards
      : 1;
    const clampedBoards = Math.max(1, Math.min(32, requestedBoards));

    const code = generateGameCode();
    const gamePath = `onevone/${code}`;

    const hostName = user.displayName || user.email || 'Player 1';
    const defaultRoomName = options.roomName || `${hostName}'s room`;

    const gameData = {
      hostId: user.uid,
      hostName,
      hostReady: false,
      guestId: null,
      guestName: null,
      guestReady: false,
      status: 'waiting', // waiting, playing, finished, cancelled
      currentTurn: null, // 'host' or 'guest' (used only for 2-player turn-based games)
      solution: null,
      solutions: null,
      hostGuesses: [],
      guestGuesses: [],
      hostColors: [], // Colors for each guess (for opponent to see)
      guestColors: [],
      winner: null, // 'host', 'guest', or null
      speedrun: effectiveSpeedrun, // Whether speedrun mode is enabled
      hostTimeMs: null, // Time taken by host (in speedrun mode)
      guestTimeMs: null, // Time taken by guest (in speedrun mode)
      hostStartTime: null, // When host started solving (in speedrun mode)
      guestStartTime: null, // When guest started solving (in speedrun mode)
      // Rematch handshake flags (for first two players)
      hostRematch: false,
      guestRematch: false,
      createdAt: Date.now(),
      startedAt: null,
      // Human-friendly, editable room name
      roomName: defaultRoomName,
      // Multiplayer room metadata
      maxPlayers: clampedMaxPlayers,
      isPublic,
      numBoards: clampedBoards,
      // Generic players map for N-player support. We keep legacy host/guest
      // fields above in sync for the first two players.
      players: {
        [user.uid]: {
          id: user.uid,
          name: hostName,
          isHost: true,
          ready: false,
          guesses: [],
          timeMs: null,
          startTime: null,
          rematch: false,
        },
      },
    };

    try {
      await set(ref(database, gamePath), gameData);
      return code;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user, speedrun]);

/**
   * Join an existing game/room.
   *
   * This now supports N players by using the `players` map and `maxPlayers`.
   * We continue to mirror the first non-host player into legacy `guestId`/
   * `guestName` for compatibility with older logic and data.
   */
  const joinGame = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in to join a game');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Check if game exists
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game code not found');
      }

      const gameData = snapshot.val();

      const players = gameData.players || {};
      const playerIds = Object.keys(players);
      const hostId = gameData.hostId || (playerIds.length > 0 ? playerIds[0] : null);
      const maxPlayers = Number.isFinite(gameData.maxPlayers) ? gameData.maxPlayers : 2;

      // If user is already part of the room, just continue.
      if (players[user.uid] || gameData.hostId === user.uid || gameData.guestId === user.uid) {
        return code;
      }

      // If game has started or is cancelled and user is not part of it, don't allow joining.
      if (gameData.status && gameData.status !== 'waiting') {
        throw new Error('Game has already started');
      }

      const currentCount = playerIds.length || ((gameData.hostId ? 1 : 0) + (gameData.guestId ? 1 : 0));
      if (currentCount >= maxPlayers) {
        throw new Error('Game is full');
      }

      const displayName = user.displayName || user.email || 'Player';
      const updatedPlayers = {
        ...players,
        [user.uid]: {
          id: user.uid,
          name: displayName,
          isHost: user.uid === hostId,
          ready: false,
          guesses: [],
          timeMs: null,
          startTime: null,
          rematch: false,
        },
      };

      const updateData = {
        players: updatedPlayers,
      };

      // For the first non-host player, also populate legacy guest fields if empty
      if (!gameData.guestId) {
        updateData.guestId = user.uid;
        updateData.guestName = displayName;
        updateData.guestReady = false;
      }

      await update(gameDataRef, updateData);

      return code;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

/**
   * Set ready status for the current user.
   *
   * Mirrors into the per-player entry and legacy host/guest ready flags.
   */
  const setReady = useCallback(async (code, ready = true) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || {};
      const isHost = gameData.hostId === user.uid;
      const isGuest = gameData.guestId === user.uid;

      const updatedPlayers = {
        ...players,
        [user.uid]: {
          id: user.uid,
          name: players[user.uid]?.name || user.displayName || user.email || 'Player',
          isHost: isHost || players[user.uid]?.isHost || false,
          ready,
          guesses: players[user.uid]?.guesses || [],
          timeMs: players[user.uid]?.timeMs ?? null,
          startTime: players[user.uid]?.startTime ?? null,
          rematch: players[user.uid]?.rematch || false,
        },
      };

      const updateData = {
        players: updatedPlayers,
      };

      if (isHost) {
        updateData.hostReady = ready;
      }
      if (isGuest) {
        updateData.guestReady = ready;
      }

      await update(gameDataRef, updateData);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

/**
   * Start the game with one or more solution words.
   * Also clears any previous round state (guesses, colors, winner, timers, rematch flags).
   * - `solutionsOrSolution` may be a single word (string) or an array of words.
   * - `options.speedrun` (optional) can override the `speedrun` flag stored on the game.
   */
  const startGame = useCallback(async (code, solutionsOrSolution, options = {}) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      if (!isHost) {
        throw new Error('Only host can start the game');
      }

      const players = gameData.players || {};
      const playerIds = Object.keys(players);

      // All players in the room must be ready before starting.
      const allReady = playerIds.length > 0 && playerIds.every((pid) => players[pid]?.ready);
      if (!allReady) {
        throw new Error('All players must be ready to start');
      }

      // Decide whether this round is speedrun or standard. Allow an explicit
      // override via `options.speedrun` so hosts can change modes between rounds.
      const hasOverrideSpeedrun = Object.prototype.hasOwnProperty.call(options, 'speedrun');
      const isSpeedrunRound = hasOverrideSpeedrun ? !!options.speedrun : !!gameData.speedrun;

      // For 2-player non-speedrun games we still randomise first turn. For
      // multi-player or speedrun we use no explicit turn (everyone can guess).
      const playerCount = playerIds.length || ((gameData.hostId ? 1 : 0) + (gameData.guestId ? 1 : 0));
      const useTurnBased = !isSpeedrunRound && playerCount <= 2;
      const firstTurn = useTurnBased ? (Math.random() < 0.5 ? 'host' : 'guest') : null;

      const now = Date.now();

      const solutionsArray = Array.isArray(solutionsOrSolution)
        ? solutionsOrSolution
        : [solutionsOrSolution];

      // Reset per-player round state.
      const resetPlayers = {};
      playerIds.forEach((pid) => {
        const prev = players[pid] || {};
        resetPlayers[pid] = {
          id: pid,
          name: prev.name || 'Player',
          isHost: prev.isHost || pid === gameData.hostId,
          ready: prev.ready || false,
          guesses: [],
          timeMs: null,
          startTime: isSpeedrunRound ? now : null,
          rematch: false,
        };
      });

      await update(gameDataRef, {
        status: 'playing',
        // Keep single `solution` field for backwards compatibility, but
        // also store full `solutions` array for multi-board support.
        solution: solutionsArray[0],
        solutions: solutionsArray,
        speedrun: isSpeedrunRound,
        currentTurn: useTurnBased ? firstTurn : null,
        startedAt: now,
        // Clear previous round state (legacy fields for first two players)
        hostGuesses: [],
        guestGuesses: [],
        hostColors: [],
        guestColors: [],
        winner: null,
        hostTimeMs: null,
        guestTimeMs: null,
        // Initialize start times for speedrun mode (timer starts when game starts)
        hostStartTime: isSpeedrunRound ? now : null,
        guestStartTime: isSpeedrunRound ? now : null,
        // Clear rematch flags once new round starts
        hostRematch: false,
        guestRematch: false,
        players: resetPlayers,
      });
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

/**
   * Submit a guess.
   *
   * For 2-player non-speedrun games, this enforces turn order using the
   * `currentTurn` field. For speedrun and/or multi-player rooms, all players
   * may submit guesses concurrently.
   */
  const submitGuess = useCallback(async (code, guess, colors) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || {};
      const playerIds = Object.keys(players);
      const playerCount = playerIds.length || ((gameData.hostId ? 1 : 0) + (gameData.guestId ? 1 : 0));

      const isHost = gameData.hostId === user.uid;
      const isGuest = gameData.guestId === user.uid;
      const isSpeedrun = gameData.speedrun || false;

      // Turn-based 1v1 has been removed; all players can guess concurrently.
      const isTurnBased = false;

      const now = Date.now();

      // Normalize to an array of solutions so we can correctly determine
      // when a player has finished *all* boards in multi-board speedrun.
      const solutionArray =
        Array.isArray(gameData.solutions) && gameData.solutions.length > 0
          ? gameData.solutions
          : gameData.solution
          ? [gameData.solution]
          : [];

      // Track updates for legacy host/guest fields and the generic players map.
      const updateData = {};

      // Update per-player guesses in the players map first.
      const prevPlayer = players[user.uid] || {
        id: user.uid,
        name: user.displayName || user.email || 'Player',
        isHost,
        ready: false,
        guesses: [],
        timeMs: null,
        startTime: null,
        rematch: false,
      };
      const newGuessesForPlayer = [...(prevPlayer.guesses || []), guess];
      const updatedPlayers = {
        ...players,
        [user.uid]: {
          ...prevPlayer,
          guesses: newGuessesForPlayer,
        },
      };

      // For legacy host/guest arrays we mirror from the first two players only.
      if (isHost) {
        const hostGuesses = [...(gameData.hostGuesses || []), guess];
        const hostColors = [...(gameData.hostColors || []), colors];
        updateData.hostGuesses = hostGuesses;
        updateData.hostColors = hostColors;
      } else if (isGuest) {
        const guestGuesses = [...(gameData.guestGuesses || []), guess];
        const guestColors = [...(gameData.guestColors || []), colors];
        updateData.guestGuesses = guestGuesses;
        updateData.guestColors = guestColors;
      }

      // Turn switching disabled now that 1v1 is non-turn-based.

      // Track time if finished in speedrun mode (or future non-turn-based modes).
      if (isSpeedrun && solutionArray.length > 0) {
        const solvedAll = solutionArray.every((sol) => newGuessesForPlayer.includes(sol));
        if (solvedAll && !prevPlayer.timeMs) {
          const startTime = prevPlayer.startTime || gameData.startedAt || now;
          const timeMs = now - startTime;
          updatedPlayers[user.uid] = {
            ...updatedPlayers[user.uid],
            timeMs,
          };

          if (isHost && !gameData.hostTimeMs) {
            updateData.hostTimeMs = timeMs;
          } else if (isGuest && !gameData.guestTimeMs) {
            updateData.guestTimeMs = timeMs;
          }
        }
      }

      updateData.players = updatedPlayers;

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
   * Update the room's display name.
   */
  const setRoomName = useCallback(async (code, roomName) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const trimmed = (roomName || '').toString().slice(0, 80).trim();
      await update(gameDataRef, {
        roomName: trimmed || null,
      });
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
    if (!code) return;

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
  }, [user]);

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
    setRoomName,
  };
}
