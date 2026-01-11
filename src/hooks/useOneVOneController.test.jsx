import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act, waitFor } from '@testing-library/react';

vi.mock('../lib/wordLists', () => ({
  loadWordLists: vi.fn(async () => ({
    ANSWER_WORDS: ['APPLE', 'BERRY'],
    ALLOWED_GUESSES: ['APPLE', 'BERRY'],
  })),
}));

vi.mock('../lib/dailyWords', () => ({
  SeededRandom: function () {
    this.next = () => 0.5;
  },
}));

import { useOneVOneController } from './useOneVOneController';
import { loadWordLists } from '../lib/wordLists';
import * as wordleLib from '../lib/wordle';

beforeEach(() => {
  vi.clearAllMocks();
});

function createCommonProps(overrides = {}) {
  const oneVOneGame = overrides.oneVOneGame || {
    gameState: null,
    createGame: vi.fn(),
    joinGame: vi.fn(),
    switchTurn: vi.fn(),
    setWinner: vi.fn(),
    startGame: vi.fn(),
    setFriendRequestStatus: vi.fn(),
    setReady: vi.fn(),
  };

  return {
    isOneVOne: true,
    isHost: true,
    gameCode: '123456',
    speedrunEnabled: false,
    boardsParam: null,
    numBoards: 1,
    authUser: { uid: 'host-uid' },
    isVerifiedUser: true,
    oneVOneGame,
    boards: [],
    setBoards: vi.fn(),
    maxTurns: 6,
    setMaxTurns: vi.fn(),
    allowedSet: new Set(),
    setAllowedSet: vi.fn(),
    setIsUnlimited: vi.fn(),
    setIsLoading: vi.fn(),
    setShowPopup: vi.fn(),
    setCurrentGuess: vi.fn(),
    setIsFlipping: vi.fn(),
    revealId: 0,
    isFlipping: false,
    navigate: vi.fn(),
    setTimedMessage: vi.fn(),
    endingGameRef: { current: false },
    popupClosedRef: { current: false },
    shouldShowPopupAfterFlipRef: { current: false },
    sendFriendRequest: vi.fn(),
    cancelSentChallenge: vi.fn(),
    maxOneVOneBoards: 8,
    ...overrides,
  };
}

