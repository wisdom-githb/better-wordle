// src/Game.js
import React, { lazy } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Game.css";

const GameMultiplayer = lazy(() => import("./components/game/GameMultiplayer"));
const GameSinglePlayer = lazy(() => import("./components/game/GameSinglePlayer"));

const Game = ({
  marathonLevels = [1, 2, 3, 4],
}) => {
  const [searchParams] = useSearchParams();
  const { mode: modeParam, boards: boardsParamFromPath, variant: variantParam, code: codeParam } =
    useParams();

  const rawMode = searchParams.get("mode");
  const isMultiplayerQueryMode = rawMode === "multiplayer" || rawMode === "1v1";
  const isMultiplayerRoute = modeParam === "multiplayer" || modeParam === "1v1" || !!codeParam;

  let mode = "daily";
  if (modeParam === "daily" || modeParam === "marathon") {
    mode = modeParam;
  } else if (isMultiplayerRoute) {
    // Treat any route with a multiplayer code param (e.g. /game/multiplayer/:code)
    // as a multiplayer game, even when there is no explicit :mode param.
    mode = "multiplayer";
  } else if (rawMode === "daily" || rawMode === "marathon" || isMultiplayerQueryMode) {
    mode = isMultiplayerQueryMode ? "multiplayer" : rawMode;
  }

  let speedrunEnabled = false;
  let boardsParam = null;

  const supportsSpeedrunParam =
    rawMode === "daily" || rawMode === "marathon" || isMultiplayerQueryMode;

  if (variantParam === "speedrun") {
    speedrunEnabled = true;
  } else if (supportsSpeedrunParam) {
    speedrunEnabled = searchParams.get("speedrun") === "true";
  }

  if (boardsParamFromPath) {
    boardsParam = boardsParamFromPath;
  } else if (supportsSpeedrunParam) {
    boardsParam = searchParams.get("boards");
  }

  const isMultiplayer = mode === "multiplayer";
  const pageTitle = isMultiplayer
    ? "Multiplayer Wordle-Style Battles – Game | Better Wordle"
    : mode === "marathon"
    ? "Marathon & Speedrun – Multi-Board Game | Better Wordle"
    : mode === "daily"
    ? "Daily Multi-Board Wordle-Style Game – Better Wordle"
    : "Game – Better Wordle";

  const pageDescription = isMultiplayer
    ? "Play Better Wordle Multiplayer Mode: host or join multiplayer rooms, challenge friends with custom board counts and speedrun mode, and see who solves multi-board puzzles faster."
    : mode === "marathon"
    ? "Play Better Wordle marathon and speedrun modes with multi-board Wordle-style puzzles, cumulative times and increasing difficulty across stages."
    : mode === "daily"
    ? "Play Better Wordle daily multi-board Wordle-style puzzles with standard and speedrun options, tracking your guesses and scores across boards."
    : "Play Better Wordle game modes including daily, marathon, speedrun and multi-board Wordle-style puzzles.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      {isMultiplayer ? (
        <GameMultiplayer />
      ) : (
        <GameSinglePlayer
          mode={mode}
          boardsParam={boardsParam}
          speedrunEnabled={speedrunEnabled}
          marathonLevels={marathonLevels}
        />
      )}
    </>
  );
};

export default Game;
