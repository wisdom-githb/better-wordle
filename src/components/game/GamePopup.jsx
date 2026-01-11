import React from "react";
import { useNavigate } from "react-router-dom";

export default function GamePopup({
  allSolved,
  boards,
  speedrunEnabled,
  stageElapsedMs,
  popupTotalMs,
  formatElapsed,
  solvedCount,
  mode,
  marathonHasNext,
  turnsUsed,
  maxTurns,
  onShare,
  onClose,
  onNextStage,
  freezeStageTimer,
  isMarathonSpeedrun,
  commitStageIfNeeded,
  isOneVOne,
  oneVOneGameState,
  winner,
  isPlayerHost,
  onRematch,
  onChangeMode,
  canShare = true,
  allowNextStageAfterPopup = true,
}) {
  const navigate = useNavigate();
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNextStage = () => {
    const finalStageMs = freezeStageTimer();
    if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);
    onClose();
    onNextStage();
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.82)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000
      }}
    >
      <div
        style={{
          backgroundColor: "#1a1a1b",
          borderRadius: 16,
          padding: 24,
          maxWidth: 560,
          width: "92vw",
          maxHeight: "80vh",
          overflowY: "auto",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.8)"
        }}
      >
        {isOneVOne ? (() => {
          const isSpeedrun = oneVOneGameState?.speedrun || false;

          // Derive win/lose/tie from winner + player role.
          let resultLabel = "It's a tie!";
          if (winner === 'host' || winner === 'guest') {
            const didPlayerWin = (winner === 'host' && isPlayerHost) || (winner === 'guest' && !isPlayerHost);
            const didPlayerLose = (winner === 'host' && !isPlayerHost) || (winner === 'guest' && isPlayerHost);
            if (didPlayerWin) resultLabel = "You Won!";
            else if (didPlayerLose) resultLabel = "You Lost";
          }

          let titleColor = "#c9b458";
          if (resultLabel === "You Won!") titleColor = "#6aaa64";
          else if (resultLabel === "You Lost") titleColor = "#f06272";

          return (
          <>
            <h2
              style={{
                margin: 0,
                marginBottom: 20,
                fontSize: 24,
                fontWeight: "bold",
                letterSpacing: 1,
                color: titleColor
              }}
            >
              {resultLabel}
            </h2>

            <div style={{ marginBottom: 20, fontSize: 18, color: "#d7dadc" }}>
              {/* Rematch status text for 1v1 */}
              {isOneVOne && oneVOneGameState?.status === 'finished' && (
                <div style={{
                  marginBottom: 12,
                  fontSize: 14,
                  color: "#c9b458",
                }}>
                  {(() => {
                    const isPlayerHostLocal = isPlayerHost;
                    const hostRematch = oneVOneGameState?.hostRematch;
                    const guestRematch = oneVOneGameState?.guestRematch;
                    const myRematch = isPlayerHostLocal ? hostRematch : guestRematch;
                    const opponentRematch = isPlayerHostLocal ? guestRematch : hostRematch;
                    if (myRematch && !opponentRematch) return "Waiting for opponent to accept rematch...";
                    if (!myRematch && opponentRematch) return "Opponent wants a rematch";
                    if (myRematch && opponentRematch) return "Starting rematch...";
                    return null;
                  })()}
                </div>
              )}

              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 16, color: "#818384", marginBottom: 4 }}>
                  {oneVOneGameState?.speedrun ? "Your Time" : "Your Guesses"}
                </div>
                <div style={{ fontSize: 24, color: "#ffffff", fontWeight: "bold" }}>
                  {(() => {
                    if (!oneVOneGameState) return "N/A";
                    if (oneVOneGameState.speedrun) {
                      const myTimeMs = isPlayerHost
                        ? oneVOneGameState.hostTimeMs ?? null
                        : oneVOneGameState.guestTimeMs ?? null;
                      return myTimeMs != null ? formatElapsed(myTimeMs) : "N/A";
                    }
                    const myGuesses = isPlayerHost
                      ? oneVOneGameState.hostGuesses || []
                      : oneVOneGameState.guestGuesses || [];
                    return myGuesses.length;
                  })()}
                </div>
              </div>
              <div style={{ borderTop: "1px solid #3a3a3c", paddingTop: 12 }}>
                <div style={{ fontSize: 16, color: "#818384", marginBottom: 4 }}>
                  {oneVOneGameState?.speedrun ? "Opponent's Time" : "Opponent's Guesses"}
                </div>
                <div style={{ fontSize: 24, color: "#ffffff", fontWeight: "bold" }}>
                  {(() => {
                    if (!oneVOneGameState) return "N/A";
                    if (oneVOneGameState.speedrun) {
                      const opponentTimeMs = isPlayerHost
                        ? oneVOneGameState.guestTimeMs ?? null
                        : oneVOneGameState.hostTimeMs ?? null;
                      return opponentTimeMs != null ? formatElapsed(opponentTimeMs) : "N/A";
                    }
                    const opponentGuesses = isPlayerHost
                      ? oneVOneGameState.guestGuesses || []
                      : oneVOneGameState.hostGuesses || [];
                    return opponentGuesses.length;
                  })()}
                </div>
              </div>
            </div>
          </>
          );
        })() : (
          <>
            <h2
              style={{
                margin: 0,
                marginBottom: 10,
                fontSize: 22,
                fontWeight: "bold",
                letterSpacing: 1,
                color: allSolved ? "#6aaa64" : "#d7dadc"
              }}
            >
              {allSolved ? "Congratulations!" : "Stage ended"}
            </h2>

            {speedrunEnabled && (
              <div style={{ marginBottom: 12, color: "#d7dadc", fontSize: 15 }}>
                <div>Total time: {formatElapsed(popupTotalMs)}</div>
                {mode === "marathon" && (
                  <div>Stage time: {formatElapsed(stageElapsedMs)}</div>
                )}
              </div>
            )}

            <div style={{ marginBottom: 8, fontSize: 16, color: "#d7dadc" }}>
              {allSolved
                ? boards.length === 1
                  ? "You solved the word."
                  : `You solved all ${boards.length} words.`
                : `You solved ${solvedCount} of ${boards.length} word${boards.length > 1 ? "s" : ""}.`}
            </div>

            <div style={{ marginBottom: 14, fontSize: 18, color: "#ffffff", fontWeight: "bold" }}>
              Guesses used: {turnsUsed}/{maxTurns}
            </div>
          </>
        )}

        {!isOneVOne && (
          <>
            <div style={{ marginBottom: 10, color: "#ffffff", fontWeight: "bold" }}>Solutions</div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                justifyContent: "center",
                marginBottom: 16
              }}
            >
              {boards.map((b, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: b.isSolved ? "#6aaa64" : "#3a3a3c",
                    color: "#ffffff",
                    padding: "8px 10px",
                    borderRadius: 8,
                    fontSize: 13
                  }}
                >
                  Board {i + 1}: {b.solution}
                </div>
              ))}
            </div>
          </>
        )}

        {isOneVOne && (oneVOneGameState?.solution || oneVOneGameState?.solutions) && (
          <div style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 8, color: "#ffffff", fontWeight: "bold", fontSize: 16 }}>
              {Array.isArray(oneVOneGameState?.solutions) && oneVOneGameState.solutions.length > 1
                ? "Solutions"
                : "Solution"}
            </div>

            {(() => {
              const solutionList = Array.isArray(oneVOneGameState?.solutions) && oneVOneGameState.solutions.length > 0
                ? oneVOneGameState.solutions
                : oneVOneGameState.solution
                ? [oneVOneGameState.solution]
                : [];

              return (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
                  {solutionList.map((word, idx) => (
                    <div
                      key={idx}
                      style={{
                        backgroundColor: "#6aaa64",
                        color: "#ffffff",
                        padding: "8px 12px",
                        borderRadius: 8,
                        fontSize: 16,
                        fontWeight: "bold",
                        letterSpacing: 2,
                      }}
                    >
                      {solutionList.length > 1 ? `B${idx + 1}: ` : ""}
                      {word.toUpperCase()}
                    </div>
                  ))}
                </div>
              );
            })()}
          </div>
        )}

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {!isOneVOne && canShare && (
            <button
              onClick={onShare}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "12px 0",
                borderRadius: 10,
                border: "none",
                background: "#6aaa64",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase"
              }}
            >
              Share
            </button>
          )}

          {isOneVOne && onRematch && (
            <button
              onClick={onRematch}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "12px 0",
                borderRadius: 10,
                border: "none",
                background: "#6aaa64",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase"
              }}
            >
              Rematch
            </button>
          )}

          {isOneVOne && isPlayerHost && onChangeMode && (
            <button
              onClick={onChangeMode}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "12px 0",
                borderRadius: 10,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Change Mode
            </button>
          )}

          <button
            onClick={onClose}
            style={{
              flex: 1,
              minWidth: 160,
              padding: "12px 0",
              borderRadius: 10,
              border: "1px solid #3a3a3c",
              background: "transparent",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase"
            }}
          >
            Close
          </button>

          <button
            onClick={() => navigate("/")}
            style={{
              flex: 1,
              minWidth: 160,
              padding: "12px 0",
              borderRadius: 10,
              border: "none",
              background: "#c9b458",
              color: "#121213",
              fontSize: 14,
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: 1,
              textTransform: "uppercase"
            }}
          >
            Home
          </button>

          {mode === "marathon" && marathonHasNext && allowNextStageAfterPopup && (
            <button
              onClick={handleNextStage}
              style={{
                flex: 1,
                minWidth: 160,
                padding: "12px 0",
                borderRadius: 10,
                border: "none",
                background: "#6aaa64",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
                letterSpacing: 1,
                textTransform: "uppercase"
              }}
            >
              Next Stage
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
