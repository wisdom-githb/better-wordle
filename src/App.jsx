import React, { useState, useEffect, useMemo, Suspense, lazy } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Home";
import { getAllGameModes } from "./lib/gameModes";
import ErrorBoundary from "./components/ErrorBoundary";
import { useConnectionStatus } from "./hooks/useConnectionStatus";
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
  const { isOnline, queueSize, hasQueuedUpdates } = useConnectionStatus();

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
  const gameModes = useMemo(() => getAllGameModes(), []);

  return (
    <ErrorBoundary>
      {/* Connection status indicator */}
      {!isOnline && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#f59e0b',
          color: '#ffffff',
          padding: '8px 16px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
          zIndex: 10000,
        }}>
          Offline - Changes will be saved when connection is restored
          {hasQueuedUpdates && ` (${queueSize} update${queueSize !== 1 ? 's' : ''} queued)`}
        </div>
      )}
      {isOnline && hasQueuedUpdates && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#10b981',
          color: '#ffffff',
          padding: '8px 16px',
          textAlign: 'center',
          fontSize: '14px',
          fontWeight: '500',
          zIndex: 10000,
        }}>
          Syncing {queueSize} update{queueSize !== 1 ? 's' : ''}...
        </div>
      )}
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
        {/* Game routes - supports both query params and route params for backward compatibility */}
        {/* Route params format: /game/:mode/:boards?/:variant? */}
        {/* Query params format: /game?mode=:mode&boards=:boards&speedrun=true */}
        <Route path="/game" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode/:boards" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/:mode/:boards/:variant" element={<Game marathonLevels={marathonLevelsMemo} />} />
        {/* Multiplayer routes - special handling for game codes */}
        <Route path="/game/multiplayer/:code" element={<Game marathonLevels={marathonLevelsMemo} />} />
        <Route path="/game/multiplayer/:code/:variant" element={<Game marathonLevels={marathonLevelsMemo} />} />
        {/* Static pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/faq" element={<Faq />} />
        {/* SEO landing pages */}
        <Route path="/multiplayer-wordle" element={<MultiplayerWordleLanding />} />
        <Route path="/multi-board-wordle" element={<MultiBoardWordleLanding />} />
        <Route path="/wordle-speedrun" element={<WordleSpeedrunLanding />} />
        <Route path="/wordle-marathon" element={<WordleMarathonLanding />} />
        {/* Catch-all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
