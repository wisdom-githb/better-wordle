import React from "react";
import "./Home.css";

const BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

function ModeRow({ title, desc, buttonText, onClick, variant = "green", titleRight }) {
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
}

export default function Home({
  dailyBoards,
  setDailyBoards,

  marathonIndex,
  marathonLevels,

  onStartDaily,
  onStartDailySpeedrun,

  onStartMarathon,            // should resume if progress exists
  onStartMarathonSpeedrun,    // should resume if progress exists

  onResetAll                  // NEW: clears all persisted states
}) {
  const marathonMaxLabel = marathonLevels[marathonLevels.length - 1];
  const currentBoards = marathonLevels[marathonIndex];

  return (
    <div className="homeRoot">
      <div className="homeInner">
        <header className="homeHeader">
          <div>
            <h1 className="homeTitle">MULTI WORDLE</h1>
            <div className="homeSubtitle">
              Daily and Marathon modes. Speedrun uses unlimited guesses and tracks time.
            </div>
          </div>

          <button className="homeBtn homeBtnOutline" onClick={onResetAll}>
            Reset all
          </button>
        </header>

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
              onClick={() => onStartDaily(dailyBoards)}
              variant="green"
              titleRight={`${dailyBoards} board${dailyBoards > 1 ? "s" : ""}`}
            />

            <ModeRow
              title="Daily (speedrun)"
              desc="Unlimited guesses. Timer starts immediately."
              buttonText="Speedrun daily"
              onClick={() => onStartDailySpeedrun(dailyBoards)}
              variant="green"
              titleRight={`${dailyBoards} board${dailyBoards > 1 ? "s" : ""}`}
            />
          </div>
        </section>

        {/* MARATHON */}
        <section className="panel">
          <div className="panelTop">
            <div>
              <h2 className="panelTitle">Marathon</h2>
              <div className="panelDesc">
                Stages: {marathonLevels.join(" → ")}.
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
                Marathon can only be resumed (use “Reset all” to start over with new words).
              </div>
            </div>
          </div>

          <div className="panelBody">
            <ModeRow
              title="Marathon (standard)"
              desc="Resume your current marathon stage."
              buttonText="Play marathon"
              onClick={onStartMarathon}
              variant="gold"
              titleRight={`${currentBoards} boards`}
            />

            <ModeRow
              title="Marathon (speedrun)"
              desc="Resume your speedrun marathon (timed cumulative)."
              buttonText="Speedrun marathon"
              onClick={onStartMarathonSpeedrun}
              variant="gold"
              titleRight={`${marathonLevels[0]} → ${marathonMaxLabel}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
