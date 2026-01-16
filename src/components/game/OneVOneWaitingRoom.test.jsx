import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import OneVOneWaitingRoom from './OneVOneWaitingRoom';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('OneVOneWaitingRoom', () => {
  it('shows game code and Share Code button when waiting for opponent and host', () => {
    const onShareCode = vi.fn();

    render(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{ status: 'waiting', hostName: 'Host', guestName: null }}
        isHost
        onShareCode={onShareCode}
      />,
    );

    expect(screen.getByText('Waiting for players to join...')).toBeInTheDocument();
    expect(screen.getByText('123456')).toBeInTheDocument();

    const shareButton = screen.getByRole('button', { name: 'Share Code' });
    fireEvent.click(shareButton);
    expect(onShareCode).toHaveBeenCalledWith('123456');
  });

  it('renders player rows with correct ready badges when guest has joined (host view)', () => {
    render(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: true,
          guestReady: false,
        }}
        isHost
      />,
    );

    expect(screen.getByText('Alice (Host)')).toBeInTheDocument();
    expect(screen.getAllByText('✓ Ready')[0]).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getAllByText('Not Ready')[0]).toBeInTheDocument();
  });

  it('shows the host label from the guest perspective as well', () => {
    render(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: true,
          guestReady: false,
        }}
        isHost={false}
      />,
    );

    // Guest should see the host label on the host row.
    expect(screen.getByText('Alice (Host)')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('calls onReady and disables Not Ready when both players are ready', () => {
    const onReady = vi.fn();
    const onStartGame = vi.fn();

    // First render: current user not ready, should show Ready button
    const { rerender } = render(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: false,
          guestReady: true,
        }}
        isHost
        currentUserId="host-id"
        maxPlayers={2}
        onReady={onReady}
        onStartGame={onStartGame}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Ready' }));
    expect(onReady).toHaveBeenCalled();

    // Second render: both players ready; Not Ready disabled and Start Game visible for host
    rerender(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: true,
          guestReady: true,
        }}
        isHost
        currentUserId="host-id"
        maxPlayers={2}
        onReady={onReady}
        onStartGame={onStartGame}
      />,
    );

    const notReadyButton = screen.getByRole('button', { name: 'All Ready - Starting...' });
    expect(notReadyButton).toBeDisabled();

    const startButton = screen.getByRole('button', { name: 'Start Game' });
    fireEvent.click(startButton);
    expect(onStartGame).toHaveBeenCalled();
  });

  it('handles Add Friend button label, disabled state, and callback', () => {
    const onAddFriend = vi.fn();

    // friendRequestSent = false -> button enabled, label "Add {name} as Friend"
    const { rerender } = render(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: true,
          guestReady: false,
        }}
        isHost
        onAddFriend={onAddFriend}
        friendRequestSent={false}
      />,
    );

    const addButton = screen.getByRole('button', { name: 'Add Bob as Friend' });
    fireEvent.click(addButton);
    expect(onAddFriend).toHaveBeenCalledWith('Bob');

    // friendRequestSent = true -> button disabled and text "Friend request sent"
    rerender(
      <OneVOneWaitingRoom
        gameCode="123456"
        gameState={{
          status: 'waiting',
          hostName: 'Alice',
          guestName: 'Bob',
          hostReady: true,
          guestReady: false,
        }}
        isHost
        onAddFriend={onAddFriend}
        friendRequestSent
      />,
    );

    const sentButton = screen.getByRole('button', { name: 'Friend request sent' });
    expect(sentButton).toBeDisabled();
  });
});
