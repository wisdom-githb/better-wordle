import React from 'react';

export default function OneVOneWaitingRoom({
  gameCode,
  gameState,
  isHost,
  onReady,
  onStartGame,
  onAddFriend,
  friendRequestSent,
  onShareCode
}) {
  const { hostName, guestName, hostReady, guestReady, status, friendRequestStatus } = gameState || {};
  const currentUserReady = isHost ? hostReady : guestReady;
  const otherPlayerReady = isHost ? guestReady : hostReady;
  const bothReady = hostReady && guestReady;
  const otherPlayerName = isHost ? guestName : hostName;
  const currentUserName = isHost ? hostName : guestName;

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
        <h2 style={{ margin: 0, marginBottom: '24px', fontSize: 24, fontWeight: 'bold', color: '#ffffff' }}>
          1v1 Game
        </h2>

        {status === 'waiting' && !guestName && (
          <div>
            <p style={{ color: '#d7dadc', marginBottom: '20px', fontSize: 16 }}>
              Waiting for opponent to join...
            </p>
            <div style={{
              background: '#3a3a3c',
              borderRadius: 8,
              padding: '20px',
              marginBottom: '24px'
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
          </div>
        )}

        {status === 'waiting' && guestName && (
          <div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: '#d7dadc', fontSize: 14, marginBottom: '16px' }}>
                Players:
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  padding: '12px',
                  background: '#3a3a3c',
                  borderRadius: 6,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#ffffff', fontWeight: 'bold' }}>
                    {currentUserName} {isHost ? '(Host)' : ''}
                  </span>
                  <span style={{
                    color: currentUserReady ? '#6aaa64' : '#818384',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}>
                    {currentUserReady ? '✓ Ready' : 'Not Ready'}
                  </span>
                </div>
                <div style={{
                  padding: '12px',
                  background: '#3a3a3c',
                  borderRadius: 6,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ color: '#ffffff', fontWeight: 'bold' }}>
                    {otherPlayerName}
                  </span>
                  <span style={{
                    color: otherPlayerReady ? '#6aaa64' : '#818384',
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}>
                    {otherPlayerReady ? '✓ Ready' : 'Not Ready'}
                  </span>
                </div>
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
                onClick={() => onReady(false)}
                disabled={bothReady}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: 8,
                  border: 'none',
                  background: bothReady ? '#3a3a3c' : '#818384',
                  color: '#ffffff',
                  fontSize: 16,
                  fontWeight: 'bold',
                  cursor: bothReady ? 'not-allowed' : 'pointer',
                  opacity: bothReady ? 0.5 : 1
                }}
              >
                {bothReady ? 'Both Ready - Starting...' : 'Not Ready'}
              </button>
            )}

            {bothReady && isHost && (
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

            {guestName && onAddFriend && (
              <button
                onClick={() => !friendRequestSent && onAddFriend(otherPlayerName)}
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
                  : `Add ${otherPlayerName} as Friend`}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
