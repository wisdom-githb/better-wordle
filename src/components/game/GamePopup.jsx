import React from "react";
import { useNavigate } from "react-router-dom";

export default function GamePopup({
  allSolved,
  boards,
  score,
  speedrunEnabled,
  stageElapsedMs,
  popupTotalMs,
  formatElapsed,
  solvedCount,
  mode,
  marathonHasNext,
  onShare,
  onClose,
  onNextStage,
  freezeStageTimer,
  isMarathonSpeedrun,
  commitStageIfNeeded
}) {
  const navigate = useNavigate();

  const handleNextStage = () => {
    const finalStageMs = freezeStageTimer();
    if (isMarathonSpeedrun) commitStageIfNeeded(finalStageMs);
    onClose();
    onNextStage();
  };

  return (
    <div
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
            <div>Stage time: {formatElapsed(stageElapsedMs)}</div>
          </div>
        )}

        <div style={{ marginBottom: 14, fontSize: 16, color: "#d7dadc" }}>
          {allSolved
            ? `You solved all ${boards.length} word${boards.length > 1 ? "s" : ""}.`
            : `You solved ${solvedCount} of ${boards.length} word${boards.length > 1 ? "s" : ""}.`}
        </div>

        <div style={{ marginBottom: 14, fontSize: 20, color: "#ffffff", fontWeight: "bold" }}>
          Score: {score}
        </div>

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

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
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

          {mode === "marathon" && marathonHasNext && (
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
              Next stage
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
