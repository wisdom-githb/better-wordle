import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";
import FeedbackModal from "./components/FeedbackModal";
import OneVOneModal from "./components/OneVOneModal";
import Modal from "./components/Modal";
import SiteHeader from "./components/SiteHeader";
import { loadJSON, saveJSON, makeDailyKey, makeMarathonKey, marathonMetaKey, makeSolvedKey, removeKey } from "./lib/persist";

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

  marathonLevels
}) {
  const navigate = useNavigate();
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showOneVOneModal, setShowOneVOneModal] = useState(false);
  const [showOneVOneConfig, setShowOneVOneConfig] = useState(false);
  const [showVerifyEmailModal, setShowVerifyEmailModal] = useState(false);
  const [verifyEmailAddress, setVerifyEmailAddress] = useState("");

  // Track separate stage indices for standard and speedrun marathon for display.
  const [marathonStandardIndexUI, setMarathonStandardIndexUI] = useState(0);
  const [marathonSpeedrunIndexUI, setMarathonSpeedrunIndexUI] = useState(0);

  // Initialize stage indices from persisted marathon meta on mount.
  useEffect(() => {
    const standardMeta = loadJSON(marathonMetaKey(false), null);
    const speedrunMeta = loadJSON(marathonMetaKey(true), null);

    const standardIndex =
      standardMeta && typeof standardMeta.index === "number" ? standardMeta.index : 0;
    const speedrunIndex =
      speedrunMeta && typeof speedrunMeta.index === "number" ? speedrunMeta.index : 0;

    setMarathonStandardIndexUI(standardIndex);
    setMarathonSpeedrunIndexUI(speedrunIndex);
  }, []);
  
  const marathonMaxLabel = useMemo(() => marathonLevels[marathonLevels.length - 1], [marathonLevels]);
  const currentStandardBoards = useMemo(
    () => marathonLevels[marathonStandardIndexUI] || marathonLevels[0],
    [marathonLevels, marathonStandardIndexUI]
  );
  const currentSpeedrunBoards = useMemo(
    () => marathonLevels[marathonSpeedrunIndexUI] || marathonLevels[0],
    [marathonLevels, marathonSpeedrunIndexUI]
  );
  
  const handleCloseFeedback = useCallback(() => setShowFeedbackModal(false), []);
  const handleOpenFeedback = useCallback(() => setShowFeedbackModal(true), []);
  
  const handleDailyStandard = useCallback(() => {
    saveJSON("mw:dailyBoards", dailyBoards);
    navigate(`/game/daily/${dailyBoards}`);
  }, [dailyBoards, navigate]);
  
  const handleDailySpeedrun = useCallback(() => {
    saveJSON("mw:dailyBoards", dailyBoards);
    navigate(`/game/daily/${dailyBoards}/speedrun`);
  }, [dailyBoards, navigate]);
  
  const handleResetDailyGuesses = useCallback(() => {
    // Clear saved in-progress and solved state for today's daily games
    // for the currently selected board count, for both standard and speedrun.
    [false, true].forEach((speedrunEnabled) => {
      const gameKey = makeDailyKey(dailyBoards, speedrunEnabled);
      const solvedKey = makeSolvedKey("daily", dailyBoards, speedrunEnabled);
      removeKey(gameKey);
      removeKey(solvedKey);
    });
  }, [dailyBoards]);
  
  const handleMarathonStandard = useCallback(() => {
    navigate(`/game/marathon`);
  }, [navigate]);
  
  const handleMarathonSpeedrun = useCallback(() => {
    navigate(`/game/marathon/speedrun`);
  }, [navigate]);
  
  const handleResetMarathonGuesses = useCallback(() => {
    // Clear saved in-progress, meta, and solved state for today's marathon games
    // across all stages, for both standard and speedrun.
    [false, true].forEach((speedrunEnabled) => {
      const gameKey = makeMarathonKey(speedrunEnabled);
      const metaKey = marathonMetaKey(speedrunEnabled);
      removeKey(gameKey);
      removeKey(metaKey);

      marathonLevels.forEach((boards, index) => {
        const solvedKey = makeSolvedKey("marathon", boards, speedrunEnabled, index);
        removeKey(solvedKey);
      });
    });

    // Also reset the displayed stage indices back to the first stage.
    setMarathonStandardIndexUI(0);
    setMarathonSpeedrunIndexUI(0);
  }, [marathonLevels]);
  
  const dailyTitleRight = useMemo(() => `${dailyBoards} board${dailyBoards > 1 ? "s" : ""}`, [dailyBoards]);

  return (
    <>
      <Helmet>
        <title>Better Wordle</title>
        <meta
          name="description"
          content="Better Wordle is a Wordle alternative with multi-board daily puzzles, marathon and speedrun modes, and 1v1 Wordle-style battles with friends."
        />
      </Helmet>
      <div className="homeRoot">
      <div className="homeInner">
        <SiteHeader
          onOpenFeedback={handleOpenFeedback}
          onSignUpComplete={(email) => {
            setVerifyEmailAddress(email);
            setShowVerifyEmailModal(true);
          }}
        />

        <Modal
          isOpen={showVerifyEmailModal}
          onRequestClose={() => setShowVerifyEmailModal(false)}
          titleId="verify-email-modal-title"
        >
          <div style={{ padding: "24px", textAlign: "left" }}>
            <h2
              id="verify-email-modal-title"
              style={{
                margin: "0 0 16px 0",
                fontSize: 20,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Verify your email
            </h2>
            <p
              style={{
                margin: "0 0 12px 0",
                fontSize: 14,
                color: "#d7dadc",
                lineHeight: 1.5,
              }}
            >
              We&apos;ve sent a verification link to
              {" "}
              <span style={{ fontWeight: "bold" }}>
                {verifyEmailAddress || "your email address"}
              </span>
              .
            </p>
            <p
              style={{
                margin: "0 0 16px 0",
                fontSize: 14,
                color: "#d7dadc",
                lineHeight: 1.5,
              }}
            >
              Please open that email and click the link to verify your account.
              Once verified, you&apos;ll be able to play 1v1 and use friends.
              Check your Spam or Junk folder for the verification link.
            </p>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                type="button"
                className="homeBtn homeBtnGreen homeBtnLg"
                onClick={() => setShowVerifyEmailModal(false)}
                style={{
                  minWidth: 120,
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </Modal>

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

        <main>
          {/* DAILY */}
          <section className="panel">
            <div className="panelTop">
              <div>
                <h2 className="panelTitle">Daily Wordle-Style Puzzles</h2>
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
                buttonText="Play Daily"
                onClick={handleDailyStandard}
                variant="green"
                titleRight={dailyTitleRight}
              />

              <ModeRow
                title="Daily (speedrun)"
                desc="Unlimited guesses. Timer starts immediately."
                buttonText="Speedrun Daily"
                onClick={handleDailySpeedrun}
                variant="green"
                titleRight={dailyTitleRight}
              />

              <button
                type="button"
                className="homeBtn homeBtnOutline"
                onClick={handleResetDailyGuesses}
                style={{ marginTop: "12px" }}
              >
                Reset today&apos;s daily guesses
              </button>
            </div>
          </section>

          {/* MARATHON */}
          <section className="panel">
            <div className="panelTop">
              <div>
                <h2 className="panelTitle">Marathon &amp; Speedrun Modes</h2>
                <div className="panelDesc">
                  Solve 1 word, then 2, then 3, ending at 4. Complete all stages to
                  win.
                </div>
              </div>
            </div>

            <div className="panelBody">
              <ModeRow
                title="Marathon (standard)"
                desc="Play standard marathon. Limited turns. No timer."
                buttonText="Play Marathon"
                onClick={handleMarathonStandard}
                variant="gold"
                titleRight={`Stage ${marathonStandardIndexUI + 1}/${marathonLevels.length}`}
              />

              <ModeRow
                title="Marathon (speedrun)"
                desc="Play speedrun marathon. Unlimited guesses, timed cumulative."
                buttonText="Speedrun Marathon"
                onClick={handleMarathonSpeedrun}
                variant="gold"
                titleRight={`Stage ${marathonSpeedrunIndexUI + 1}/${marathonLevels.length}`}
              />

              <button
                type="button"
                className="homeBtn homeBtnOutline"
                onClick={handleResetMarathonGuesses}
                style={{ marginTop: "12px" }}
              >
                Reset today&apos;s marathon guesses
              </button>
            </div>
          </section>

          {/* 1v1 MODE */}
          <section className="panel">
            <div className="panelTop">
              <div>
                <h2 className="panelTitle">1v1 Wordle Battles With Friends</h2>
                <div className="panelDesc">
                  Challenge a friend to a head-to-head Wordle-style battle.
                </div>
              </div>
            </div>

            <div className="panelBody">
              <ModeRow
                title="1v1 Mode"
                desc="Play against another player in real time."
                buttonText="Play 1v1"
                onClick={() => setShowOneVOneModal(true)}
                variant="gold"
              />
            </div>
          </section>

          {/* INTRO (moved to bottom for less visual weight, still visible for SEO) */}
          <section className="homeIntro">
            <details className="homeIntroDetails">
              <summary className="homeIntroSummary">
                Click here to know more about Better Wordle.
              </summary>
              <h1 className="homeTitle">
                Better Wordle – Advanced Multi-Board &amp; 1v1 Wordle-Style Game
              </h1>
              <p className="homeIntroParagraph">
                Better Wordle is a free, browser-based Wordle-style puzzle game that you
                can play on any device. No downloads or sign-in required to get started –
                just open the site and start solving.
              </p>
              <p className="homeIntroParagraph">
                Play up to 32 boards at once with daily multi-board puzzles, push
                yourself with marathon stages and speedrun timers, and challenge
                friends in head-to-head 1v1 Wordle-style battles. Your best speedrun
                times can appear on the global Better Wordle leaderboard.
              </p>
              <p className="homeIntroParagraph">
                New to Better Wordle? Read the{" "}
                <Link to="/faq" className="homeLink">
                  Better Wordle FAQ
                </Link>{" "}
                or jump straight to the{" "}
                <Link to="/leaderboard" className="homeLink">
                  global Better Wordle leaderboard
                </Link>{" "}
                to see top players.
              </p>
            </details>
          </section>
        </main>
      </div>
    </div>
    </>
  );
}
