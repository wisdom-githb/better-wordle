import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue, off, remove } from "firebase/database";
import Modal from "./Modal";
import { database, auth } from "../config/firebase";
import { MULTIPLAYER_WAITING_TIMEOUT_MS } from "../lib/multiplayerConfig";

export default function OpenRoomsModal({ isOpen, onRequestClose, adminMode = false }) {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [closingAll, setClosingAll] = useState(false);
  const [nowMs, setNowMs] = useState(Date.now());

  // Local clock so age/expiry labels in the modal update while it is open.
  useEffect(() => {
    if (!isOpen) return undefined;
    const id = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    setLoading(true);
    const roomsRef = ref(database, "onevone");

    const unsubscribe = onValue(
      roomsRef,
      (snapshot) => {
        const value = snapshot.val() || {};
        const nextRooms = Object.entries(value)
          .map(([code, data]) => ({ code, data }))
          .filter(({ data }) => {
            if (!data) return false;
            const status = data.status || "waiting";

            if (adminMode) {
              // Admin view: show all non-finished rooms, regardless of public/private.
              return status === "waiting" || status === "playing";
            }

            // Normal view: only public rooms that are joinable *and have not started yet*.
            if (data.isPublic !== true) return false;

            // Only list rooms that are still in the waiting lobby. Once the host
            // starts the game (status === "playing"), the room should disappear
            // from the Open Rooms modal.
            if (status !== "waiting") return false;

            const playersMap = data.players || null;
            const playerCount = playersMap
              ? Object.keys(playersMap).length
              : data.guestId
              ? 2
              : data.hostId
              ? 1
              : 0;
            const maxPlayers = Number.isFinite(data.maxPlayers) ? data.maxPlayers : 2;

            // Hide rooms that are already full so players only see joinable lobbies.
            if (playerCount >= maxPlayers) return false;

            return true;
          })
          .sort((a, b) => {
            const aCreated = a.data.createdAt || 0;
            const bCreated = b.data.createdAt || 0;
            return bCreated - aCreated;
          });

        setRooms(nextRooms);
        setLoading(false);
      },
      () => {
        setLoading(false);
      }
    );

    return () => {
      off(roomsRef);
      if (typeof unsubscribe === "function") unsubscribe();
    };
  }, [isOpen]);

  const handleJoin = (room) => {
    const { code, data } = room;
    if (!code) return;
    const boards = Array.isArray(data.solutions) && data.solutions.length > 0
      ? data.solutions.length
      : data.solution
      ? 1
      : 1;
    const speedrun = !!data.speedrun;
    const maxPlayers = Number.isFinite(data.maxPlayers) ? data.maxPlayers : undefined;
    const isPublic = data.isPublic === true;

    const params = [
      "mode=multiplayer",
      `code=${code}`,
      `speedrun=${speedrun}`,
      `boards=${boards}`,
    ];
    if (maxPlayers) params.push(`maxPlayers=${maxPlayers}`);
    params.push(`isPublic=${isPublic}`);

    onRequestClose?.();
    navigate(`/game?${params.join("&")}`);
  };

  const handleCloseRoom = async (code) => {
    if (!code) return;
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    try {
      await remove(ref(database, `onevone/${code}`));
    } catch (e) {
      // best-effort; errors are silently ignored in UI
    }
  };

  const handleCloseAllRooms = async () => {
    // Only meaningful in admin view
    if (!adminMode || closingAll || loading) return;
    const currentUser = auth.currentUser;
    if (!currentUser) return;

    const allCodes = rooms.map(({ code }) => code).filter(Boolean);
    if (allCodes.length === 0) return;

    setClosingAll(true);
    try {
      await Promise.all(
        allCodes.map((code) => remove(ref(database, `onevone/${code}`)))
      );
    } catch (e) {
      // best-effort; errors are silently ignored in UI
    } finally {
      setClosingAll(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div
        style={{
          padding: "24px",
          width: "100%",
          maxWidth: 480,
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            margin: "0 0 16px 0",
            fontSize: 20,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Open Rooms
        </h2>

        {loading ? (
          <div style={{ padding: "16px 0", color: "#d7dadc", fontSize: 14 }}>
            Loading rooms...
          </div>
        ) : rooms.length === 0 ? (
          <div style={{ padding: "16px 0", color: "#818384", fontSize: 14 }}>
            {adminMode
              ? "There are no active rooms right now."
              : "There are no public rooms available right now."}
          </div>
        ) : (
          <div
            style={{
              maxHeight: 320,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              marginBottom: 8,
            }}
          >
            {rooms.map(({ code, data }) => {
              const playersMap = data.players || null;
              const playerCount = playersMap
                ? Object.keys(playersMap).length
                : data.guestId
                ? 2
                : data.hostId
                ? 1
                : 0;
              const maxPlayers = Number.isFinite(data.maxPlayers) ? data.maxPlayers : 2;
              const boards = Array.isArray(data.solutions) && data.solutions.length > 0
                ? data.solutions.length
                : data.solution
                ? 1
                : 1;
              const speedrun = !!data.speedrun;
              const hostName = data.hostName || (playersMap && playersMap[data.hostId]?.name) || "Host";

              const createdAt = typeof data.createdAt === "number" ? data.createdAt : null;
              const ageMs = createdAt ? Math.max(0, nowMs - createdAt) : null;
              const lifetimeMs = MULTIPLAYER_WAITING_TIMEOUT_MS;
              const remainingMs = createdAt
                ? Math.max(0, lifetimeMs - ageMs)
                : null;

              const formatDuration = (ms) => {
                const totalSeconds = Math.floor(ms / 1000);
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                if (minutes > 0) {
                  return `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
                }
                return `${seconds}s`;
              };

              const expiresLabel = remainingMs != null ? formatDuration(remainingMs) : null;

              return (
                <div
                  key={code}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid #3a3a3c",
                    background: "#2b2b2e",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <div
                      style={{
                        color: "#ffffff",
                        fontWeight: 600,
                        fontSize: 14,
                        marginBottom: 2,
                      }}
                    >
                      {hostName}'s room
                    </div>
                    <div style={{ color: "#d7dadc", fontSize: 12 }}>
                      {playerCount}/{maxPlayers} players · {boards} board
                      {boards > 1 ? "s" : ""} · {speedrun ? "Speedrun" : "Standard"}
                    </div>
                    {expiresLabel && (
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 11,
                          color: "#9ca3af",
                        }}
                      >
                        Expires in {expiresLabel}
                      </div>
                    )}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {adminMode && (
                      <button
                        type="button"
                        onClick={() => handleCloseRoom(code)}
                        className="homeBtn homeBtnOutline"
                        style={{ padding: "6px 10px", fontSize: 12, borderRadius: 6 }}
                      >
                        Close
                      </button>
                    )}
                    {!adminMode && (
                      <button
                        type="button"
                        onClick={() => handleJoin({ code, data })}
                        className="homeBtn homeBtnGreen"
                        style={{ padding: "6px 12px", fontSize: 12, borderRadius: 6 }}
                      >
                        Join
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
          {adminMode && (
            <button
              type="button"
              onClick={handleCloseAllRooms}
              disabled={closingAll || loading || rooms.length === 0}
              className="homeBtn homeBtnOutline homeBtnLg"
              style={{
                width: "100%",
                opacity: closingAll || loading || rooms.length === 0 ? 0.7 : 1,
              }}
            >
              {closingAll ? "Closing rooms..." : "Close all rooms"}
            </button>
          )}

          <button
            type="button"
            onClick={onRequestClose}
            className="homeBtn homeBtnGreen homeBtnLg"
            style={{ width: "100%" }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
