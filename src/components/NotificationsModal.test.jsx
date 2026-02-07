import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

vi.mock('../hooks/useAuth', () => ({ useAuth: vi.fn() }));
vi.mock('../hooks/useNotificationSeen', () => ({
  useNotificationSeen: vi.fn(() => ({ markNotificationsSeen: vi.fn() })),
  CHALLENGE_EXPIRY_MS: 30 * 60 * 1000,
}));
vi.mock('./UserCardWithBadges', () => ({ default: ({ username }) => <span>{username}</span> }));
vi.mock('./Modal', () => ({ default: ({ isOpen, children }) => (isOpen ? <div data-testid="modal">{children}</div> : null) }));

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
  useNavigate: () => navigateMock,
}));

import { useAuth } from '../hooks/useAuth';
import { useNotificationSeen } from '../hooks/useNotificationSeen';
import NotificationsModal from './NotificationsModal';

beforeEach(() => {
  vi.clearAllMocks();
  navigateMock.mockReset();
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

describe('NotificationsModal', () => {
  it('renders Notifications title and View all button', () => {
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(screen.getByRole('heading', { name: /notifications/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /view all notifications/i })).toBeInTheDocument();
  });

  it('calls markNotificationsSeen when opened and user is present', () => {
    const markNotificationsSeen = vi.fn();
    useNotificationSeen.mockReturnValue({ markNotificationsSeen });
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(markNotificationsSeen).toHaveBeenCalled();
  });

  it('renders friend requests with Accept and Dismiss', () => {
    const acceptFriendRequest = vi.fn();
    const declineFriendRequest = vi.fn();
    useAuth.mockReturnValue({
      user: { uid: 'u1' },
      isVerifiedUser: true,
      friendRequests: [{ id: 'from1', fromName: 'Alice' }],
      incomingChallenges: [],
      sentChallenges: [],
      acceptFriendRequest,
      declineFriendRequest,
      acceptChallenge: vi.fn(),
      dismissChallenge: vi.fn(),
      cancelSentChallenge: vi.fn(),
    });
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(screen.getByText(/alice/i)).toBeInTheDocument();
    expect(screen.getByText(/wants to be friends/i)).toBeInTheDocument();
    const acceptBtn = screen.getByRole('button', { name: /accept/i });
    const dismissBtn = screen.getAllByRole('button', { name: /dismiss/i })[0];
    expect(acceptBtn).toBeInTheDocument();
    expect(dismissBtn).toBeInTheDocument();
  });

  it('renders challenges with Active/Expired and Accept/Dismiss', () => {
    const now = Date.now();
    const recentChallenge = {
      id: 'ch1',
      gameCode: 'ABC123',
      fromUserId: 'u2',
      fromUserName: 'Bob',
      boards: 2,
      speedrun: false,
      createdAt: now - 5 * 60 * 1000,
    };
    useAuth.mockReturnValue({
      user: { uid: 'u1' },
      isVerifiedUser: true,
      friendRequests: [],
      incomingChallenges: [recentChallenge],
      sentChallenges: [],
      acceptFriendRequest: vi.fn(),
      declineFriendRequest: vi.fn(),
      acceptChallenge: vi.fn(),
      dismissChallenge: vi.fn(),
      cancelSentChallenge: vi.fn(),
    });
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(screen.getByText(/bob/i)).toBeInTheDocument();
    expect(screen.getByText(/active/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /accept/i })).toBeInTheDocument();
  });

  it('View all notifications calls onViewAllNotifications (parent closes and navigates)', async () => {
    const onViewAllNotifications = vi.fn(() => navigateMock('/notifications'));
    const onRequestClose = vi.fn();
    const user = userEvent.setup();
    render(
      <NotificationsModal
        isOpen
        onRequestClose={onRequestClose}
        onViewAllNotifications={onViewAllNotifications}
      />
    );
    await user.click(screen.getByRole('button', { name: /view all notifications/i }));
    expect(onViewAllNotifications).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith('/notifications');
  });

  it('shows verify message when user is not verified', () => {
    useAuth.mockReturnValue({
      user: { uid: 'u1' },
      isVerifiedUser: false,
      friendRequests: [],
      incomingChallenges: [],
      sentChallenges: [],
    });
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(screen.getByText(/verify your email or sign in with google to see notifications/i)).toBeInTheDocument();
  });

  it('shows no notifications when all lists are empty', () => {
    render(<NotificationsModal isOpen onRequestClose={vi.fn()} />);
    expect(screen.getByText(/no notifications right now/i)).toBeInTheDocument();
  });
});
