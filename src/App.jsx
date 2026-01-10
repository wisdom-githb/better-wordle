import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import Profile from "./Profile";
import Leaderboard from "./components/Leaderboard";

const MARATHON_LEVELS = [1, 2, 3, 4];

function App() {
  const location = useLocation();
  const [dailyBoards, setDailyBoards] = useState(1);

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

  // Reset dailyBoards to 1 whenever navigating to home page
  useEffect(() => {
    if (location.pathname === '/' || location.pathname.endsWith('/')) {
      setDailyBoards(1);
    }
  }, [location.pathname]);

  const marathonLevelsMemo = useMemo(() => MARATHON_LEVELS, []);

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home
            dailyBoards={dailyBoards}
            setDailyBoards={setDailyBoards}
            marathonLevels={marathonLevelsMemo}
          />
        } 
      />
      <Route path="/game/*" element={<Game marathonLevels={marathonLevelsMemo} />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
