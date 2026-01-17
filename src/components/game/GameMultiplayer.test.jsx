import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, act } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

let latestMultiplayerViewProps = null;
let latestKeyboardProps = null;
let latestUseKeyboardArgs = null;
const mockSubmitGuess = vi.fn();
const mockSetTimedMessage = vi.fn();

vi.mock('./MultiplayerGameView', () => ({
  __esModule: true,
  default: (props) => {
    latestMultiplayerViewProps = props;
    return <div data-testid="multiplayer-view" />;
  },
}));

vi.mock('../Keyboard', () => ({
  __esModule: true,
  default: (props) => {
    latestKeyboardProps = props;
    return <div data-testid="keyboard" />;
  },
}));

vi.mock('../../hooks/useAuth', () => ({
  useAuth: () => ({
    user: { uid: 'user-1', displayName: 'User One' },
    sendFriendRequest: vi.fn(),
    isVerifiedUser: false,
    friends: [],
    cancelSentChallenge: vi.fn(),
  }),
}));

vi.mock('../../hooks/useMultiplayerGame', () => ({
  useMultiplayerGame: () => ({
    gameState: {
      status: 'playing',
      speedrun: false,
      hostId: 'user-1',
      guestId: 'user-2',
      currentTurn: 'host',
      solutions: ['APPLE'],
      hostGuesses: [],
      guestGuesses: [],
    },
    submitGuess: mockSubmitGuess,
    switchTurn: vi.fn(),
    requestRematch: vi.fn(),
    leaveGame: vi.fn(),
    expireGame: vi.fn(),
    updateConfig: vi.fn(),
  }),
}));

vi.mock('../../hooks/useKeyboard', () => ({
  useKeyboard: (args) => {
    latestUseKeyboardArgs = args;
  },
}));

vi.mock('../../hooks/useMultiplayerController', () => ({
  useMultiplayerController: () => ({
    friendRequestSent: false,
    hasPlayerSolvedAllOneVOneBoards: false,
    isOneVOneConfigModalOpen: false,
    oneVOneConfigBoardsDraft: 1,
    oneVOneConfigSpeedrunDraft: false,
    setIsOneVOneConfigModalOpen: vi.fn(),
    setOneVOneConfigBoardsDraft: vi.fn(),
    setOneVOneConfigSpeedrunDraft: vi.fn(),
    handleOneVOneReady: vi.fn(),
    handleOneVOneStart: vi.fn(),
    handleCancelHostedChallenge: vi.fn(),
    handleAddFriendRequest: vi.fn(),
    openOneVOneConfigFromEnd: vi.fn(),
    applyOneVOneConfig: vi.fn(),
  }),
}));

vi.mock('../../hooks/useTimedMessage', () => ({
  useTimedMessage: () => ({
    message: '',
    setMessage: vi.fn(),
    setTimedMessage: mockSetTimedMessage,
    clearMessageTimer: vi.fn(),
  }),
}));

vi.mock('../../hooks/useShare', () => ({
  useShare: () => ({
    handleShare: vi.fn(),
    handleShareCode: vi.fn(),
  }),
}));

vi.mock('../FeedbackModal', () => ({
  __esModule: true,
  default: ({ isOpen }) => (isOpen ? <div data-testid="feedback-modal" /> : null),
}));

vi.mock('./GameToast', () => ({
  __esModule: true,
  default: () => <div data-testid="game-toast" />,
}));

vi.mock('./MultiplayerRoomConfigModal', () => ({
  __esModule: true,
  default: () => <div data-testid="config-modal" />,
}));

vi.mock('./BoardSelector', () => ({
  __esModule: true,
  default: () => <div data-testid="board-selector" />,
}));

vi.mock('./GamePopup', () => ({
  __esModule: true,
  default: () => <div data-testid="game-popup" />,
}));

import GameMultiplayer from './GameMultiplayer';

