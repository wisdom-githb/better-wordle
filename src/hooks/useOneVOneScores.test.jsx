import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

vi.mock('../lib/gameUtils', () => ({
  calculateNonSpeedrunScore: vi.fn(() => 42),
}));

import { useOneVOneScores } from './useOneVOneScores';
import { calculateNonSpeedrunScore } from '../lib/gameUtils';

describe('useOneVOneScores', () => {
  it('returns null scores when gameState or authUser is missing', () => {
    const { result } = renderHook(() => useOneVOneScores(null, null, 6));
    expect(result.current).toEqual({ myScore: null, opponentScore: null });
  });

  it('returns raw times in speedrun mode for host and guest', () => {
    const gameState = {
      speedrun: true,
      hostId: 'host-1',
      hostTimeMs: 12345,
      guestTimeMs: 15000,
    };

    const { result: hostView } = renderHook(() =>
      useOneVOneScores(gameState, { uid: 'host-1' }, 6)
    );

    expect(hostView.current).toEqual({ myScore: 12345, opponentScore: 15000 });

    const { result: guestView } = renderHook(() =>
      useOneVOneScores(gameState, { uid: 'guest-1' }, 6)
    );

    expect(guestView.current).toEqual({ myScore: 15000, opponentScore: 12345 });
  });

  it('delegates to calculateNonSpeedrunScore in normal mode', () => {
    const gameState = {
      speedrun: false,
      hostId: 'host-1',
      solution: 'APPLE',
      hostGuesses: ['APPLE'],
      guestGuesses: ['CRANE'],
    };

    const { result } = renderHook(() =>
      useOneVOneScores(gameState, { uid: 'host-1' }, 6)
    );

    expect(result.current.myScore).toBe(42);
    expect(result.current.opponentScore).toBe(42);

    expect(calculateNonSpeedrunScore).toHaveBeenCalledTimes(2);

    const calls = (calculateNonSpeedrunScore /** @type {any} */).mock.calls;

    const [firstBoards, firstGuessCount, firstMaxTurns, firstBoardCount] = calls[0];
    expect(firstBoards).toHaveLength(1);
    expect(firstBoards[0].isSolved).toBe(true);
    expect(firstGuessCount).toBe(1);
    expect(firstMaxTurns).toBe(6);
    expect(firstBoardCount).toBe(1);
  });
});
