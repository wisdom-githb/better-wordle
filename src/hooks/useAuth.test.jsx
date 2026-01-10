import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

// --- Firebase mocks with in-memory auth + database ---

// Mock firebase/app so that src/config/firebase.js can import it safely
vi.mock('firebase/app', () => ({
  initializeApp: vi.fn((config) => ({ config })),
}));

// Auth mock state lives entirely inside the mock factory so it is safe with Vitest hoisting
vi.mock('firebase/auth', () => {
  const inMemoryAuth = { currentUser: null };
  const authListeners = new Set();

  const getAuth = vi.fn(() => inMemoryAuth);

  const onAuthStateChanged = vi.fn((authArg, callback) => {
    authListeners.add(callback);
    return () => {
      authListeners.delete(callback);
    };
  });

  const signInWithPopup = vi.fn();
  const signOut = vi.fn();
  const createUserWithEmailAndPassword = vi.fn();
  const signInWithEmailAndPassword = vi.fn();
  const updateProfile = vi.fn(async (user, updates) => {
    Object.assign(user, updates);
  });
  const sendEmailVerification = vi.fn();
  const linkWithPopup = vi.fn();
  const fetchSignInMethodsForEmail = vi.fn();

  // Must be constructible because src/config/firebase.js uses `new GoogleAuthProvider()`
  function GoogleAuthProvider() {
    this.providerId = 'google.com';
  }

  return {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    sendEmailVerification,
    linkWithPopup,
    fetchSignInMethodsForEmail,
  };
});

vi.mock('firebase/database', () => {
  // In-memory Realtime Database implementation scoped to this mock factory
  const createInMemoryDatabaseMock = () => {
    const data = {};
    const listeners = new Map(); // path -> Set<callback>

    const getPath = (path) => {
      if (!path) return undefined;
      const segments = path.split('/').filter(Boolean);
      let current = data;
      for (const segment of segments) {
        if (current == null || typeof current !== 'object' || !(segment in current)) {
          return undefined;
        }
        current = current[segment];
      }
      return current;
    };

    const setPath = (path, value) => {
      const segments = path.split('/').filter(Boolean);
      let current = data;
      for (let i = 0; i < segments.length - 1; i += 1) {
        const segment = segments[i];
        if (!current[segment] || typeof current[segment] !== 'object') {
          current[segment] = {};
        }
        current = current[segment];
      }
      if (value === undefined) {
        delete current[segments[segments.length - 1]];
      } else {
        current[segments[segments.length - 1]] = value;
      }
    };

    const buildSnapshot = (value) => ({
      exists: () => value !== undefined && value !== null,
      val: () => value,
    });

    const notifyListeners = (path) => {
      const value = getPath(path);
      const snapshot = buildSnapshot(value);
      const cbs = listeners.get(path);
      if (!cbs) return;
      for (const cb of Array.from(cbs)) {
        cb(snapshot);
      }
    };

    return {
      data,
      listeners,
      getPath,
      setPath,
      buildSnapshot,
      notifyListeners,
    };
  };

  // Each test file gets a single in-memory DB instance created inside the mock
  const dbState = createInMemoryDatabaseMock();

  const getDatabase = vi.fn(() => ({ __mock: 'database', data: dbState.data }));

  const ref = vi.fn((db, path) => ({ db, path }));

  const onValue = vi.fn((refObj, callback) => {
    const path = refObj.path;
    if (!dbState.listeners.has(path)) {
      dbState.listeners.set(path, new Set());
    }
    dbState.listeners.get(path).add(callback);

    // Immediately send current value snapshot
    const value = dbState.getPath(path);
    callback(dbState.buildSnapshot(value));

    return () => {
      const set = dbState.listeners.get(path);
      if (set) {
        set.delete(callback);
        if (set.size === 0) dbState.listeners.delete(path);
      }
    };
  });

  const set = vi.fn(async (refObj, value) => {
    const path = refObj.path;
    dbState.setPath(path, value);
    dbState.notifyListeners(path);
  });

  const remove = vi.fn(async (refObj) => {
    const path = refObj.path;
    dbState.setPath(path, undefined);
    dbState.notifyListeners(path);
  });

  const get = vi.fn(async (refObj) => {
    const value = dbState.getPath(refObj.path);
    return dbState.buildSnapshot(value);
  });

  const update = vi.fn(async (refObj, value) => {
    const existing = dbState.getPath(refObj.path) || {};
    dbState.setPath(refObj.path, { ...existing, ...value });
    dbState.notifyListeners(refObj.path);
  });

  const __resetDb = () => {
    dbState.listeners.clear();
    Object.keys(dbState.data).forEach((k) => delete dbState.data[k]);
  };

  return {
    getDatabase,
    ref,
    onValue,
    set,
    remove,
    get,
    update,
    __resetDb,
  };
});

// Now import the hook under test (after mocks)
import { useAuth } from './useAuth';
import * as firebaseAuth from 'firebase/auth';
import * as firebaseDb from 'firebase/database';

