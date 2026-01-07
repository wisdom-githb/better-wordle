// Daily word selection utilities

/**
 * Get the current date string in the user's local timezone (YYYY-MM-DD)
 * This resets at midnight in the user's local time
 */
export function getCurrentDateString() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Simple seeded random number generator
 * Based on a simple linear congruential generator (LCG)
 */
export class SeededRandom {
  constructor(seed) {
    this.seed = seed % 2147483647;
    if (this.seed <= 0) this.seed += 2147483646;
  }

  next() {
    this.seed = (this.seed * 16807) % 2147483647;
    return (this.seed - 1) / 2147483646;
  }
}

/**
 * Create a seed from a date string and optional board index
 * Includes numBoards to ensure board 0 in a 1-board game differs from board 0 in a 4-board game
 */
function createSeed(dateString, boardIndex = 0, mode = 'daily', speedrunEnabled = false, marathonIndex = null, numBoards = 1) {
  // Create a more robust hash that ensures different seeds for different parameters
  // Including numBoards ensures that board 0 in different game configurations gets different words
  let hash = 0;
  const combined = `${dateString}-${mode}-${speedrunEnabled}-${boardIndex}-${numBoards}-${marathonIndex || 'none'}`;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash | 0; // Convert to 32bit signed integer
  }
  // Ensure we get a positive integer and add multipliers to ensure distinct seeds
  return Math.abs(hash) + (boardIndex * 1000000) + (numBoards * 10000) + (marathonIndex || 0) * 100000;
}

/**
 * Select a daily word deterministically based on date and board index
 * @param {string[]} wordList - List of valid words
 * @param {string} dateString - Current date string (YYYY-MM-DD)
 * @param {number} boardIndex - Index of the board (0-based)
 * @param {string} mode - Game mode ('daily' or 'marathon')
 * @param {boolean} speedrunEnabled - Whether speedrun is enabled
 * @param {number} marathonIndex - Marathon level index (for marathon mode)
 * @param {number} numBoards - Total number of boards in the game
 * @returns {string} Selected word
 */
export function selectDailyWord(wordList, dateString, boardIndex = 0, mode = 'daily', speedrunEnabled = false, marathonIndex = null, numBoards = 1) {
  if (!wordList || wordList.length === 0) {
    throw new Error('Word list is empty');
  }
  
  const seed = createSeed(dateString, boardIndex, mode, speedrunEnabled, marathonIndex, numBoards);
  const rng = new SeededRandom(seed);
  const index = Math.floor(rng.next() * wordList.length);
  return wordList[index];
}

/**
 * Select multiple daily words for a game
 * @param {string[]} wordList - List of valid words
 * @param {number} numBoards - Number of boards (words to select)
 * @param {string} mode - Game mode ('daily' or 'marathon')
 * @param {boolean} speedrunEnabled - Whether speedrun is enabled
 * @param {number} marathonIndex - Marathon level index (for marathon mode)
 * @returns {string[]} Array of selected words
 */
export function selectDailyWords(wordList, numBoards, mode = 'daily', speedrunEnabled = false, marathonIndex = null) {
  const dateString = getCurrentDateString();
  const words = [];
  const usedWords = new Set(); // Track used words to avoid duplicates
  
  for (let i = 0; i < numBoards; i++) {
    let word;
    let attempts = 0;
    const maxAttempts = wordList.length; // Safety limit
    
    // Keep trying until we get a unique word
    do {
      word = selectDailyWord(wordList, dateString, i, mode, speedrunEnabled, marathonIndex, numBoards);
      // If we've tried many times and still getting duplicates, add attempts to seed to vary it
      if (attempts > 0) {
        const seed = createSeed(dateString, i + attempts * 1000, mode, speedrunEnabled, marathonIndex, numBoards);
        const rng = new SeededRandom(seed);
        const index = Math.floor(rng.next() * wordList.length);
        word = wordList[index];
      }
      attempts++;
    } while (usedWords.has(word) && attempts < maxAttempts);
    
    usedWords.add(word);
    words.push(word);
  }
  
  return words;
}
