import React from "react";
import Modal from "./Modal";
import { useAuth } from "../hooks/useAuth";
import { useOneVOneGame } from "../hooks/useOneVOneGame";
import { useTimedMessage } from "../hooks/useTimedMessage";
import GameToast from "./game/GameToast";
import { useNavigate } from "react-router-dom";

const ONE_V_ONE_BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

export default function FriendsModal({ isOpen, onRequestClose }) {
  const navigate = useNavigate();
  const { message, setTimedMessage } = useTimedMessage("");
  const { 
    user,
    friends,
    friendRequests,
    incomingChallenges,
    acceptFriendRequest,
    declineFriendRequest,
    removeFriend,
    isVerifiedUser,
    sendChallenge,
  } = useAuth();

  // Lightweight 1v1 host hook used purely to create games for challenges.
  const oneVOneHost = useOneVOneGame(null, true, false);

  const [selectedFriendForChallenge, setSelectedFriendForChallenge] = React.useState(null);
  const [challengeBoards, setChallengeBoards] = React.useState(1);
  const [challengeSpeedrun, setChallengeSpeedrun] = React.useState(false);
  const [isChallengeConfigOpen, setIsChallengeConfigOpen] = React.useState(false);
  if (!isVerifiedUser) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2 style={{ margin: "0 0 16px 0", fontSize: "22px", fontWeight: "bold" }}>
            Verify your account
          </h2>
          <p style={{ marginBottom: "16px", color: "#d7dadc", fontSize: "14px" }}>
            Friends are only available for verified accounts.
            Please verify your email or sign in with Google to use this feature.
          </p>
          <button
            onClick={onRequestClose}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "13px",
              cursor: "pointer",
              letterSpacing: "0.5px"
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {/* Global toast for friends/challenges actions */}
      <GameToast message={message} />
      <div
        style={{
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2 style={{ margin: "0 0 24px 0", fontSize: "24px", fontWeight: "bold" }}>
          Friends & Requests
        </h2>

        {/* Friend Requests Section */}
        {friendRequests && friendRequests.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
              Friend Requests ({friendRequests.length})
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "16px",
                borderBottom: "1px solid #3a3a3c",
                paddingBottom: "16px"
              }}
            >
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  style={{
                    padding: "12px 14px",
                    background: "#2b2b2e",
                    borderRadius: "8px",
                    border: "1px solid #6aaa64",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <span style={{ color: "#ffffff", fontWeight: "600" }}>
                      {request.fromName}
                    </span>
                    <div style={{ color: "#818384", fontSize: "11px", marginTop: "2px" }}>
                      wants to be friends
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => acceptFriendRequest(request.id, request.fromName)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#6aaa64",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer"
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => declineFriendRequest(request.id)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #3a3a3c",
                        background: "transparent",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer"
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Friends Section */}
        <div>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
            Friends ({friends?.length || 0})
          </h3>
          {friends && friends.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxHeight: "300px",
                overflowY: "auto",
                marginBottom: "20px"
              }}
            >
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  style={{
                    padding: "14px 16px",
                    background: "#2b2b2e",
                    borderRadius: "8px",
                    border: "1px solid #3a3a3c",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ color: "#ffffff", fontWeight: "600" }}>
                    {friend.name}
                  </span>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => {
                        setSelectedFriendForChallenge(friend);
                        setChallengeBoards(1);
                        setChallengeSpeedrun(false);
                        setIsChallengeConfigOpen(true);
                      }}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#6aaa64",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer",
                      }}
                    >
                      Challenge
                    </button>
                    <button
                      onClick={() => removeFriend(friend.id)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #3a3a3c",
                        background: "transparent",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer"
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: "32px 16px",
                color: "#818384",
                fontSize: "14px",
                marginBottom: "20px"
              }}
            >
              No friends yet. Send friend requests while playing 1v1 mode!
            </div>
          )}
        </div>

        <button
          onClick={onRequestClose}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#6aaa64",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
            letterSpacing: "0.5px"
          }}
        >
          Close
        </button>
      </div>

      {/* 1v1 Challenge configuration modal (per-friend) */}
      <Modal
        isOpen={isChallengeConfigOpen && !!selectedFriendForChallenge}
        onRequestClose={() => setIsChallengeConfigOpen(false)}
      >
        <div style={{ padding: "24px" }}>
          <h2
            style={{
              margin: 0,
              marginBottom: "24px",
              fontSize: 20,
              fontWeight: "bold",
              color: "#ffffff",
            }}
          >
            1v1 Game Configuration
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#d7dadc",
                  fontSize: 14,
                }}
              >
                Number of Boards
              </label>
              <select
                value={challengeBoards}
                onChange={(e) => setChallengeBoards(parseInt(e.target.value, 10))}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 6,
                  border: "1px solid #3a3a3c",
                  background: "#1a1a1b",
                  color: "#ffffff",
                  fontSize: 14,
                  cursor: "pointer",
                }}
              >
                {ONE_V_ONE_BOARD_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <input
                id="challenge-speedrun-checkbox"
                type="checkbox"
                checked={challengeSpeedrun}
                onChange={(e) => setChallengeSpeedrun(e.target.checked)}
                style={{ width: 18, height: 18, cursor: "pointer" }}
              />
              <label
                htmlFor="challenge-speedrun-checkbox"
                style={{ color: "#d7dadc", fontSize: 14, cursor: "pointer" }}
              >
                Speedrun Mode (Unlimited guesses, timed)
              </label>
            </div>

            <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
              <button
                onClick={() => setIsChallengeConfigOpen(false)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 8,
                  border: "1px solid #3a3a3c",
                  background: "transparent",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  if (!selectedFriendForChallenge || !user) return;
                  try {
                    const code = await oneVOneHost.createGame({ speedrun: challengeSpeedrun });
                    const ok = await sendChallenge(
                      selectedFriendForChallenge.id,
                      selectedFriendForChallenge.name,
                      code,
                      challengeBoards,
                      challengeSpeedrun,
                    );

                    if (!ok) {
                      // A pending challenge already exists between these two users.
                      setTimedMessage(
                        "A challenge between you and this friend is already pending. Please accept or dismiss it before sending another.",
                        5000,
                      );
                      return;
                    }

                    setIsChallengeConfigOpen(false);
                    onRequestClose?.();
                    // Send challenger to the 1v1 waiting room for this challenge.
                    navigate(
                      `/game?mode=1v1&code=${code}&host=true&speedrun=${challengeSpeedrun}&boards=${challengeBoards}`,
                    );
                  } catch (err) {
                    setTimedMessage(err?.message || "Failed to create challenge", 5000);
                  }
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: 8,
                  border: "none",
                  background: "#6aaa64",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Challenge
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Modal>
  );
}
