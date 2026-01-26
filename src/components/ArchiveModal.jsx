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
            borderRadius: 16,
            padding: 32,
            maxWidth: 600,
            width: '92vw',
            maxHeight: '80vh',
            overflowY: 'auto',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: 24,
              fontSize: 24,
              fontWeight: 'bold',
              color: '#ffffff',
              letterSpacing: 1,
              textAlign: 'center',
            }}
          >
            {getModeDisplayName()} Archive
          </h2>

          <div
            style={{
              marginBottom: 20,
              fontSize: 14,
              color: '#9ca3af',
              textAlign: 'center',
            }}
          >
            {checkingDates 
              ? 'Checking available dates...'
              : isSubscribed 
                ? 'Select a date to play that day\'s game'
                : 'Subscribe to unlock archive access'}
          </div>

          {unavailableDateMessage && (
            <div
              style={{
                marginBottom: 20,
                padding: '12px 16px',
                borderRadius: 8,
                backgroundColor: 'rgba(220, 38, 38, 0.2)',
                border: '1px solid #ef4444',
                color: '#ef4444',
                fontSize: 13,
                textAlign: 'center',
              }}
            >
              {unavailableDateMessage}
            </div>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: 12,
              marginBottom: 20,
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
                  disabled={false}
                  style={{
                    padding: '16px 12px',
                    borderRadius: 10,
                    border: isUnavailable 
                      ? '1px solid #3a3a3c' 
                      : isLocked 
                        ? '1px solid #3a3a3c' 
                        : '1px solid #6aaa64',
                    background: isUnavailable 
                      ? '#18181a' 
                      : isLocked 
                        ? '#18181a' 
                        : '#1a2e1a',
                    color: isUnavailable 
                      ? '#818384' 
                      : isLocked 
                        ? '#818384' 
                        : '#ffffff',
                    fontSize: 13,
                    fontWeight: 'bold',
                    cursor: isUnavailable ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    transition: 'all 0.2s ease',
                    opacity: (isLocked || isUnavailable) ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isLocked && !isUnavailable) {
                      e.currentTarget.style.background = '#1f3f1f';
                      e.currentTarget.style.borderColor = '#7bb87b';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLocked && !isUnavailable) {
                      e.currentTarget.style.background = '#1a2e1a';
                      e.currentTarget.style.borderColor = '#6aaa64';
                    }
                  }}
                >
                  {isUnavailable ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginBottom: 4 }}
                    >
                      <path
                        d="M12 9V11M12 15H12.01M5 12C5 16.9706 9.02944 21 14 21C18.9706 21 23 16.9706 23 12C23 7.02944 18.9706 3 14 3C9.02944 3 5 7.02944 5 12Z"
                        stroke="#818384"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : isLocked && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginBottom: 4 }}
                    >
                      <path
                        d="M6 10V8C6 5.79086 7.79086 4 10 4H14C16.2091 4 18 5.79086 18 8V10M6 10H4C2.89543 10 2 10.8954 2 12V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V12C22 10.8954 21.1046 10 20 10H18M6 10V14M18 10V14"
                        stroke={isLocked ? '#818384' : '#6aaa64'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div>{formatArchiveDate(dateString)}</div>
                </button>
              );
            })}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <button
              onClick={handleClose}
              style={{
                padding: '12px 24px',
                borderRadius: 10,
                border: '1px solid #3a3a3c',
                background: 'transparent',
                color: '#ffffff',
                fontSize: 14,
                fontWeight: 'bold',
                cursor: 'pointer',
                letterSpacing: 1,
                textTransform: 'uppercase',
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
