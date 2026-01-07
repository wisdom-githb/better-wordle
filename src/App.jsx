import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import {
  loadJSON,
  saveJSON,
  clearAllMultiWordle,
  marathonMetaKey
} from "./lib/persist";

const MARATHON_LEVELS = [1, 4, 8, 16, 32];
const BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

function App() {
  const [dailyBoards, setDailyBoards] = useState(1);
  const [marathonIndex, setMarathonIndex] = useState(0);

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

  const handleResetAll = () => {
    clearAllMultiWordle();
    setDailyBoards(1);
    setMarathonIndex(0);
    saveJSON("mw:dailyBoards", 1);
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home
            dailyBoards={dailyBoards}
            setDailyBoards={setDailyBoards}
            marathonIndex={marathonIndex}
            marathonLevels={MARATHON_LEVELS}
            onResetAll={handleResetAll}
          />
        } 
      />
      <Route path="/game/*" element={<Game marathonLevels={MARATHON_LEVELS} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
