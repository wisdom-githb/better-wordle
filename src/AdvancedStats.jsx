import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAuth } from './hooks/useAuth';
import { useSubscription } from './hooks/useSubscription';
import { loadGameRecords, calculateAdvancedStats, formatTime } from './lib/statsService';
import SiteHeader from './components/SiteHeader';
import SubscribeModal from './components/SubscribeModal';
import './AdvancedStats.css';

const MODES = [
  { mode: 'daily', speedrunEnabled: false, label: 'Daily Standard' },
  { mode: 'daily', speedrunEnabled: true, label: 'Daily Speedrun' },
  { mode: 'marathon', speedrunEnabled: false, label: 'Marathon Standard' },
  { mode: 'marathon', speedrunEnabled: true, label: 'Marathon Speedrun' },
];

export default function AdvancedStats() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const modeParam = searchParams.get('mode') || 'daily';
  const speedrunParam = searchParams.get('speedrun') === 'true';
  const { user, loading: authLoading } = useAuth();
  const { showSubscriptionGate } = useSubscription(user);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mode = MODES.some(m => m.mode === modeParam) ? modeParam : 'daily';
  const speedrunEnabled = speedrunParam;

  useEffect(() => {
    if (!user) return;
    loadStats();
  }, [user, mode, speedrunEnabled]);

  async function loadStats() {
    if (!user) return;
    try {
      setLoading(true);
      setError(null);
      const gameRecords = await loadGameRecords({
        uid: user.uid,
        mode,
        speedrunEnabled,
      });
      if (gameRecords === null) {
        setError('Failed to load statistics.');
        setStats(null);
      } else {
        setStats(calculateAdvancedStats(gameRecords));
      }
    } catch (err) {
      console.error('Failed to load stats:', err);
      setError('Failed to load statistics.');
      setStats(null);
    } finally {
      setLoading(false);
    }
  }

  const setMode = (newMode, newSpeedrun) => {
    setSearchParams({ mode: newMode, speedrun: newSpeedrun ? 'true' : 'false' });
  };

  const getModeDisplayName = () => {
    const m = MODES.find(m => m.mode === mode && m.speedrunEnabled === speedrunEnabled);
    return m ? m.label : `${mode === 'daily' ? 'Daily' : 'Marathon'} ${speedrunEnabled ? 'Speedrun' : 'Standard'}`;
  };

  if (!authLoading && !user) {
    navigate('/', { replace: true });
    return null;
  }

  if (authLoading) {
    return (
      <div className="stats-page">
        <SiteHeader />
        <main className="stats-main">
          <div className="stats-container">
            <div className="stats-loading">Loading…</div>
          </div>
        </main>
      </div>
    );
  }

  const pageTitle = `${getModeDisplayName()} Statistics | Better Wordle`;

  function StatCard({ title, value, subtitle = null, locked = false, onClick = null }) {
    return (
      <div
        className={`stats-card ${locked ? 'stats-card--locked' : ''} ${locked && onClick ? 'stats-card--clickable' : ''}`}
        onClick={locked && onClick ? onClick : undefined}
        role={locked && onClick ? 'button' : undefined}
      >
        <div className="stats-card__label">{title}</div>
        <div className="stats-card__value">{locked ? '🔒' : value}</div>
        {subtitle && <div className="stats-card__subtitle">{subtitle}</div>}
        {locked && <div className="stats-card__premium">Premium only</div>}
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={`Your ${getModeDisplayName()} statistics and performance on Better Wordle.`} />
      </Helmet>
      <div className="stats-page">
        <SiteHeader />
        <main className="stats-main">
          <div className="stats-container">
            <nav className="stats-nav">
              <button
                type="button"
                className="stats-back"
                onClick={() => navigate('/profile')}
              >
                ← Back to Profile
              </button>
            </nav>

            <header className="stats-header">
              <h1 className="stats-title">Statistics</h1>
              <p className="stats-subtitle">{getModeDisplayName()}</p>
              <div className="stats-mode-tabs">
                {MODES.map((m) => (
                  <button
                    key={`${m.mode}-${m.speedrunEnabled}`}
                    type="button"
                    className={`stats-mode-tab ${m.mode === mode && m.speedrunEnabled === speedrunEnabled ? 'stats-mode-tab--active' : ''}`}
                    onClick={() => setMode(m.mode, m.speedrunEnabled)}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              {showSubscriptionGate && (
                <p className="stats-premium-cta">
                  Subscribe to unlock all statistics.
                  <button
                    type="button"
                    className="stats-subscribe-btn"
                    onClick={() => setShowSubscribeModal(true)}
                  >
                    Subscribe
                  </button>
                </p>
              )}
            </header>

            {loading && (
              <div className="stats-loading">Loading statistics…</div>
            )}

            {error && (
              <div className="stats-error">{error}</div>
            )}

            {!loading && !error && stats && (
              <>
                {/* Guess Distribution */}
                <section className="stats-section">
                  <h2 className="stats-section-title">Guess distribution</h2>
                  <div className="stats-guess-bars">
                    {[1, 2, 3, 4, 5, 6].map((guessCount) => {
                      const count = stats.guessDistribution[guessCount] || 0;
                      const percentage = stats.solvedGames > 0
                        ? Math.round((count / stats.solvedGames) * 100 * 100) / 100
                        : 0;
                      const maxCount = Math.max(...Object.values(stats.guessDistribution), 1);
                      const barHeight = (count / maxCount) * 100;
                      return (
                        <div key={guessCount} className="stats-guess-bar-wrap">
                          <div className="stats-guess-bar-label">
                            {guessCount} {guessCount === 1 ? 'guess' : 'guesses'}
                          </div>
                          <div className="stats-guess-bar-track">
                            <div
                              className="stats-guess-bar-fill"
                              style={{ height: `${barHeight}%` }}
                            />
                          </div>
                          <div className="stats-guess-bar-count">{count}</div>
                          <div className="stats-guess-bar-pct">{percentage}%</div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Performance metrics */}
                <section className="stats-section">
                  <h2 className="stats-section-title">Performance</h2>
                  <div className="stats-grid">
                    <StatCard
                      title="Total games solved"
                      value={stats.solvedGames}
                      subtitle={`of ${stats.totalGames} games`}
                    />
                    <StatCard
                      title="Win rate"
                      value={`${stats.winRate}%`}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Average guesses"
                      value={stats.averageGuesses.toFixed(2)}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Median guesses"
                      value={stats.medianGuesses}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Best"
                      value={stats.bestPerformance !== null ? `${stats.bestPerformance} guess${stats.bestPerformance === 1 ? '' : 'es'}` : '—'}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Worst"
                      value={stats.worstPerformance !== null ? `${stats.worstPerformance} guesses` : '—'}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Perfect games"
                      value={stats.perfectGames}
                      subtitle={`${stats.perfectGamesPercentage}% of solved`}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Solved in 3 or fewer"
                      value={stats.gamesSolvedIn3OrFewer}
                      subtitle={`${stats.gamesSolvedIn3OrFewerPercentage}% of solved`}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                    <StatCard
                      title="Solved in 4 or fewer"
                      value={stats.gamesSolvedIn4OrFewer}
                      subtitle={`${stats.gamesSolvedIn4OrFewerPercentage}% of solved`}
                      locked={showSubscriptionGate}
                      onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                    />
                  </div>
                </section>

                {speedrunEnabled && (
                  <section className="stats-section">
                    <h2 className="stats-section-title">Time-based</h2>
                    <div className="stats-grid">
                      <StatCard
                        title="Average solve time"
                        value={stats.averageTimeMs != null ? formatTime(stats.averageTimeMs) : '—'}
                        locked={showSubscriptionGate}
                        onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                      />
                      <StatCard
                        title="Median solve time"
                        value={stats.medianTimeMs != null ? formatTime(stats.medianTimeMs) : '—'}
                        locked={showSubscriptionGate}
                        onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                      />
                      <StatCard
                        title="Fastest solve"
                        value={stats.fastestTimeMs != null ? formatTime(stats.fastestTimeMs) : '—'}
                        locked={showSubscriptionGate}
                        onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                      />
                      <StatCard
                        title="Slowest solve"
                        value={stats.slowestTimeMs != null ? formatTime(stats.slowestTimeMs) : '—'}
                        locked={showSubscriptionGate}
                        onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                      />
                      <StatCard
                        title="Avg time per guess"
                        value={stats.averageTimePerGuess != null ? formatTime(stats.averageTimePerGuess) : '—'}
                        locked={showSubscriptionGate}
                        onClick={() => showSubscriptionGate && setShowSubscribeModal(true)}
                      />
                    </div>
                  </section>
                )}

                {stats.solvedGames === 0 && (
                  <p className="stats-empty">No statistics yet. Complete some games to see your stats.</p>
                )}
              </>
            )}
          </div>
        </main>
      </div>

      <SubscribeModal
        isOpen={showSubscribeModal}
        onRequestClose={() => setShowSubscribeModal(false)}
        onSubscriptionComplete={() => setShowSubscribeModal(false)}
      />
    </>
  );
}
