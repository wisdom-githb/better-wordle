// src/Game.js
import React, { lazy } from "react";
import { useSearchParams, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Game.css";

const GameOneVOne = lazy(() => import("./components/game/GameOneVOne"));
const GameSinglePlayer = lazy(() => import("./components/game/GameSinglePlayer"));

const Game = ({
  marathonLevels = [1, 2, 3, 4],
}) => {
  const [searchParams] = useSearchParams();
  const { mode: modeParam, boards: boardsParamFromPath, variant: variantParam, code: codeParam } =
    useParams();

  const rawMode = searchParams.get("mode");

  let mode = "daily";
  if (modeParam === "daily" || modeParam === "marathon") {
    mode = modeParam;
  } else if (modeParam === "1v1" || codeParam) {
    // Treat any route with a 1v1 code param (e.g. /game/1v1/:code or /game/1v1/:code/:variant)
    // as a 1v1 game, even when there is no explicit :mode param.
    mode = "1v1";
  } else if (rawMode === "daily" || rawMode === "marathon" || rawMode === "1v1") {
    mode = rawMode;
  }

  let speedrunEnabled = false;
  let boardsParam = null;

  if (variantParam === "speedrun") {
    speedrunEnabled = true;
  } else if (rawMode === "daily" || rawMode === "marathon" || rawMode === "1v1") {
    speedrunEnabled = searchParams.get("speedrun") === "true";
  }

  if (boardsParamFromPath) {
    boardsParam = boardsParamFromPath;
  } else if (rawMode === "daily" || rawMode === "marathon" || rawMode === "1v1") {
    boardsParam = searchParams.get("boards");
  }

  const isOneVOne = mode === "1v1";
  const pageTitle = isOneVOne
    ? "1v1 Wordle-Style Battles – Game | Better Wordle"
    : mode === "marathon"
    ? "Marathon & Speedrun – Multi-Board Game | Better Wordle"
    : mode === "daily"
    ? "Daily Multi-Board Wordle-Style Game – Better Wordle"
    : "Game – Better Wordle";

  const pageDescription = isOneVOne
    ? "Play 1v1 Wordle-style battles in Better Wordle, challenge friends with custom board counts and speedrun mode, and see who solves multi-board puzzles faster."
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
      {isOneVOne ? (
        <GameOneVOne />
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
