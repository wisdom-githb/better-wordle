import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import {
  loadJSON,
  saveJSON,
  marathonMetaKey
} from "./lib/persist";

const MARATHON_LEVELS = [1, 4, 8, 16, 32];
const BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

function App() {
  const location = useLocation();
  const [dailyBoards, setDailyBoards] = useState(1);
  const [marathonIndex, setMarathonIndex] = useState(0);

  // Normalize root path URL to always have trailing slash to match Vite base URL
  // This ensures both /better-wordle and /better-wordle/ work correctly
  useEffect(() => {
    if (location.pathname === '/') {
      const currentPath = window.location.pathname;
      const rawBaseUrl = import.meta.env.BASE_URL || '/better-wordle/';
      const baseUrl = rawBaseUrl.endsWith('/') ? rawBaseUrl.slice(0, -1) : rawBaseUrl;
      const expectedPath = baseUrl + '/';
      
      // If URL is /better-wordle (without trailing slash), normalize to /better-wordle/
      if (currentPath === baseUrl) {
        const newUrl = expectedPath + window.location.search + window.location.hash;
        window.history.replaceState(null, '', newUrl);
      }
    }
  }, [location.pathname]);

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

  const marathonLevelsMemo = useMemo(() => MARATHON_LEVELS, []);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home
            dailyBoards={dailyBoards}
            setDailyBoards={setDailyBoards}
            marathonIndex={marathonIndex}
            marathonLevels={marathonLevelsMemo}
          />
        } 
      />
      <Route path="/game/*" element={<Game marathonLevels={marathonLevelsMemo} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
