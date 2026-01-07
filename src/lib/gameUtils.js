// Game-specific utility functions

import { WORD_LENGTH } from "./wordle";

// Calculate score for non-speedrun modes
export function calculateNonSpeedrunScore(boards, turnsUsed, maxTurns, numBoards) {
  const solvedCount = boards.filter((b) => b.isSolved).length;
  const allSolved = solvedCount === numBoards;
  const minGuesses = numBoards; // Minimum guesses possible (one per board)

  if (allSolved) {
    // All boards solved: score 50-100 based on efficiency
    // Minimum 50 even if all guesses used
    if (turnsUsed <= minGuesses) {
      return 100;
    }
    if (turnsUsed >= maxTurns) {
      return 50; // Minimum for solved
    }
    // Linear interpolation: 100 at minGuesses, 50 at maxTurns
    const score = 100 - (turnsUsed - minGuesses) * (50 / (maxTurns - minGuesses));
    return Math.max(50, Math.min(100, Math.round(score)));
  } else {
    // Not all solved: score 30-50
    // Base score from solved ratio
    const solvedRatio = solvedCount / numBoards;
    let score = 30 + solvedRatio * 15; // 30-45 from solved ratio
    
    // Add partial credit for unsolved boards based on how close they were
    const unsolvedBoards = boards.filter((b) => !b.isSolved);
    if (unsolvedBoards.length > 0) {
      const avgProgress = unsolvedBoards.reduce((sum, b) => {
        return sum + (b.guesses.length / maxTurns);
      }, 0) / unsolvedBoards.length;
      score += avgProgress * 5; // Up to 5 more points for progress on unsolved
    }
    
    return Math.max(30, Math.min(50, Math.round(score)));
  }
}

// Calculate score for speedrun modes
export function calculateSpeedrunScore(timeMs, numBoards) {
  const timeSeconds = timeMs / 1000;
  
  // Define excellent, very good, and good times based on number of boards
  // Interpolate between known points:
  // 1 board: excellent=10s, veryGood=20s, good=30s
  // 4 boards: excellent=30s, veryGood=40s, good=60s
  // 8 boards: excellent=60s, veryGood=70s, good=90s
  
  // Use linear interpolation for other board counts
  const getTimeThreshold = (board1, board4, board8, numBoards) => {
    if (numBoards <= 1) return board1;
    if (numBoards >= 8) {
      // Extrapolate beyond 8 boards: linear extension
      return board8 + (numBoards - 8) * ((board8 - board4) / 4);
    }
    if (numBoards <= 4) {
      // Interpolate between 1 and 4
      return board1 + (numBoards - 1) * ((board4 - board1) / 3);
    }
    // Interpolate between 4 and 8
    return board4 + (numBoards - 4) * ((board8 - board4) / 4);
  };
  
  const excellentTime = getTimeThreshold(10, 30, 60, numBoards);
  const veryGoodTime = getTimeThreshold(20, 40, 70, numBoards);
  const goodTime = getTimeThreshold(30, 60, 90, numBoards);
  
  // Score mapping:
  // excellent time or faster: 100
  // very good time: 85
  // good time: 70
  // Beyond good time: linear decrease, minimum 30
  
  if (timeSeconds <= excellentTime) {
    return 100;
  } else if (timeSeconds <= veryGoodTime) {
    // Linear interpolation between excellent and very good
    const ratio = (timeSeconds - excellentTime) / (veryGoodTime - excellentTime);
    return Math.round(100 - ratio * 15); // 100 to 85
  } else if (timeSeconds <= goodTime) {
    // Linear interpolation between very good and good
    const ratio = (timeSeconds - veryGoodTime) / (goodTime - veryGoodTime);
    return Math.round(85 - ratio * 15); // 85 to 70
  } else {
    // Beyond good time: linear decrease to minimum 30
    // Extend the trend: good time gives 70, then decrease
    // Use 2x good time as the point where score reaches 30
    const extendedTime = goodTime * 2;
    if (timeSeconds >= extendedTime) {
      return 30;
    }
    const ratio = (timeSeconds - goodTime) / (extendedTime - goodTime);
    return Math.max(30, Math.round(70 - ratio * 40)); // 70 down to 30
  }
}

// Convert color to emoji for sharing
export function colorToEmoji(color) {
  if (color === "green") return "🟩";
  if (color === "yellow") return "🟨";
  if (color === "grey") return "⬛";
  return "⬛";
}

// Convert number to emoji number (0-9)
export function numberToEmoji(num) {
  const emojiNumbers = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
  return num.toString().split("").map(digit => emojiNumbers[parseInt(digit)]).join("");
}

// Generate share text for the game results
export function generateShareText(boards, score, mode, numBoards, speedrunEnabled, stageElapsedMs, popupTotalMs, formatElapsed, turnsUsed, maxTurns, allSolved, solvedCount) {
  const lines = [];
  
  // Guard against empty boards
  if (!boards || boards.length === 0) {
    return "Play Better Wordle!";
  }
  
  // Add header based on mode
  if (numBoards === 1) {
    // Single board: show Wordle-style grid
    const board = boards[0];
    if (board && board.guesses) {
      board.guesses.forEach((guess) => {
        const row = guess.colors.map(colorToEmoji).join("");
        lines.push(row);
      });
    }
    
    lines.push(""); // Empty line
    lines.push(`Score: ${score}`);
    if (speedrunEnabled) {
      const timeMs = popupTotalMs || stageElapsedMs;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
    }
    lines.push(`Guesses: ${turnsUsed}/${maxTurns}`);
    lines.push(allSolved ? "✅ Solved!" : "❌ Not solved");
  } else {
    // Multiple boards: show guess counts for each board in emoji format
    const modePrefix = mode === "marathon" ? "Marathon" : "Daily";
    lines.push(`🙂 ${modePrefix} Better Wordle ${numBoards > 4 ? numBoards : ""}`);
    
    // Create guess count emojis for each board (like 7️⃣5️⃣4️⃣6️⃣)
    const guessCounts = boards.map(board => board.guesses.length);
    const guessCountsEmoji = guessCounts.map(count => numberToEmoji(count)).join("");
    lines.push(guessCountsEmoji);
    lines.push(""); // Empty line
    
    lines.push(`Better Wordle - ${numBoards} boards`);
    lines.push(`Score: ${score}`);
    if (speedrunEnabled) {
      const timeMs = popupTotalMs || stageElapsedMs;
      lines.push(`Time: ${formatElapsed(timeMs)}`);
    }
    lines.push(`Solved: ${solvedCount}/${numBoards}`);
    if (mode === "marathon") {
      lines.push("Marathon Mode");
    }
  }
  
  lines.push(""); // Empty line
  lines.push("Play Better Wordle!");
  lines.push("https://wisdom-githb.github.io/better-wordle/");
  
  return lines.join("\n");
}

// Detect if the device is mobile
export function isMobileDevice() {
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (typeof window !== "undefined" && window.innerWidth <= 768 && "ontouchstart" in window)
  );
}

// Background color for tile colors
export function bgForColor(color) {
  if (color === "green") return "#6aaa64";
  if (color === "yellow") return "#c9b458";
  if (color === "grey") return "#3a3a3c";
  return "#121213";
}
