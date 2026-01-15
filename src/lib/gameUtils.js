// Game-specific utility functions

import { WORD_LENGTH } from "./wordle";

// Convert color to emoji for sharing (no longer used in share text, but kept
// exported in case we want emoji grids elsewhere in the UI.)
export function colorToEmoji(color) {
  if (color === "green") return "🟩";
  if (color === "yellow") return "🟨";
  if (color === "grey") return "⬛";
  return "⬛";
}

// Convert number to emoji number (0-9). Not used by the new share text but
// kept for potential in-app displays.
export function numberToEmoji(num) {
  const emojiNumbers = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  return num
    .toString()
    .split("")
    .map((digit) => emojiNumbers[parseInt(digit, 10)])
    .join("");
}

// Generate share text for the game results based on the scenarios outlined
// in ShareText.md. The formatting (headings, blank lines, and labels) is kept
// identical to the examples there so that only the numeric / emoji values vary.
//
// For marathon mode, when provided with a list of per-stage summaries
// (marathonStages), the output includes one section per stage plus an overall
// total. For speedrun marathon, per-stage and total times are used instead of
// guess counts.
export function generateShareText(
  boards,
  mode,
  numBoards,
  speedrunEnabled,
  stageElapsedMs,
  popupTotalMs,
  formatElapsed,
  turnsUsed,
  maxTurns,
  allSolved,
  solvedCount,
  marathonStages = null
) {
  // Guard against empty boards
  if (!boards || boards.length === 0) {
    return "Play Better Wordle!";
  }

  const lines = [];
  const isMarathon = mode === "marathon";
  const isDaily = mode === "daily";

  // Heading matches "Better Wordle - <Mode> <Variant>" from ShareText.md
  let heading = "Better Wordle";
  if (isDaily && speedrunEnabled) {
    heading = "Better Wordle - Daily Speedrun";
  } else if (isDaily) {
    heading = "Better Wordle - Daily Standard";
  } else if (isMarathon && speedrunEnabled) {
    heading = "Better Wordle - Marathon Speedrun";
  } else if (isMarathon) {
    heading = "Better Wordle - Marathon Standard";
  }

  lines.push(heading);

  // --- Marathon mode with per-stage breakdown ---
  if (isMarathon && Array.isArray(marathonStages) && marathonStages.length > 0) {
    lines.push("");

    marathonStages.forEach((stage, index) => {
      const boardsForStage = stage.boards ?? 0;
      const label = `Stage ${index + 1} (${boardsForStage} board${
        boardsForStage === 1 ? "" : "s"
      }):`;
      lines.push(label);

      const stageSolvedCount =
        typeof stage.solvedCount === "number" ? stage.solvedCount : null;
      const isSolvedStage =
        stageSolvedCount != null && boardsForStage > 0
          ? stageSolvedCount >= boardsForStage
          : true; // default to old behaviour when solvedCount is not provided

      const stageTurns = stage.turnsUsed ?? 0;
      const stageMax = stage.maxTurns ?? maxTurns;

      if (!isSolvedStage) {
        // For standard marathon, if some boards in the stage were solved,
        // describe partial progress like "1 board solved. Guesses used: 7/7".
        if (!speedrunEnabled && stageSolvedCount && stageSolvedCount > 0) {
          const solvedLabel = stageSolvedCount === 1 ? "board" : "boards";
          lines.push(
            `${stageSolvedCount} ${solvedLabel} solved. Guesses used: ${stageTurns}/${stageMax}`
          );
        } else {
          lines.push("Not solved");
        }
        return;
      }

      if (speedrunEnabled) {
        const ms = stage.stageElapsedMs ?? 0;
        lines.push(`Time: ${formatElapsed(ms)}`);
      } else {
        lines.push(`Guesses used: ${stageTurns}/${stageMax}`);
      }
    });

    lines.push("");

    if (speedrunEnabled) {
      const totalMs = popupTotalMs || stageElapsedMs || 0;
      lines.push(`Total time: ${formatElapsed(totalMs)}`);
    } else {
      lines.push(`Total guesses used: ${turnsUsed}/${maxTurns}`);
    }

    lines.push("");
    lines.push("Play Better Wordle!");
    lines.push("https://wisdom-githb.github.io/better-wordle/");

    return lines.join("\n");
  }

  // --- Non-marathon (or marathon without stage breakdown) ---
  if (numBoards === 1 && isDaily) {
    // Daily single-board: show an emoji grid plus a short summary.
    const board = boards[0];

    // Blank line between heading and grid, as in ShareText.md examples.
    lines.push("");

    if (board && Array.isArray(board.guesses)) {
      board.guesses.forEach((guess) => {
        const row = (guess.colors || []).map((color) => colorToEmoji(color)).join("");
        if (row.length > 0) {
          lines.push(row);
        }
      });
    }

    lines.push("");

    if (speedrunEnabled) {
      // Daily speedrun – 1 board
      const timeMs = popupTotalMs || stageElapsedMs || 0;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
      lines.push(`Guesses: ${turnsUsed}`);
    } else {
      // Daily standard – 1 word
      lines.push(`Guesses: ${turnsUsed}/${maxTurns}`);
      lines.push(allSolved ? "Solved!" : "Not solved!");
    }
  } else if (numBoards === 1) {
    // Other single-board modes: use a plain summary without emoji.
    lines.push("");

    if (speedrunEnabled) {
      const timeMs = popupTotalMs || stageElapsedMs || 0;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
    }

    lines.push(`Guesses: ${turnsUsed}/${maxTurns}`);
    lines.push(allSolved ? "Solved!" : "Not solved!");
  } else {
    // Multi-board non-marathon summary.
    lines.push("");
    lines.push(`Boards: ${numBoards}`);

    if (speedrunEnabled) {
      // Daily speedrun – multiple boards
      const timeMs = popupTotalMs || stageElapsedMs || 0;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
      lines.push(`Guesses used: ${turnsUsed}`);
    } else {
      // Daily standard – multiple words (and other non-speedrun multi-board modes)
      lines.push(`Guesses used: ${turnsUsed}/${maxTurns}`);
      lines.push(`Solved: ${solvedCount}/${numBoards}`);
    }
  }

  lines.push("");
  lines.push("Play Better Wordle!");
  lines.push("https://wisdom-githb.github.io/better-wordle/");

  return lines.join("\n");
}

// Detect if the device is mobile
export function isMobileDevice() {
  const hasNavigator = typeof navigator !== "undefined" && typeof navigator.userAgent === "string";
  const isMobileUA =
    hasNavigator &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const hasWindow = typeof window !== "undefined";
  const isSmallTouchViewport =
    hasWindow &&
    window.innerWidth <= 768 &&
    "ontouchstart" in window;

  return isMobileUA || isSmallTouchViewport;
}

// Background color for tile colors
export function bgForColor(color) {
  if (color === "green") return "#6aaa64";
  if (color === "yellow") return "#c9b458";
  if (color === "grey") return "#3a3a3c";
  return "#121213";
}
