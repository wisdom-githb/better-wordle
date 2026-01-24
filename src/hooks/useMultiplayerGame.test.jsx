import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, act, cleanup, waitFor } from '@testing-library/react';

// In-memory Firebase Realtime Database mock
vi.mock('firebase/database', () => {
  const dbData = {};
  const listeners = new Map(); // path -> Set<callback>

  const makeSnapshot = (path) => ({
    val: () => dbData[path] ?? null,
    exists: () => dbData[path] != null,
  });

  const trigger = (path) => {
    const subs = listeners.get(path);
    if (!subs) return;
    const snap = makeSnapshot(path);
    for (const cb of subs) cb(snap);
  };

  const ref = (_db, path) => ({ path });

  const set = async (refObj, value) => {
    dbData[refObj.path] = { ...(value || {}) };
    trigger(refObj.path);
  };

  const update = async (refObj, patch) => {
    if (!dbData[refObj.path]) dbData[refObj.path] = {};
    // Handle nested paths like "players/host-1/rematch"
    const applyNestedUpdate = (obj, path, value) => {
      const parts = path.split('/');
      let current = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!current[parts[i]] || typeof current[parts[i]] !== 'object') {
          current[parts[i]] = {};
        }
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = value;
    };
    if (patch) {
      Object.keys(patch).forEach((key) => {
        if (key.includes('/')) {
          applyNestedUpdate(dbData[refObj.path], key, patch[key]);
        } else {
          dbData[refObj.path][key] = patch[key];
        }
      });
    }
    trigger(refObj.path);
  };

  const remove = async (refObj) => {
    delete dbData[refObj.path];
    trigger(refObj.path);
  };

  const onValue = (refObj, callback, errorCallback, options) => {
    // one-shot reads (join/start/submit/etc.)
    if (options && options.onlyOnce) {
      try {
        const snap = makeSnapshot(refObj.path);
        callback(snap);
      } catch (err) {
        if (errorCallback) errorCallback(err);
      }
      return () => {};
    }

    // subscription used by the hook to keep gameState in sync
    let subs = listeners.get(refObj.path);
    if (!subs) {
      subs = new Set();
      listeners.set(refObj.path, subs);
    }
    subs.add(callback);

    // immediately emit current value
    callback(makeSnapshot(refObj.path));

    return callback;
  };

  const off = (refObj) => {
    if (!refObj) return;
    listeners.delete(refObj.path);
  };

  const get = async (refObj) => makeSnapshot(refObj.path);

  return { ref, set, update, remove, onValue, off, get, __dbData: dbData };
});

// Auth/database config mock so the hook can read currentUser
vi.mock('../config/firebase', () => {
  const auth = { currentUser: null };
  const database = {}; // value is unused by our firebase/database mock
  return { auth, database };
});

import { __dbData } from 'firebase/database';
import { auth } from '../config/firebase';
import { useMultiplayerGame } from './useMultiplayerGame';

let hookResult;

function HookWrapper({ gameCode = null, isHost = false, speedrun = false }) {
  hookResult = useMultiplayerGame(gameCode, isHost, speedrun);
  return null;
}

beforeEach(() => {
  // reset in-memory DB between tests
  Object.keys(__dbData).forEach((k) => {
    delete __dbData[k];
  });
  auth.currentUser = null;
  cleanup();
});

