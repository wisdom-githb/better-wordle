import React from 'react';

export default function MultiplayerWaitingRoom({
  gameCode,
  gameState,
  isHost,
  onReady,
  onStartGame,
  onAddFriend,
  friendRequestSent,
  onShareCode,
  onCancelChallenge,
  friends,
  authUserId,
  onInviteFriend,
  createdAt,
  waitingNowMs,
  waitingTimeoutMs,
  initialBoards,
  onUpdateConfig,
}) {
  const {
    hostName,
    guestName,
    hostReady,
    guestReady,
    status,
    players: playersMapRaw,
    maxPlayers,
    isPublic,
    speedrun,
    hostId,
  } = gameState || {};

  const playersMap = playersMapRaw || null;
  const currentUserId = authUserId || null;
  const isCurrentUserHost = !!isHost;

  // Derive per-player list when using the players map.
  const playerEntries = playersMap
    ? Object.values(playersMap).sort((a, b) => {
        if (a.isHost && !b.isHost) return -1;
        if (!a.isHost && b.isHost) return 1;
        return (a.joinedAt || 0) - (b.joinedAt || 0);
      })
    : [];

  const hasPlayersMap = !!playersMap && playerEntries.length > 0;

  const currentUserReady = (() => {
    if (hasPlayersMap && currentUserId && playersMap[currentUserId]) {
      return !!playersMap[currentUserId].ready;
    }
    return isCurrentUserHost ? !!hostReady : !!guestReady;
  })();

  const allPlayersReady = hasPlayersMap
    ? playerEntries.length > 0 && playerEntries.every((p) => !!p.ready)
    : !!hostReady && !!guestReady;

  const otherPlayerReady = isCurrentUserHost ? guestReady : hostReady;
  const otherPlayerName = isCurrentUserHost ? guestName : hostName;
  const currentUserName = isCurrentUserHost ? hostName : guestName;

  const [showFriendsList, setShowFriendsList] = React.useState(false);

  // Game configuration for display.
  const boardsLive = Number.isFinite(gameState?.configBoards)
    ? gameState.configBoards
    : Number.isFinite(initialBoards)
    ? initialBoards
    : 1;
  const boards = Math.max(1, boardsLive || 1);
  const maxPlayersConfig = Number.isFinite(maxPlayers) ? maxPlayers : 2;
  const isPublicConfig = isPublic === true;
  const isSpeedrunConfig = !!speedrun;

  // Draft state for host editing of room settings.
  const [isEditingConfig, setIsEditingConfig] = React.useState(false);
  const [boardsDraft, setBoardsDraft] = React.useState(boards);
  const [maxPlayersDraft, setMaxPlayersDraft] = React.useState(maxPlayersConfig);
  const [isPublicDraft, setIsPublicDraft] = React.useState(isPublicConfig);
  const [isSpeedrunDraft, setIsSpeedrunDraft] = React.useState(isSpeedrunConfig);

  React.useEffect(() => {
    setBoardsDraft(boards);
    setMaxPlayersDraft(maxPlayersConfig);
    setIsPublicDraft(isPublicConfig);
    setIsSpeedrunDraft(isSpeedrunConfig);
  }, [boards, maxPlayersConfig, isPublicConfig, isSpeedrunConfig]);

  // Expiry countdown based on createdAt and current time.
  const timeoutMs =
    typeof waitingTimeoutMs === 'number' ? waitingTimeoutMs : 30 * 60 * 1000;
  let expiryLabel = null;
  if (typeof createdAt === 'number' && typeof waitingNowMs === 'number') {
    const elapsed = waitingNowMs - createdAt;
    const remaining = Math.max(0, timeoutMs - elapsed);
    const totalSeconds = Math.floor(remaining / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    expiryLabel =
      minutes > 0
        ? `${minutes}m ${seconds.toString().padStart(2, '0')}s`
        : `${seconds}s`;
  }

  const handleToggleReady = () => {
    if (!onReady) return;
    if (!currentUserReady) {
      onReady(true);
    } else {
      onReady(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          background: '#1a1a1b',
          border: '1px solid #3a3a3c',
          borderRadius: 12,
          padding: '32px',
          maxWidth: '500px',
          width: '100%',
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: '24px',
            fontSize: 24,
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          Multiplayer Room
        </h2>

        {status === 'waiting' && (
          <div>
            <p style={{ color: '#d7dadc', marginBottom: '12px', fontSize: 16 }}>
              Waiting for players to join...
            </p>
            {expiryLabel && (
              <p
                style={{
                  color: '#9ca3af',
                  marginBottom: '16px',
                  fontSize: 12,
                }}
              >
                Room expires in {expiryLabel}.
              </p>
            )}

            {/* Game code / share */}
            <div
              style={{
                background: '#3a3a3c',
                borderRadius: 8,
                padding: '20px',
                marginBottom: '16px',
              }}
            >
              <div
                style={{ color: '#818384', fontSize: 12, marginBottom: '8px' }}
              >
                Game Code:
              </div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 'bold',
                  color: '#6aaa64',
                  letterSpacing: '8px',
                  fontFamily: 'monospace',
                  marginBottom: '12px',
                }}
              >
                {gameCode}
              </div>
              <p
                style={{
                  color: '#818384',
                  fontSize: 12,
                  marginTop: 0,
                  marginBottom: '12px',
                }}
              >
                Share this code with your opponent
              </p>
              {isHost && onShareCode && (
                <button
                  type="button"
                  onClick={() => onShareCode(gameCode)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: 6,
                    border: 'none',
                    background: '#6aaa64',
                    color: '#ffffff',
                    fontSize: 12,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Share Code
                </button>
              )}
            </div>

            {/* Close room for host */}
            {isHost && onCancelChallenge && (
              <button
                type="button"
                onClick={() => onCancelChallenge()}
                style={{
                  width: '100%',
                  marginBottom: '16px',
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

            {/* Game settings summary + optional host editor */}
            <div style={{ marginBottom: '20px', textAlign: 'left' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 4,
                }}
              >
                <div style={{ fontSize: 13, color: '#d7dadc' }}>Game settings</div>
                {isHost && onUpdateConfig && (
                  <button
                    type="button"
                    onClick={() => setIsEditingConfig((prev) => !prev)}
                    style={{
                      border: 'none',
                      background: 'transparent',
                      color: '#9ca3af',
                      fontSize: 11,
                      cursor: 'pointer',
                      textDecoration: 'underline',
                    }}
                  >
                    {isEditingConfig ? 'Cancel' : 'Edit'}
                  </button>
                )}
              </div>

              {!isEditingConfig && (
                <div style={{ fontSize: 12, color: '#9ca3af' }}>
                  Boards: <strong>{boards}</strong> · Mode:{' '}
                  <strong>{isSpeedrunConfig ? 'Speedrun' : 'Standard'}</strong> ·
                  Max players: <strong>{maxPlayersConfig}</strong> · Visibility:{' '}
                  <strong>{isPublicConfig ? 'Public' : 'Private'}</strong>
                </div>
              )}

              {isEditingConfig && isHost && onUpdateConfig && (
                <div
                  style={{
                    fontSize: 12,
                    color: '#d7dadc',
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  <div style={{ display: 'flex', gap: 8 }}>
                    <label style={{ flex: 1 }}>
                      <div style={{ marginBottom: 2 }}>Boards</div>
                      <select
                        value={boardsDraft}
                        onChange={(e) =>
                          setBoardsDraft(
                            Math.min(
                              32,
                              Math.max(1, parseInt(e.target.value, 10) || 1),
                            ),
                          )
                        }
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          borderRadius: 6,
                          border: '1px solid #3a3a3c',
                          background: '#1a1a1b',
                          color: '#ffffff',
                          fontSize: 12,
                        }}
                      >
                        {Array.from({ length: 32 }, (_, i) => i + 1).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label style={{ flex: 1 }}>
                      <div style={{ marginBottom: 2 }}>Max players</div>
                      <select
                        value={maxPlayersDraft}
                        onChange={(e) =>
                          setMaxPlayersDraft(
                            Math.min(
                              8,
                              Math.max(2, parseInt(e.target.value, 10) || 2),
                            ),
                          )
                        }
                        style={{
                          width: '100%',
                          padding: '6px 8px',
                          borderRadius: 6,
                          border: '1px solid #3a3a3c',
                          background: '#1a1a1b',
                          color: '#ffffff',
                          fontSize: 12,
                        }}
                      >
                        {Array.from({ length: 7 }, (_, i) => i + 2).map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <label
                      style={{ display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                      <input
                        type="checkbox"
                        checked={isSpeedrunDraft}
                        onChange={(e) => setIsSpeedrunDraft(e.target.checked)}
                      />
                      <span>Speedrun mode</span>
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'center',
                      }}
                    >
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <input
                          type="radio"
                          checked={isPublicDraft}
                          onChange={() => setIsPublicDraft(true)}
                        />
                        <span>Public</span>
                      </label>
                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <input
                          type="radio"
                          checked={!isPublicDraft}
                          onChange={() => setIsPublicDraft(false)}
                        />
                        <span>Private</span>
                      </label>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditingConfig(false);
                        setBoardsDraft(boards);
                        setMaxPlayersDraft(maxPlayersConfig);
                        setIsPublicDraft(isPublicConfig);
                        setIsSpeedrunDraft(isSpeedrunConfig);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: 6,
                        border: '1px solid #3a3a3c',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      Discard
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        if (!onUpdateConfig) return;
                        onUpdateConfig({
                          boards: boardsDraft,
                          maxPlayers: maxPlayersDraft,
                          isPublic: isPublicDraft,
                          speedrun: isSpeedrunDraft,
                        });
                        setIsEditingConfig(false);
                      }}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: 6,
                        border: 'none',
                        background: '#6aaa64',
                        color: '#ffffff',
                        fontSize: 12,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Players in room */}
            <div style={{ marginBottom: '24px' }}>
              <div
                style={{ color: '#d7dadc', fontSize: 14, marginBottom: '16px' }}
              >
                Players in room:
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                {hasPlayersMap
                  ? playerEntries.map((p) => {
                      const isHostPlayer = !!p.isHost || p.id === hostId;
                      const isCurrent = currentUserId && p.id === currentUserId;
                      return (
                        <div
                          key={p.id}
                          style={{
                            padding: '12px',
                            background: '#3a3a3c',
                            borderRadius: 6,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span
                            style={{ color: '#ffffff', fontWeight: 'bold' }}
                          >
                            {p.name || 'Player'}
                            {isHostPlayer ? ' (Host)' : ''}
                            {isCurrent ? ' (You)' : ''}
                          </span>
                          <span
                            style={{
                              color: p.ready ? '#6aaa64' : '#818384',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}
                          >
                            {p.ready ? '✓ Ready' : 'Not Ready'}
                          </span>
                        </div>
                      );
                    })
                  : (
                    <>
                      <div
                        style={{
                          padding: '12px',
                          background: '#3a3a3c',
                          borderRadius: 6,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{ color: '#ffffff', fontWeight: 'bold' }}
                        >
                          {currentUserName} {isHost ? '(Host)' : ''}
                        </span>
                        <span
                          style={{
                            color: currentUserReady ? '#6aaa64' : '#818384',
                            fontSize: 12,
                            fontWeight: 'bold',
                          }}
                        >
                          {currentUserReady ? '✓ Ready' : 'Not Ready'}
                        </span>
                      </div>
                      {otherPlayerName && (
                        <div
                          style={{
                            padding: '12px',
                            background: '#3a3a3c',
                            borderRadius: 6,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                          }}
                        >
                          <span
                            style={{ color: '#ffffff', fontWeight: 'bold' }}
                          >
                            {otherPlayerName} {!isHost ? '(Host)' : ''}
                          </span>
                          <span
                            style={{
                              color: otherPlayerReady
                                ? '#6aaa64'
                                : '#818384',
                              fontSize: 12,
                              fontWeight: 'bold',
                            }}
                          >
                            {otherPlayerReady ? '✓ Ready' : 'Not Ready'}
                          </span>
                        </div>
                      )}
                    </>
                  )}
              </div>

              {/* Ready / Not Ready + Start Game */}
              {onReady && (
                <>
                  {!currentUserReady ? (
                    <button
                      type="button"
                      onClick={handleToggleReady}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: 8,
                        border: 'none',
                        background: '#6aaa64',
                        color: '#ffffff',
                        fontSize: 16,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                      }}
                    >
                      Ready
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleToggleReady}
                      disabled={allPlayersReady}
                      style={{
                        width: '100%',
                        padding: '14px',
                        borderRadius: 8,
                        border: 'none',
                        background: allPlayersReady
                          ? '#3a3a3c'
                          : '#818384',
                        color: '#ffffff',
                        fontSize: 16,
                        fontWeight: 'bold',
                        cursor: allPlayersReady
                          ? 'not-allowed'
                          : 'pointer',
                        opacity: allPlayersReady ? 0.5 : 1,
                      }}
                    >
                      {allPlayersReady
                        ? 'All Ready - Starting...'
                        : 'Not Ready'}
                    </button>
                  )}

                  {allPlayersReady && isHost && onStartGame && (
                    <button
                      type="button"
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
                        cursor: 'pointer',
                      }}
                    >
                      Start Game
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Add Friend button when a guest is present */}
            {guestName && onAddFriend && (
              <button
                type="button"
                onClick={() => !friendRequestSent && onAddFriend(guestName)}
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
                  opacity: friendRequestSent ? 0.6 : 1,
                }}
              >
                {friendRequestSent
                  ? 'Friend request sent'
                  : `Add ${guestName} as Friend`}
              </button>
            )}

            {/* Collapsible friends list for inviting friends directly into this room */}
            {friends && friends.length > 0 && onInviteFriend && (
              <div style={{ marginTop: '20px', width: '100%' }}>
                <button
                  type="button"
                  onClick={() => setShowFriendsList((prev) => !prev)}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: '1px solid #3a3a3c',
                    background: 'transparent',
                    color: '#ffffff',
                    fontSize: 13,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  Invite friends {showFriendsList ? '▾' : '▸'}
                </button>
                {showFriendsList && (
                  <div
                    style={{
                      marginTop: '8px',
                      maxHeight: '180px',
                      overflowY: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    {friends.map((friend) => (
                      <div
                        key={friend.id}
                        style={{
                          padding: '8px 10px',
                          borderRadius: 6,
                          border: '1px solid #3a3a3c',
                          background: '#2b2b2e',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: '#ffffff', fontSize: 13 }}>
                          {friend.name}
                        </span>
                        <button
                          type="button"
                          onClick={() => onInviteFriend(friend)}
                          style={{
                            padding: '6px 10px',
                            borderRadius: 6,
                            border: 'none',
                            background: '#6aaa64',
                            color: '#ffffff',
                            fontSize: 11,
                            fontWeight: 'bold',
                            cursor: 'pointer',
                          }}
                        >
                          Invite
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
