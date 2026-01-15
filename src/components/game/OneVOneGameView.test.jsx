import React, { Suspense } from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import OneVOneGameView from './OneVOneGameView';

// Stub header and auth modal so we can focus on the 1v1 auth-gating UI.
vi.mock('../SiteHeader', () => ({
  default: () => <header data-testid="site-header" />, // eslint-disable-line react/display-name
}));

vi.mock('../AuthModal', () => ({
  default: ({ isOpen, onRequestClose }) => (
    // Minimal stub that lets us assert it opened; close is unused but kept for API compatibility.
    isOpen ? (
      <div data-testid="auth-modal" onClick={onRequestClose}>
        AUTH MODAL
      </div>
    ) : null
  ), // eslint-disable-line react/display-name
}));

beforeEach(() => {
  vi.clearAllMocks();
});

const baseProps = {
  mode: '1v1',
  gameCode: '123456',
  oneVOneGame: { gameState: null, error: null, loading: false },
  isLoading: false,
  maxTurns: 6,
  currentGuess: '',
  invalidCurrentGuess: false,
  revealId: 0,
  boardRefs: { current: {} },
  boards: [],
  selectedBoardIndex: null,
  setSelectedBoardIndex: () => {},
  friendRequestSent: false,
  onAddFriendRequest: () => {},
  onShareCode: () => {},
  onReady: () => {},
  onStartGame: () => {},
  onOpenFeedback: () => {},
  onRematch: () => {},
  setShowFeedbackModal: () => {},
  setTimedMessage: () => {},
  oneVOneNowMs: 0,
  initialNumBoards: 1,
  onChangeMode: () => {},
  friends: [],
  onCancelChallenge: () => {},
};

describe('OneVOneGameView unauthenticated 1v1 gating', () => {
  it('shows the sign-in required screen for unsigned users with correct copy and buttons', async () => {
    const onBack = vi.fn();

    render(
      <Suspense fallback={null}>
        <OneVOneGameView
          {...baseProps}
          authUser={null}
          authLoading={false}
          onBack={onBack}
        />
      </Suspense>,
    );

    // Wait for any lazy AuthModal/Suspense work to settle
    await screen.findByText('Sign in to play 1v1 games');

    // Heading and message
    expect(screen.getByText('Sign in to play 1v1 games')).toBeInTheDocument();
    expect(
      screen.getByText('A Better Wordle account is required to host or join 1v1 games.'),
    ).toBeInTheDocument();

    // Buttons
    const signInButton = screen.getByRole('button', { name: 'Sign In' });
    const backButton = screen.getByRole('button', { name: 'Back to Home' });
    expect(signInButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();

    // Back should call onBack handler
    fireEvent.click(backButton);
    expect(onBack).toHaveBeenCalled();
  });

  it('opens the AuthModal when Sign In is clicked', async () => {
    render(
      <Suspense fallback={null}>
        <OneVOneGameView
          {...baseProps}
          authUser={null}
          authLoading={false}
          onBack={vi.fn()}
        />
      </Suspense>,
    );

    const signInButton = screen.getByRole('button', { name: 'Sign In' });
    fireEvent.click(signInButton);

    const modal = await screen.findByTestId('auth-modal');
    expect(modal).toBeInTheDocument();
  });
});