describe('useMultiplayerGame – DB operations', () => {
  it('createGame writes host game and returns a 6-digit code', async () => {
    auth.currentUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    render(<HookWrapper gameCode={null} isHost={true} speedrun={false} />);

    let code;
    await act(async () => {
      code = await hookResult.createGame();
    });

    expect(code).toHaveLength(6);
    const stored = __dbData[`multiplayer/${code}`];
    expect(stored).toBeTruthy();
    expect(stored).toMatchObject({
      hostId: 'host-1',
      hostName: 'Host Player',
      status: 'waiting',
      speedrun: false,
      maxPlayers: 2,
      isPublic: true,
      players: {
        'host-1': expect.objectContaining({ id: 'host-1', name: 'Host Player', isHost: true, ready: false }),
      },
    });
  });

  it('joinGame attaches a guest to an existing waiting game', async () => {
    __dbData['multiplayer/123456'] = {
      hostId: 'host-1',
      hostName: 'Host',
      status: 'waiting',
      speedrun: false,
      maxPlayers: 2,
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, ready: false },
      },
    };

    auth.currentUser = {
      uid: 'guest-1',
      displayName: 'Guest Player',
      email: 'guest@example.com',
    };

    render(<HookWrapper />);

    await act(async () => {
      const returned = await hookResult.joinGame('123456');
      expect(returned).toBe('123456');
    });

    // joinGame now only adds to players map, not legacy guestId/guestName
    expect(__dbData['multiplayer/123456'].players['guest-1']).toMatchObject({
      id: 'guest-1',
      name: 'Guest Player',
      isHost: false,
    });
  });

  it('startGame (standard) sets status, solution(s) and clears round fields', async () => {
    __dbData['multiplayer/ABC123'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      hostReady: true,
      guestReady: true,
      status: 'waiting',
      speedrun: false,
      winner: 'host',
      hostRematch: true,
      guestRematch: true,
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, ready: true, guesses: ['OLD'] },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, ready: true, guesses: ['OLD'] },
      },
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await hookResult.startGame('ABC123', 'apple');
    });

    const stored = __dbData['multiplayer/ABC123'];
    expect(stored.status).toBe('playing');
    expect(stored.solution).toBe('apple');
    expect(stored.solutions).toEqual(['apple']);
    expect(stored.speedrun).toBe(false);
    expect(stored.winner).toBeNull();
    expect(stored.hostRematch).toBe(false);
    expect(stored.guestRematch).toBe(false);
    // Players map guesses should be cleared
    expect(stored.players['host-1'].guesses).toEqual([]);
    expect(stored.players['guest-1'].guesses).toEqual([]);
    expect(stored.players['host-1'].rematch).toBe(false);
    expect(stored.players['guest-1'].rematch).toBe(false);
  });

  it('startGame respects explicit speedrun override and nulls currentTurn', async () => {
    __dbData['multiplayer/SPRUN1'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      hostReady: true,
      guestReady: true,
      status: 'waiting',
      speedrun: false,
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, ready: true, guesses: [] },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, ready: true, guesses: [] },
      },
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await hookResult.startGame('SPRUN1', ['apple', 'other'], { speedrun: true });
    });

    const stored = __dbData['multiplayer/SPRUN1'];
    expect(stored.speedrun).toBe(true);
    expect(stored.currentTurn).toBeUndefined();
    expect(stored.solutions).toEqual(['apple', 'other']);
    expect(stored.players['host-1'].startTime).not.toBeNull();
    expect(stored.players['guest-1'].startTime).not.toBeNull();
  });

  it('submitGuess (standard) appends host guesses/colors without enforcing turn order', async () => {
    __dbData['multiplayer/CODE1'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      status: 'playing',
      speedrun: false,
      currentTurn: 'host',
      solution: 'APPLE',
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, guesses: [], colors: [] },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, guesses: [], colors: [] },
      },
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await hookResult.submitGuess('CODE1', 'OTHER', [0, 0, 0, 0, 0]);
    });

    const stored = __dbData['multiplayer/CODE1'];
    expect(stored.players['host-1'].guesses).toEqual(['OTHER']);
    expect(stored.players['host-1'].colors).toEqual([[0, 0, 0, 0, 0]]);
    // In non-turn-based mode, submitGuess no longer mutates currentTurn.
    expect(stored.currentTurn).toBe('host');
  });

  it('submitGuess (speedrun) sets per-player time only after all solutions solved', async () => {
    vi.useFakeTimers();

    __dbData['multiplayer/SPRUN2'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      status: 'playing',
      speedrun: true,
      currentTurn: null,
      solutions: ['APPLE', 'OTHER'],
      startedAt: 1_000,
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, guesses: [], colors: [], startTime: 1_000, timeMs: null },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, guesses: [], colors: [], startTime: 1_000, timeMs: null },
      },
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    // First correct word – should not yet mark time because not all boards solved
    vi.setSystemTime(10_000);
    await act(async () => {
      await hookResult.submitGuess('SPRUN2', 'APPLE', [2, 2, 2, 2, 2]);
    });
    expect(__dbData['multiplayer/SPRUN2'].players['host-1'].timeMs).toBeNull();

    // Second correct word – now all boards solved, hostTimeMs should be set
    vi.setSystemTime(20_000);
    await act(async () => {
      await hookResult.submitGuess('SPRUN2', 'OTHER', [2, 2, 2, 2, 2]);
    });

    const stored = __dbData['multiplayer/SPRUN2'];
    expect(stored.players['host-1'].guesses).toEqual(['APPLE', 'OTHER']);
    expect(stored.players['host-1'].timeMs).toBe(19_000); // now - startTime
  });

  it('switchTurn toggles between host and guest in non-speedrun mode', async () => {
    __dbData['multiplayer/SWITCH'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      status: 'playing',
      speedrun: false,
      currentTurn: 'host',
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await hookResult.switchTurn('SWITCH');
    });
    expect(__dbData['multiplayer/SWITCH'].currentTurn).toBe('guest');
  });

  it('setWinner marks winner and finished status', async () => {
    __dbData['multiplayer/RESULT'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      status: 'playing',
      winner: null,
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await hookResult.setWinner('RESULT', 'host');
    });

    expect(__dbData['multiplayer/RESULT']).toMatchObject({
      status: 'finished',
      winner: 'host',
    });
  });

  it('requestRematch sets player rematch flag in players map', async () => {
    __dbData['multiplayer/REM1'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, rematch: false },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, rematch: false },
      },
    };

    // Host sets rematch flag in players map
    auth.currentUser = { uid: 'host-1', displayName: 'Host' };
    render(<HookWrapper />);
    await act(async () => {
      await hookResult.requestRematch('REM1');
    });
    expect(__dbData['multiplayer/REM1'].players['host-1'].rematch).toBe(true);

    cleanup();

    // Guest sets rematch flag in players map
    auth.currentUser = { uid: 'guest-1', displayName: 'Guest' };
    render(<HookWrapper />);
    await act(async () => {
      await hookResult.requestRematch('REM1');
    });
    expect(__dbData['multiplayer/REM1'].players['guest-1'].rematch).toBe(true);
  });

  it('setFriendRequestStatus sets pending and clears on declined', async () => {
    __dbData['multiplayer/FRIEND1'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      friendRequestStatus: null,
      hostFriendRequestSent: false,
      guestFriendRequestSent: false,
    };

    // Host sends request
    auth.currentUser = { uid: 'host-1', displayName: 'Host' };
    render(<HookWrapper />);
    await act(async () => {
      await hookResult.setFriendRequestStatus('FRIEND1', 'pending');
    });
    expect(__dbData['multiplayer/FRIEND1']).toMatchObject({
      friendRequestStatus: 'pending',
      hostFriendRequestSent: true,
      guestFriendRequestSent: false,
    });

    cleanup();

    // Guest declines, clearing flags
    auth.currentUser = { uid: 'guest-1', displayName: 'Guest' };
    render(<HookWrapper />);
    await act(async () => {
      await hookResult.setFriendRequestStatus('FRIEND1', 'declined');
    });
    expect(__dbData['multiplayer/FRIEND1']).toMatchObject({
      friendRequestStatus: null,
      hostFriendRequestSent: false,
      guestFriendRequestSent: false,
    });
  });
});

