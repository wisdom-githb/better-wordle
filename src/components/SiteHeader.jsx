import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useUserBadges } from "../hooks/useUserBadges";
import { useSubscription } from "../hooks/useSubscription";
import { useDailyResetTimer } from "../hooks/useDailyResetTimer";
import { getAllEarnedSorted } from "../lib/badges";
import AuthModal from "./AuthModal";
import SubscribeModal from "./SubscribeModal";
import HamburgerMenu from "./HamburgerMenu";
import UserCard from "./UserCard";

/**
 * Global site header used across all pages.
 *
 * Layout:
 * Line 1 - BETTER WORDLE centered, hamburger icon on the right.
 * Line 2 - "Reset in" text on the left, Sign in/Sign out and Leaderboard buttons on the right.
 * Line 3 (when signed in) - UserCard only; click navigates to profile.
 */
export default function SiteHeader({ onOpenFeedback, onSignUpComplete }) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const { userBadges } = useUserBadges(user);
  const { isSubscribed } = useSubscription(user);
  const earnedBadges = getAllEarnedSorted(userBadges);
  const resetTime = useDailyResetTimer();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

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

  const handleOpenSubscribe = useCallback(() => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setShowSubscribeModal(true);
    }
  }, [user]);

  const handleCloseSubscribe = useCallback(() => {
    setShowSubscribeModal(false);
  }, []);

  const handleSubscriptionComplete = useCallback(() => {
    setShowSubscribeModal(false);
    // Optionally show a success message or navigate
  }, []);

  return (
    <>
      <header
        style={{
          padding: "10px 16px 8px",
          borderBottom: "1px solid #3a3a3c",
          backgroundColor: "#121213",
          marginBottom: "12px",
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

          <div className="flexRow justifyEnd" style={{ minWidth: 32 }}>
            <HamburgerMenu
              onOpenFeedback={onOpenFeedback || (() => {})}
              onSignUpComplete={onSignUpComplete}
            />
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

        {/* Line 3: Signed in as + UserCard when signed in; click card → profile */}
        {user && (
          <div
            style={{
              marginTop: 6,
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontSize: 12, color: "#d7dadc" }}>Signed in as</span>
            <UserCard
              username={user.displayName || user.email || "Unknown user"}
              onClick={() => navigate("/profile")}
              size="sm"
              earnedBadges={earnedBadges}
            />
            {!isSubscribed && (
              <button
                type="button"
                className="homeBtn"
                onClick={handleOpenSubscribe}
                style={{
                  padding: "4px 12px",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  background: "#6aaa64",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Subscribe
              </button>
            )}
          </div>
        )}
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onRequestClose={handleCloseAuth}
        onSignUpComplete={onSignUpComplete}
      />

      <SubscribeModal
        isOpen={showSubscribeModal}
        onRequestClose={handleCloseSubscribe}
        onSubscriptionComplete={handleSubscriptionComplete}
      />
    </>
  );
}
