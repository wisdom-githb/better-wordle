import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';
import Modal from './Modal';

const BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

export default function OneVOneModal({ isOpen, onRequestClose, showConfigFirst = false, onConfigClose, onConfigOpen }) {
  const navigate = useNavigate();
  const { user, isVerifiedUser } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [gameCode, setGameCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [showConfig, setShowConfig] = useState(showConfigFirst);
  const [numBoards, setNumBoards] = useState(1);
  const [isSpeedrun, setIsSpeedrun] = useState(false);

  const handleHost = useCallback(() => {
    // Show config modal first
    setShowConfig(true);
    onConfigOpen?.();
  }, [onConfigOpen]);

  const handleHostWithConfig = useCallback(() => {
    // Navigate to game with configuration
    navigate(`/game?mode=1v1&host=true&speedrun=${isSpeedrun}&boards=${numBoards}`);
    setShowConfig(false);
    onConfigClose?.();
    onRequestClose();
  }, [navigate, onRequestClose, isSpeedrun, numBoards, onConfigClose]);

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

  if (!isVerifiedUser) {
    // Show verification prompt for signed-in but unverified users
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <div style={{ padding: '24px' }}>
          <h2 style={{ margin: 0, marginBottom: '16px', fontSize: 20, fontWeight: 'bold', color: '#ffffff' }}>
            Verify your email
          </h2>
          <p style={{ marginBottom: '20px', color: '#d7dadc', fontSize: 14 }}>
            You must verify your email address or sign in with Google to play 1v1.
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <button
              onClick={onRequestClose}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 8,
                border: '1px solid #3a3a3c',
                background: 'transparent',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestClose();
                navigate('/profile');
              }}
              style={{
                flex: 1,
                padding: '12px',
                borderRadius: 8,
                border: 'none',
                background: '#6aaa64',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Go to Profile
            </button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <Modal isOpen={isOpen && !showConfig} onRequestClose={onRequestClose} disableAutoFocus>
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
              Host 1v1
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

      <Modal
        isOpen={isOpen && showConfig}
        onRequestClose={() => {
          setShowConfig(false);
          onConfigClose?.();
        }}
      >
        <div style={{ padding: '24px' }}>
          <h2
            style={{
              margin: 0,
              marginBottom: '24px',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            1v1 Game Configuration
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: '#d7dadc',
                  fontSize: 14,
                }}
              >
                Number of Boards
              </label>
              <select
                value={numBoards}
                onChange={(e) => setNumBoards(parseInt(e.target.value, 10))}
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: 6,
                  border: '1px solid #3a3a3c',
                  background: '#1a1a1b',
                  color: '#ffffff',
                  fontSize: 14,
                  cursor: 'pointer',
                }}
              >
                {BOARD_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <input
                type="checkbox"
                id="onevone-config-speedrun-host"
                checked={isSpeedrun}
                onChange={(e) => setIsSpeedrun(e.target.checked)}
                style={{ cursor: 'pointer', width: '18px', height: '18px' }}
              />
              <label
                htmlFor="onevone-config-speedrun-host"
                style={{ color: '#d7dadc', fontSize: 14, cursor: 'pointer', margin: 0 }}
              >
                Speedrun Mode (Unlimited guesses, timed)
              </label>
            </div>

            <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
              <button
                onClick={() => {
                  setShowConfig(false);
                  onConfigClose?.();
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 8,
                  border: '1px solid #3a3a3c',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleHostWithConfig}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 8,
                  border: 'none',
                  background: '#6aaa64',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