const getAuthListener = () => {
  const { onAuthStateChanged } = firebaseAuth;
  const calls = onAuthStateChanged.mock.calls;
  if (!calls.length) return null;
  // listener is second arg
  return calls[0][1];
};

beforeEach(() => {
  // Reset auth + DB between tests
  const auth = firebaseAuth.getAuth();
  auth.currentUser = null;

  if (typeof firebaseDb.__resetDb === 'function') {
    firebaseDb.__resetDb();
  }

  vi.clearAllMocks();
});

// --- Tests ---

describe('useAuth - auth flows', () => {
  it('signUpWithEmail calls Firebase and sends verification email, manages loading and error on success', async () => {
    const { createUserWithEmailAndPassword, sendEmailVerification } = firebaseAuth;
    const fakeUser = { uid: 'u1', email: 'test@example.com' };
    createUserWithEmailAndPassword.mockResolvedValueOnce({ user: fakeUser });
    sendEmailVerification.mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useAuth());

    // Simulate initial auth state (logged out)
    const listener = getAuthListener();
    expect(listener).toBeTypeOf('function');
    act(() => {
      listener(null);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();

    await act(async () => {
      await result.current.signUpWithEmail('test@example.com', 'password123');
    });

    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      'test@example.com',
      'password123',
    );

    expect(sendEmailVerification).toHaveBeenCalledTimes(1);
    expect(sendEmailVerification).toHaveBeenCalledWith(fakeUser);

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('signInWithEmail handles success and sets loading/error correctly', async () => {
    const { signInWithEmailAndPassword } = firebaseAuth;
    const fakeUser = { uid: 'u2', email: 'user@example.com' };
    signInWithEmailAndPassword.mockResolvedValueOnce({ user: fakeUser });

    const { result } = renderHook(() => useAuth());

    const listener = getAuthListener();
    act(() => {
      listener(null);
    });

    await act(async () => {
      await result.current.signInWithEmail('user@example.com', 'secret');
    });

    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      'user@example.com',
      'secret',
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('signInWithEmail surfaces error message and rethrows on failure', async () => {
    const { signInWithEmailAndPassword } = firebaseAuth;
    const err = new Error('Invalid credentials');
    signInWithEmailAndPassword.mockRejectedValueOnce(err);

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(null);
    });

    let caught;
    await act(async () => {
      try {
        await result.current.signInWithEmail('user@example.com', 'wrong');
      } catch (e) {
        caught = e;
      }
    });

    expect(caught).toBe(err);
    expect(result.current.error).toBe('Invalid credentials');
    expect(result.current.loading).toBe(false);
  });

  it('signInWithGoogle normal success path calls signInWithPopup and manages loading/error', async () => {
    const { signInWithPopup } = firebaseAuth;
    const fakeUser = { uid: 'g1', email: 'google@example.com' };
    signInWithPopup.mockResolvedValueOnce({ user: fakeUser });

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(null);
    });

    await act(async () => {
      const returnedUser = await result.current.signInWithGoogle();
      expect(returnedUser).toBe(fakeUser);
    });

    expect(signInWithPopup).toHaveBeenCalledTimes(1);
    expect(signInWithPopup.mock.calls[0][0]).toBeDefined(); // auth instance

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('signInWithGoogle handles auth/account-exists-with-different-credential with password method', async () => {
    const { signInWithPopup, fetchSignInMethodsForEmail } = firebaseAuth;
    const baseError = new Error('Account exists with different credential');
    // @ts-expect-error augment error object for testing
    baseError.code = 'auth/account-exists-with-different-credential';
    // @ts-expect-error
    baseError.customData = { email: 'conflict@example.com' };

    signInWithPopup.mockRejectedValueOnce(baseError);
    fetchSignInMethodsForEmail.mockResolvedValueOnce(['password']);

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(null);
    });

    let thrown;
    await act(async () => {
      try {
        await result.current.signInWithGoogle();
      } catch (e) {
        thrown = e;
      }
    });

    expect(fetchSignInMethodsForEmail).toHaveBeenCalledWith(
      expect.any(Object),
      'conflict@example.com',
    );

    expect(thrown).toBeInstanceOf(Error);
    expect(thrown.code).toBe('auth/account-exists-with-different-credential');
    expect(thrown.message).toContain('An account with this email already exists');

    expect(result.current.error).toContain('An account with this email already exists');
    expect(result.current.loading).toBe(false);
  });

  it('signOut calls Firebase signOut and user is cleared when auth emits null', async () => {
    const { signOut: firebaseSignOut } = firebaseAuth;
    firebaseSignOut.mockResolvedValueOnce(undefined);

    const { result } = renderHook(() => useAuth());

    const listener = getAuthListener();
    expect(listener).toBeTypeOf('function');

    const signedInUser = { uid: 'u3', emailVerified: true, providerData: [] };
    act(() => {
      listener(signedInUser);
    });

    expect(result.current.user).toEqual(signedInUser);

    await act(async () => {
      await result.current.signOut();
    });

    expect(firebaseSignOut).toHaveBeenCalledTimes(1);
    expect(firebaseSignOut).toHaveBeenCalledWith(expect.any(Object));

    act(() => {
      listener(null);
    });

    expect(result.current.user).toBeNull();
  });
});