describe('GameMultiplayer partial and full guess handling on Enter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    latestMultiplayerViewProps = null;
    latestKeyboardProps = null;
    latestUseKeyboardArgs = null;
    mockSubmitGuess.mockClear();
    mockSetTimedMessage.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function renderGame() {
    render(
      <MemoryRouter
        initialEntries={['/game/multiplayer/123?mode=multiplayer&host=true']}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/game/multiplayer/:code" element={<GameMultiplayer />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(latestKeyboardProps).not.toBeNull();
    return latestKeyboardProps;
  }

  it('does nothing when Enter is pressed with 0 letters', () => {
    const { onVirtualKey } = renderGame();
    expect(typeof onVirtualKey).toBe('function');
    expect(latestMultiplayerViewProps.currentGuess).toBe('');

    act(() => {
      onVirtualKey('ENTER');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('');
    expect(mockSubmitGuess).not.toHaveBeenCalled();
  });

  it('clears currentGuess when Enter is pressed with fewer than 5 letters via virtual keyboard', () => {
    const { onVirtualKey } = renderGame();

    act(() => {
      onVirtualKey('A');
      onVirtualKey('B');
      onVirtualKey('C');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('ABC');

    act(() => {
      onVirtualKey('ENTER');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('');
    expect(mockSubmitGuess).not.toHaveBeenCalled();
  });

  it('follows normal submit path (not partial-clear) when Enter is pressed with 5 letters', () => {
    const { onVirtualKey } = renderGame();

    act(() => {
      onVirtualKey('A');
      onVirtualKey('P');
      onVirtualKey('P');
      onVirtualKey('L');
      onVirtualKey('E');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('APPLE');

    act(() => {
      onVirtualKey('ENTER');
      vi.runAllTimers();
    });

    // For 1v1 games, a full 5-letter guess should call the submitGuess hook.
    expect(mockSubmitGuess).toHaveBeenCalledTimes(1);
  });

  it('treats physical Enter via useKeyboard onEnter the same as virtual Enter', () => {
    const { onVirtualKey } = renderGame();

    expect(latestUseKeyboardArgs).not.toBeNull();
    const { onEnter } = latestUseKeyboardArgs;
    expect(typeof onEnter).toBe('function');

    // Partial guess: 3 letters, then physical Enter -> clears guess and does not submit.
    act(() => {
      onVirtualKey('A');
      onVirtualKey('B');
      onVirtualKey('C');
      vi.runAllTimers();
    });
    expect(latestMultiplayerViewProps.currentGuess).toBe('ABC');

    mockSubmitGuess.mockClear();
    act(() => {
      onEnter();
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('');
    expect(mockSubmitGuess).not.toHaveBeenCalled();

    // Full 5-letter guess: physical Enter should follow normal submit path and call submitGuess.
    act(() => {
      onVirtualKey('A');
      onVirtualKey('P');
      onVirtualKey('P');
      onVirtualKey('L');
      onVirtualKey('E');
      vi.runAllTimers();
    });
    expect(latestMultiplayerViewProps.currentGuess).toBe('APPLE');

    mockSubmitGuess.mockClear();
    act(() => {
      onEnter();
      vi.runAllTimers();
    });

    expect(mockSubmitGuess).toHaveBeenCalledTimes(1);
  });

  it('does not mark the row invalid while guess is shorter than WORD_LENGTH', () => {
    const { onVirtualKey } = renderGame();

    act(() => {
      onVirtualKey('A');
      onVirtualKey('B');
      onVirtualKey('C');
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('ABC');
    expect(latestMultiplayerViewProps.invalidCurrentGuess).toBe(false);
  });

  it('marks the current row invalid in the view when 5-letter guess is not in word list', () => {
    const { onVirtualKey } = renderGame();

    act(() => {
      onVirtualKey('O');
      onVirtualKey('T');
      onVirtualKey('H');
      onVirtualKey('E');
      onVirtualKey('R');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('OTHER');
    expect(latestMultiplayerViewProps.invalidCurrentGuess).toBe(true);
  });

  it('shows a "Not in word list." toast and clears guess when submitting an invalid 5-letter word', () => {
    const { onVirtualKey } = renderGame();

    act(() => {
      onVirtualKey('O');
      onVirtualKey('T');
      onVirtualKey('H');
      onVirtualKey('E');
      onVirtualKey('R');
      vi.runAllTimers();
    });

    expect(latestMultiplayerViewProps.currentGuess).toBe('OTHER');

    mockSetTimedMessage.mockClear();
    act(() => {
      onVirtualKey('ENTER');
      vi.runAllTimers();
    });

    expect(mockSetTimedMessage).toHaveBeenCalledWith('Not in word list.', 5000);
    expect(latestMultiplayerViewProps.currentGuess).toBe('');
  });
});
