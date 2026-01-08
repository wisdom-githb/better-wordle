import { useState, useEffect, useCallback } from 'react';
import { 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile
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
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      if (authUser) {
        // Load friends list
        const friendsRef = ref(database, `users/${authUser.uid}/friends`);
        const unsubscribeFriends = onValue(friendsRef, (snapshot) => {
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
        const unsubscribeRequests = onValue(requestsRef, (snapshot) => {
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
        return () => {
          unsubscribeFriends();
          unsubscribeRequests();
        };
      } else {
        setFriends([]);
        setFriendRequests([]);
        setLoading(false);
        setError(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      return result.user;
    } catch (err) {
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

  return {
    user,
    loading,
    error,
    friends,
    friendRequests,
    signInWithGoogle,
    signUpWithEmail,
    signInWithEmail,
    signOut,
    updateUsername,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriend
  };
}
