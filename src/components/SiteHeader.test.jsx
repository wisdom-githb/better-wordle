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
});