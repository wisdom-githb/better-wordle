import React from "react";
import { useAuth } from "../../hooks/useAuth";
import AuthModal from "../AuthModal";
import HamburgerMenu from "../HamburgerMenu";
import { useDailyResetTimer } from "../../hooks/useDailyResetTimer";

export default function GameHeader({
  mode,
  numBoards,
  speedrunEnabled,
  solutionsText,
  maxTurns,
  stageElapsedMs,
  displayTotalMs,
  formatElapsed,
  onBack,
  onOpenFeedback
}) {
  const [showAuthModal, setShowAuthModal] = React.useState(false);
  const { user, signOut } = useAuth();
  const resetTime = useDailyResetTimer();

  return (
    <>
      <header
        style={{
          padding: "12px 16px",
          borderBottom: "1px solid #3a3a3c",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12
        }}
      >
        <button
          onClick={onBack}
          style={{
            border: "none",
            background: "transparent",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: 16,
            whiteSpace: "nowrap"
          }}
        >
          ← Home
        </button>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: "bold", letterSpacing: 2 }}>
            {mode === "marathon" ? `MARATHON (${numBoards} boards)` : "DAILY GAME"}
            {speedrunEnabled ? " · SPEEDRUN" : ""}
          </div>

          <div
            style={{
              marginTop: 4,
              fontSize: 12,
              color: "#d7dadc",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            title={solutionsText}
          >
            Solution{numBoards > 1 ? "s" : ""}: {solutionsText}
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center", flexShrink: 0 }}>
          <div style={{ fontSize: 11, color: "#818384", whiteSpace: "nowrap" }}>
            Reset: {resetTime} | {numBoards}B {maxTurns}T
          </div>
          {user && (
            <div style={{ 
              fontSize: "10px", 
              color: "#d7dadc",
              whiteSpace: "nowrap"
            }}>
              {user.displayName || user.email?.split('@')[0]}
            </div>
          )}
          {user ? (
            <button
              onClick={signOut}
              style={{
                padding: "4px 8px",
                borderRadius: 4,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: "bold",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              style={{
                padding: "4px 8px",
                borderRadius: 4,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontSize: 11,
                fontWeight: "bold",
                cursor: "pointer",
                whiteSpace: "nowrap"
              }}
            >
              Sign In
            </button>
          )}
          {onOpenFeedback && <HamburgerMenu onOpenFeedback={onOpenFeedback} />}
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onRequestClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
