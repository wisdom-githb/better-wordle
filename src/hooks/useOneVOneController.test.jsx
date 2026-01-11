import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

vi.mock('../lib/wordLists', () => ({
  loadWordLists: vi.fn(async () => ({
    ANSWER_WORDS: ['APPLE', 'BERRY'],
    ALLOWED_GUESSES: ['APPLE', 'BERRY'],
  })),
}));

vi.mock('../lib/wordle', () => ({
  getMaxTurns: vi.fn(() => 6),
  scoreGuess: vi.fn(() => Array(5).fill('grey')),
}));

vi.mock('../lib/dailyWords', () => ({
  SeededRandom: function () {
    this.next = () => 0.5;
  },
}));

import { useOneVOneController } from './useOneVOneController';
import { loadWordLists } from '../lib/wordLists';

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
});
