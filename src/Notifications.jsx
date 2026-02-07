import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import UserCardWithBadges from "./components/UserCardWithBadges";
import { useAuth } from "./hooks/useAuth";
import { useNotificationSeen } from "./hooks/useNotificationSeen";
import { CHALLENGE_EXPIRY_MS } from "./hooks/useNotificationSeen";

function Notifications() {
  const navigate = useNavigate();
  const {
    user,
    loading,
    isVerifiedUser,
    friendRequests,
    incomingChallenges,
    sentChallenges,
    acceptFriendRequest,
    declineFriendRequest,
    acceptChallenge,
    dismissChallenge,
    cancelSentChallenge,
  } = useAuth();
  const { markNotificationsSeen } = useNotificationSeen(user);

  useEffect(() => {
    if (user?.uid) {
      markNotificationsSeen();
    }
  }, [user?.uid, markNotificationsSeen]);

  const isChallengeExpired = (challenge) => {
    const createdAt = challenge.createdAt || 0;
    return createdAt + CHALLENGE_EXPIRY_MS < Date.now();
  };

  const handleAcceptChallenge = async (ch) => {
    try {
      const data = await acceptChallenge(ch.id);
      const boards = data.boards || 1;
      const speedrun = !!data.speedrun;
      navigate(`/game?mode=multiplayer&code=${data.gameCode}&speedrun=${speedrun}&boards=${boards}`);
    } catch (err) {
      alert(err?.message || "Failed to accept challenge");
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  if (!user) return null;

  if (!isVerifiedUser) {
    return (
      <>
        <SiteHeader onOpenFeedback={() => {}} />
        <main style={{ padding: "24px 16px", maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>Notifications</h1>
          <p style={{ color: "#d7dadc", fontSize: 14 }}>
            Verify your email or sign in with Google to see notifications.
          </p>
        </main>
      </>
    );
  }

  const hasFriendRequests = friendRequests && friendRequests.length > 0;
  const hasChallenges = incomingChallenges && incomingChallenges.length > 0;
  const hasSentChallenges = sentChallenges && sentChallenges.length > 0;
  const hasAny = hasFriendRequests || hasChallenges || hasSentChallenges;

  return (
    <>
      <SiteHeader onOpenFeedback={() => {}} />
      <main style={{ padding: "24px 16px", maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>All Notifications</h1>

        {!hasAny ? (
          <p style={{ color: "#818384", fontSize: 14 }}>No notifications</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {/* Friend requests */}
            {hasFriendRequests && (
              <section>
                <h2 style={{ fontSize: 18, fontWeight: "bold", color: "#d7dadc", marginBottom: 12 }}>
                  Friend Requests ({friendRequests.length})
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {friendRequests.map((request) => (
                    <div
                      key={request.id}
                      style={{
                        padding: "12px 14px",
                        background: "#2b2b2e",
                        borderRadius: 8,
                        border: "1px solid #6aaa64",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <div style={{ textAlign: "left", flex: 1 }}>
                        <span style={{ color: "#ffffff", fontWeight: "600" }}>{request.fromName}</span>
                        <div style={{ color: "#818384", fontSize: 11, marginTop: 2 }}>
                          wants to be friends
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button
                          type="button"
                          onClick={() => acceptFriendRequest(request.id, request.fromName)}
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
                          onClick={() => declineFriendRequest(request.id)}
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
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {hasChallenges && (
              <section>
                <h2 style={{ fontSize: 18, fontWeight: "bold", color: "#d7dadc", marginBottom: 4 }}>
                  Challenges
                </h2>
                <p style={{ fontSize: 12, color: "#818384", marginBottom: 12 }}>
                  Challenges expire 30 minutes after they&apos;re sent. Dismiss expired ones to clear them.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                          gap: 10,
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
                        <div style={{ display: "flex", gap: 6 }}>
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
              </section>
            )}

            {/* Sent challenges */}
            {hasSentChallenges && (
              <section>
                <h2 style={{ fontSize: 18, fontWeight: "bold", color: "#d7dadc", marginBottom: 12 }}>
                  Sent challenges
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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
                          gap: 10,
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
              </section>
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default Notifications;
