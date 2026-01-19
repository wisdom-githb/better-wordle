import { loadJSON, saveJSON, makeStreakKey } from "./persist";

/**
 * Load a solved snapshot for a given key, preferring server when signed in.
 */
export async function loadSolvedState({ authUser, database, solvedKey }) {
  let solvedState = null;

  if (authUser && database) {
    try {
      const { ref, get } = await import("firebase/database");
      const solvedRef = ref(
        database,
        `users/${authUser.uid}/singlePlayer/solvedStates/${solvedKey}`,
      );
      const snap = await get(solvedRef);
      if (snap.exists()) {
        solvedState = snap.val() || null;
      }
    } catch (err) {
      // Remote failures should never block local play; fall back to local.
      // eslint-disable-next-line no-console
      console.error(
        "Failed to load remote solved state, falling back to local",
        err,
      );
    }
  }

  if (!solvedState) {
    solvedState = loadJSON(solvedKey, null);
  }

  return solvedState;
}

/**
 * Save a solved snapshot locally and on the server (when signed in).
 */
export async function saveSolvedState({ authUser, database, solvedKey, value }) {
  saveJSON(solvedKey, value);

  if (authUser && database) {
    try {
      const { ref, set } = await import("firebase/database");
      const solvedRef = ref(
        database,
        `users/${authUser.uid}/singlePlayer/solvedStates/${solvedKey}`,
      );
      await set(solvedRef, value);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to persist solved state to server", err);
    }
  }
}

/**
 * Load an in-progress game state with server-first semantics.
 */
export async function loadGameState({ authUser, database, gameStateKey }) {
  let savedGameState = null;

  if (authUser && database) {
    try {
      const { ref, get } = await import("firebase/database");
      const stateRef = ref(
        database,
        `users/${authUser.uid}/singlePlayer/gameStates/${gameStateKey}`,
      );
      const snap = await get(stateRef);
      if (snap.exists()) {
        savedGameState = snap.val() || null;
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(
        "Failed to load remote game state, falling back to local",
        err,
      );
    }
  }

  if (!savedGameState) {
    savedGameState = loadJSON(gameStateKey, null);
  }

  return savedGameState;
}

/**
 * Save an in-progress game state locally and on the server (when signed in).
 * Pass value = null to clear.
 */
export async function saveGameState({ authUser, database, gameStateKey, value }) {
  saveJSON(gameStateKey, value);

  if (authUser && database) {
    try {
      const { ref, set } = await import("firebase/database");
      const stateRef = ref(
        database,
        `users/${authUser.uid}/singlePlayer/gameStates/${gameStateKey}`,
      );
      await set(stateRef, value);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("Failed to persist game state to server", err);
    }
  }
}

/**
 * Load a streak with server-first semantics and mirror into local storage.
 */
export async function loadStreakRemoteAware({ authUser, database, mode, speedrunEnabled }) {
  const modeKey = mode === "daily" ? "daily" : "marathon";
  const variantKey = speedrunEnabled ? "speedrun" : "standard";
  const remoteKey = `${modeKey}_${variantKey}`;
  const localKey = makeStreakKey(mode, speedrunEnabled);

  if (!authUser || !database) {
    return loadJSON(localKey, null);
  }

  try {
    const { ref, get } = await import("firebase/database");
    const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
    const snap = await get(streakRef);
    if (!snap.exists()) {
      return loadJSON(localKey, null);
    }
    const remote = snap.val() || null;
    if (!remote) return loadJSON(localKey, null);

    saveJSON(localKey, remote);
    return remote;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to load remote streak, falling back to local", err);
    return loadJSON(localKey, null);
  }
}

/**
 * Save a streak both locally and (when signed in) in the user's streaks subtree.
 */
export async function saveStreakRemoteAware({
  authUser,
  database,
  mode,
  speedrunEnabled,
  streakInfo,
}) {
  const localKey = makeStreakKey(mode, speedrunEnabled);
  saveJSON(localKey, streakInfo);

  if (!authUser || !database) return;

  const modeKey = mode === "daily" ? "daily" : "marathon";
  const variantKey = speedrunEnabled ? "speedrun" : "standard";
  const remoteKey = `${modeKey}_${variantKey}`;

  try {
    const { ref, set } = await import("firebase/database");
    const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
    await set(streakRef, streakInfo);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Failed to persist streak to server", err);
  }
}
