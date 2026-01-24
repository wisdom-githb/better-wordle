import React from 'react';

export default function OneVOneWaitingRoom({
  gameCode,
  gameState,
  isHost,
  currentUserId,
  maxPlayers,
  roomName,
  onReady,
  onStartGame,
  onAddFriend,
  friendRequestSent,
  onShareCode,
  onCancelChallenge,
  onCloseRoom,
  friends,
  onInviteFriend,
  onUpdateRoomName,
}) {
  const { status } = gameState || {};

  const players = React.useMemo(() => {
    if (!gameState) return [];
    if (gameState.players && typeof gameState.players === 'object') {
      return Object.values(gameState.players).map((p) => ({
        id: p.id,
        name: p.name,
        isHost: !!p.isHost || p.id === gameState.hostId,
        ready: !!p.ready,
      }));
    }
    const list = [];
    if (gameState.hostName || gameState.hostId) {
      list.push({
        id: gameState.hostId || 'host',
        name: gameState.hostName || 'Host',
        isHost: true,
        ready: !!gameState.hostReady,
      });
    }
    if (gameState.guestName || gameState.guestId) {
      list.push({
        id: gameState.guestId || 'guest',
        name: gameState.guestName || 'Guest',
        isHost: false,
        ready: !!gameState.guestReady,
      });
    }
    return list;
  }, [gameState]);

  const effectiveMaxPlayers = Number.isFinite(maxPlayers) ? maxPlayers : (gameState?.maxPlayers || 2);

  const currentPlayer = React.useMemo(() => {
    if (!players.length) return null;
    if (currentUserId) {
      const match = players.find((p) => p.id === currentUserId);
      if (match) return match;
    }
    // Fallback: host vs non-host based on isHost flag
    const hostPlayer = players.find((p) => p.isHost);
    if (isHost && hostPlayer) return hostPlayer;
    if (!isHost && players.length > 1) {
      const nonHost = players.find((p) => !p.isHost) || players[0];
      return nonHost;
    }
    return players[0];
  }, [players, currentUserId, isHost]);

  const currentUserReady = !!currentPlayer?.ready;
  const allPlayersReady = players.length >= 2 && players.every((p) => p.ready);
  const roomFull = players.length >= effectiveMaxPlayers;
  const hasOnlyHost = players.length === 1 && players[0]?.isHost;
  const effectiveRoomName = roomName || (gameState?.hostName ? `${gameState.hostName}'s room` : 'Room');
  const [roomNameDraft, setRoomNameDraft] = React.useState(effectiveRoomName);

  React.useEffect(() => {
    setRoomNameDraft(effectiveRoomName);
  }, [effectiveRoomName]);

  const handleRoomNameBlur = () => {
    if (onUpdateRoomName && isHost) {
      onUpdateRoomName(roomNameDraft);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '20px',
      textAlign: 'center'
    }}>
      <div style={{
        background: '#1a1a1b',
        border: '1px solid #3a3a3c',
        borderRadius: 12,
        padding: '32px',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{ margin: 0, marginBottom: '24px' }}>
          {isHost && onUpdateRoomName ? (
            <input
              type="text"
              value={roomNameDraft}
              onChange={(e) => setRoomNameDraft(e.target.value)}
              onBlur={handleRoomNameBlur}
              placeholder="Room name"
              style={{
                width: '100%',
                padding: '10px 12px',
                borderRadius: 8,
                border: '1px solid #3a3a3c',
                background: '#1a1a1b',
                color: '#ffffff',
                fontSize: 18,
                fontWeight: 'bold',
              }}
            />
          ) : (
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 'bold', color: '#ffffff' }}>
              {effectiveRoomName}
            </h2>
          )}
        </div>

        {status === 'waiting' && hasOnlyHost && (
          <div>
              <p style={{ color: '#d7dadc', marginBottom: '20px', fontSize: 16 }}>
              Waiting for players to join...
            </p>
            <div style={{
              background: '#3a3a3c',
              borderRadius: 8,
              padding: '20px',
              marginBottom: '16px'
            }}>
              <div style={{ color: '#818384', fontSize: 12, marginBottom: '8px' }}>
                Game Code:
              </div>
              <div style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: '#6aaa64',
                letterSpacing: '8px',
                fontFamily: 'monospace',
                marginBottom: '12px'
              }}>
                {gameCode}
              </div>
              <p style={{ color: '#818384', fontSize: 12, marginTop: '0', marginBottom: '12px' }}>
                Share this code with your opponent
              </p>
              {isHost && onShareCode && (
                <button
                  onClick={() => onShareCode(gameCode)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#6aaa64',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = '#5a9b54';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = '#6aaa64';
                  }}
                >
                  Share Code
                </button>
              )}
            </div>

            {isHost && onCancelChallenge && (
              <button
                onClick={() => onCancelChallenge()}
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '10px',
                  borderRadius: 8,
                  border: '1px solid #3a3a3c',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Cancel Challenge
              </button>
            )}

            {isHost && onCloseRoom && (
              <button
                onClick={() => onCloseRoom()}
                style={{
                  width: '100%',
                  marginTop: '8px',
                  padding: '10px',
                  borderRadius: 8,
                  border: '1px solid #3a3a3c',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Close Room
              </button>
            )}
          </div>
        )}

        {status === 'waiting' && players.length > 0 && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: '#d7dadc', fontSize: 14, marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Players</span>
                <span style={{ fontSize: 12, color: '#818384' }}>
                  {players.length}/{effectiveMaxPlayers} players
                </span>
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                marginBottom: '20px'
              }}>
                {players.map((p) => (
                  <div
                    key={p.id || p.name}
                    style={{
                      padding: '10px 12px',
                      background: '#3a3a3c',
                      borderRadius: 6,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ color: '#ffffff', fontWeight: 'bold' }}>
                      {p.name} {p.isHost ? '(Host)' : ''}
                    </span>
                    <span style={{
                      color: p.ready ? '#6aaa64' : '#818384',
                      fontSize: 12,
                      fontWeight: 'bold'
                    }}>
                      {p.ready ? '✓ Ready' : 'Not Ready'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {!currentUserReady ? (
              <button
                onClick={onReady}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#6aaa64',
                  color: '#ffffff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Ready
              </button>
            ) : (
              <button
                onClick={onReady}
                disabled={allPlayersReady}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 8,
                  border: 'none',
                  background: allPlayersReady ? '#3a3a3c' : '#818384',
                  color: '#ffffff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: allPlayersReady ? 'not-allowed' : 'pointer',
                  opacity: allPlayersReady ? 0.5 : 1
                }}
              >
                {allPlayersReady ? 'All Ready - Starting...' : 'Not Ready'}
              </button>
            )}

            {allPlayersReady && isHost && (
              <button
                onClick={onStartGame}
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '14px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#c9b458',
                  color: '#ffffff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Start Game
              </button>
            )}

            {gameState?.guestName && onAddFriend && (
              <button
                onClick={() => !friendRequestSent && onAddFriend(gameState.guestName)}
                disabled={friendRequestSent}
                style={{
                  width: '100%',
                  marginTop: '12px',
                  padding: '14px',
                  borderRadius: 8,
                  border: '1px solid #3a3a3c',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: friendRequestSent ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: friendRequestSent ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!friendRequestSent) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = '#565758';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!friendRequestSent) {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = '#3a3a3c';
                  }
                }}
              >
                {friendRequestSent
                  ? "Friend request sent"
                  : `Add ${gameState?.guestName || 'Player'} as Friend`}
              </button>
            )}

            {Array.isArray(friends) && friends.length > 0 && onInviteFriend && (
              <div style={{ marginTop: '24px', textAlign: 'left' }}>
                <details>
                  <summary style={{ cursor: 'pointer', color: '#d7dadc', fontSize: 14 }}>
                    Invite friends{roomFull ? ' (room is full)' : ''}
                  </summary>
                  <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {friends.map((friend) => (
                      <div
                        key={friend.id}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          padding: '8px 10px',
                          borderRadius: 6,
                          background: '#2b2b2e',
                          border: '1px solid #3a3a3c',
                        }}
                      >
                        <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 500 }}>
                          {friend.name}
                        </span>
                        <button
                          type="button"
                          disabled={roomFull}
                          onClick={() => !roomFull && onInviteFriend(friend.id, friend.name)}
                          className="homeBtn homeBtnGreen"
                          style={{ padding: '6px 10px', fontSize: 11, borderRadius: 6, opacity: roomFull ? 0.6 : 1 }}
                        >
                          {roomFull ? 'Room Full' : 'Invite'}
                        </button>
                      </div>
                    ))}
                  </div>
                </details>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
