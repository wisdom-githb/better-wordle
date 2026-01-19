import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
const Game = lazy(() => import("./Game"));
const Profile = lazy(() => import("./Profile"));
const Leaderboard = lazy(() => import("./components/Leaderboard"));
const Faq = lazy(() => import("./Faq"));

const MARATHON_LEVELS = [1, 2, 3, 4];

function App() {
  const location = useLocation();
  const [dailyBoards, setDailyBoards] = useState(1);

  // Reset dailyBoards to 1 only when navigating to the actual home route.
  // This avoids coupling behavior to trailing slashes on non-home routes.
  useEffect(() => {
    if (location.pathname === '/') {
      setDailyBoards(1);
    }
  }, [location.pathname]);

  // On mobile devices, always scroll to top when navigating to a new route.
  // Desktop users keep their scroll position between route changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile = window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) {
        // Use "auto" for broad browser support; "instant" is non‑standard.
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    }
  }, [location.pathname]);

  const marathonLevelsMemo = useMemo(() => MARATHON_LEVELS, []);

  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#121213", color: "#ffffff" }}>Loading…</div>}>
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
        <Route path="/game" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode/:boards" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode/:boards/:variant" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/multiplayer/:code" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/multiplayer/:code/:variant" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
