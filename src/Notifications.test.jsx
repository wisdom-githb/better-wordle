import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

vi.mock('./hooks/useAuth', () => ({ useAuth: vi.fn() }));
vi.mock('./hooks/useNotificationSeen', () => ({ useNotificationSeen: vi.fn() }));
vi.mock('./components/UserCardWithBadges', () => ({ default: ({ username }) => <span>{username}</span> }));
vi.mock('./components/SiteHeader', () => ({ default: () => <header data-testid="site-header">Header</header> }));

import { useAuth } from './hooks/useAuth';
import { useNotificationSeen } from './hooks/useNotificationSeen';
import Notifications from './Notifications';

beforeEach(() => {
  vi.clearAllMocks();
  useAuth.mockReturnValue({
    user: { uid: 'u1' },
    isVerifiedUser: true,
    friendRequests: [],
    incomingChallenges: [],
    sentChallenges: [],
    acceptFriendRequest: vi.fn(),
    declineFriendRequest: vi.fn(),
    acceptChallenge: vi.fn(),
    dismissChallenge: vi.fn(),
    cancelSentChallenge: vi.fn(),
  });
  useNotificationSeen.mockReturnValue({ markNotificationsSeen: vi.fn() });
});

describe('Notifications page', () => {
  it('renders page with All Notifications heading and sections when empty', () => {
    render(
      <MemoryRouter>
        <Notifications />
      </MemoryRouter>,
    );
    expect(screen.getByRole('heading', { name: /all notifications/i })).toBeInTheDocument();
    expect(screen.getByTestId('site-header')).toBeInTheDocument();
    expect(screen.getByText(/no notifications/i)).toBeInTheDocument();
  });

  it('calls markNotificationsSeen on mount when user is present', () => {
    const markNotificationsSeen = vi.fn();
    useNotificationSeen.mockReturnValue({ markNotificationsSeen });
    render(
      <MemoryRouter>
        <Notifications />
      </MemoryRouter>,
    );
    expect(markNotificationsSeen).toHaveBeenCalled();
  });

  it('shows verify message when user is not verified', () => {
    useAuth.mockReturnValue({
      user: { uid: 'u1' },
      isVerifiedUser: false,
      friendRequests: [],
      incomingChallenges: [],
      sentChallenges: [],
    });
    render(
      <MemoryRouter>
        <Notifications />
      </MemoryRouter>,
    );
    expect(screen.getByText(/verify your email or sign in with google to see notifications/i)).toBeInTheDocument();
  });

  it('shows friend requests section when there are friend requests', () => {
    useAuth.mockReturnValue({
      user: { uid: 'u1' },
      isVerifiedUser: true,
      friendRequests: [{ id: 'f1', fromName: 'Alice' }],
      incomingChallenges: [],
      sentChallenges: [],
      acceptFriendRequest: vi.fn(),
      declineFriendRequest: vi.fn(),
      acceptChallenge: vi.fn(),
      dismissChallenge: vi.fn(),
      cancelSentChallenge: vi.fn(),
    });
    render(
      <MemoryRouter>
        <Notifications />
      </MemoryRouter>,
    );
    expect(screen.getByText(/friend requests/i)).toBeInTheDocument();
    expect(screen.getByText(/alice/i)).toBeInTheDocument();
  });
});
