import { describe, it, expect } from 'vitest';
import { generateShareText } from './gameUtils.js';

// Helper to create a board object
function makeBoard(guesses, isSolved) {
  return {
    guesses: guesses.map((g) => ({ word: g.word, colors: g.colors ?? [] })),
    isSolved,
  };
}

describe('generateShareText', () => {
  it('returns a non-empty string with key info for a single-board daily game with emoji grid', () => {
    const boards = [
      makeBoard([
        { word: 'APPLE', colors: ['green', 'green', 'green', 'green', 'green'] },
      ], true),
    ];
    const text = generateShareText(
      boards,
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

    // Heading and basic summary for single-board daily standard.
    expect(text.startsWith('Better Wordle - Daily Standard')).toBe(true);
    // Should include at least one green square row from the guesses.
    expect(text).toContain('🟩');
    expect(text).toContain('Guesses: 1/6');
    expect(text).toContain('Solved!');
    expect(text).toContain('Play Better Wordle!');
    expect(text.length).toBeGreaterThan(0);
  });

  it('uses Better Wordle - Daily Standard heading and Not solved! for unsolved single-board daily standard games', () => {
    const boards = [
      makeBoard([
        { word: 'GUESS1', colors: ['yellow', 'grey', 'grey', 'grey', 'green'] },
        { word: 'GUESS2', colors: ['yellow', 'yellow', 'grey', 'grey', 'grey'] },
        { word: 'GUESS3', colors: ['grey', 'grey', 'grey', 'yellow', 'grey'] },
        { word: 'GUESS4', colors: ['yellow', 'yellow', 'grey', 'grey', 'grey'] },
        { word: 'GUESS5', colors: ['grey', 'grey', 'yellow', 'grey', 'yellow'] },
        { word: 'GUESS6', colors: ['grey', 'yellow', 'grey', 'grey', 'yellow'] },
      ], false),
    ];

    const text = generateShareText(
      boards,
      'daily',
      1,
      false,
      0,
      0,
      (ms) => `T${ms}`,
      6,
      6,
      false,
      0,
    );

    expect(text.startsWith('Better Wordle - Daily Standard')).toBe(true);
    expect(text).toContain('Guesses: 6/6');
    expect(text).toContain('Not solved!');
  });

  it('uses Better Wordle - Daily Standard heading and Solved! when continuing after out-of-guesses on single-board daily standard', () => {
    const boards = [
      makeBoard([
        { word: 'GUESS1', colors: ['yellow', 'grey', 'grey', 'grey', 'green'] },
        { word: 'GUESS2', colors: ['yellow', 'yellow', 'grey', 'grey', 'grey'] },
        { word: 'GUESS3', colors: ['grey', 'grey', 'grey', 'yellow', 'grey'] },
        { word: 'GUESS4', colors: ['yellow', 'yellow', 'grey', 'grey', 'grey'] },
        { word: 'GUESS5', colors: ['grey', 'grey', 'yellow', 'grey', 'yellow'] },
        { word: 'GUESS6', colors: ['grey', 'yellow', 'grey', 'grey', 'yellow'] },
        { word: 'GUESS7', colors: ['green', 'green', 'green', 'green', 'green'] },
      ], true),
    ];

    const text = generateShareText(
      boards,
      'daily',
      1,
      false,
      0,
      0,
      (ms) => `T${ms}`,
      7,
      6,
      true,
      1,
    );

    expect(text.startsWith('Better Wordle - Daily Standard')).toBe(true);
    expect(text).toContain('Guesses: 7/6');
    expect(text).toContain('Solved!');
  });

  it('includes mode, boards, time and solved count for multi-board non-marathon games', () => {
    const boards = [
      makeBoard(Array(3).fill({ word: 'BOARD1' }), true),
      makeBoard(Array(5).fill({ word: 'BOARD2' }), false),
      makeBoard(Array(2).fill({ word: 'BOARD3' }), true),
    ];

    const text = generateShareText(
      boards,
      'daily',
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

    expect(text).toContain('Daily Better Wordle');
    expect(text).toContain('Boards: 3');
    expect(text).toContain('Time: T45000');
    expect(text).toContain('Guesses used: 5/8');
    expect(text).toContain('Solved: 2/3');
    expect(text).toContain('Play Better Wordle!');
  });

  it('formats marathon multi-stage guesses correctly without emojis', () => {
    const boards = [
      makeBoard([], true),
      makeBoard([], true),
    ];

    const marathonStages = [
      { boards: 1, turnsUsed: 2, maxTurns: 6, stageElapsedMs: 10_000 },
      { boards: 2, turnsUsed: 3, maxTurns: 7, stageElapsedMs: 20_000 },
      { boards: 3, turnsUsed: 4, maxTurns: 8, stageElapsedMs: 30_000 },
      { boards: 4, turnsUsed: 5, maxTurns: 9, stageElapsedMs: 40_000 },
    ];

    const text = generateShareText(
      boards,
      'marathon',
      10,              // total boards across stages
      false,           // standard (non-speedrun)
      0,
      0,
      (ms) => `T${ms}`,
      14,              // total turns used
      30,              // total max turns
      true,
      10,
      marathonStages,
    );

    expect(text).toContain('Marathon Better Wordle');
    expect(text).toContain('Stage 1 (1 board):');
    expect(text).toContain('Guesses used: 2/6');
    expect(text).toContain('Stage 2 (2 boards):');
    expect(text).toContain('Guesses used: 3/7');
    expect(text).toContain('Stage 3 (3 boards):');
    expect(text).toContain('Guesses used: 4/8');
    expect(text).toContain('Stage 4 (4 boards):');
    expect(text).toContain('Guesses used: 5/9');
    expect(text).toContain('Total guesses used: 14/30');
    expect(text).toContain('Play Better Wordle!');
  });

  it('formats marathon multi-stage speedrun times correctly without emojis', () => {
    const boards = [makeBoard([], true)];

    const marathonStages = [
      { boards: 1, turnsUsed: 0, maxTurns: 0, stageElapsedMs: 10_000 },
      { boards: 2, turnsUsed: 0, maxTurns: 0, stageElapsedMs: 20_000 },
    ];

    const text = generateShareText(
      boards,
      'marathon',
      3,
      true,             // speedrun
      30_000,
      30_000,
      (ms) => `T${ms}`,
      0,
      0,
      true,
      3,
      marathonStages,
    );

    expect(text).toContain('Marathon Better Wordle');
    expect(text).toContain('Stage 1 (1 board):');
    expect(text).toContain('Time: T10000');
    expect(text).toContain('Stage 2 (2 boards):');
    expect(text).toContain('Time: T20000');
    expect(text).toContain('Total time: T30000');
    expect(text).toContain('Play Better Wordle!');
  });

  it('marks unsolved marathon stages as Not solved and omits per-stage stats', () => {
    const boards = [
      makeBoard([], true),
      makeBoard([], true),
    ];

    const marathonStages = [
      { boards: 1, turnsUsed: 2, maxTurns: 6, stageElapsedMs: 10_000, solvedCount: 1 },
      { boards: 2, turnsUsed: 3, maxTurns: 7, stageElapsedMs: 20_000, solvedCount: 2 },
      // Third stage exists but is not fully solved: solvedCount < boards.
      { boards: 3, turnsUsed: 0, maxTurns: 8, stageElapsedMs: 0, solvedCount: 1 },
    ];

    const text = generateShareText(
      boards,
      'marathon',
      6,
      false,
      0,
      0,
      (ms) => `T${ms}`,
      5,
      13,
      false,
      3,
      marathonStages,
    );

    expect(text).toContain('Stage 1 (1 board):');
    expect(text).toContain('Guesses used: 2/6');
    expect(text).toContain('Stage 2 (2 boards):');
    expect(text).toContain('Guesses used: 3/7');
    expect(text).toContain('Stage 3 (3 boards):');
    expect(text).toContain('Not solved');
    // Ensure we did not render a bogus guesses-used line for the unsolved stage.
    expect(text).not.toContain('Guesses used: 0/8');
  });

  it('marks unsolved marathon speedrun stages as Not solved and omits per-stage times', () => {
    const boards = [makeBoard([], true)];

    const marathonStages = [
      { boards: 1, turnsUsed: 0, maxTurns: 0, stageElapsedMs: 10_000, solvedCount: 1 },
      { boards: 2, turnsUsed: 0, maxTurns: 0, stageElapsedMs: 20_000, solvedCount: 2 },
      { boards: 3, turnsUsed: 0, maxTurns: 0, stageElapsedMs: 0, solvedCount: 1 },
    ];

    const text = generateShareText(
      boards,
      'marathon',
      6,
      true,
      30_000,
      30_000,
      (ms) => `T${ms}`,
      0,
      0,
      false,
      3,
      marathonStages,
    );

    expect(text).toContain('Stage 3 (3 boards):');
    expect(text).toContain('Not solved');
    expect(text).not.toContain('Time: T0');
  });

  it('returns generic text when boards array is empty', () => {
    const text = generateShareText(
      [],
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