describe('useAuth - social data subscription', () => {
  it('subscribes to friends, friendRequests, and challenges when a verified user logs in', async () => {
    const db = firebaseDb.getDatabase();
    const friendsRef = firebaseDb.ref(db, 'users/u123/friends');
    const requestsRef = firebaseDb.ref(db, 'users/u123/friendRequests');
    const challengesRef = firebaseDb.ref(db, 'users/u123/challenges');

    await firebaseDb.set(friendsRef, {
      friend1: { name: 'Alice' },
      friend2: { name: 'Bob' },
    });

    await firebaseDb.set(requestsRef, {
      r1: { fromName: 'Carol' },
    });

    await firebaseDb.set(challengesRef, {
      c1: { fromUserName: 'Dave', createdAt: 2 },
      c2: { fromUserName: 'Eve', createdAt: 5 },
    });

    const { result } = renderHook(() => useAuth());

    const listener = getAuthListener();
    expect(listener).toBeTypeOf('function');

    const verifiedUser = {
      uid: 'u123',
      emailVerified: true,
      providerData: [],
    };

    act(() => {
      listener(verifiedUser);
    });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();

    expect(result.current.friends).toEqual([
      { id: 'friend1', name: 'Alice' },
      { id: 'friend2', name: 'Bob' },
    ]);

    expect(result.current.friendRequests).toEqual([
      { id: 'r1', fromName: 'Carol' },
    ]);

    // Challenges should be sorted newest first by createdAt
    expect(result.current.incomingChallenges.map((c) => c.id)).toEqual(['c2', 'c1']);
  });

  it('clears social arrays and resets loading/error when auth emits null', () => {
    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();

    const verifiedUser = {
      uid: 'u123',
      emailVerified: true,
      providerData: [],
    };

    act(() => {
      listener(verifiedUser);
    });

    act(() => {
      listener(null);
    });

    expect(result.current.friends).toEqual([]);
    expect(result.current.friendRequests).toEqual([]);
    expect(result.current.incomingChallenges).toEqual([]);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
  });
});

describe('useAuth - profile helpers', () => {
  it('updateUsername updates displayName via updateProfile and local user', async () => {
    const { getAuth, updateProfile } = firebaseAuth;
    const auth = getAuth();
    auth.currentUser = {
      uid: 'u5',
      displayName: 'Old Name',
      emailVerified: true,
      providerData: [],
    };

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(auth.currentUser);
    });

    await act(async () => {
      await result.current.updateUsername('New Name');
    });

    expect(updateProfile).toHaveBeenCalledWith(auth.currentUser, { displayName: 'New Name' });
    expect(result.current.user.displayName).toBe('New Name');
    expect(result.current.error).toBeNull();
  });

  it('resendVerificationEmail calls sendEmailVerification for current user', async () => {
    const { getAuth, sendEmailVerification } = firebaseAuth;
    const auth = getAuth();
    auth.currentUser = {
      uid: 'u6',
      email: 'verify@example.com',
      emailVerified: false,
      providerData: [],
    };

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(auth.currentUser);
    });

    await act(async () => {
      await result.current.resendVerificationEmail();
    });

    expect(sendEmailVerification).toHaveBeenCalledTimes(1);
    expect(sendEmailVerification).toHaveBeenCalledWith(auth.currentUser);
    expect(result.current.error).toBeNull();
  });

  it('linkGoogleAccount updates user on success', async () => {
    const { getAuth, linkWithPopup } = firebaseAuth;
    const auth = getAuth();
    auth.currentUser = {
      uid: 'u7',
      email: 'link@example.com',
      emailVerified: false,
      providerData: [],
    };

    linkWithPopup.mockImplementationOnce(async () => {
      auth.currentUser.providerData = [{ providerId: 'google.com' }];
    });

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(auth.currentUser);
    });

    await act(async () => {
      await result.current.linkGoogleAccount();
    });

    expect(linkWithPopup).toHaveBeenCalledTimes(1);
    expect(linkWithPopup).toHaveBeenCalledWith(auth.currentUser, expect.anything());
    expect(result.current.user).toBe(auth.currentUser);
    expect(result.current.error).toBeNull();
  });

  it('linkGoogleAccount surfaces friendly error when already linked', async () => {
    const { getAuth, linkWithPopup } = firebaseAuth;
    const auth = getAuth();
    auth.currentUser = {
      uid: 'u8',
      email: 'linked@example.com',
      emailVerified: true,
      providerData: [{ providerId: 'google.com' }],
    };

    const err = new Error('Already linked');
    // @ts-expect-error - augment error
    err.code = 'auth/provider-already-linked';
    linkWithPopup.mockRejectedValueOnce(err);

    const { result } = renderHook(() => useAuth());
    const listener = getAuthListener();
    act(() => {
      listener(auth.currentUser);
    });

    let caught;
    await act(async () => {
      try {
        await result.current.linkGoogleAccount();
      } catch (e) {
        caught = e;
      }
    });

    expect(caught).toBe(err);
    expect(result.current.error).toBe('Google account is already linked.');
  });
});