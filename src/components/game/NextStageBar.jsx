import React from "react";

export default function NextStageBar({ marathonNextBoards, onNextStage }) {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 190,
        zIndex: 1200,
        padding: "10px 12px",
        background: "rgba(18,18,19,0.92)",
        borderTop: "1px solid #3a3a3c"
      }}
    >
      <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", gap: 10, alignItems: "center" }}>
        <div style={{ color: "#d7dadc", fontSize: 13 }}>Stage cleared. Continue marathon?</div>
        <button
          onClick={onNextStage}
          style={{
            marginLeft: "auto",
            padding: "10px 14px",
            borderRadius: 10,
            border: "none",
            background: "#c9b458",
            color: "#121213",
            fontWeight: "bold",
            cursor: "pointer",
            letterSpacing: 1,
            textTransform: "uppercase"
          }}
        >
          Next: {marathonNextBoards} boards
        </button>
      </div>
    </div>
  );
}
