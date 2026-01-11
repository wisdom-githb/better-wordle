import { describe, it, expect } from 'vitest';
import {
  calculateNonSpeedrunScore,
  calculateSpeedrunScore,
  generateShareText,
} from './gameUtils.js';

// Helper to create a board object
function makeBoard(guesses, isSolved) {
  return {
    guesses: guesses.map((g) => ({ word: g.word, colors: g.colors ?? [] })),
    isSolved,
  };
}

describe('calculateNonSpeedrunScore', () => {
  it('gives 100 for a perfect single-board win (one guess)', () => {
    const boards = [makeBoard([{ word: 'APPLE' }], true)];
    const score = calculateNonSpeedrunScore(boards, 1, 6, 1);
    expect(score).toBe(100);
  });

  it('gives 50 for solved boards that use max turns', () => {
    const boards = [makeBoard(Array(6).fill({ word: 'APPLE' }), true)];
    const score = calculateNonSpeedrunScore(boards, 6, 6, 1);
    expect(score).toBe(50);
  });

  it('scores partially-solved multi-board games between 30 and 50', () => {
    const boards = [
      makeBoard([{ word: 'APPLE' }], true),                 // solved
      makeBoard(Array(3).fill({ word: 'OTHER' }), false),   // unsolved
    ];
    const turnsUsed = 3;
    const maxTurns = 6;
    const score = calculateNonSpeedrunScore(boards, turnsUsed, maxTurns, 2);
    expect(score).toBeGreaterThanOrEqual(30);
    expect(score).toBeLessThanOrEqual(50);
  });

  it('gives base minimum score when nothing is solved', () => {
    const boards = [
      makeBoard([{ word: 'GUESS' }], false),
      makeBoard([{ word: 'GUESS' }], false),
    ];
    const score = calculateNonSpeedrunScore(boards, 1, 6, 2);
    expect(score).toBeGreaterThanOrEqual(30);
  });
});

describe('calculateSpeedrunScore', () => {
  it('gives 100 for times faster than the excellent threshold', () => {
    const score = calculateSpeedrunScore(5_000, 1); // 5s for 1 board
    expect(score).toBe(100);
  });

  it('gives minimum score for very slow times', () => {
    const score = calculateSpeedrunScore(1_000_000, 4); // way beyond thresholds
    expect(score).toBe(30);
  });

  it('scores slower times lower than faster times for same board count', () => {
    const fast = calculateSpeedrunScore(20_000, 4);
    const slow = calculateSpeedrunScore(80_000, 4);
    expect(fast).toBeGreaterThan(slow);
  });
});

describe('generateShareText', () => {
  it('returns a non-empty string with key info for a single-board game', () => {
    const boards = [
      makeBoard([
        { word: 'APPLE', colors: ['green', 'green', 'green', 'green', 'green'] },
      ], true),
    ];
    const text = generateShareText(
      boards,
      90,              // score
      'daily',         // mode
      1,               // numBoards
      false,           // speedrunEnabled
      12_345,          // stageElapsedMs
      0,               // popupTotalMs
      (ms) => `T${ms}`,// dummy formatter
      1,               // turnsUsed
      6,               // maxTurns
      true,            // allSolved
      1,               // solvedCount
    );

    expect(text).toContain('Score: 90');
    expect(text).toContain('Guesses: 1/6');
    expect(text).toContain('✅ Solved!');
    expect(text).toContain('Play Better Wordle!');
    expect(text.length).toBeGreaterThan(0);
  });

  it('includes mode, boards, score and solved count for multi-board games', () => {
    const boards = [
      makeBoard(Array(3).fill({ word: 'BOARD1' }), true),
      makeBoard(Array(5).fill({ word: 'BOARD2' }), false),
      makeBoard(Array(2).fill({ word: 'BOARD3' }), true),
    ];

    const text = generateShareText(
      boards,
      75,
      'marathon',
      3,
      true,           // speedrunEnabled
      30_000,
      45_000,
      (ms) => `T${ms}`,
      5,
      8,
      false,
      2,
    );

    expect(text).toContain('Better Wordle - 3 boards');
    expect(text).toContain('Score: 75');
    expect(text).toContain('Solved: 2/3');
    expect(text).toContain('Play Better Wordle!');
  });

  it('returns generic text when boards array is empty', () => {
    const text = generateShareText(
      [],
      0,
      'daily',
      1,
      false,
      0,
      0,
      (ms) => `T${ms}`,
      0,
      0,
      false,
      0,
    );
    expect(text).toBe('Play Better Wordle!');
  });
});