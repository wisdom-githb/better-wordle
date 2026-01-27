import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSubscription } from '../hooks/useSubscription';
import { getArchiveDates, formatArchiveDate, loadArchiveSolution } from '../lib/archiveService';
import SubscribeModal from './SubscribeModal';

/**
 * Modal for viewing and selecting archived games
 * Shows 14 dates before current date
 * Premium users can access all dates, non-premium see locked dates
 */
export default function ArchiveModal({ 
  isOpen, 
  onRequestClose, 
  mode, 
  speedrunEnabled 
}) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { isSubscribed } = useSubscription(user);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [archiveDates, setArchiveDates] = useState([]);
  const [dateAvailability, setDateAvailability] = useState({}); // Map of dateString -> boolean
  const [checkingDates, setCheckingDates] = useState(false);
  const [unavailableDateMessage, setUnavailableDateMessage] = useState(null);

  // Check which dates are available in Firebase
  useEffect(() => {
    if (isOpen && user) {
      const dates = getArchiveDates();
      setArchiveDates(dates);
      setCheckingDates(true);
      
      // Check availability for all dates
      const checkAvailability = async () => {
        const availability = {};
        for (const dateString of dates) {
          try {
            const solutions = await loadArchiveSolution({
              mode,
              speedrunEnabled,
              dateString,
            });
            availability[dateString] = solutions !== null && solutions.length > 0;
          } catch (err) {
            availability[dateString] = false;
          }
        }
        setDateAvailability(availability);
        setCheckingDates(false);
      };
      
      checkAvailability();
    } else if (isOpen) {
      const dates = getArchiveDates();
      setArchiveDates(dates);
    }
  }, [isOpen, mode, speedrunEnabled, user]);

  const getModeDisplayName = () => {
    const modeName = mode === 'daily' ? 'Daily' : 'Marathon';
    const variantName = speedrunEnabled ? 'Speedrun' : 'Standard';
    const boardText = mode === 'daily' ? '1 board' : '';
    return `${modeName} ${variantName}${boardText ? ' ' + boardText : ''}`;
  };

  const handleDateClick = async (dateString) => {
    // First check if date is available
    const isAvailable = dateAvailability[dateString];
    
    if (isAvailable === false) {
      // Date doesn't exist in Firebase
      setUnavailableDateMessage(`This Wordle doesn't exist for ${formatArchiveDate(dateString)}. Archive games are only available for dates for which better wordle has tracked the words.`);
      setTimeout(() => {
        setUnavailableDateMessage(null);
      }, 4000);
      return;
    }
    
    // If checking or unknown, check now
    if (isAvailable === undefined) {
      try {
        const solutions = await loadArchiveSolution({
          mode,
          speedrunEnabled,
          dateString,
        });
        
        if (!solutions || solutions.length === 0) {
          setUnavailableDateMessage(`This Wordle doesn't exist for ${formatArchiveDate(dateString)}. Archive games are only available for dates for which better wordle has tracked the words.`);
          setTimeout(() => {
            setUnavailableDateMessage(null);
          }, 4000);
          return;
        }
      } catch (err) {
        setUnavailableDateMessage(`This Wordle doesn't exist for ${formatArchiveDate(dateString)}. Archive games are only available for dates for which better wordle has tracked the words.`);
        setTimeout(() => {
          setUnavailableDateMessage(null);
        }, 4000);
        return;
      }
    }
    
    // Date exists - check subscription
    if (!isSubscribed) {
      setShowSubscribeModal(true);
      return;
    }

    // Navigate to game with archive date
    // Format: /game?mode=daily&boards=1&archiveDate=2026-01-24
    const modeParam = mode;
    const boardsParam = mode === 'daily' ? 1 : null; // Marathon will use default
    const speedrunParam = speedrunEnabled ? 'true' : undefined;
    
    let gameUrl = `/game?mode=${modeParam}`;
    if (boardsParam) {
      gameUrl += `&boards=${boardsParam}`;
    }
    if (speedrunParam) {
      gameUrl += `&speedrun=${speedrunParam}`;
    }
    gameUrl += `&archiveDate=${dateString}`;

    onRequestClose();
    navigate(gameUrl);
  };

  const handleClose = () => {
    setShowSubscribeModal(false);
    onRequestClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        @keyframes archiveSpinner {
          to { transform: rotate(360deg); }
        }
      `}</style>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) handleClose();
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.82)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3000,
        }}
      >
        <div
          style={{
            backgroundColor: '#1a1a1b',
            borderRadius: 20,
            padding: '40px 32px',
            maxWidth: 700,
            width: '92vw',
            maxHeight: '85vh',
            overflowY: 'auto',
            boxShadow: '0 25px 70px rgba(0,0,0,0.9)',
            border: '1px solid #2b2b2e',
          }}
        >
          <div style={{ marginBottom: 32, textAlign: 'center' }}>
            <h2
              style={{
                margin: 0,
                marginBottom: 8,
                fontSize: 28,
                fontWeight: 'bold',
                color: '#ffffff',
                letterSpacing: 0.5,
              }}
            >
              {getModeDisplayName()} Archive
            </h2>
            <div
              style={{
                fontSize: 14,
                color: '#9ca3af',
                marginTop: 8,
              }}
            >
              {checkingDates 
                ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                    <div style={{ 
                      width: 16, 
                      height: 16, 
                      border: '2px solid #6aaa64',
                      borderTopColor: 'transparent',
                      borderRadius: '50%',
                      animation: 'archiveSpinner 0.8s linear infinite',
                      flexShrink: 0,
                    }} />
                    <span>Checking available dates...</span>
                  </div>
                )
                : isSubscribed 
                  ? 'Select a date to play that day\'s game'
                  : 'Subscribe to unlock archive access'}
            </div>
          </div>

          {unavailableDateMessage && (
            <div
              style={{
                marginBottom: 24,
                padding: '14px 18px',
                borderRadius: 12,
                backgroundColor: 'rgba(220, 38, 38, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#f87171',
                fontSize: 13,
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="10" stroke="#f87171" strokeWidth="2" />
                <path d="M8 8L16 16M16 8L8 16" stroke="#f87171" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>{unavailableDateMessage}</span>
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
              gap: 16,
              marginBottom: 32,
            }}
          >
            {archiveDates.map((dateString) => {
              const isAvailable = dateAvailability[dateString];
              const isLocked = !isSubscribed && isAvailable !== false; // Only lock if subscribed and date exists
              const isUnavailable = isAvailable === false;
              
              return (
                <button
                  key={dateString}
                  onClick={() => handleDateClick(dateString)}
                  disabled={isUnavailable}
                  style={{
                    padding: '20px 16px',
                    borderRadius: 14,
                    border: isUnavailable 
                      ? '2px solid rgba(239, 68, 68, 0.4)' 
                      : isLocked 
                        ? '2px solid #3a3a3c' 
                        : '2px solid #6aaa64',
                    background: isUnavailable 
                      ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(181, 23, 23, 0.05) 100%)' 
                      : isLocked 
                        ? 'linear-gradient(135deg, #18181a 0%, #1a1a1b 100%)' 
                        : 'linear-gradient(135deg, rgba(106, 170, 100, 0.15) 0%, rgba(106, 170, 100, 0.05) 100%)',
                    color: isUnavailable 
                      ? '#f87171' 
                      : isLocked 
                        ? '#9ca3af' 
                        : '#ffffff',
                    fontSize: 13,
                    fontWeight: '600',
                    cursor: isUnavailable ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    opacity: (isLocked || isUnavailable) ? 0.7 : 1,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    if (!isLocked && !isUnavailable) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 20px rgba(106, 170, 100, 0.3)';
                      e.currentTarget.style.borderColor = '#7bb87b';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(106, 170, 100, 0.25) 0%, rgba(106, 170, 100, 0.1) 100%)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLocked && !isUnavailable) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.borderColor = '#6aaa64';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(106, 170, 100, 0.15) 0%, rgba(106, 170, 100, 0.05) 100%)';
                    }
                  }}
                >
                  {isUnavailable ? (
                    <div style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 4,
                    }}>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#ef4444" strokeWidth="2" />
                        <path d="M8 8L16 16M16 8L8 16" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  ) : isLocked && (
                    <div style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%',
                      backgroundColor: 'rgba(156, 163, 175, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 4,
                    }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10M6 10H4C2.89543 10 2 10.8954 2 12V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V12C22 10.8954 21.1046 10 20 10H18M6 10V14M18 10V14"
                          stroke="#9ca3af"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  {!isUnavailable && !isLocked && (
                    <div style={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%',
                      backgroundColor: 'rgba(106, 170, 100, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 4,
                    }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="#6aaa64"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                  <div style={{ 
                    fontSize: 13, 
                    fontWeight: '600',
                    lineHeight: 1.4,
                    textAlign: 'center',
                  }}>
                    {formatArchiveDate(dateString)}
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 12,
            paddingTop: 8,
            borderTop: '1px solid #2b2b2e',
          }}>
            <button
              onClick={handleClose}
              style={{
                padding: '14px 32px',
                borderRadius: 12,
                border: '2px solid #3a3a3c',
                background: 'transparent',
                color: '#d7dadc',
                fontSize: 14,
                fontWeight: '600',
                cursor: 'pointer',
                letterSpacing: 0.5,
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#565758';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(58, 58, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#3a3a3c';
                e.currentTarget.style.color = '#d7dadc';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <SubscribeModal
        isOpen={showSubscribeModal}
        onRequestClose={() => setShowSubscribeModal(false)}
        onSubscriptionComplete={() => {
          setShowSubscribeModal(false);
          // After subscription, user can click the date again
        }}
      />
    </>
  );
}
