import React from "react";
import { useAuth } from "../../hooks/useAuth";
import AuthModal from "../AuthModal";
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
  onBack
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

        <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
          <div style={{ 
            fontSize: "10px", 
            color: "#818384", 
            display: "flex", 
            alignItems: "center",
            whiteSpace: "nowrap"
          }}>
            Reset in: {resetTime}
          </div>
          {user && (
            <div style={{ 
              fontSize: "11px", 
              color: "#d7dadc", 
              display: "flex", 
              alignItems: "center",
              whiteSpace: "nowrap"
            }}>
              Logged in with {user.email || user.displayName || "Unknown"}
            </div>
          )}
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
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
          </div>
          <div style={{ fontSize: 12, color: "#d7dadc", whiteSpace: "nowrap", textAlign: "right" }}>
            <div>Boards: {numBoards}</div>
            <div>Max turns: {maxTurns}</div>
            {speedrunEnabled && (
              <>
                <div>Stage: {formatElapsed(stageElapsedMs)}</div>
                <div>Total: {formatElapsed(displayTotalMs)}</div>
              </>
            )}
          </div>
        </div>
      </header>

      <AuthModal
        isOpen={showAuthModal}
        onRequestClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
