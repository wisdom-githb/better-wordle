import { useEffect } from "react";
import { loadJSON, makeSolvedKey } from "../lib/persist";
import { getMaxTurns, createBoardState } from "../lib/wordle";
import { loadWordLists } from "../lib/wordLists";
import { selectDailyWords, getCurrentDateString } from "../lib/dailyWords";
import { FLIP_COMPLETE_MS } from "../lib/gameConstants";

/**
 * Encapsulates single-player (non-1v1) game initialization and resume logic.
 */
export function useSinglePlayerGame({
  isOneVOne,
  mode,
  speedrunEnabled,
  numBoards,
  marathonIndex,
  getGameStateKey,
  savedSolvedStateRef,
  stageStartRef,
  stageEndRef,
  committedRef,
  committedStageMsRef,
  setBoards,
  setCurrentGuess,
  setMessage,
  clearMessageTimer,
  setShowOutOfGuesses,
  setIsUnlimited,
  setSelectedBoardIndex,
  setRevealId,
  setIsFlipping,
  setMaxTurns,
  setAllowedSet,
  setIsLoading,
  setShowPopup,
  setTimedMessage,
}) {
  useEffect(() => {
    async function initGame() {
      // Skip regular init for 1v1 mode
      if (isOneVOne) return;

      try {
        setIsLoading(true);

        // Check if this mode has already been solved (for today's date)
        const dateString = getCurrentDateString();
        const solvedKey = makeSolvedKey(
          mode,
          numBoards,
          speedrunEnabled,
          mode === "marathon" ? marathonIndex : null,
          dateString
        );
        const solvedState = loadJSON(solvedKey, null);

        // Only use a solved state if it matches the current configuration.
        // This prevents old/local-storage states with a different board count
        // from leaking into new games (e.g., seeing 2 boards when selecting 1).
        const solvedBoardsCount =
          solvedState && Array.isArray(solvedState.boards)
            ? solvedState.boards.length
            : 0;
        const solvedMatchesConfig =
          solvedBoardsCount > 0 && solvedBoardsCount === numBoards;

        if (solvedState && solvedState.allSolved && solvedMatchesConfig) {
          // Mode already solved - load saved state and show popup.
          // When revisiting the page (daily or marathon, normal or speedrun),
          // replay the flip animation for the final solved row on each board
          // instead of showing a static grid.
          const rawBoards = Array.isArray(solvedState.boards)
            ? solvedState.boards
            : [];

          // Use a shared non-zero reveal id and assign it to all solved boards so
          // their final row replays the flip once when the page is opened.
          const replayRevealId = 1;
          const patchedBoards = rawBoards.map((b) => {
            if (!b) return b;
            if (b.isSolved) {
              return { ...b, lastRevealId: replayRevealId };
            }
            // Preserve any existing lastRevealId for non-solved boards (defensive).
            return { ...b, lastRevealId: b.lastRevealId ?? null };
          });

          const patchedSolvedState = { ...solvedState, boards: patchedBoards };
          savedSolvedStateRef.current = patchedSolvedState;
          setBoards(patchedBoards);
          setCurrentGuess("");
          setMessage("");
          clearMessageTimer();
          setShowOutOfGuesses(false);
          setIsUnlimited(false);
          setSelectedBoardIndex(null);

          // Set revealId to match patched boards so solved rows flip once on load.
          setRevealId(replayRevealId);
          setIsFlipping(false);

          const turns = getMaxTurns(numBoards);
          setMaxTurns(turns);

          // For speedrun, restore timing state
          if (speedrunEnabled) {
            stageStartRef.current = Date.now() - (solvedState.stageElapsedMs || 0);
            stageEndRef.current = Date.now();
          } else {
            stageStartRef.current = Date.now();
            stageEndRef.current = null;
          }

          committedRef.current = true;
          committedStageMsRef.current = solvedState.stageElapsedMs || 0;

          const { ALLOWED_GUESSES } = await loadWordLists();
          setAllowedSet(new Set(ALLOWED_GUESSES));

          setIsLoading(false);

          // Delay popup to ensure any potential animations are complete
          setTimeout(() => {
            setShowPopup(true);
          }, FLIP_COMPLETE_MS);
          return;
        }

        // Reset saved state ref when starting a new game
        savedSolvedStateRef.current = null;

        // Check if there's an incomplete game state to resume
        const gameStateKey = getGameStateKey();
        const savedGameState = loadJSON(gameStateKey, null);

        const savedBoardsCount =
          savedGameState && Array.isArray(savedGameState.boards)
            ? savedGameState.boards.length
            : 0;
        const savedMatchesConfig =
          savedBoardsCount > 0 && savedBoardsCount === numBoards;

        if (savedGameState && savedMatchesConfig) {
          // Check if the saved state matches current configuration
          const allSolvedInSaved = savedGameState.boards.every((b) => b.isSolved);
          if (!allSolvedInSaved) {
            // Resume incomplete game
            const { ALLOWED_GUESSES } = await loadWordLists();
            setAllowedSet(new Set(ALLOWED_GUESSES));

            setBoards(savedGameState.boards);
            setCurrentGuess(savedGameState.currentGuess || "");
            setMaxTurns(savedGameState.maxTurns || getMaxTurns(numBoards));
            setIsUnlimited(savedGameState.isUnlimited || false);
            setSelectedBoardIndex(null);

            // Restore timing state
            if (speedrunEnabled && savedGameState.stageStartTime) {
              if (
                savedGameState.stageElapsedMs > 0 &&
                savedGameState.stageElapsedMs === savedGameState.committedStageMs
              ) {
                // Was frozen/committed
                stageStartRef.current = savedGameState.stageStartTime;
                stageEndRef.current =
                  savedGameState.stageStartTime + (savedGameState.stageElapsedMs || 0);
                committedRef.current = savedGameState.committedRef || false;
                committedStageMsRef.current = savedGameState.committedStageMs || 0;
              } else {
                // Was active, resume timing
                const elapsed = savedGameState.stageElapsedMs || 0;
                stageStartRef.current = Date.now() - elapsed;
                stageEndRef.current = null;
                committedRef.current = false;
                committedStageMsRef.current = 0;
              }
            } else {
              stageStartRef.current = Date.now();
              stageEndRef.current = null;
              committedRef.current = false;
              committedStageMsRef.current = 0;
            }

            setRevealId(savedGameState.revealId || 0);
            setIsFlipping(false); // No animation in progress when resuming
            setShowPopup(false);
            setShowOutOfGuesses(false);
            setMessage("");
            clearMessageTimer();

            setIsLoading(false);
            return;
          }
        }

        // No saved state - start new game
        const { ANSWER_WORDS, ALLOWED_GUESSES } = await loadWordLists();
        setAllowedSet(new Set(ALLOWED_GUESSES));

        const turns = getMaxTurns(numBoards);
        setMaxTurns(turns);

        // Select daily words deterministically based on date
        const marathonIndexForSeed = mode === "marathon" ? marathonIndex : null;
        const dailySolutions = selectDailyWords(
          ANSWER_WORDS,
          numBoards,
          mode,
          speedrunEnabled,
          marathonIndexForSeed
        );
        const newBoards = dailySolutions.map((solution) => createBoardState(solution));

        setBoards(newBoards);
        setCurrentGuess("");
        setMessage("");
        clearMessageTimer();
        setShowPopup(false);
        setShowOutOfGuesses(false);

        // Speedrun starts unlimited immediately
        setIsUnlimited(!!speedrunEnabled);
        setSelectedBoardIndex(null);

        // Reset stage timer + commit guard for each stage
        stageStartRef.current = Date.now();
        stageEndRef.current = null;
        committedRef.current = false;
        committedStageMsRef.current = 0;

        // Reset flip id and state
        setRevealId(0);
        setIsFlipping(false);

        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing game:", error);
        setIsLoading(false);
        setTimedMessage("Failed to load word lists. Please refresh the page.", 10000);
      }
    }

    initGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOneVOne, numBoards, mode, speedrunEnabled, marathonIndex]);
}
