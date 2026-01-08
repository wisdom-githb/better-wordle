import React, { useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import FeedbackModal from "./components/FeedbackModal";
import AuthModal from "./components/AuthModal";
import OneVOneModal from "./components/OneVOneModal";
import HamburgerMenu from "./components/HamburgerMenu";
import { useAuth } from "./hooks/useAuth";
import { saveJSON, loadJSON, marathonMetaKey } from "./lib/persist";
import { useDailyResetTimer } from "./hooks/useDailyResetTimer";

const BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

const ModeRow = React.memo(function ModeRow({ title, desc, buttonText, onClick, variant = "green", titleRight }) {
  return (
    <div className="modeRow">
      <div className="modeRowText">
        <div className="modeRowTitle">
          {title}
          {titleRight ? <span className="modeRowTitleRight">{titleRight}</span> : null}
        </div>
        <div className="modeRowDesc">{desc}</div>
      </div>

      <button
        className={`homeBtn ${variant === "gold" ? "homeBtnGold" : "homeBtnGreen"}`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
});

export default function Home({
  dailyBoards,
  setDailyBoards,

  marathonIndex,
  marathonLevels
}) {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOneVOneModal, setShowOneVOneModal] = useState(false);
  const [showOneVOneConfig, setShowOneVOneConfig] = useState(false);
  const resetTime = useDailyResetTimer();
  
  const marathonMaxLabel = useMemo(() => marathonLevels[marathonLevels.length - 1], [marathonLevels]);
  const currentBoards = useMemo(() => marathonLevels[marathonIndex], [marathonLevels, marathonIndex]);
  
  const handleCloseFeedback = useCallback(() => setShowFeedbackModal(false), []);
  const handleOpenFeedback = useCallback(() => setShowFeedbackModal(true), []);
  const handleCloseAuth = useCallback(() => setShowAuthModal(false), []);
  const handleOpenAuth = useCallback(() => setShowAuthModal(true), []);
  
  const handleDailyStandard = useCallback(() => {
    saveJSON("mw:dailyBoards", dailyBoards);
    navigate(`/game?mode=daily&boards=${dailyBoards}&speedrun=false`);
  }, [dailyBoards, navigate]);
  
  const handleDailySpeedrun = useCallback(() => {
    saveJSON("mw:dailyBoards", dailyBoards);
    navigate(`/game?mode=daily&boards=${dailyBoards}&speedrun=true`);
  }, [dailyBoards, navigate]);
  
  const handleMarathonStandard = useCallback(() => {
    navigate(`/game?mode=marathon&speedrun=false`);
  }, [navigate]);
  
  const handleMarathonSpeedrun = useCallback(() => {
    navigate(`/game?mode=marathon&speedrun=true`);
  }, [navigate]);
  
  const dailyTitleRight = useMemo(() => `${dailyBoards} board${dailyBoards > 1 ? "s" : ""}`, [dailyBoards]);

  return (
    <div className="homeRoot">
      <div className="homeInner">
        <header className="homeHeader">
          <h1 className="homeTitle">BETTER WORDLE</h1>

          <div className="homeHeaderRight">
            <div className="homeHeaderInfo">
              <div className="resetTimer">
                Reset in: {resetTime}
              </div>
              {user && (
                <div className="userInfo">
                  {user.email || user.displayName || "Unknown"}
                </div>
              )}
            </div>
            <div className="homeHeaderButtons">
              {user ? (
                <button
                  className="homeBtn homeBtnOutline"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              ) : (
                <button
                  className="homeBtn homeBtnOutline"
                  onClick={handleOpenAuth}
                >
                  Sign In
                </button>
              )}
              <button
                className="homeBtn homeBtnOutline"
                onClick={() => navigate('/leaderboard')}
              >
                Leaderboard
              </button>
              <HamburgerMenu onOpenFeedback={handleOpenFeedback} />
            </div>
          </div>
        </header>

        <AuthModal
          isOpen={showAuthModal}
          onRequestClose={handleCloseAuth}
        />

        <FeedbackModal
          isOpen={showFeedbackModal}
          onRequestClose={handleCloseFeedback}
        />

        <OneVOneModal
          isOpen={showOneVOneModal}
          onRequestClose={() => setShowOneVOneModal(false)}
          showConfigFirst={showOneVOneConfig}
          onConfigClose={() => setShowOneVOneConfig(false)}
          onConfigOpen={() => setShowOneVOneConfig(true)}
        />

        {/* DAILY */}
        <section className="panel">
          <div className="panelTop">
            <div>
              <h2 className="panelTitle">Daily</h2>
              <div className="panelDesc">
                Choose how many words you want to play simultaneously.
              </div>
            </div>

            <div className="selector">
              <label className="label" htmlFor="dailyBoards">
                Simultaneous words
              </label>
              <select
                id="dailyBoards"
                value={dailyBoards}
                onChange={(e) => setDailyBoards(parseInt(e.target.value, 10))}
                className="select"
              >
                {BOARD_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="Daily (standard)"
              desc="Limited turns. No timer. Good for casual play."
              buttonText="Play daily"
              onClick={handleDailyStandard}
              variant="green"
              titleRight={dailyTitleRight}
            />

            <ModeRow
              title="Daily (speedrun)"
              desc="Unlimited guesses. Timer starts immediately."
              buttonText="Speedrun daily"
              onClick={handleDailySpeedrun}
              variant="green"
              titleRight={dailyTitleRight}
            />
          </div>
        </section>

        {/* MARATHON */}
        <section className="panel">
          <div className="panelTop">
            <div>
              <h2 className="panelTitle">Marathon</h2>
              <div className="panelDesc">
                Stages: {marathonLevels.join("-")}.
              </div>
            </div>

            <div className="marathonMeta">
              <div className="metaLine">
                Current stage:{" "}
                <span className="metaStrong">
                  {currentBoards}/{marathonMaxLabel} boards
                </span>
              </div>
              <div className="metaHint">
                Marathon can only be resumed. Words reset daily at midnight.
              </div>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="Marathon (standard)"
              desc="Resume your current marathon stage."
              buttonText="Play marathon"
              onClick={handleMarathonStandard}
              variant="gold"
              titleRight={`${currentBoards} boards`}
            />

            <ModeRow
              title="Marathon (speedrun)"
              desc="Resume your speedrun marathon (timed cumulative)."
              buttonText="Speedrun marathon"
              onClick={handleMarathonSpeedrun}
              variant="gold"
              titleRight={`${marathonLevels[0]}-${marathonMaxLabel}`}
            />
          </div>
        </section>

        {/* 1v1 MODE */}
        <section className="panel">
          <div className="panelTop">
            <div>
              <h2 className="panelTitle">1v1</h2>
              <div className="panelDesc">
                Challenge a friend to a head-to-head Wordle battle.
              </div>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="1v1 Mode"
              desc="Play against another player. Same word, different guesses. See only colors, not letters."
              buttonText="Play 1v1"
              onClick={() => setShowOneVOneModal(true)}
              variant="gold"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
