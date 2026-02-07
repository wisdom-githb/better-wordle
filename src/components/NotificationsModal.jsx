import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import UserCardWithBadges from "./UserCardWithBadges";
import { useAuth } from "../hooks/useAuth";
import { useNotificationSeen } from "../hooks/useNotificationSeen";
import { CHALLENGE_EXPIRY_MS } from "../hooks/useNotificationSeen";

export default function NotificationsModal({ isOpen, onRequestClose, onViewAllNotifications }) {
  const navigate = useNavigate();
  const { user, isVerifiedUser, friendRequests, incomingChallenges, sentChallenges, acceptFriendRequest, declineFriendRequest, acceptChallenge, dismissChallenge, cancelSentChallenge } = useAuth();
  const { markNotificationsSeen } = useNotificationSeen(user);

  useEffect(() => {
    if (isOpen && user?.uid) {
      markNotificationsSeen();
    }
  }, [isOpen, user?.uid, markNotificationsSeen]);

  const isChallengeExpired = (challenge) => {
    const createdAt = challenge.createdAt || 0;
    return createdAt + CHALLENGE_EXPIRY_MS < Date.now();
  };

  const handleAcceptChallenge = async (ch) => {
    try {
      const data = await acceptChallenge(ch.id);
      onRequestClose?.();
      const boards = data.boards || 1;
      const speedrun = !!data.speedrun;
      navigate(`/game?mode=multiplayer&code=${data.gameCode}&speedrun=${speedrun}&boards=${boards}`);
    } catch (err) {
      alert(err?.message || "Failed to accept challenge");
    }
  };

  if (!user) return null;

  if (!isVerifiedUser) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div style={{ padding: "24px", width: "100%", boxSizing: "border-box" }}>
          <h2 style={{ margin: "0 0 16px 0", fontSize: "22px", fontWeight: "bold" }}>
            Notifications
          </h2>
          <p style={{ marginBottom: "16px", color: "#d7dadc", fontSize: "14px" }}>
            Verify your email or sign in with Google to see notifications.
          </p>
          <button
            type="button"
            onClick={onRequestClose}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </Modal>
    );
  }

  const hasFriendRequests = friendRequests && friendRequests.length > 0;
  const hasChallenges = incomingChallenges && incomingChallenges.length > 0;
  const hasSentChallenges = sentChallenges && sentChallenges.length > 0;
  const hasAny = hasFriendRequests || hasChallenges || hasSentChallenges;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={{ padding: "24px", maxHeight: "85vh", overflowY: "auto", width: "100%", boxSizing: "border-box" }}>
        <h2 style={{ margin: "0 0 24px 0", fontSize: "24px", fontWeight: "bold" }}>
          Notifications
        </h2>

        {!hasAny ? (
          <p style={{ color: "#818384", fontSize: "14px", marginBottom: "20px" }}>
            No notifications right now.
          </p>
        ) : (
          <>
            {/* Friend requests */}
            {hasFriendRequests && (
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
                  Friend Requests ({friendRequests.length})
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #3a3a3c" }}>
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
                        gap: "10px",
                      }}
                    >
                      <div style={{ textAlign: "left", flex: 1 }}>
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>{request.fromName}</span>
                        <div style={{ color: "#818384", fontSize: "11px", marginTop: "2px" }}>
                          wants to be friends
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          type="button"
                          onClick={() => acceptFriendRequest(request.id, request.fromName)}
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
                          Accept
                        </button>
                        <button
                          type="button"
                          onClick={() => declineFriendRequest(request.id)}
                          style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "1px solid #3a3a3c",
                            background: "transparent",
                            color: "#ffffff",
                            fontWeight: "bold",
                            fontSize: "11px",
                            cursor: "pointer",
                          }}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges (invites) */}
            {hasChallenges && (
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
                  Challenges
                </h3>
                <p style={{ margin: "0 0 12px 0", fontSize: 11, color: "#818384", textAlign: "left" }}>
                  Challenges expire 30 minutes after they&apos;re sent. Dismiss expired ones to clear them.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #3a3a3c" }}>
                  {incomingChallenges.map((ch) => {
                    const expired = isChallengeExpired(ch);
                    return (
                      <div
                        key={ch.id}
                        style={{
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid #3a3a3c",
                          background: "#2b2b2e",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div style={{ textAlign: "left", flex: 1 }}>
                          <div style={{ marginBottom: 2 }}>
                            <UserCardWithBadges
                              userId={ch.fromUserId}
                              username={ch.fromUserName || "Unknown"}
                              size="sm"
                            />
                          </div>
                          <div style={{ color: "#d7dadc", fontSize: 12 }}>
                            {ch.boards || 1} board{(ch.boards || 1) > 1 ? "s" : ""} · {ch.speedrun ? "Speedrun" : "Standard"}
                            <span
                              style={{
                                marginLeft: 8,
                                fontSize: 11,
                                color: expired ? "#818384" : "#6aaa64",
                                fontWeight: "600",
                              }}
                            >
                              {expired ? "Expired" : "Active"}
                            </span>
                          </div>
                        </div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          {!expired ? (
                            <>
                              <button
                                type="button"
                                onClick={() => handleAcceptChallenge(ch)}
                                style={{
                                  padding: "6px 10px",
                                  borderRadius: 6,
                                  border: "none",
                                  background: "#6aaa64",
                                  color: "#ffffff",
                                  fontWeight: "bold",
                                  fontSize: 11,
                                  cursor: "pointer",
                                }}
                              >
                                Accept
                              </button>
                              <button
                                type="button"
                                onClick={async () => {
                                  try {
                                    await dismissChallenge(ch.id, ch.gameCode);
                                  } catch (err) {
                                    alert(err?.message || "Failed to dismiss");
                                  }
                                }}
                                style={{
                                  padding: "6px 10px",
                                  borderRadius: 6,
                                  border: "1px solid #3a3a3c",
                                  background: "transparent",
                                  color: "#ffffff",
                                  fontWeight: "bold",
                                  fontSize: 11,
                                  cursor: "pointer",
                                }}
                              >
                                Dismiss
                              </button>
                            </>
                          ) : (
                            <button
                              type="button"
                              onClick={async () => {
                                try {
                                  await dismissChallenge(ch.id, ch.gameCode);
                                } catch (err) {
                                  alert(err?.message || "Failed to dismiss");
                                }
                              }}
                              style={{
                                padding: "6px 10px",
                                borderRadius: 6,
                                border: "1px solid #3a3a3c",
                                background: "transparent",
                                color: "#818384",
                                fontWeight: "bold",
                                fontSize: 11,
                                cursor: "pointer",
                              }}
                            >
                              Dismiss
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Sent challenges (optional subsection with Cancel only) */}
            {hasSentChallenges && (
              <div style={{ marginBottom: "24px" }}>
                <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
                  Sent challenges
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #3a3a3c" }}>
                  {sentChallenges.map((ch) => {
                    const expired = isChallengeExpired(ch);
                    return (
                      <div
                        key={ch.id}
                        style={{
                          padding: "10px 12px",
                          borderRadius: 8,
                          border: "1px solid #3a3a3c",
                          background: "#2b2b2e",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <div style={{ textAlign: "left", flex: 1 }}>
                          <div style={{ color: "#ffffff", fontWeight: "600", fontSize: 13 }}>
                            Challenge to {ch.toUserName || "friend"}
                          </div>
                          <div style={{ color: "#d7dadc", fontSize: 12 }}>
                            {ch.boards || 1} board{(ch.boards || 1) > 1 ? "s" : ""} · {ch.speedrun ? "Speedrun" : "Standard"}
                            <span
                              style={{
                                marginLeft: 8,
                                fontSize: 11,
                                color: expired ? "#818384" : "#6aaa64",
                                fontWeight: "600",
                              }}
                            >
                              {expired ? "Expired" : "Active"}
                            </span>
                          </div>
                        </div>
                        {expired ? (
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                await cancelSentChallenge(ch.gameCode || ch.id);
                              } catch (err) {
                                alert(err?.message || "Failed to dismiss");
                              }
                            }}
                            style={{
                              padding: "6px 10px",
                              borderRadius: 6,
                              border: "1px solid #3a3a3c",
                              background: "transparent",
                              color: "#818384",
                              fontWeight: "bold",
                              fontSize: 11,
                              cursor: "pointer",
                            }}
                          >
                            Dismiss
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={async () => {
                              try {
                                await cancelSentChallenge(ch.gameCode || ch.id);
                              } catch (err) {
                                alert(err?.message || "Failed to cancel");
                              }
                            }}
                            style={{
                              padding: "6px 10px",
                              borderRadius: 6,
                              border: "1px solid #3a3a3c",
                              background: "transparent",
                              color: "#ffffff",
                              fontWeight: "bold",
                              fontSize: 11,
                              cursor: "pointer",
                            }}
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: 8 }}>
          <button
            type="button"
            onClick={() => {
              // Parent (SiteHeader) navigates then closes modal on next tick
              onViewAllNotifications?.();
            }}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "1px solid #6aaa64",
              background: "transparent",
              color: "#6aaa64",
              fontWeight: "bold",
              fontSize: 13,
              cursor: "pointer",
              textAlign: "center",
              boxSizing: "border-box",
            }}
          >
            View all notifications
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}
