import React, { useState, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Modal from "./Modal";

const FriendsModal = lazy(() => import("./FriendsModal"));

export default function HamburgerMenu({ onOpenFeedback }) {
  const navigate = useNavigate();
  const {
    user,
    friendRequests,
    incomingChallenges,
    sentChallenges,
    isVerifiedUser,
    acceptChallenge,
    dismissChallenge,
    cancelSentChallenge,
  } = useAuth();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [showChallengesModal, setShowChallengesModal] = useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <button
          className="homeBtn homeBtnOutline"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          style={{
            padding: "4px 6px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "transparent",
            color: "#ffffff",
            cursor: "pointer"
          }}
          title="Menu"
        >
          ☰
        </button>
        {showHamburgerMenu && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              right: 0,
              background: "#2b2b2e",
              border: "1px solid #3a3a3c",
              borderRadius: "8px",
              minWidth: "140px",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <button
              onClick={() => {
                navigate('/');
                setShowHamburgerMenu(false);
              }}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "13px",
                textAlign: "left",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                transition: "all 0.2s ease",
                borderBottom: "1px solid #3a3a3c"
              }}
              onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              Home
            </button>
            {user && (
              <button
                onClick={() => {
                  navigate('/profile');
                  setShowHamburgerMenu(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                  borderBottom: "1px solid #3a3a3c"
                }}
                onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                Profile
              </button>
            )}
            {user && (
              <button
                onClick={() => {
                  if (!isVerifiedUser) {
                    alert('Verify your email or sign in with Google to use friends.');
                    setShowHamburgerMenu(false);
                    return;
                  }
                  setShowFriendsModal(true);
                  setShowHamburgerMenu(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                  borderBottom: "1px solid #3a3a3c",
                  position: "relative",
                  display: "flex",
                  alignItems: "center"
                }}
                onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                Friends
                {friendRequests && friendRequests.length > 0 && (
                  <div style={{
                    marginLeft: "8px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ef5350",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {friendRequests.length}
                  </div>
                )}
              </button>
            )}
            {user && (
              <button
                onClick={() => {
                  if (!isVerifiedUser) {
                    alert('Verify your email or sign in with Google to use challenges.');
                    setShowHamburgerMenu(false);
                    return;
                  }
                  setShowChallengesModal(true);
                  setShowHamburgerMenu(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                  borderBottom: "1px solid #3a3a3c",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.1)")}
                onMouseLeave={(e) => (e.target.style.background = "transparent")}
              >
                Challenges
                {incomingChallenges && incomingChallenges.length > 0 && (
                  <div
                    style={{
                      marginLeft: "8px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      background: "#c9b458",
                      color: "#121213",
                      fontSize: "11px",
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {incomingChallenges.length}
                  </div>
                )}
              </button>
            )}
            <button
              onClick={() => {
                onOpenFeedback();
                setShowHamburgerMenu(false);
              }}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "13px",
                textAlign: "left",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              Feedback
            </button>
          </div>
        )}
      </div>

      {showHamburgerMenu && (
        <div
          onClick={() => setShowHamburgerMenu(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
        />
      )}

      <Suspense fallback={null}>
        <FriendsModal
          isOpen={showFriendsModal}
          onRequestClose={() => setShowFriendsModal(false)}
        />
      </Suspense>

      {/* Incoming 1v1 challenges modal */}
      <Modal
        isOpen={showChallengesModal}
        onRequestClose={() => setShowChallengesModal(false)}
      >
        <div
          style={{
            padding: "24px",
            width: "100%",
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
            Challenges
          </h2>

          {(!sentChallenges || sentChallenges.length === 0) && (!incomingChallenges || incomingChallenges.length === 0) ? (
            <div
              style={{
                padding: "24px 8px 16px",
                color: "#818384",
                fontSize: 14,
              }}
            >
              You have no challenges right now.
            </div>
          ) : (
            <>
              {/* Sent challenges */}
              <h3
                style={{
                  margin: "8px 0 8px",
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#d7dadc",
                  textAlign: "left",
                }}
              >
                Sent
              </h3>
              {(!sentChallenges || sentChallenges.length === 0) ? (
                <div
                  style={{
                    padding: "8px 0 12px",
                    color: "#818384",
                    fontSize: 12,
                  }}
                >
                  You haven't sent any challenges yet.
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxHeight: "160px",
                    overflowY: "auto",
                    marginBottom: "12px",
                  }}
                >
                  {sentChallenges.map((ch) => (
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
                        <div style={{ color: "#ffffff", fontWeight: 600, marginBottom: 2 }}>
                          {ch.toUserName || ch.friendName || "Unknown friend"}
                        </div>
                        <div style={{ color: "#d7dadc", fontSize: 12 }}>
                          {ch.boards || 1} board{(ch.boards || 1) > 1 ? "s" : ""} · {ch.speedrun ? "Speedrun" : "Standard"}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          onClick={async () => {
                            try {
                              await cancelSentChallenge(ch.gameCode || ch.id);
                            } catch (err) {
                              // eslint-disable-next-line no-alert
                              alert(err?.message || 'Failed to cancel challenge');
                            }
                          }}
                          className="homeBtn homeBtnOutline"
                          style={{
                            padding: "6px 10px",
                            fontSize: 11,
                            borderRadius: 6,
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Received challenges */}
              <h3
                style={{
                  margin: "8px 0 8px",
                  fontSize: 14,
                  fontWeight: "bold",
                  color: "#d7dadc",
                  textAlign: "left",
                }}
              >
                Received
              </h3>
              {(!incomingChallenges || incomingChallenges.length === 0) ? (
                <div
                  style={{
                    padding: "8px 0 12px",
                    color: "#818384",
                    fontSize: 12,
                  }}
                >
                  You have no incoming challenges.
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxHeight: "160px",
                    overflowY: "auto",
                    marginBottom: "16px",
                  }}
                >
                  {incomingChallenges.map((ch) => (
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
                        <div style={{ color: "#ffffff", fontWeight: 600, marginBottom: 2 }}>
                          {ch.fromUserName || "Unknown"}
                        </div>
                        <div style={{ color: "#d7dadc", fontSize: 12 }}>
                          {ch.boards || 1} board{(ch.boards || 1) > 1 ? "s" : ""} · {ch.speedrun ? "Speedrun" : "Standard"}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "6px" }}>
                        <button
                          onClick={async () => {
                            try {
                              const data = await acceptChallenge(ch.id);
                              setShowChallengesModal(false);
                              // Navigate into the waiting room as the guest.
                              const boards = data.boards || 1;
                              const speedrun = !!data.speedrun;
                              navigate(
                                `/game?mode=1v1&code=${data.gameCode}&speedrun=${speedrun}&boards=${boards}`,
                              );
                            } catch (err) {
                              // eslint-disable-next-line no-alert
                              alert(err?.message || 'Failed to accept challenge');
                            }
                          }}
                          className="homeBtn homeBtnGreen"
                          style={{
                            padding: "6px 10px",
                            fontSize: 11,
                            borderRadius: 6,
                          }}
                        >
                          Accept
                        </button>
                        <button
                          onClick={async () => {
                            try {
                              await dismissChallenge(ch.id, ch.gameCode);
                            } catch (err) {
                              // eslint-disable-next-line no-alert
                              alert(err?.message || 'Failed to dismiss challenge');
                            }
                          }}
                          className="homeBtn homeBtnOutline"
                          style={{
                            padding: "6px 10px",
                            fontSize: 11,
                            borderRadius: 6,
                          }}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <button
            onClick={() => setShowChallengesModal(false)}
            className="homeBtn homeBtnGreen homeBtnLg"
            style={{ marginTop: 4 }}
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
