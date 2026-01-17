import React from "react";
import TileRow from "./TileRow";

export default function GameBoard({
  board,
  index,
  numBoards,
  maxTurns,
  isUnlimited,
  currentGuess,
  invalidCurrentGuess,
  revealId,
  isSelected,
  onToggleSelect,
  boardRef,
  speedrunEnabled,
  // Optional: highlight this board when it's the active turn (1v1 mode)
  isCurrentTurn = false,
}) {
  const guessCount = board.guesses.length;

  // No extra empty row after solved
  const rowsToShow = board.isSolved
    ? guessCount
    : Math.min(guessCount + 1, Math.max(maxTurns, guessCount + 1));

  // Only animate the last committed guess row (the one just added)
  const lastGuessRowIndex = board.guesses.length - 1;

  return (
    <div
      ref={boardRef}
      onClick={onToggleSelect}
      style={{
        borderRadius: 8,
        border: isSelected
          ? "2px solid #facc15"
          : "1px solid #3a3a3c",
        padding: 8,
        background: "#1a1a1b",
        cursor: "pointer",
        // When selected, use a yellow glow and do not stack a separate green effect
        boxShadow: isSelected ? "0 0 0 1px rgba(250,204,21,0.53)" : "none",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        width: "100%",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
          fontSize: 12,
          color: "#d7dadc"
        }}
      >
        <span>
          Board {index + 1} {isSelected ? "· focused" : ""}
        </span>
        {!speedrunEnabled && (
          <span>
            {board.isSolved
              ? "Solved"
              : !isUnlimited && board.isDead
              ? "Failed"
              : `${board.guesses.length}/${maxTurns}`}
          </span>
        )}
      </div>

      {Array.from({ length: rowsToShow }).map((_, rowIdx) => {
        const row = board.guesses[rowIdx];
        const isJustRevealedRow = !!row && rowIdx === lastGuessRowIndex;

        return (
          <TileRow
            key={rowIdx}
            board={board}
            rowIdx={rowIdx}
            currentGuess={currentGuess}
            invalidCurrentGuess={invalidCurrentGuess}
            numBoards={numBoards}
            maxTurns={maxTurns}
            isUnlimited={isUnlimited}
            revealId={revealId}
            isJustRevealedRow={isJustRevealedRow}
          />
        );
      })}
    </div>
  );
}
