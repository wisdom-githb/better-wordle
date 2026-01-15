import { useMemo } from "react";
import { buildLetterMapFromGuesses } from "../lib/wordle";

/**
 * Shared hook for multi-board layout concerns used by both single-player and 1v1.
 * - Computes per-board letter maps for keyboard coloring.
 * - Computes a square-ish grid (cols/rows) for board layout.
 */
export function useBoardLayout(boards, selectedBoardIndex, numBoards) {
  const perBoardLetterMaps = useMemo(
    () => boards.map((b) => buildLetterMapFromGuesses(b.guesses)),
    [boards]
  );

  const focusedLetterMap = useMemo(() => {
    if (selectedBoardIndex == null) return null;
    return perBoardLetterMaps[selectedBoardIndex] || null;
  }, [selectedBoardIndex, perBoardLetterMaps]);

  const gridCols = useMemo(
    () => Math.ceil(Math.sqrt(Math.max(numBoards || boards.length || 1, 1))),
    [numBoards, boards.length]
  );

  const gridRows = useMemo(
    () => Math.ceil((numBoards || boards.length || 1) / gridCols),
    [numBoards, boards.length, gridCols]
  );

  return { perBoardLetterMaps, focusedLetterMap, gridCols, gridRows };
}
