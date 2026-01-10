import { useState, useEffect, useCallback } from 'react';
import { 
  signInWithPopup,
  signOut as firebaseSignOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  linkWithPopup,
  fetchSignInMethodsForEmail
} from 'firebase/auth';
import { auth, googleProvider, database } from '../config/firebase';
import { ref, get, set, remove, onValue, update } from 'firebase/database';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);
  const [incomingChallenges, setIncomingChallenges] = useState([]);

  useEffect(() => {
    let unsubscribeFriends = null;
    let unsubscribeRequests = null;
    let unsubscribeChallenges = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (authUser) => {
      // Clean up any existing database listeners when auth user changes
      if (unsubscribeFriends) {
        unsubscribeFriends();
        unsubscribeFriends = null;
      }
      if (unsubscribeRequests) {
        unsubscribeRequests();
        unsubscribeRequests = null;
      }
      if (unsubscribeChallenges) {
        unsubscribeChallenges();
        unsubscribeChallenges = null;
      }

      setUser(authUser);

      if (authUser) {
        // Only load social data for verified users (or OAuth providers like Google)
        const isVerifiedUser = authUser.emailVerified || (authUser.providerData || []).some(p => p.providerId === 'google.com');
        if (!isVerifiedUser) {
          setFriends([]);
          setFriendRequests([]);
          setIncomingChallenges([]);
          setLoading(false);
          setError(null);
          return;
        }

        // Load friends list
        const friendsRef = ref(database, `users/${authUser.uid}/friends`);
        unsubscribeFriends = onValue(friendsRef, (snapshot) => {
          if (snapshot.exists()) {
            const friendsData = snapshot.val();
            const friendsList = Object.entries(friendsData).map(([id, data]) => ({
              id,
              ...data
            }));
            setFriends(friendsList);
          } else {
            setFriends([]);
          }
        });

        // Load friend requests
        const requestsRef = ref(database, `users/${authUser.uid}/friendRequests`);
        unsubscribeRequests = onValue(requestsRef, (snapshot) => {
          if (snapshot.exists()) {
            const requestsData = snapshot.val();
            const requestsList = Object.entries(requestsData).map(([id, data]) => ({
              id,
              ...data
            }));
            setFriendRequests(requestsList);
          } else {
            setFriendRequests([]);
          }
        });

        // Load incoming 1v1 challenges for this user
        const challengesRef = ref(database, `users/${authUser.uid}/challenges`);
        unsubscribeChallenges = onValue(challengesRef, (snapshot) => {
          if (snapshot.exists()) {
            const raw = snapshot.val();
            const list = Object.entries(raw).map(([id, data]) => ({ id, ...data }));
            // Sort newest first for nicer UI
            list.sort((a, b) => {
              const at = a.createdAt || a.sentAt || 0;
              const bt = b.createdAt || b.sentAt || 0;
              return bt - at;
            });
            setIncomingChallenges(list);
          } else {
            setIncomingChallenges([]);
          }
        });
        
        setLoading(false);
        setError(null);
      } else {
        setFriends([]);
        setFriendRequests([]);
        setIncomingChallenges([]);
        setLoading(false);
        setError(null);
      }
    });

    return () => {
      if (unsubscribeFriends) unsubscribeFriends();
      if (unsubscribeRequests) unsubscribeRequests();
      if (unsubscribeChallenges) unsubscribeChallenges();
      unsubscribeAuth();
    };
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (err) {
      // Handle case where an email/password account already exists for this email.
      // In this scenario we always surface a friendly, actionable message instead of
      // the low-level Firebase error, even if we can't successfully inspect the
      // sign-in methods.
      if (err.code === 'auth/account-exists-with-different-credential') {
        const email = err.customData?.email || err.email || null;
        const friendlyMessage =
          'An account with this email already exists. Please sign in with email and password, then link Google from your Profile.';

        try {
          // Best-effort check: if there is no password sign-in method, we simply
          // fall back to the default error handling below. This mirrors Firebase's
          // guidance while still keeping the UX clear for the common case.
          if (email) {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            if (!methods.includes('password')) {
              // Non-password flow (e.g. another IdP) – keep the original error.
              setError(err.message);
              throw err;
            }
          }
        } catch (inner) {
          // If anything goes wrong while inspecting methods, we still prefer the
          // friendly message rather than the raw Firebase error.
          console.error('Error handling account-exists-with-different-credential:', inner);
        }

        const friendlyError = new Error(friendlyMessage);
        friendlyError.code = err.code;
        if (email) friendlyError.email = email;
        setError(friendlyError.message);
        throw friendlyError;
      }

      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signUpWithEmail = useCallback(async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Send verification email for password-based accounts
      try {
        await sendEmailVerification(result.user);
      } catch (verifyErr) {
        console.error('Failed to send verification email:', verifyErr);
      }
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signInWithEmail = useCallback(async (email, password) => {
    try {
      setError(null);
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setError(null);
      await firebaseSignOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const updateUsername = useCallback(async (newUsername) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      await updateProfile(auth.currentUser, { displayName: newUsername });
      setUser({ ...auth.currentUser, displayName: newUsername });
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const sendFriendRequest = useCallback(async (friendName, friendId) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');
      
      // Send request to the other user
      const requestRef = ref(database, `users/${friendId}/friendRequests/${auth.currentUser.uid}`);
      await set(requestRef, {
        from: auth.currentUser.uid,
        fromName: auth.currentUser.displayName || 'Unknown',
        sentAt: new Date().toISOString()
      });
      
      return true;
    } catch (err) {
      console.error('sendFriendRequest error:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const acceptFriendRequest = useCallback(async (fromUserId, fromUserName) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');
      
      const nowIso = new Date().toISOString();
      
      // Add to current user's friends
      const myFriendRef = ref(database, `users/${auth.currentUser.uid}/friends/${fromUserId}`);
      await set(myFriendRef, {
        name: fromUserName,
        addedAt: nowIso
      });
      
      // Add current user to their friends (so friendship is mutual)
      const theirFriendRef = ref(database, `users/${fromUserId}/friends/${auth.currentUser.uid}`);
      await set(theirFriendRef, {
        name: auth.currentUser.displayName || 'Unknown',
        addedAt: nowIso
      });
      
      // Remove the friend request from the database
      const requestRef = ref(database, `users/${auth.currentUser.uid}/friendRequests/${fromUserId}`);
      await remove(requestRef);
      
      // Optimistically update local state so the Friends popup updates immediately
      setFriendRequests(prev => prev.filter((req) => req.id !== fromUserId));
      setFriends(prev => {
        // Avoid duplicate entries if listener already added this friend
        if (prev.some((f) => f.id === fromUserId)) return prev;
        return [...prev, { id: fromUserId, name: fromUserName, addedAt: nowIso }];
      });
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const declineFriendRequest = useCallback(async (fromUserId, gameCode = null, setFriendStatusIn1v1 = null) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');
      
      const requestRef = ref(database, `users/${auth.currentUser.uid}/friendRequests/${fromUserId}`);
      await remove(requestRef);

      // If this decline came from a 1v1 game context and we were given a helper,
      // update the 1v1 game's friendRequestStatus so the waiting room button UI
      // can revert from "Friend request sent" back to "Add ... as Friend".
      if (gameCode && typeof setFriendStatusIn1v1 === 'function') {
        try {
          await setFriendStatusIn1v1(gameCode, 'declined');
        } catch (err) {
          console.error('Failed to update 1v1 friendRequestStatus:', err);
        }
      }
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const removeFriend = useCallback(async (friendId) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');
      
      // Remove friend from current user's list
      const myFriendRef = ref(database, `users/${auth.currentUser.uid}/friends/${friendId}`);
      await remove(myFriendRef);
      
      // Also remove current user from the other user's friends list so unfriend is mutual
      const theirFriendRef = ref(database, `users/${friendId}/friends/${auth.currentUser.uid}`);
      await remove(theirFriendRef);
      
      // Update local state
      setFriends(prev => prev.filter(f => f.id !== friendId));
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // Create or update a 1v1 challenge entry for a specific friend.
  // If a user has sent their friend a challenge, then neither the user nor
  // their friend should be able to send any more challenges to each other
  // until the existing challenge has been accepted or declined.
  //
  // This helper returns `true` when a new challenge is created, and `false`
  // when a challenge between the two users is already pending. In the
  // latter case no alert/error is thrown so callers can show a toast instead.
  const sendChallenge = useCallback(async (friendId, friendName, gameCode, boards, speedrun) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');

      const currentUserId = auth.currentUser.uid;

      // Before creating a new challenge, enforce that there is no existing
      // pending challenge between these two users in either direction.
      //
      // We can safely read our OWN challenges node; this catches the case
      // where the friend has already challenged us and we are trying to
      // send a new challenge back to them.
      const myChallengesRef = ref(database, `users/${currentUserId}/challenges`);
      const myChallengesSnap = await get(myChallengesRef);
      if (myChallengesSnap.exists()) {
        const challenges = myChallengesSnap.val();
        const hasIncomingPending = Object.values(challenges).some((c) =>
          c &&
          c.fromUserId === friendId &&
          (c.status === 'pending' || c.status === undefined || c.status === null)
        );
        if (hasIncomingPending) {
          // A pending challenge already exists between these two users.
          // Do not create another one; let caller surface a toast instead.
          return false;
        }
      }

      const now = Date.now();
      const challengeRef = ref(database, `users/${friendId}/challenges/${gameCode}`);
      await set(challengeRef, {
        fromUserId: currentUserId,
        fromUserName: auth.currentUser.displayName || auth.currentUser.email || 'Unknown',
        gameCode,
        boards,
        speedrun: !!speedrun,
        status: 'pending', // pending, accepted, cancelled
        createdAt: now,
      });

      return true;
    } catch (err) {
      console.error('sendChallenge error:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  // Accept a challenge and immediately clean it up from the receiver's list.
  // The caller is responsible for navigating into the /game route using the
  // returned challenge data.
  const acceptChallenge = useCallback(async (challengeId) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const challengeRef = ref(database, `users/${auth.currentUser.uid}/challenges/${challengeId}`);
      const snapshot = await get(challengeRef);
      if (!snapshot.exists()) {
        throw new Error('Challenge not found');
      }
      const data = snapshot.val();

      // Auto-clean: remove the challenge node once it has been accepted so it
      // no longer appears in the Challenges list.
      await remove(challengeRef);

      return data;
    } catch (err) {
      console.error('acceptChallenge error:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const dismissChallenge = useCallback(async (challengeId, gameCode = null) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const challengeRef = ref(database, `users/${auth.currentUser.uid}/challenges/${challengeId}`);
      await remove(challengeRef);

      // If this dismissal corresponds to a specific 1v1 game, try to mark that
      // game as cancelled so the host waiting in the lobby sees a clear
      // message that their challenge was declined.
      if (gameCode) {
        try {
          const gameRef = ref(database, `onevone/${gameCode}`);
          const gameSnap = await get(gameRef);
          if (gameSnap.exists()) {
            const cancelledByName =
              auth.currentUser.displayName || auth.currentUser.email || 'Your friend';
            await update(gameRef, {
              status: 'cancelled',
              cancelledByName,
            });
          }
        } catch (innerErr) {
          console.error('Failed to mark 1v1 game as cancelled after dismissing challenge:', innerErr);
        }
      }

      return true;
    } catch (err) {
      console.error('dismissChallenge error:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const isVerifiedUser = !!user && (user.emailVerified || (user.providerData || []).some(p => p.providerId === 'google.com'));

  const resendVerificationEmail = useCallback(async () => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      await sendEmailVerification(auth.currentUser);
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const linkGoogleAccount = useCallback(async () => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      await linkWithPopup(auth.currentUser, googleProvider);
      setUser(auth.currentUser);
      return true;
    } catch (err) {
      // If account already linked, surface a friendly message but still throw for callers to handle
      if (err.code === 'auth/credential-already-in-use' || err.code === 'auth/provider-already-linked') {
        setError('Google account is already linked.');
      } else {
        setError(err.message);
      }
      throw err;
    }
  }, []);

  return {
    user,
    loading,
    error,
    friends,
    friendRequests,
    incomingChallenges,
    isVerifiedUser,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    updateUsername,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriend,
    sendChallenge,
    acceptChallenge,
    dismissChallenge,
    resendVerificationEmail,
    linkGoogleAccount
  };
}
