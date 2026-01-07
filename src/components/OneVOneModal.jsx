import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';
import Modal from './Modal';

export default function OneVOneModal({ isOpen, onRequestClose, defaultSpeedrun = false }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [gameCode, setGameCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [speedrun, setSpeedrun] = useState(defaultSpeedrun);

  // Reset speedrun when modal opens/closes or defaultSpeedrun changes
  useEffect(() => {
    if (isOpen) {
      setSpeedrun(defaultSpeedrun);
    }
  }, [isOpen, defaultSpeedrun]);

  const handleHost = useCallback(() => {
    // Navigate to game with mode=1v1, host=true, and speedrun flag
    navigate(`/game?mode=1v1&host=true&speedrun=${speedrun}`);
    onRequestClose();
  }, [navigate, onRequestClose, speedrun]);

  const handleJoin = useCallback(() => {
    if (!gameCode || gameCode.length !== 6) {
      setCodeError('Please enter a valid 6-digit game code');
      return;
    }

    // Navigate to game with mode=1v1, code, and preserve speedrun from URL if present
    navigate(`/game?mode=1v1&code=${gameCode}`);
    onRequestClose();
  }, [gameCode, navigate, onRequestClose]);


  if (!user) {
    // Show sign-in prompt
    return (
      <>
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
          <div style={{ padding: '24px' }}>
            <h2 style={{ margin: 0, marginBottom: '16px', fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
              1v1 Mode
            </h2>
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <p style={{ marginBottom: '20px', color: '#d7dadc' }}>
                You need to sign in to play 1v1 mode.
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                style={{
                  padding: '12px 24px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#6aaa64',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Sign In
              </button>
            </div>
          </div>
        </Modal>
        <AuthModal
          isOpen={showAuthModal}
          onRequestClose={() => setShowAuthModal(false)}
        />
      </>
    );
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={{ padding: '24px' }}>
        <h2 style={{ margin: 0, marginBottom: '24px', fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
          1v1 Mode
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <button
              onClick={handleHost}
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
              Host 1v1 {speedrun ? '(Speedrun)' : ''}
            </button>
            <p style={{ fontSize: 12, color: '#818384', marginTop: '8px', textAlign: 'center' }}>
              Create a new game and share the code with a friend
            </p>
          </div>

          <div style={{ borderTop: '1px solid #3a3a3c', paddingTop: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#d7dadc', fontSize: 14 }}>
              Enter Game Code:
            </label>
            <input
              type="text"
              value={gameCode}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                setGameCode(value);
                setCodeError('');
              }}
              placeholder="000000"
              maxLength={6}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: 6,
                border: `1px solid ${codeError ? '#f06272' : '#3a3a3c'}`,
                background: '#1a1a1b',
                color: '#ffffff',
                fontSize: 18,
                textAlign: 'center',
                letterSpacing: '4px',
                fontFamily: 'monospace',
                marginBottom: '8px'
              }}
            />
            {codeError && (
              <div style={{ color: '#f06272', fontSize: 12, marginBottom: '12px', textAlign: 'center' }}>
                {codeError}
              </div>
            )}
            <button
              onClick={handleJoin}
              disabled={gameCode.length !== 6}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: 8,
                border: 'none',
                background: gameCode.length === 6 ? '#c9b458' : '#3a3a3c',
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                cursor: gameCode.length === 6 ? 'pointer' : 'not-allowed',
                opacity: gameCode.length === 6 ? 1 : 0.5
              }}
            >
              Join 1v1
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
