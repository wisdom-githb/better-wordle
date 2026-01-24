import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import "./Game.css"; // For utility classes like loadingContainer
const Game = lazy(() => import("./Game"));
const Profile = lazy(() => import("./Profile"));
const Leaderboard = lazy(() => import("./components/Leaderboard"));
const Faq = lazy(() => import("./Faq"));
const MultiplayerWordleLanding = lazy(() => import("./landing/MultiplayerWordleLanding.jsx"));
const MultiBoardWordleLanding = lazy(() => import("./landing/MultiBoardWordleLanding.jsx"));
const WordleSpeedrunLanding = lazy(() => import("./landing/WordleSpeedrunLanding.jsx"));
const WordleMarathonLanding = lazy(() => import("./landing/WordleMarathonLanding.jsx"));

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
    <Suspense fallback={<div className="loadingContainer">Loading…</div>}>
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
        <Route path="/multiplayer-wordle" element={<MultiplayerWordleLanding />} />
        <Route path="/multi-board-wordle" element={<MultiBoardWordleLanding />} />
        <Route path="/wordle-speedrun" element={<WordleSpeedrunLanding />} />
        <Route path="/wordle-marathon" element={<WordleMarathonLanding />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
