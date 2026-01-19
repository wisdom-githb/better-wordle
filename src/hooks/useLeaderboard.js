import { useState, useEffect, useCallback } from 'react';
import { ref, push, set, query, limitToLast, onValue } from 'firebase/database';
import { database } from '../config/firebase';

/**
 * Submit a speedrun score to the leaderboard
 * @param {string} userId - User ID
 * @param {string} userName - User display name or email
 * @param {string} mode - 'daily' or 'marathon'
 * @param {number} numBoards - Number of boards
 * @param {number} timeMs - Time in milliseconds
 * @param {number} score - Calculated score
 */
export async function submitSpeedrunScore(userId, userName, mode, numBoards, timeMs, score) {
  if (!userId) {
    throw new Error('User must be signed in to submit scores');
  }

  const leaderboardRef = ref(database, `leaderboard/${mode}`);
  const entryRef = push(leaderboardRef);
  
  const entry = {
    userId,
    userName: userName || 'Anonymous',
    numBoards,
    timeMs,
    score,
    timestamp: Date.now()
  };

  await set(entryRef, entry);
  return entryRef.key;
}

/**
 * Fetch leaderboard entries for a specific mode
 * @param {string} mode - 'daily' or 'marathon'
 * @param {number} numBoards - Optional: filter by number of boards
 * @param {number} limit - Maximum number of entries to fetch (default: 100)
 */
export function useLeaderboard(mode, numBoards = null, limit = 100) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!mode) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const leaderboardRef = ref(database, `leaderboard/${mode}`);

    // Compute today's UTC day range so the leaderboard resets at the same time
    // for all players globally (midnight UTC).
    const now = new Date();
    const startOfDay = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
    );
    const startOfNextDay = Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
    );
    
    // Query: order by score descending, then by timeMs ascending (for same score, faster is better)
    // Firebase doesn't support multiple orderBy, so we'll fetch all and sort in JS
    const leaderboardQuery = query(leaderboardRef, limitToLast(limit * 2)); // Fetch more to account for filtering

    const unsubscribe = onValue(
      leaderboardQuery,
      (snapshot) => {
        try {
          const data = snapshot.val();
          if (!data) {
            setEntries([]);
            setLoading(false);
            return;
          }

          // Convert to array and normalise numeric fields so we can safely sort
          // and render even if some historical entries are malformed.
          let entriesArray = Object.entries(data)
            .map(([key, value]) => ({
              id: key,
              ...value,
            }))
            .map((entry) => {
              const normalised = { ...entry };

              // Coerce score to a finite number, defaulting to 0 when missing.
              const scoreNum = Number(normalised.score);
              normalised.score = Number.isFinite(scoreNum) ? scoreNum : 0;

              // Coerce timeMs; entries with non-finite timeMs are dropped later.
              const timeNum = Number(normalised.timeMs);
              normalised.timeMs = Number.isFinite(timeNum) ? timeNum : NaN;

              // Normalise numBoards to a number when possible so filters behave.
              const boardsNum = Number(normalised.numBoards);
              normalised.numBoards = Number.isFinite(boardsNum) ? boardsNum : null;

              return normalised;
            })
            .filter((entry) => Number.isFinite(entry.timeMs));

          // Keep only entries from the current UTC day so the leaderboard refreshes daily
          entriesArray = entriesArray.filter((entry) => {
            if (typeof entry.timestamp !== 'number') return false;
            return entry.timestamp >= startOfDay && entry.timestamp < startOfNextDay;
          });

          // Filter by numBoards if specified
          if (numBoards !== null) {
            entriesArray = entriesArray.filter(entry => entry.numBoards === numBoards);
          }

          // Sort by score (descending), then by timeMs (ascending), then by timestamp (ascending for ties)
          entriesArray.sort((a, b) => {
            if (b.score !== a.score) {
              return b.score - a.score; // Higher score is better
            }
            if (a.timeMs !== b.timeMs) {
              return a.timeMs - b.timeMs; // Faster time is better
            }
            return a.timestamp - b.timestamp; // Earlier submission is better for ties
          });

          // Limit results
          entriesArray = entriesArray.slice(0, limit);

          setEntries(entriesArray);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [mode, numBoards, limit]);

  return { entries, loading, error };
}
