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
import { ref, get, set, remove, onValue } from 'firebase/database';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [friends, setFriends] = useState([]);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    let unsubscribeFriends = null;
    let unsubscribeRequests = null;

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

      setUser(authUser);

      if (authUser) {
        // Only load social data for verified users (or OAuth providers like Google)
        const isVerifiedUser = authUser.emailVerified || (authUser.providerData || []).some(p => p.providerId === 'google.com');
        if (!isVerifiedUser) {
          setFriends([]);
          setFriendRequests([]);
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
        
        setLoading(false);
        setError(null);
      } else {
        setFriends([]);
        setFriendRequests([]);
        setLoading(false);
        setError(null);
      }
    });

    return () => {
      if (unsubscribeFriends) unsubscribeFriends();
      if (unsubscribeRequests) unsubscribeRequests();
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
      // Handle case where an email/password account already exists for this email
      if (err.code === 'auth/account-exists-with-different-credential') {
        try {
          const email = err.customData?.email;
          if (email) {
            const methods = await fetchSignInMethodsForEmail(auth, email);
            if (methods.includes('password')) {
              const friendlyError = new Error(
                'An account with this email already exists. Please sign in with email and password, then link Google from your Profile.'
              );
              friendlyError.code = err.code;
              friendlyError.email = email;
              setError(friendlyError.message);
              throw friendlyError;
            }
          }
        } catch (inner) {
          // If anything goes wrong while inspecting methods, fall through to default handling
          console.error('Error handling account-exists-with-different-credential:', inner);
        }
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
      
      // Add to current user's friends
      const myFriendRef = ref(database, `users/${auth.currentUser.uid}/friends/${fromUserId}`);
      await set(myFriendRef, {
        name: fromUserName,
        addedAt: new Date().toISOString()
      });
      
      // Add current user to their friends
      const theirFriendRef = ref(database, `users/${fromUserId}/friends/${auth.currentUser.uid}`);
      await set(theirFriendRef, {
        name: auth.currentUser.displayName || 'Unknown',
        addedAt: new Date().toISOString()
      });
      
      // Remove the friend request
      const requestRef = ref(database, `users/${auth.currentUser.uid}/friendRequests/${fromUserId}`);
      await remove(requestRef);
      
      return true;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const declineFriendRequest = useCallback(async (fromUserId) => {
    try {
      setError(null);
      if (!auth.currentUser) throw new Error('No user signed in');
      const isVerifiedUser = auth.currentUser.emailVerified || (auth.currentUser.providerData || []).some(p => p.providerId === 'google.com');
      if (!isVerifiedUser) throw new Error('You must verify your email or sign in with Google to use friends.');
      
      const requestRef = ref(database, `users/${auth.currentUser.uid}/friendRequests/${fromUserId}`);
      await remove(requestRef);
      
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
      
      const friendRef = ref(database, `users/${auth.currentUser.uid}/friends/${friendId}`);
      await remove(friendRef);
      
      // Update local state
      setFriends(prev => prev.filter(f => f.id !== friendId));
      return true;
    } catch (err) {
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
    resendVerificationEmail,
    linkGoogleAccount
  };
}
