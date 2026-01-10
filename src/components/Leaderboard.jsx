import React, { useState } from 'react';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { useAuth } from '../hooks/useAuth';
import FeedbackModal from './FeedbackModal';
import SiteHeader from './SiteHeader';
import './Leaderboard.css';

function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const millis = Math.floor((ms % 1000) / 100);
  if (minutes > 0) {
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${millis}`;
  }
  return `${seconds}.${millis}`;
}

export default function Leaderboard() {
  const { user } = useAuth();
  const [mode, setMode] = useState('daily');
  const [numBoards, setNumBoards] = useState(null); // null = all boards
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const { entries, loading, error } = useLeaderboard(mode, numBoards, 100);

  const boardOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
  const availableBoards = [...new Set(entries.map(e => e.numBoards))].sort((a, b) => a - b);

  return (
    <div className="leaderboardRoot">
      <div className="leaderboardInner">
        <SiteHeader onOpenFeedback={() => setShowFeedbackModal(true)} />

        <h1 className="leaderboardTitle">Speedrun Leaderboard</h1>

        <div className="leaderboardFilters">
          <div className="filterGroup">
            <label className="filterLabel">Mode:</label>
            <select
              className="filterSelect"
              value={mode}
              onChange={(e) => {
                setMode(e.target.value);
                setNumBoards(null); // Reset board filter when mode changes
              }}
            >
              <option value="daily">Daily</option>
              <option value="marathon">Marathon</option>
            </select>
          </div>

          <div className="filterGroup">
            <label className="filterLabel">Boards:</label>
            <select
              className="filterSelect"
              value={numBoards === null ? 'all' : numBoards}
              onChange={(e) => {
                const value = e.target.value;
                setNumBoards(value === 'all' ? null : parseInt(value, 10));
              }}
            >
              <option value="all">All</option>
              {availableBoards.map(n => (
                <option key={n} value={n}>{n} board{n > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
        </div>

        {error && (
          <div className="leaderboardError">
            Error loading leaderboard: {error}
          </div>
        )}

        {loading ? (
          <div className="leaderboardLoading">Loading leaderboard...</div>
        ) : entries.length === 0 ? (
          <div className="leaderboardEmpty">
            No entries yet. Be the first to submit a speedrun score!
          </div>
        ) : (
          <div className="leaderboardTable">
            <div className="leaderboardRow leaderboardHeaderRow">
              <div className="leaderboardRank">Rank</div>
              <div className="leaderboardName">Player</div>
              <div className="leaderboardBoards">Boards</div>
              <div className="leaderboardTime">Time</div>
              <div className="leaderboardScore">Score</div>
            </div>
            {entries.map((entry, index) => {
              const isCurrentUser = user && entry.userId === user.uid;
              return (
                <div
                  key={entry.id}
                  className={`leaderboardRow ${isCurrentUser ? 'leaderboardRowCurrent' : ''}`}
                >
                  <div className="leaderboardRank">#{index + 1}</div>
                  <div className="leaderboardName">
                    {entry.userName}
                    {isCurrentUser && <span className="leaderboardYou"> (You)</span>}
                  </div>
                  <div className="leaderboardBoards">{entry.numBoards}</div>
                  <div className="leaderboardTime">{formatElapsed(entry.timeMs)}</div>
                  <div className="leaderboardScore">{entry.score}</div>
                </div>
              );
            })}
          </div>
        )}

        <FeedbackModal
          isOpen={showFeedbackModal}
          onRequestClose={() => setShowFeedbackModal(false)}
        />
      </div>
    </div>
  );
}
