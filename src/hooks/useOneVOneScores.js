import { useMemo } from "react";
import { calculateNonSpeedrunScore } from "../lib/gameUtils";

/**
 * Shared hook for computing the local player's and opponent's score in 1v1.
 *
 * In speedrun mode it returns raw times in milliseconds.
 * In normal mode it returns the same numeric score used elsewhere in the app.
 */
export function useOneVOneScores(gameState, authUser, maxTurns) {
  return useMemo(() => {
    if (!gameState || !authUser) {
      return { myScore: null, opponentScore: null };
    }

    const isSpeedrun = gameState.speedrun || false;
    const isPlayerHost = gameState.hostId === authUser.uid;

    if (isSpeedrun) {
      const myTimeMs = isPlayerHost
        ? gameState.hostTimeMs ?? null
        : gameState.guestTimeMs ?? null;
      const opponentTimeMs = isPlayerHost
        ? gameState.guestTimeMs ?? null
        : gameState.hostTimeMs ?? null;

      return { myScore: myTimeMs, opponentScore: opponentTimeMs };
    }

    const myGuesses = isPlayerHost
      ? gameState.hostGuesses || []
      : gameState.guestGuesses || [];
    const opponentGuesses = isPlayerHost
      ? gameState.guestGuesses || []
      : gameState.hostGuesses || [];

    const mySolved = gameState.solution && myGuesses.includes(gameState.solution);
    const opponentSolved =
      gameState.solution && opponentGuesses.includes(gameState.solution);

    const myBoard = {
      guesses: myGuesses.map((word) => ({ word, colors: [] })),
      isSolved: mySolved,
    };
    const opponentBoard = {
      guesses: opponentGuesses.map((word) => ({ word, colors: [] })),
      isSolved: opponentSolved,
    };

    const myScore = calculateNonSpeedrunScore(
      [myBoard],
      myGuesses.length,
      maxTurns,
      1
    );
    const opponentScore = calculateNonSpeedrunScore(
      [opponentBoard],
      opponentGuesses.length,
      maxTurns,
      1
    );

    return { myScore, opponentScore };
  }, [gameState, authUser, maxTurns]);
}
