import { useState, useEffect, useCallback, useRef } from 'react';
import { ref, set, onValue, off, remove, update, get } from 'firebase/database';
import { database } from '../config/firebase';
import { auth } from '../config/firebase';
import { MULTIPLAYER_WAITING_TIMEOUT_MS, getSolutionArray } from '../lib/multiplayerConfig';

/**
 * Generate a random 6-digit game code
 */
function generateGameCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Multiplayer limits for 1v1 rooms generalized to N players.
const DEFAULT_MAX_PLAYERS = 2;
const ABSOLUTE_MAX_PLAYERS = 8;

/**
 * Hook for managing multiplayer game state in Firebase Realtime Database
 * (backed by the legacy `onevone` Firebase path for now).
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

    const gamePath = `onevone/${gameCode}`;
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
    const maxPlayers = Math.max(2, Math.min(ABSOLUTE_MAX_PLAYERS, rawMaxPlayers));
    const isPublic = Object.prototype.hasOwnProperty.call(options, 'isPublic')
      ? !!options.isPublic
      : true;

    // Boards configuration for this room (used for waiting-room display and first round).
    const rawBoards = Number.isFinite(options.boards)
      ? options.boards
      : 1;
    const configBoards = Math.max(1, Math.min(32, rawBoards));

    const code = generateGameCode();
    const gamePath = `onevone/${code}`;

    const hostName = user.displayName || user.email || 'Player 1';
    const now = Date.now();

    const gameData = {
      hostId: user.uid,
      hostName,
      hostReady: false,
      guestId: null,
      guestName: null,
      guestReady: false,
      status: 'waiting', // waiting, ready, playing, finished
      currentTurn: null, // 'host' or 'guest' (null for speedrun or >2 players)
      solution: null,
      // Legacy 2-player guesses (kept for backwards compatibility)
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
      createdAt: now,
      startedAt: null,
      // Multiplayer room settings
      maxPlayers,
      isPublic,
      configBoards,
      players: {
        [user.uid]: {
          id: user.uid,
          name: hostName,
          isHost: true,
          ready: false,
          joinedAt: now,
          guesses: [],
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

    const gamePath = `onevone/${code}`;
    const gameDataRef = ref(database, gamePath);

    try {
      // Check if game exists
      const snapshot = await get(gameDataRef);

      if (!snapshot.exists()) {
        throw new Error('Game code not found');
      }

      const gameData = snapshot.val();

      // If user is already part of the room (host/guest or in players map), allow them to continue.
      if (gameData.hostId === user.uid || gameData.guestId === user.uid) {
        return code;
      }
      if (gameData.players && gameData.players[user.uid]) {
        return code;
      }

      const status = gameData.status || 'waiting';
      const players = gameData.players || null;
      const rawMaxPlayers = Number.isFinite(gameData.maxPlayers)
        ? gameData.maxPlayers
        : DEFAULT_MAX_PLAYERS;
      const maxPlayers = Math.max(2, Math.min(ABSOLUTE_MAX_PLAYERS, rawMaxPlayers));
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

      const isMultiRoom = !!players && Object.keys(players).length > 2;

      // For classic 2-player 1v1, do not allow joining games that have already started.
      if (!isMultiRoom && status !== 'waiting') {
        throw new Error('Game has already started');
      }

      // New-style multiplayer room using players map.
      if (players) {
        const activeIds = Object.keys(players);
        if (activeIds.length >= maxPlayers) {
          throw new Error('Game is full');
        }

        const now = Date.now();
        const displayName = user.displayName || user.email || 'Player';

        const updateData = {
          players: {
            ...players,
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

        // For 2-player games, keep legacy guest fields in sync for backwards compatibility.
        if (!gameData.guestId) {
          updateData.guestId = user.uid;
          updateData.guestName = displayName;
          updateData.guestReady = false;
        }

        await update(gameDataRef, updateData);
        return code;
      }

      // Legacy 2-player game without players map.
      if (gameData.guestId && gameData.guestId !== user.uid) {
        throw new Error('Game is full');
      }

      await update(gameDataRef, {
        guestId: user.uid,
        guestName: user.displayName || user.email || 'Player 2',
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
      const players = gameData.players || null;
      const isHost = gameData.hostId === user.uid;

      const updateData = {};

      // Update per-player ready flag when using the players map.
      if (players && players[user.uid]) {
        updateData[`players/${user.uid}/ready`] = ready;
      }

      // Keep legacy 2-player ready fields in sync only when there is no players
      // map (true legacy games).
      if (!players) {
        if (isHost) {
          updateData.hostReady = ready;
        } else if (gameData.guestId === user.uid) {
          updateData.guestReady = ready;
        }
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

      const players = gameData.players || null;

      // If we have a players map, require all players to be ready.
      if (players) {
        const playerValues = Object.values(players);
        const allReady =
          playerValues.length > 0 &&
          playerValues.every((p) => (p && typeof p.ready === 'boolean' ? p.ready : false));
        if (!allReady) {
          throw new Error('All players must be ready to start');
        }
      } else {
        // Legacy 2-player ready check.
        if (!gameData.hostReady || !gameData.guestReady) {
          throw new Error('Both players must be ready to start');
        }
      }

      // Decide whether this round is speedrun or standard. Allow an explicit
      // override via `options.speedrun` so hosts can change modes between rounds.
      const hasOverrideSpeedrun = Object.prototype.hasOwnProperty.call(options, 'speedrun');
      const isSpeedrunRound = hasOverrideSpeedrun ? !!options.speedrun : !!gameData.speedrun;

      const now = Date.now();

      const solutionsArray = Array.isArray(solutionsOrSolution)
        ? solutionsOrSolution
        : [solutionsOrSolution];

      const playersMap = players || null;

      let updatedPlayers = playersMap || null;
      if (playersMap) {
        updatedPlayers = {};
        Object.keys(playersMap).forEach((pid) => {
          const p = playersMap[pid] || {};
          updatedPlayers[pid] = {
            ...p,
            guesses: [],
            timeMs: null,
            startTime: isSpeedrunRound ? now : null,
            // keep existing ready flag as-is so lobby state is preserved in history
          };
        });
      }

      const updatePayload = {
        status: 'playing',
        // Keep single `solution` field for backwards compatibility, but
        // also store full `solutions` array for multi-board support.
        solution: solutionsArray[0],
        solutions: solutionsArray,
        speedrun: isSpeedrunRound,
        // Multiplayer is now fully free-for-all: no turn order.
        currentTurn: null,
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
      const players = gameData.players || null;
      const playerCount = players
        ? Object.keys(players).length
        : (gameData.hostId ? 1 : 0) + (gameData.guestId ? 1 : 0);

      const isHost = gameData.hostId === user.uid;
      const isSpeedrun = gameData.speedrun || false;

      const now = Date.now();

      // Normalize to an array of solutions so we can correctly determine
      // when a player has finished *all* boards in multi-board speedrun.
      const solutionArray = getSolutionArray(gameData);

      const updateData = {};

      // Helper to compute speedrun completion and timeMs for a given list of guesses.
      const maybeSetSpeedrunTime = (
        currentGuesses,
        existingTimeMs,
        startTimeFieldPath,
        timeMsFieldPath,
      ) => {
        if (!isSpeedrun || existingTimeMs || solutionArray.length === 0) return;
        const solvedAll = solutionArray.every((sol) => currentGuesses.includes(sol));
        if (!solvedAll) return;
        const startTime =
          (startTimeFieldPath && gameData[startTimeFieldPath]) || gameData.startedAt || now;
        const elapsed = now - startTime;
        updateData[timeMsFieldPath] = elapsed;
      };

      // Update per-player guesses when using the players map.
      if (players && players[user.uid]) {
        const playerRecord = players[user.uid];
        const newGuesses = [...(playerRecord.guesses || []), guess];
        updateData[`players/${user.uid}/guesses`] = newGuesses;

        // Also keep legacy 2-player host/guest arrays in sync when there are
        // exactly 2 players, so existing UI continues to work.
        if (playerCount <= 2) {
          if (isHost) {
            const hostGuesses = [...(gameData.hostGuesses || []), guess];
            const hostColors = [...(gameData.hostColors || []), colors];
            updateData.hostGuesses = hostGuesses;
            updateData.hostColors = hostColors;
            maybeSetSpeedrunTime(
              hostGuesses,
              gameData.hostTimeMs,
              'hostStartTime',
              'hostTimeMs',
            );
          } else {
            const guestGuesses = [...(gameData.guestGuesses || []), guess];
            const guestColors = [...(gameData.guestColors || []), colors];
            updateData.guestGuesses = guestGuesses;
            updateData.guestColors = guestColors;
            maybeSetSpeedrunTime(
              guestGuesses,
              gameData.guestTimeMs,
              'guestStartTime',
              'guestTimeMs',
            );
          }
        } else {
          // Multi-player speedrun timing: track timeMs per player.
          if (isSpeedrun && solutionArray.length > 0 && !playerRecord.timeMs) {
            const solvedAll = solutionArray.every((sol) => newGuesses.includes(sol));
            if (solvedAll) {
              const startTime = playerRecord.startTime || gameData.startedAt || now;
              const elapsed = now - startTime;
              updateData[`players/${user.uid}/timeMs`] = elapsed;
            }
          }
        }
      } else {
        // Legacy 2-player game without players map.
        if (isHost) {
          const hostGuesses = [...(gameData.hostGuesses || []), guess];
          const hostColors = [...(gameData.hostColors || []), colors];

          updateData.hostGuesses = hostGuesses;
          updateData.hostColors = hostColors;

          maybeSetSpeedrunTime(
            hostGuesses,
            gameData.hostTimeMs,
            'hostStartTime',
            'hostTimeMs',
          );
        } else {
          const guestGuesses = [...(gameData.guestGuesses || []), guess];
          const guestColors = [...(gameData.guestColors || []), colors];

          updateData.guestGuesses = guestGuesses;
          updateData.guestColors = guestColors;

          maybeSetSpeedrunTime(
            guestGuesses,
            gameData.guestTimeMs,
            'guestStartTime',
            'guestTimeMs',
          );
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
   * Update friendRequestStatus for this multiplayer game (e.g. 'pending', 'declined').
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
          // Track who initiated the request so UIs can distinguish requester
          // vs recipient if needed.
          friendRequestFrom: user.uid,
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

    const gamePath = `onevone/${code}`;
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

          // Legacy guest handling.
          if (gameData.guestId === user.uid) {
            updatePayload.guestId = null;
            updatePayload.guestName = null;
            updatePayload.guestReady = false;
          }

          // Remove from players map for multiplayer rooms.
          if (players && players[user.uid]) {
            const updatedPlayers = { ...players };
            delete updatedPlayers[user.uid];
            updatePayload.players = updatedPlayers;
          }

          if (Object.keys(updatePayload).length > 0) {
            await update(gameDataRef, updatePayload);
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
    const gamePath = `onevone/${code}`;
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
        let rawBoards = parseInt(config.boards, 10);
        if (!Number.isFinite(rawBoards)) rawBoards = 1;
        rawBoards = Math.max(1, Math.min(32, rawBoards));
        updatePayload.configBoards = rawBoards;
      }

      if (Object.prototype.hasOwnProperty.call(config, 'speedrun')) {
        updatePayload.speedrun = !!config.speedrun;
      }

      if (Object.prototype.hasOwnProperty.call(config, 'maxPlayers')) {
        let rawMax = parseInt(config.maxPlayers, 10);
        if (!Number.isFinite(rawMax)) rawMax = DEFAULT_MAX_PLAYERS;
        rawMax = Math.max(2, Math.min(ABSOLUTE_MAX_PLAYERS, rawMax));
        if (rawMax < playerCount) {
          throw new Error('Max players cannot be less than current players in room');
        }
        updatePayload.maxPlayers = rawMax;
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
    setFriendRequestStatus,
    requestRematch,
    resetGame,
    leaveGame,
    expireGame,
    updateConfig,
  };
}

// Backwards-compatible alias for existing imports.
export const useOneVOneGame = useMultiplayerGame;
