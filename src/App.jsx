import React, { useState, useEffect } from "react";
import Home from "./Home";
import Game from "./Game";
import {
  loadJSON,
  saveJSON,
  clearAllMultiWordle,
  makeDailyKey,
  makeMarathonKey,
  marathonMetaKey
} from "./lib/persist";

const MARATHON_LEVELS = [1, 4, 8, 16, 32];
const BOARD_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 24, 28, 32];

function App() {
  const [screen, setScreen] = useState("home"); // "home" or "game"
  const [dailyBoards, setDailyBoards] = useState(1);
  const [marathonIndex, setMarathonIndex] = useState(0);

  // Game state
  const [gameMode, setGameMode] = useState(null); // "daily" or "marathon"
  const [gameNumBoards, setGameNumBoards] = useState(1);
  const [speedrunEnabled, setSpeedrunEnabled] = useState(false);
  const [marathonCumulativeMs, setMarathonCumulativeMs] = useState(0);
  const [marathonStageTimes, setMarathonStageTimes] = useState([]);

  // Load persisted state
  useEffect(() => {
    const savedDailyBoards = loadJSON("mw:dailyBoards", 1);
    if (BOARD_OPTIONS.includes(savedDailyBoards)) {
      setDailyBoards(savedDailyBoards);
    }

    const standardMeta = loadJSON(marathonMetaKey(false), null);
    const speedrunMeta = loadJSON(marathonMetaKey(true), null);

    if (standardMeta && typeof standardMeta.index === "number") {
      setMarathonIndex(standardMeta.index);
    } else if (speedrunMeta && typeof speedrunMeta.index === "number") {
      setMarathonIndex(speedrunMeta.index);
    }
  }, []);

  const handleStartDaily = (numBoards) => {
    setGameMode("daily");
    setGameNumBoards(numBoards);
    setSpeedrunEnabled(false);
    setMarathonCumulativeMs(0);
    setMarathonStageTimes([]);
    setScreen("game");
    saveJSON("mw:dailyBoards", numBoards);
  };

  const handleStartDailySpeedrun = (numBoards) => {
    setGameMode("daily");
    setGameNumBoards(numBoards);
    setSpeedrunEnabled(true);
    setMarathonCumulativeMs(0);
    setMarathonStageTimes([]);
    setScreen("game");
    saveJSON("mw:dailyBoards", numBoards);
  };

  const handleStartMarathon = () => {
    setGameMode("marathon");
    setGameNumBoards(MARATHON_LEVELS[marathonIndex]);
    setSpeedrunEnabled(false);
    setMarathonCumulativeMs(0);
    setMarathonStageTimes([]);
    setScreen("game");
  };

  const handleStartMarathonSpeedrun = () => {
    setGameMode("marathon");
    setGameNumBoards(MARATHON_LEVELS[marathonIndex]);
    setSpeedrunEnabled(true);
    const meta = loadJSON(marathonMetaKey(true), { cumulativeMs: 0, stageTimes: [] });
    setMarathonCumulativeMs(meta.cumulativeMs || 0);
    setMarathonStageTimes(meta.stageTimes || []);
    setScreen("game");
  };

  const handleBack = () => {
    setScreen("home");
  };

  const handleMarathonNext = () => {
    if (marathonIndex < MARATHON_LEVELS.length - 1) {
      const newIndex = marathonIndex + 1;
      setMarathonIndex(newIndex);
      setGameNumBoards(MARATHON_LEVELS[newIndex]);
      
      const metaKey = marathonMetaKey(speedrunEnabled);
      const meta = loadJSON(metaKey, { index: newIndex });
      saveJSON(metaKey, { ...meta, index: newIndex });
    }
  };

  const handleCommitMarathonStageTime = (boards, ms) => {
    if (!speedrunEnabled || gameMode !== "marathon") return;

    const newStageTimes = [...marathonStageTimes];
    const existing = newStageTimes.findIndex((st) => st.boards === boards);
    if (existing >= 0) {
      newStageTimes[existing] = { boards, ms };
    } else {
      newStageTimes.push({ boards, ms });
    }
    setMarathonStageTimes(newStageTimes);

    const cumulative = newStageTimes.reduce((sum, st) => sum + st.ms, 0);
    setMarathonCumulativeMs(cumulative);

    const metaKey = marathonMetaKey(true);
    const meta = loadJSON(metaKey, { index: marathonIndex });
    saveJSON(metaKey, {
      ...meta,
      index: marathonIndex,
      cumulativeMs: cumulative,
      stageTimes: newStageTimes
    });
  };

  const handleResetAll = () => {
    clearAllMultiWordle();
    setDailyBoards(1);
    setMarathonIndex(0);
    setMarathonCumulativeMs(0);
    setMarathonStageTimes([]);
    saveJSON("mw:dailyBoards", 1);
  };

  if (screen === "game") {
    return (
      <Game
        mode={gameMode}
        numBoards={gameNumBoards}
        marathonIndex={marathonIndex}
        marathonLevels={MARATHON_LEVELS}
        onMarathonNext={handleMarathonNext}
        onBack={handleBack}
        speedrunEnabled={speedrunEnabled}
        marathonCumulativeMs={marathonCumulativeMs}
        marathonStageTimes={marathonStageTimes}
        onCommitMarathonStageTime={handleCommitMarathonStageTime}
      />
    );
  }

  return (
    <Home
      dailyBoards={dailyBoards}
      setDailyBoards={setDailyBoards}
      marathonIndex={marathonIndex}
      marathonLevels={MARATHON_LEVELS}
      onStartDaily={handleStartDaily}
      onStartDailySpeedrun={handleStartDailySpeedrun}
      onStartMarathon={handleStartMarathon}
      onStartMarathonSpeedrun={handleStartMarathonSpeedrun}
      onResetAll={handleResetAll}
    />
  );
}

export default App;
