import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { useOpenRooms } from '../hooks/useOpenRooms';

export default function OpenRoomsModal({ isOpen, onRequestClose }) {
  const { rooms, loading } = useOpenRooms();
  const navigate = useNavigate();

  const handleJoin = (code) => {
    if (!code) return;
    navigate(`/game?mode=1v1&code=${code}`);
    onRequestClose?.();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={{ padding: '24px', width: '100%', boxSizing: 'border-box' }}>
        <h2
          style={{
            margin: '0 0 16px 0',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          Open Rooms
        </h2>

        {loading ? (
          <div style={{ padding: '16px 0', color: '#d7dadc', fontSize: 14 }}>
            Loading open rooms...
          </div>
        ) : rooms.length === 0 ? (
          <div style={{ padding: '16px 0', color: '#818384', fontSize: 14 }}>
            No public rooms are waiting right now. You can host a new multiplayer room from
            the home screen.
          </div>
        ) : (
          <div
            style={{
              maxHeight: '320px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '8px',
              marginBottom: '16px',
            }}
          >
            {rooms.map((room) => (
              <div
                key={room.code}
                style={{
                  padding: '10px 12px',
                  borderRadius: 8,
                  border: '1px solid #3a3a3c',
                  background: '#2b2b2e',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                <div style={{ textAlign: 'left', flex: 1 }}>
                  <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: 2 }}>
                    {room.roomName}
                  </div>
                  <div style={{ color: '#d7dadc', fontSize: 12, marginBottom: 2 }}>
                    Code: <span style={{ fontFamily: 'monospace' }}>{room.code}</span>
                  </div>
                  <div style={{ color: '#d7dadc', fontSize: 12 }}>
                    {room.currentPlayers}/{room.maxPlayers} players ·{' '}
                    {room.boards} board{room.boards > 1 ? 's' : ''} ·{' '}
                    {room.speedrun ? 'Speedrun' : 'Standard'}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleJoin(room.code)}
                  className="homeBtn homeBtnGreen"
                  style={{ padding: '6px 12px', fontSize: 12, borderRadius: 6 }}
                >
                  Join
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={onRequestClose}
          className="homeBtn homeBtnGreen homeBtnLg"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
