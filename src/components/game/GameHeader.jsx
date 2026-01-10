import React from "react";

export default function GameHeader({
  mode,
  numBoards,
  speedrunEnabled,
}) {
  let title = "BETTER WORDLE";

  if (mode === "marathon") {
    title = `MARATHON (${numBoards} boards)`;
  } else if (mode === "daily") {
    title = "DAILY GAME";
  } else if (mode === "1v1") {
    title = `1V1 DUEL (${numBoards} board${numBoards > 1 ? "s" : ""})`;
  }

  if (speedrunEnabled) {
    title += " · SPEEDRUN";
  }

  return (
    <div
      style={{
        padding: "16px 16px 8px",
        backgroundColor: "#121213",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          letterSpacing: 2,
          fontSize: 14,
        }}
      >
        {title}
      </div>
    </div>
  );
}
