import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

vi.mock('../hooks/useAuth', () => ({
  useAuth: vi.fn(),
}));

vi.mock('../hooks/useDailyResetTimer', () => ({
  useDailyResetTimer: vi.fn(),
}));

const navigateMock = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

import { useAuth } from '../hooks/useAuth';
import { useDailyResetTimer } from '../hooks/useDailyResetTimer';
import SiteHeader from './SiteHeader';

beforeEach(() => {
  vi.clearAllMocks();
  navigateMock.mockReset();
});

describe('SiteHeader', () => {
  it('shows Sign In when user is null and opens AuthModal when clicked', async () => {
    useAuth.mockReturnValue({ user: null, signOut: vi.fn() });
    useDailyResetTimer.mockReturnValue('00:10:00');

    const user = userEvent.setup();

    render(<SiteHeader onOpenFeedback={vi.fn()} onSignUpComplete={vi.fn()} />);

    const signInButton = screen.getByRole('button', { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();

    await user.click(signInButton);

    // AuthModal content should now be visible
    expect(await screen.findByText(/sign in to access your account/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it('when user is present, shows Sign Out, Leaderboard, and username banner with Change username', () => {
    useAuth.mockReturnValue({
      user: { displayName: 'Alice', email: 'alice@example.com' },
      signOut: vi.fn(),
    });
    useDailyResetTimer.mockReturnValue('00:10:00');

    render(<SiteHeader onOpenFeedback={vi.fn()} onSignUpComplete={vi.fn()} />);

    expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign out/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /sign in/i })).not.toBeInTheDocument();

    expect(screen.getByText(/signed in as alice/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /change username/i })).toBeInTheDocument();
  });

  it('home icon navigates to \/ and leaderboard button navigates to \/leaderboard', async () => {
    useAuth.mockReturnValue({ user: null, signOut: vi.fn() });
    useDailyResetTimer.mockReturnValue('00:10:00');
    const user = userEvent.setup();

    render(<SiteHeader onOpenFeedback={vi.fn()} onSignUpComplete={vi.fn()} />);

    const homeButton = screen.getByRole('button', { name: /home/i });
    const leaderboardButton = screen.getByRole('button', { name: /leaderboard/i });

    await user.click(homeButton);
    await user.click(leaderboardButton);

    expect(navigateMock).toHaveBeenCalledWith('/');
    expect(navigateMock).toHaveBeenCalledWith('/leaderboard');
  });

  it('Change username button navigates to \/profile when user is present', async () => {
    const signOut = vi.fn();
    useAuth.mockReturnValue({
      user: { displayName: 'Bob', email: 'bob@example.com' },
      signOut,
    });
    useDailyResetTimer.mockReturnValue('00:10:00');

    const user = userEvent.setup();

    render(<SiteHeader onOpenFeedback={vi.fn()} onSignUpComplete={vi.fn()} />);

    const changeUsernameButton = screen.getByRole('button', { name: /change username/i });
    await user.click(changeUsernameButton);

    expect(navigateMock).toHaveBeenCalledWith('/profile');
  });

  it('opens Challenges modal from hamburger and shows Sent and Received sections', async () => {
    const acceptChallenge = vi.fn();
    const dismissChallenge = vi.fn();
    const cancelSentChallenge = vi.fn();

    useAuth.mockReturnValue({
      user: { displayName: 'Alice', email: 'alice@example.com' },
      signOut: vi.fn(),
      friendRequests: [],
      incomingChallenges: [
        {
          id: 'inc1',
          fromUserName: 'Bob',
          boards: 2,
          speedrun: false,
          gameCode: '123456',
        },
      ],
      sentChallenges: [
        {
          id: 'sent1',
          toUserId: 'friend-1',
          toUserName: 'Carol',
          boards: 1,
          speedrun: true,
          gameCode: '654321',
        },
      ],
      isVerifiedUser: true,
      acceptChallenge,
      dismissChallenge,
      cancelSentChallenge,
    });
    useDailyResetTimer.mockReturnValue('00:10:00');

    const user = userEvent.setup();

    render(<SiteHeader onOpenFeedback={vi.fn()} onSignUpComplete={vi.fn()} />);

    // Open hamburger menu
    const menuButton = screen.getByTitle('Menu');
    await user.click(menuButton);

    // Open Challenges modal
    const challengesButton = screen.getByRole('button', { name: /challenges/i });
    await user.click(challengesButton);

    // Headings
    expect(screen.getByText(/sent/i)).toBeInTheDocument();
    expect(screen.getByText(/received/i)).toBeInTheDocument();

    // Sent card: Carol
    expect(screen.getByText(/Carol/i)).toBeInTheDocument();
    // Received card: Bob
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();

    // Cancel button in Sent section should call cancelSentChallenge with game code
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await user.click(cancelButton);

    expect(cancelSentChallenge).toHaveBeenCalledTimes(1);
    expect(cancelSentChallenge).toHaveBeenCalledWith('654321');
  });
});
