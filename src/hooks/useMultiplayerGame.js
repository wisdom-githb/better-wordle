import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ref, set, onValue, off, remove, update, get, runTransaction } from 'firebase/database';
import { database } from '../config/firebase';
import { auth } from '../config/firebase';
import { MULTIPLAYER_WAITING_TIMEOUT_MS, getSolutionArray } from '../lib/multiplayerConfig';
import { clampBoards, clampPlayers, validateGameCode } from '../lib/validation';
import { MAX_BOARDS, ABSOLUTE_MAX_PLAYERS, DEFAULT_MAX_PLAYERS, SPEEDRUN_COUNTDOWN_MS } from '../lib/gameConstants';
import { logError } from '../lib/errorUtils';

/**
 * Generate a random 6-digit game code
 */
function generateGameCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Multiplayer limits for rooms generalized to N players.
// Constants are now imported from gameConstants.js

/**
 * Hook for managing multiplayer game state in Firebase Realtime Database
 */
export function useMultiplayerGame(gameCode = null, isHost = false, speedrun = false) {
  const [gameState, setGameState] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const gameRef = useRef(null);
  const user = auth.currentUser;

  // Cleanup listener on unmount
  useEffect(() => {
    return () => {
      // Listener cleanup is handled via the unsubscribe function returned from
      // onValue in the gameState subscription effect; we simply clear the ref.
      gameRef.current = null;
    };
  }, []);

  // Listen to game state changes
  useEffect(() => {
    if (!gameCode) return;

    const gamePath = `multiplayer/${gameCode}`;
    const dbRef = ref(database, gamePath);
    gameRef.current = dbRef;

    setLoading(true);
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        // In some test setups the snapshot may be undefined/null; treat this as
        // an empty/missing game.
        const data = snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;

        // If there is no game data at this code, surface a clear error so the UI
        // can show an error screen instead of an endless "Connecting to game...".
        if (data == null) {
          setGameState(null);
          setLoading(false);
          setError('Game not found or has expired.');
          return;
        }

        setGameState(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
    );

    return () => {
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      } else {
        off(dbRef);
      }
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

    const rawMaxPlayers = Number.isFinite(options.maxPlayers)
      ? options.maxPlayers
      : DEFAULT_MAX_PLAYERS;
    const maxPlayers = clampPlayers(rawMaxPlayers, DEFAULT_MAX_PLAYERS, ABSOLUTE_MAX_PLAYERS);
    const isPublic = Object.prototype.hasOwnProperty.call(options, 'isPublic')
      ? !!options.isPublic
      : true;

    // Boards configuration for this room (used for waiting-room display and first round).
    const rawBoards = Number.isFinite(options.boards)
      ? options.boards
      : 1;
    const configBoards = clampBoards(rawBoards);

    const code = generateGameCode();
    const gamePath = `multiplayer/${code}`;

    const hostName = user.displayName || user.email || 'Player 1';
    const now = Date.now();

    const gameData = {
      hostId: user.uid,
      hostName,
      status: 'waiting', // waiting, ready, playing, finished
      solution: null,
      solutions: [], // Array of solutions (one per board)
      winner: null, // Will be set to a uid when a player wins, or 'draw' for ties
      speedrun: effectiveSpeedrun, // Whether speedrun mode is enabled
      createdAt: now,
      startedAt: null,
      // Multiplayer room settings
      maxPlayers,
      isPublic,
      configBoards,
      // All game state now lives in the players map - no legacy host/guest duplication
      players: {
        [user.uid]: {
          id: user.uid,
          name: hostName,
          isHost: true,
          ready: false,
          joinedAt: now,
          guesses: [],
          colors: [], // Colors for each guess (for opponent to see)
          timeMs: null,
          startTime: null,
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

    // Validate game code format
    const codeValidation = validateGameCode(code);
    if (!codeValidation.isValid) {
      throw new Error(`Invalid game code: ${codeValidation.errors.join(', ')}`);
    }

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Check if game exists
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game code not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || null;

      // If user is already part of the room (in players map), allow them to continue.
      if (players && players[user.uid]) {
        return code;
      }
      
      // Backward compatibility: check if user is host (hostId is still needed for host checks)
      if (gameData.hostId === user.uid) {
        return code;
      }

      const status = gameData.status || 'waiting';
      const rawMaxPlayers = Number.isFinite(gameData.maxPlayers)
        ? gameData.maxPlayers
        : DEFAULT_MAX_PLAYERS;
      const maxPlayers = clampPlayers(rawMaxPlayers, DEFAULT_MAX_PLAYERS, ABSOLUTE_MAX_PLAYERS);
      const createdAt = typeof gameData.createdAt === 'number' ? gameData.createdAt : null;

      // Expire stale rooms (waiting or playing) after the total lifetime window.
      if (createdAt && Date.now() - createdAt > MULTIPLAYER_WAITING_TIMEOUT_MS) {
        try {
          await remove(gameDataRef);
        } catch (e) {
          // best-effort cleanup; ignore errors
        }
        throw new Error('Game code has expired');
      }

      // Use transaction to prevent race conditions when multiple players join simultaneously
      await runTransaction(gameDataRef, (currentData) => {
        if (!currentData) {
          throw new Error('Game not found');
        }

        const currentPlayers = currentData.players || null;
        const currentStatus = currentData.status || 'waiting';

        // Check if user is already in the game
        if (currentPlayers && currentPlayers[user.uid]) {
          return currentData; // Already joined, return current data
        }

        // Check if game is full
        if (currentPlayers) {
          const activeIds = Object.keys(currentPlayers);
          if (activeIds.length >= maxPlayers) {
            throw new Error('Game is full');
          }
        }

        // Check if game has started (for 2-player games)
        const isMultiRoom = currentPlayers && Object.keys(currentPlayers).length > 2;
        if (!isMultiRoom && currentStatus !== 'waiting') {
          throw new Error('Game has already started');
        }

        // Add player to game
        const now = Date.now();
        const displayName = user.displayName || user.email || 'Player';

        return {
          ...currentData,
          players: {
            ...(currentPlayers || {}),
            [user.uid]: {
              id: user.uid,
              name: displayName,
              isHost: false,
              ready: false,
              joinedAt: now,
              guesses: [],
              timeMs: null,
              startTime: null,
            },
          },
        };
      });

      return code;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

/**
   * Set ready status for the current user.
   *
   * Updates the per-player ready flag in the players map.
   */
  const setReady = useCallback(async (code, ready = true) => {
    if (!user) throw new Error('User must be signed in');

    // Validate game code
    const codeValidation = validateGameCode(code);
    if (!codeValidation.isValid) {
      throw new Error(`Invalid game code: ${codeValidation.errors.join(', ')}`);
    }

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Use transaction to prevent race conditions when multiple players click ready simultaneously
      await runTransaction(gameDataRef, (currentData) => {
        if (!currentData) {
          throw new Error('Game not found');
        }

        const players = currentData.players || null;

        // All games now use the players map for ready status.
        if (!players || !players[user.uid]) {
          throw new Error('Player not in game');
        }

        // Update ready status atomically
        return {
          ...currentData,
          players: {
            ...players,
            [user.uid]: {
              ...players[user.uid],
              ready,
            },
          },
        };
      });
    } catch (err) {
      const errorMessage = err.message || 'Failed to set ready status';
      setError(errorMessage);
      logError(err, 'useMultiplayerGame.setReady');
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

    // Validate game code
    const codeValidation = validateGameCode(code);
    if (!codeValidation.isValid) {
      throw new Error(`Invalid game code: ${codeValidation.errors.join(', ')}`);
    }

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Use transaction to prevent race conditions when host clicks start multiple times
      // or when multiple players become ready simultaneously
      await runTransaction(gameDataRef, (currentData) => {
        if (!currentData) {
          throw new Error('Game not found');
        }

        const isHost = currentData.hostId === user.uid;
        if (!isHost) {
          throw new Error('Only host can start the game');
        }

        const players = currentData.players || null;
        if (!players) {
          throw new Error('Invalid game state: no players map found');
        }

        // Check if all players are ready
        const playerValues = Object.values(players);
        const allReady =
          playerValues.length > 0 &&
          playerValues.every((p) => (p && typeof p.ready === 'boolean' ? p.ready : false));
        if (!allReady) {
          throw new Error('All players must be ready to start');
        }

        // Check if game is already started
        if (currentData.status === 'playing') {
          throw new Error('Game has already started');
        }

        // Decide whether this round is speedrun or standard. Allow an explicit
        // override via `options.speedrun` so hosts can change modes between rounds.
        const hasOverrideSpeedrun = Object.prototype.hasOwnProperty.call(options, 'speedrun');
        const isSpeedrunRound = hasOverrideSpeedrun ? !!options.speedrun : !!currentData.speedrun;

        const now = Date.now();

        const solutionsArray = Array.isArray(solutionsOrSolution)
          ? solutionsOrSolution
          : [solutionsOrSolution];

        // Update players map - clear guesses and reset timers
        const updatedPlayers = {};
        Object.keys(players).forEach((pid) => {
          const p = players[pid] || {};
          updatedPlayers[pid] = {
            ...p,
            guesses: [],
            timeMs: null,
            startTime: isSpeedrunRound ? now : null,
            rematch: false, // Clear rematch flags when starting new game
            // keep existing ready flag as-is so lobby state is preserved in history
          };
        });

        // Return updated game state
        return {
          ...currentData,
          status: 'playing',
          solution: solutionsArray[0],
          solutions: solutionsArray,
          speedrun: isSpeedrunRound,
          startedAt: now,
          winner: null,
          players: updatedPlayers,
          // Clear next game config when starting a new game
          nextGameConfig: null,
        };
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

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || null;
      
      if (!players) {
        throw new Error('Invalid game state: no players map found');
      }
      
      const playerCount = Object.keys(players).length;

      const isHost = gameData.hostId === user.uid;
      const isSpeedrun = gameData.speedrun || false;

      const now = Date.now();

      // Normalize to an array of solutions so we can correctly determine
      // when a player has finished *all* boards in multi-board speedrun.
      const solutionArray = getSolutionArray(gameData);

      const updateData = {};

      // Update per-player guesses when using the players map.
      if (players && players[user.uid]) {
        const playerRecord = players[user.uid];
        const newGuesses = [...(playerRecord.guesses || []), guess];
        updateData[`players/${user.uid}/guesses`] = newGuesses;
        updateData[`players/${user.uid}/colors`] = [...(playerRecord.colors || []), colors];

        // Multi-player speedrun timing: track timeMs per player.
        // Timer starts after 3-2-1 countdown, so use effectiveStart = startedAt + 3000.
        if (isSpeedrun && solutionArray.length > 0 && !playerRecord.timeMs) {
          const solvedAll = solutionArray.every((sol) => newGuesses.includes(sol));
          if (solvedAll) {
            const startedAt = gameData.startedAt;
            const effectiveStart = startedAt != null ? startedAt + SPEEDRUN_COUNTDOWN_MS : now;
            const elapsed = Math.max(0, now - effectiveStart);
            updateData[`players/${user.uid}/timeMs`] = elapsed;
          }
        }
      } else {
        // All games now use the players map.
        throw new Error('Invalid game state: no players map found');
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

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

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

    const gamePath = `multiplayer/${code}`;
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
   * Update friendRequestStatus for this multiplayer game (e.g. 'pending', 'declined').
   * We also track who initiated the request in `friendRequestFrom` so that only
   * that player sees their button disabled.
   */
  const setFriendRequestStatus = useCallback(async (code, status) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const isHost = gameData.hostId === user.uid;

      if (status === 'pending') {
        const updateData = {
          friendRequestStatus: 'pending',
          // Track who initiated the request so UIs can distinguish requester
          // vs recipient if needed.
          friendRequestFrom: user.uid,
        };
        // Set the appropriate flag based on whether the user is host or guest
        if (isHost) {
          updateData.hostFriendRequestSent = true;
          updateData.guestFriendRequestSent = false;
        } else {
          updateData.guestFriendRequestSent = true;
          updateData.hostFriendRequestSent = false;
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
        });
      }
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  /**
   * Player requests a rematch. Sets their rematch flag in the players map;
   * Game component is responsible for starting a new round when all players have rematch set.
   */
  const requestRematch = useCallback(async (code) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || null;

      // All games now use the players map
      if (!players || !players[user.uid]) {
        throw new Error('Player not in game');
      }
      
      await update(gameDataRef, {
        [`players/${user.uid}/rematch`]: true,
      });
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

    const gamePath = `multiplayer/${code}`;
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
   * Update the next game configuration (for rematch).
   * Only host can update this.
   */
  const setNextGameConfig = useCallback(async (code, config) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);
      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      if (gameData.hostId !== user.uid) {
        throw new Error('Only host can update game configuration');
      }

      const updateData = {};
      if (config === null) {
        // Clear the config
        updateData.nextGameConfig = null;
      } else {
        // Set the config
        updateData.nextGameConfig = {
          numBoards: Number.isFinite(config.numBoards) ? clampBoards(config.numBoards) : null,
          speedrun: typeof config.speedrun === 'boolean' ? config.speedrun : null,
        };
      }

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

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      const players = gameData.players || null;

      let updatedPlayers = players || null;
      if (players) {
        updatedPlayers = {};
        Object.keys(players).forEach((pid) => {
          const p = players[pid] || {};
          updatedPlayers[pid] = {
            ...p,
            ready: false,
            guesses: [],
            timeMs: null,
            startTime: null,
          };
        });
      }

      const updatePayload = {
        status: 'waiting',
        solution: null,
        solutions: [],
        currentTurn: null,
        winner: null,
        startedAt: null,
        rematchRequested: false,
        // Keep speedrun flag
      };

      if (updatedPlayers) {
        updatePayload.players = updatedPlayers;
      }

      await update(gameDataRef, updatePayload);
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

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      if (user) {
        const snapshot = await new Promise((resolve, reject) => {
          onValue(gameDataRef, resolve, reject, { onlyOnce: true });
        });

        if (snapshot.exists()) {
          const gameData = snapshot.val();
          const isHost = gameData.hostId === user.uid;
          const players = gameData.players || null;

          if (isHost) {
            // If the host leaves, delete the room entirely (current behavior).
            await remove(gameDataRef);
            return;
          }

          const updatePayload = {};

          // Remove from players map for multiplayer rooms.
          if (players && players[user.uid]) {
            const updatedPlayers = { ...players };
            delete updatedPlayers[user.uid];
            updatePayload.players = updatedPlayers;

            if (Object.keys(updatePayload).length > 0) {
              await update(gameDataRef, updatePayload);
            }
          }
        }
      }
    } catch (err) {
      setError(err.message);
    }
  }, [user]);

  /**
   * Hard-expire a room by deleting it entirely when its lifetime elapses.
   */
  const expireGame = useCallback(async (code) => {
    if (!code) return;
    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);
    try {
      await remove(gameDataRef);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  /**
   * Update room configuration while in the waiting room.
   * Only the host can call this, and only while status === 'waiting'.
   */
  const updateConfig = useCallback(async (code, config = {}) => {
    if (!user) throw new Error('User must be signed in');

    const gamePath = `multiplayer/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game not found');
      }

      const gameData = snapshot.val();
      if (gameData.hostId !== user.uid) {
        throw new Error('Only the host can update room settings');
      }
      if (gameData.status !== 'waiting') {
        throw new Error('Settings can only be changed before the game starts');
      }

      const players = gameData.players || null;
      const playerCount = players ? Object.keys(players).length : 1;

      const updatePayload = {};

      if (Object.prototype.hasOwnProperty.call(config, 'boards')) {
        const rawBoards = parseInt(config.boards, 10);
        updatePayload.configBoards = Number.isFinite(rawBoards) ? clampBoards(rawBoards) : 1;
      }

      if (Object.prototype.hasOwnProperty.call(config, 'speedrun')) {
        updatePayload.speedrun = !!config.speedrun;
      }

      if (Object.prototype.hasOwnProperty.call(config, 'maxPlayers')) {
        const rawMax = parseInt(config.maxPlayers, 10);
        if (!Number.isFinite(rawMax)) {
          throw new Error('Invalid maxPlayers value');
        }
        const clampedMax = clampPlayers(rawMax, DEFAULT_MAX_PLAYERS, ABSOLUTE_MAX_PLAYERS);
        if (clampedMax < playerCount) {
          throw new Error('Max players cannot be less than current players in room');
        }
        updatePayload.maxPlayers = clampedMax;
      }

      if (Object.prototype.hasOwnProperty.call(config, 'isPublic')) {
        updatePayload.isPublic = !!config.isPublic;
      }

      if (Object.keys(updatePayload).length === 0) {
        return;
      }

      await update(gameDataRef, updatePayload);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user]);

  return useMemo(() => ({
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
    setFriendRequestStatus,
    requestRematch,
    setRoomName,
    setNextGameConfig,
    resetGame,
    leaveGame,
    expireGame,
    updateConfig,
  }), [gameState, error, loading, createGame, joinGame, setReady, startGame, submitGuess, switchTurn, setWinner, setFriendRequestStatus, requestRematch, setRoomName, setNextGameConfig, resetGame, leaveGame, expireGame, updateConfig]);
}

