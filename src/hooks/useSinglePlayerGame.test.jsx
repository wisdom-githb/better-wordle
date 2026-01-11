import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';

vi.mock('../lib/persist', () => ({
  loadJSON: vi.fn(),
  makeSolvedKey: vi.fn(() => 'SOLVED_KEY'),
}));

vi.mock('../lib/wordle', () => ({
  getMaxTurns: vi.fn(() => 10),
  createBoardState: vi.fn((solution) => ({ solution })),
}));

vi.mock('../lib/wordLists', () => ({
  loadWordLists: vi.fn(async () => ({
    ANSWER_WORDS: ['APPLE', 'BERRY', 'CHERRY'],
    ALLOWED_GUESSES: ['APPLE', 'BERRY', 'CHERRY'],
  })),
}));

vi.mock('../lib/dailyWords', () => ({
  selectDailyWords: vi.fn(() => ['APPLE', 'BERRY']),
  getCurrentDateString: vi.fn(() => '2024-01-01'),
}));

vi.mock('../lib/gameConstants', () => ({
  FLIP_COMPLETE_MS: 100,
}));

import { loadJSON } from '../lib/persist';
import { loadWordLists } from '../lib/wordLists';
import { selectDailyWords } from '../lib/dailyWords';
import { getMaxTurns } from '../lib/wordle';
import { useSinglePlayerGame } from './useSinglePlayerGame';

beforeEach(() => {
  vi.clearAllMocks();
});

function createRefs() {
  return {
    savedSolvedStateRef: { current: null },
    stageStartRef: { current: null },
    stageEndRef: { current: null },
    committedRef: { current: false },
    committedStageMsRef: { current: 0 },
  };
}

describe('useSinglePlayerGame', () => {
  it('initializes a new daily game when there is no saved or solved state', async () => {
    /** @type {any} */ (loadJSON).mockReturnValueOnce(null); // solved state
    /** @type {any} */ (loadJSON).mockReturnValueOnce(null); // saved game state

    const setBoards = vi.fn();
    const setCurrentGuess = vi.fn();
    const setMessage = vi.fn();
    const clearMessageTimer = vi.fn();
    const setShowOutOfGuesses = vi.fn();
    const setIsUnlimited = vi.fn();
    const setSelectedBoardIndex = vi.fn();
    const setRevealId = vi.fn();
    const setIsFlipping = vi.fn();
    const setMaxTurns = vi.fn();
    const setAllowedSet = vi.fn();
    const setIsLoading = vi.fn();
    const setShowPopup = vi.fn();
    const setTimedMessage = vi.fn();

    const refs = createRefs();

    const { rerender } = renderHook((props) => useSinglePlayerGame(props), {
      initialProps: {
        isOneVOne: false,
        mode: 'daily',
        speedrunEnabled: false,
        numBoards: 2,
        marathonIndex: 0,
        getGameStateKey: () => 'GAME_STATE_KEY',
        ...refs,
        setBoards,
        setCurrentGuess,
        setMessage,
        clearMessageTimer,
        setShowOutOfGuesses,
        setIsUnlimited,
        setSelectedBoardIndex,
        setRevealId,
        setIsFlipping,
        setMaxTurns,
        setAllowedSet,
        setIsLoading,
        setShowPopup,
        setTimedMessage,
      },
    });

    // Allow async init to complete
    await waitFor(() => {
      expect(setBoards).toHaveBeenCalled();
    });

    expect(loadWordLists).toHaveBeenCalledTimes(1);
    expect(selectDailyWords).toHaveBeenCalledWith(
      ['APPLE', 'BERRY', 'CHERRY'],
      2,
      'daily',
      false,
      null,
    );

    expect(setBoards).toHaveBeenCalledWith([
      { solution: 'APPLE' },
      { solution: 'BERRY' },
    ]);

    expect(getMaxTurns).toHaveBeenCalledWith(2);
    expect(setMaxTurns).toHaveBeenCalledWith(10);
    expect(setIsUnlimited).toHaveBeenCalledWith(false);

    // Changing numBoards should trigger re-init
    rerender({
      isOneVOne: false,
      mode: 'daily',
      speedrunEnabled: false,
      numBoards: 3,
      marathonIndex: 0,
      getGameStateKey: () => 'GAME_STATE_KEY',
      ...refs,
      setBoards,
      setCurrentGuess,
      setMessage,
      clearMessageTimer,
      setShowOutOfGuesses,
      setIsUnlimited,
      setSelectedBoardIndex,
      setRevealId,
      setIsFlipping,
      setMaxTurns,
      setAllowedSet,
      setIsLoading,
      setShowPopup,
      setTimedMessage,
    });
  });

  it('replays solved state and schedules popup when mode already solved', async () => {
    const solvedBoards = [
      { isSolved: true, lastRevealId: null },
      { isSolved: true, lastRevealId: null },
    ];

    /** @type {any} */ (loadJSON).mockReturnValueOnce({
      allSolved: true,
      boards: solvedBoards,
      stageElapsedMs: 1234,
    });

    const setBoards = vi.fn();
    const setCurrentGuess = vi.fn();
    const setMessage = vi.fn();
    const clearMessageTimer = vi.fn();
    const setShowOutOfGuesses = vi.fn();
    const setIsUnlimited = vi.fn();
    const setSelectedBoardIndex = vi.fn();
    const setRevealId = vi.fn();
    const setIsFlipping = vi.fn();
    const setMaxTurns = vi.fn();
    const setAllowedSet = vi.fn();
    const setIsLoading = vi.fn();
    const setShowPopup = vi.fn();
    const setTimedMessage = vi.fn();

    const refs = createRefs();

    renderHook((props) => useSinglePlayerGame(props), {
      initialProps: {
        isOneVOne: false,
        mode: 'daily',
        speedrunEnabled: true,
        numBoards: 2,
        marathonIndex: 0,
        getGameStateKey: () => 'GAME_STATE_KEY',
        ...refs,
        setBoards,
        setCurrentGuess,
        setMessage,
        clearMessageTimer,
        setShowOutOfGuesses,
        setIsUnlimited,
        setSelectedBoardIndex,
        setRevealId,
        setIsFlipping,
        setMaxTurns,
        setAllowedSet,
        setIsLoading,
        setShowPopup,
        setTimedMessage,
      },
    });

    await waitFor(() => {
      expect(setBoards).toHaveBeenCalled();
    });

    // savedSolvedStateRef should be patched with lastRevealId for solved boards
    expect(refs.savedSolvedStateRef.current).not.toBeNull();
    const patchedBoards = refs.savedSolvedStateRef.current.boards;
    expect(patchedBoards[0].lastRevealId).toBe(1);
    expect(patchedBoards[1].lastRevealId).toBe(1);

    // Popup should be scheduled after FLIP_COMPLETE_MS (100ms)
    await new Promise((resolve) => setTimeout(resolve, 150));
    expect(setShowPopup).toHaveBeenCalledWith(true);
  });
});