describe('useOneVOneController', () => {
  it('computes friendRequestSent for host and guest correctly', () => {
    const gameState = {
      hostId: 'host-uid',
      hostFriendRequestSent: true,
      guestFriendRequestSent: false,
    };

    const hostGame = { ...createCommonProps().oneVOneGame, gameState };

    const { result: hostView } = renderHook(() =>
      useOneVOneController(
        createCommonProps({ authUser: { uid: 'host-uid' }, oneVOneGame: hostGame })
      )
    );

    expect(hostView.current.friendRequestSent).toBe(true);

    const guestGame = { ...hostGame, gameState };

    const { result: guestView } = renderHook(() =>
      useOneVOneController(
        createCommonProps({ authUser: { uid: 'guest-uid' }, oneVOneGame: guestGame })
      )
    );

    expect(guestView.current.friendRequestSent).toBe(false);
  });

  it('handleOneVOneReady toggles ready state via oneVOneGame.setReady', async () => {
    const setReady = vi.fn();
    const gameState = {
      hostId: 'host-uid',
      hostReady: false,
      guestReady: false,
    };

    const oneVOneGame = { ...createCommonProps().oneVOneGame, gameState, setReady };

    const { result } = renderHook(() =>
      useOneVOneController(
        createCommonProps({ authUser: { uid: 'host-uid' }, oneVOneGame })
      )
    );

    await act(async () => {
      await result.current.handleOneVOneReady();
    });

    expect(setReady).toHaveBeenCalledWith('123456', true);
  });

  it('handleAddFriendRequest sends request and marks status pending in game state', async () => {
    const sendFriendRequest = vi.fn().mockResolvedValue(undefined);
    const setFriendRequestStatus = vi.fn().mockResolvedValue(undefined);

    const gameState = {
      hostId: 'host-uid',
    };

    const oneVOneGame = {
      ...createCommonProps().oneVOneGame,
      gameState,
      setFriendRequestStatus,
    };

    const { result } = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          authUser: { uid: 'host-uid' },
          oneVOneGame,
          sendFriendRequest,
        })
      )
    );

    await act(async () => {
      await result.current.handleAddFriendRequest('Opponent', 'op-1');
    });

    expect(sendFriendRequest).toHaveBeenCalledWith('Opponent', 'op-1');
    expect(setFriendRequestStatus).toHaveBeenCalledWith('123456', 'pending');
  });

  it('applyOneVOneConfig clamps boards and sets next config', () => {
    const setTimedMessage = vi.fn();

    const { result } = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          maxOneVOneBoards: 4,
          setTimedMessage,
        })
      )
    );

    act(() => {
      // open config and set drafts via returned setters
      result.current.setOneVOneConfigBoardsDraft(10);
      result.current.setOneVOneConfigSpeedrunDraft(true);
      result.current.applyOneVOneConfig();
    });

    expect(setTimedMessage).toHaveBeenCalled();
  });

  it('can call handleOneVOneStart which loads word lists and starts a game', async () => {
    const startGame = vi.fn();
    const oneVOneGame = {
      ...createCommonProps().oneVOneGame,
      startGame,
    };

    const { result } = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          oneVOneGame,
          numBoards: 2,
        })
      )
    );

    await act(async () => {
      await result.current.handleOneVOneStart();
    });

    expect(loadWordLists).toHaveBeenCalled();
    expect(startGame).toHaveBeenCalled();
  });

  it('uses boardsParam to determine board count for the initial 1v1 round', async () => {
    const startGame = vi.fn();
    const oneVOneGame = {
      ...createCommonProps().oneVOneGame,
      startGame,
    };

    const { result } = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          oneVOneGame,
          // Host selected 5 boards on the modal; numBoards is still 1 before the first round.
          boardsParam: '5',
          numBoards: 1,
          maxOneVOneBoards: 8,
        })
      )
    );

    await act(async () => {
      await result.current.handleOneVOneStart();
    });

    expect(loadWordLists).toHaveBeenCalled();
    expect(startGame).toHaveBeenCalledTimes(1);
    const [, solutionsArg] = startGame.mock.calls[0];
    expect(Array.isArray(solutionsArg)).toBe(true);
    expect(solutionsArg).toHaveLength(5);
  });

  it('clamps boardsParam to maxOneVOneBoards and falls back to numBoards when missing', async () => {
    const startGame = vi.fn();
    const baseGame = {
      ...createCommonProps().oneVOneGame,
      startGame,
    };

    // Case 1: boardsParam larger than maxOneVOneBoards should be clamped.
    let hook = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          oneVOneGame: baseGame,
          boardsParam: '99',
          numBoards: 1,
          maxOneVOneBoards: 4,
        })
      )
    );

    await act(async () => {
      await hook.result.current.handleOneVOneStart();
    });

    expect(startGame).toHaveBeenCalledTimes(1);
    let [, solutionsArg] = startGame.mock.calls[0];
    expect(solutionsArg).toHaveLength(4);

    // Case 2: when boardsParam is null, fall back to numBoards.
    startGame.mockClear();

    hook = renderHook(() =>
      useOneVOneController(
        createCommonProps({
          oneVOneGame: baseGame,
          boardsParam: null,
          numBoards: 3,
          maxOneVOneBoards: 8,
        })
      )
    );

    await act(async () => {
      await hook.result.current.handleOneVOneStart();
    });

    expect(startGame).toHaveBeenCalledTimes(1);
    ;[, solutionsArg] = startGame.mock.calls[0];
    expect(solutionsArg).toHaveLength(3);
  });

  it('syncs 1v1 guesses into local boards using scoreGuess colors', async () => {
    const setBoards = vi.fn();
    const gameState = {
      status: 'playing',
      solutions: ['APPLE'],
      hostId: 'host-uid',
      speedrun: false,
      hostGuesses: ['OTHER'],
      guestGuesses: [],
    };

    const oneVOneGame = {
      ...createCommonProps().oneVOneGame,
      gameState,
    };

    const scoreSpy = vi.spyOn(wordleLib, 'scoreGuess');

    renderHook(() =>
      useOneVOneController(
        createCommonProps({
          authUser: { uid: 'host-uid' },
          oneVOneGame,
          setBoards,
        })
      )
    );

    await waitFor(() => {
      expect(setBoards).toHaveBeenCalled();
    });

    // scoreGuess should be invoked with the host guess and board solution
    expect(scoreSpy).toHaveBeenCalledWith('OTHER', 'APPLE');

    const boardsArg = setBoards.mock.calls[0][0];
    expect(boardsArg).toHaveLength(1);
    const firstBoard = boardsArg[0];
    expect(firstBoard.guesses).toHaveLength(1);

    const guessEntry = firstBoard.guesses[0];
    const expectedColors = scoreSpy.mock.results[0]?.value;

    expect(guessEntry.word).toBe('OTHER');
    expect(Array.isArray(guessEntry.colors)).toBe(true);
    if (expectedColors) {
      expect(guessEntry.colors).toEqual(expectedColors);
    }
  });
});
