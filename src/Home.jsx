import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
    navigate(`/game?mode=daily&boards=${dailyBoards}&speedrun=false`);
  }, [dailyBoards, navigate]);
  
  const handleDailySpeedrun = useCallback(() => {
    saveJSON("mw:dailyBoards", dailyBoards);
    navigate(`/game?mode=daily&boards=${dailyBoards}&speedrun=true`);
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
    navigate(`/game?mode=marathon&speedrun=false`);
  }, [navigate]);
  
  const handleMarathonSpeedrun = useCallback(() => {
    navigate(`/game?mode=marathon&speedrun=true`);
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
                onClick={() => setShowVerifyEmailModal(false)}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  border: "none",
                  background: "#6aaa64",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
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
              <h2 className="panelTitle">Marathon</h2>
              <div className="panelDesc">
                Solve 1 word, then 2, then 3, ends at 4. Complete all stages to win.
              </div>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="Marathon (standard)"
              desc="Play standard marathon. Limited turns. No timer."
              buttonText="Play marathon"
              onClick={handleMarathonStandard}
              variant="gold"
              titleRight={`Stage ${marathonStandardIndexUI + 1}/${marathonLevels.length}`}
            />

            <ModeRow
              title="Marathon (speedrun)"
              desc="Play speedrun marathon. Unlimited guesses, timed cumulative"
              buttonText="Speedrun marathon"
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
              <h2 className="panelTitle">1v1</h2>
              <div className="panelDesc">
                Challenge a friend to a head-to-head Wordle battle.
              </div>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="1v1 Mode"
              desc="Play against another player."
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
