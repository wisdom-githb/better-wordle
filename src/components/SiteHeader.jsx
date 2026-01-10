import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useDailyResetTimer } from "../hooks/useDailyResetTimer";
import AuthModal from "./AuthModal";
import HamburgerMenu from "./HamburgerMenu";

/**
 * Global site header used across all pages.
 *
 * Layout:
 * Line 1 - BETTER WORDLE centered, hamburger icon on the right.
 * Line 2 - "Reset in" text on the left, Sign in/Sign out and Leaderboard buttons on the right.
 *
 * No username text is displayed in the header.
 */
export default function SiteHeader({ onOpenFeedback, onSignUpComplete }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const resetTime = useDailyResetTimer();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuth = useCallback(() => {
    setShowAuthModal(true);
  }, []);

  const handleCloseAuth = useCallback(() => {
    setShowAuthModal(false);
  }, []);

  const handleLeaderboard = useCallback(() => {
    navigate("/leaderboard");
  }, [navigate]);

  const handleHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSignOut = useCallback(async () => {
    try {
      await signOut();
    } catch (e) {
      // Best-effort; avoid breaking header on sign-out failure.
      console.error("Failed to sign out", e);
    }
  }, [signOut]);

  return (
    <>
      <header
        style={{
          padding: "10px 16px 8px",
          borderBottom: "1px solid #3a3a3c",
          backgroundColor: "#121213",
        }}
      >
        {/* Line 1: centered title with hamburger on the right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <button
            type="button"
            onClick={handleHome}
            aria-label="Home"
            style={{
              width: 32,
              height: 32,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 4,
              border: "1px solid #3a3a3c",
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 10.5L12 3L20 10.5V20H14V14H10V20H4V10.5Z"
                stroke="#ffffff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
              letterSpacing: 2,
              fontSize: 18,
            }}
          >
            BETTER WORDLE
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", minWidth: 32 }}>
            <HamburgerMenu onOpenFeedback={onOpenFeedback || (() => {})} />
          </div>
        </div>

        {/* Line 2: reset timer on left, auth + leaderboard on right */}
        <div
          style={{
            marginTop: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              fontSize: 12,
              color: "#d7dadc",
              whiteSpace: "nowrap",
            }}
          >
            Reset in: {resetTime}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginLeft: "auto",
            }}
          >
            <button
              type="button"
              className="homeBtn homeBtnOutline"
              onClick={handleLeaderboard}
              style={{
                padding: "4px 10px",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Leaderboard
            </button>

            {user ? (
              <button
                type="button"
                className="homeBtn homeBtnOutline"
                onClick={handleSignOut}
                style={{
                  padding: "4px 10px",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Sign Out
              </button>
            ) : (
              <button
                type="button"
                className="homeBtn homeBtnOutline"
                onClick={handleOpenAuth}
                style={{
                  padding: "4px 10px",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>

        {/* Line 3: signed-in username + profile link (only when user is signed in) */}
        {user && (
          <div
            style={{
              marginTop: 6,
              fontSize: 12,
              color: "#d7dadc",
              lineHeight: 1.4,
            }}
          >
            Signed in as {user.displayName || user.email || "Unknown user"}.{" "}
            (
            <button
              type="button"
              onClick={() => navigate("/profile")}
              style={{
                background: "none",
                border: "none",
                padding: 0,
                margin: 0,
                color: "#93c5fd",
                textDecoration: "underline",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              Change username
            </button>
            )
          </div>
        )}
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onRequestClose={handleCloseAuth}
        onSignUpComplete={onSignUpComplete}
      />
    </>
  );
}
