import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database } from '../config/firebase';

/**
 * Subscribe to publicly visible waiting rooms under `onevone/*`.
 * Returns a sorted list of room metadata plus a loading flag.
 */
export function useOpenRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const roomsRef = ref(database, 'onevone');

    const unsubscribe = onValue(
      roomsRef,
      (snapshot) => {
        const data = snapshot.val() || {};
        const now = Date.now();
        const list = Object.entries(data)
          .map(([code, room]) => {
            if (!room) return null;

            const playersMap = room.players && typeof room.players === 'object' ? room.players : null;
            const currentPlayers = playersMap
              ? Object.keys(playersMap).length
              : ((room.hostId ? 1 : 0) + (room.guestId ? 1 : 0));

            const maxPlayers = Number.isFinite(room.maxPlayers) ? room.maxPlayers : 2;
            const speedrun = room.speedrun === true;
            const solutions = Array.isArray(room.solutions) && room.solutions.length > 0
              ? room.solutions
              : room.solution
              ? [room.solution]
              : [];
            const explicitBoards = Number.isFinite(room.numBoards) ? room.numBoards : null;
            const boards = explicitBoards || solutions.length || 1;

            const hostName = room.hostName || 'Host';
            const roomName = room.roomName || `${hostName}'s room`;

            return {
              code,
              hostName,
              roomName,
              status: room.status || 'waiting',
              isPublic: room.isPublic !== false,
              currentPlayers,
              maxPlayers,
              speedrun,
              boards,
              createdAt: room.createdAt || 0,
            };
          })
          .filter((room) =>
            room &&
            room.isPublic &&
            room.status === 'waiting' &&
            (room.createdAt || 0) > now - 24 * 60 * 60 * 1000
          )
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        setRooms(list);
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );

    return () => {
      off(roomsRef);
      if (typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, []);

  return { rooms, loading };
}