describe('useMultiplayerGame – subscription / connection behaviour', () => {
  it('exposes an error when subscribing to a non-existent game code', () => {
    auth.currentUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    render(<HookWrapper gameCode="NOEXIST" isHost={true} speedrun={false} />);

    // Our firebase/database mock calls onValue synchronously on subscribe,
    // so the hook should immediately reflect the missing-game error.
    expect(hookResult.gameState).toBeNull();
    expect(hookResult.loading).toBe(false);
    expect(hookResult.error).toBe('Game not found or has expired.');
  });
});

describe('useMultiplayerGame – error paths', () => {
  it('joinGame throws when game code is not found', async () => {
    auth.currentUser = {
      uid: 'guest-1',
      displayName: 'Guest Player',
      email: 'guest@example.com',
    };

    render(<HookWrapper />);

    await act(async () => {
      await expect(hookResult.joinGame('999999')).rejects.toThrow('Game code not found');
    });
  });

  it('joinGame throws when game is already full', async () => {
    __dbData['multiplayer/FULL01'] = {
      hostId: 'host-1',
      hostName: 'Host',
      guestId: 'someone-else',
      guestName: 'Other Guest',
      hostReady: false,
      guestReady: false,
      status: 'waiting',
      speedrun: false,
    };

    auth.currentUser = {
      uid: 'guest-1',
      displayName: 'New Guest',
      email: 'guest@example.com',
    };

    render(<HookWrapper />);

    await act(async () => {
      await expect(hookResult.joinGame('FULL01')).rejects.toThrow('Game is full');
    });
  });

  it('startGame throws when called by non-host', async () => {
    __dbData['multiplayer/START1'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      hostReady: true,
      guestReady: true,
      status: 'waiting',
      speedrun: false,
    };

    auth.currentUser = { uid: 'guest-1', displayName: 'Guest' };

    render(<HookWrapper />);

    await act(async () => {
      await expect(hookResult.startGame('START1', 'apple')).rejects.toThrow(
        'Only host can start the game',
      );
    });
  });

  it('startGame throws when both players are not ready', async () => {
    __dbData['multiplayer/NOTREADY'] = {
      hostId: 'host-1',
      guestId: 'guest-1',
      hostReady: true,
      guestReady: false,
      status: 'waiting',
      speedrun: false,
      players: {
        'host-1': { id: 'host-1', name: 'Host', isHost: true, ready: true, guesses: [] },
        'guest-1': { id: 'guest-1', name: 'Guest', isHost: false, ready: false, guesses: [] },
      },
    };

    auth.currentUser = { uid: 'host-1', displayName: 'Host' };

    render(<HookWrapper />);

    await act(async () => {
      await expect(hookResult.startGame('NOTREADY', 'apple')).rejects.toThrow(
        'All players must be ready to start',
      );
    });
  });
});
