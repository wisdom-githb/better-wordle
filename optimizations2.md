# Better Wordle - Bug Fixes and Optimizations

## HIGH SEVERITY BUGS

### Bug 1: Duplicate Word Selection Can Fail Silently

**Location:** `src/lib/dailyWords.js` (lines 78-104)

**Severity:** HIGH

**Description:**
The `selectDailyWords` function has a flawed duplicate detection loop. When `numBoards` is large or the word list is small, it can:
- Push the last attempted word even if it's a duplicate (if `attempts === maxAttempts`)
- The loop exits when `attempts >= maxAttempts` but the word may still be in `usedWords`

This means players could get duplicate words in their daily/marathon games, breaking the game mechanics.

**Current Code (BUGGY):**
```javascript
export function selectDailyWords(wordList, numBoards, mode = 'daily', speedrunEnabled = false, marathonIndex = null) {
  const dateString = getCurrentDateString();
  const words = [];
  const usedWords = new Set();
  
  for (let i = 0; i < numBoards; i++) {
    let word;
    let attempts = 0;
    const maxAttempts = wordList.length;
    
    do {
      word = selectDailyWord(wordList, dateString, i, mode, speedrunEnabled, marathonIndex, numBoards);
      if (attempts > 0) {
        const seed = createSeed(dateString, i + attempts * 1000, mode, speedrunEnabled, marathonIndex, numBoards);
        const rng = new SeededRandom(seed);
        const index = Math.floor(rng.next() * wordList.length);
        word = wordList[index];
      }
      attempts++;
    } while (usedWords.has(word) && attempts < maxAttempts);
    
    usedWords.add(word);
    words.push(word);  // BUG: word might be duplicate if loop exited due to maxAttempts reached
  }
  
  return words;
}
```

**Fixed Code:**
```javascript
export function selectDailyWords(wordList, numBoards, mode = 'daily', speedrunEnabled = false, marathonIndex = null) {
  const dateString = getCurrentDateString();
  const words = [];
  const usedWords = new Set();
  
  for (let i = 0; i < numBoards; i++) {
    let word;
    let attempts = 0;
    const maxAttempts = Math.min(wordList.length, 100); // Safety limit
    
    do {
      word = selectDailyWord(wordList, dateString, i, mode, speedrunEnabled, marathonIndex, numBoards);
      if (attempts > 0) {
        const seed = createSeed(dateString, i + attempts * 1000, mode, speedrunEnabled, marathonIndex, numBoards);
        const rng = new SeededRandom(seed);
        const index = Math.floor(rng.next() * wordList.length);
        word = wordList[index];
      }
      attempts++;
    } while (usedWords.has(word) && attempts < maxAttempts);
    
    // Check if we got a unique word before adding
    if (usedWords.has(word)) {
      // If we still have a duplicate after exhausting attempts, find the first unused word
      const uniqueWord = wordList.find(w => !usedWords.has(w));
      if (uniqueWord) {
        word = uniqueWord;
      } else {
        // This should never happen with reasonable word list sizes, but handle gracefully
        console.warn(`Unable to find ${numBoards} unique words for the day`);
      }
    }
    
    usedWords.add(word);
    words.push(word);
  }
  
  return words;
}
```

**Why This Fixes It:**
- After the loop exits, we explicitly check if the word is still a duplicate
- If it is, we find the first unused word instead of using a duplicate
- Added console warning for edge cases
- Set a reasonable maxAttempts limit to prevent infinite loops

---

### Bug 2: Missing `persistForUser` Function - Firebase Sync Broken

**Location:** `src/components/game/GameSinglePlayer.jsx` (lines 218-230)

**Severity:** HIGH

**Description:**
The `saveGameState` and `clearGameState` functions reference `persistForUser`, but this function is never imported or defined. This will cause a ReferenceError at runtime and prevent in-progress game states from being saved to Firebase for signed-in users. Players will lose their progress across devices.

**Current Code (BUGGY):**
```javascript
const saveGameState = useCallback(() => {
  if (boards.length === 0) return;
  const allSolved = boards.every((b) => b.isSolved);
  if (allSolved) return;

  const gameStateKey = getGameStateKey();
  const gameState = {
    boards,
    currentGuess,
    isUnlimited,
    maxTurns,
    stageStartTime: stageStartRef.current,
    stageElapsedMs:
      speedrunEnabled && stageStartRef.current != null
        ? stageEndRef.current
          ? stageEndRef.current - stageStartRef.current
          : Date.now() - stageStartRef.current
        : 0,
    committedRef: committedRef.current,
    committedStageMs: committedStageMsRef.current,
    revealId,
    timestamp: Date.now(),
  };
  saveJSON(gameStateKey, gameState);
  persistForUser(`singlePlayer/gameStates/${gameStateKey}`, gameState);  // ERROR: not defined
}, [boards, currentGuess, isUnlimited, maxTurns, speedrunEnabled, revealId, getGameStateKey, persistForUser]);
```

**Fixed Code:**
Add import and utility function at the top of the file:
```javascript
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../config/firebase";
import { ref, set } from "firebase/database";

// ... later in the component ...

// Add this helper function inside the component
const persistForUser = useCallback((path, data) => {
  if (!authUser) return; // Only persist for signed-in users
  try {
    const userRef = ref(database, `users/${authUser.uid}/${path}`);
    set(userRef, data).catch(err => {
      console.error(`Failed to persist ${path} to Firebase:`, err);
    });
  } catch (err) {
    console.error(`Error setting Firebase ref for ${path}:`, err);
  }
}, [authUser]);

const saveGameState = useCallback(() => {
  if (boards.length === 0) return;
  const allSolved = boards.every((b) => b.isSolved);
  if (allSolved) return;

  const gameStateKey = getGameStateKey();
  const gameState = {
    boards,
    currentGuess,
    isUnlimited,
    maxTurns,
    stageStartTime: stageStartRef.current,
    stageElapsedMs:
      speedrunEnabled && stageStartRef.current != null
        ? stageEndRef.current
          ? stageEndRef.current - stageStartRef.current
          : Date.now() - stageStartRef.current
        : 0,
    committedRef: committedRef.current,
    committedStageMs: committedStageMsRef.current,
    revealId,
    timestamp: Date.now(),
  };
  saveJSON(gameStateKey, gameState);
  persistForUser(`singlePlayer/gameStates/${gameStateKey}`, gameState);
}, [boards, currentGuess, isUnlimited, maxTurns, speedrunEnabled, revealId, getGameStateKey, persistForUser]);
```

**Why This Fixes It:**
- Defines `persistForUser` as a callback that uses Firebase to sync data
- Only persists for authenticated users
- Gracefully handles Firebase errors
- Ensures game state syncs across devices for signed-in players

---

### Bug 3: Race Condition in Game Initialization

**Location:** `src/hooks/useSinglePlayerGame.js` (lines 40-50, dependency array at end)

**Severity:** HIGH

**Description:**
The `initGame` function checks `authLoading` to defer initialization, but the dependency array `[isOneVOne, numBoards, mode, speedrunEnabled, marathonIndex, authUser, authLoading]` can cause unexpected reinitializations. When `authUser` becomes available or changes (e.g., user logs in/out mid-game), the entire game reinitializes, losing player progress.

**Current Code (PROBLEMATIC):**
```javascript
useEffect(() => {
  if (authLoading) return;

  async function initGame() {
    // ... initialization logic ...
  }

  initGame();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isOneVOne, numBoards, mode, speedrunEnabled, marathonIndex, authUser, authLoading]);
```

**Fixed Code:**
```javascript
// Track whether we've already initialized for this game session
const hasInitialized = useRef(false);

useEffect(() => {
  // Only initialize once per component mount, regardless of auth state changes
  if (hasInitialized.current || authLoading) return;

  async function initGame() {
    // ... initialization logic ...
    if (!error) {
      hasInitialized.current = true;
    }
  }

  initGame();
}, [authLoading]); // Only depend on authLoading, not authUser

// Separate effect to handle auth state changes after game is initialized
useEffect(() => {
  if (authLoading || !hasInitialized.current || !authUser) return;

  // Optionally sync with Firebase when user logs in mid-game
  // This could refresh saved state from server
}, [authUser, authLoading]);
```

**Why This Fixes It:**
- Uses a ref to track initialization state
- Only initializes once when auth is ready
- Prevents reinitializing when authUser changes
- Separates concerns: initial setup vs. post-login sync

---

## MEDIUM SEVERITY BUGS

### Bug 4: Potential Memory Leak in useAuth Streak Loading

**Location:** `src/components/game/GameSinglePlayer.jsx` (lines 156-195)

**Severity:** MEDIUM

**Description:**
The Firebase `get()` call for loading streak data doesn't have a timeout. If Firebase is slow or unresponsive, the async operation continues even after the component unmounts (despite the `isMounted` flag). This can cause memory leaks and unnecessary network requests.

**Current Code (PROBLEMATIC):**
```javascript
useEffect(() => {
  const tracksStreak = (mode === "daily" && numBoards === 1) || mode === "marathon";
  if (!tracksStreak) return;
  if (!authUser) return;

  let isMounted = true;
  const modeKey = mode === "daily" ? "daily" : "marathon";
  const variantKey = speedrunEnabled ? "speedrun" : "standard";
  const remoteKey = `${modeKey}_${variantKey}`;

  (async () => {
    try {
      const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
      const snap = await get(streakRef);  // No timeout - can hang
      if (!snap.exists()) return;
      const remote = snap.val() || null;
      if (!remote) return;

      const localKey = makeStreakKey(mode, speedrunEnabled);
      saveJSON(localKey, remote);

      if (isMounted) {
        setStreakLabel(buildStreakLabel(mode, speedrunEnabled, remote));
      }
    } catch (err) {
      console.error("Failed to load remote streak for game", err);
    }
  })();

  return () => {
    isMounted = false;
  };
}, [authUser, mode, speedrunEnabled, numBoards]);
```

**Fixed Code:**
```javascript
useEffect(() => {
  const tracksStreak = (mode === "daily" && numBoards === 1) || mode === "marathon";
  if (!tracksStreak) return;
  if (!authUser) return;

  let isMounted = true;
  let timeoutId = null;
  
  const modeKey = mode === "daily" ? "daily" : "marathon";
  const variantKey = speedrunEnabled ? "speedrun" : "standard";
  const remoteKey = `${modeKey}_${variantKey}`;

  (async () => {
    try {
      // Set a 5-second timeout for the Firebase call
      const timeoutPromise = new Promise((_, reject) =>
        (timeoutId = setTimeout(() => reject(new Error("Firebase request timeout")), 5000))
      );

      const streakRef = ref(database, `users/${authUser.uid}/streaks/${remoteKey}`);
      const snap = await Promise.race([get(streakRef), timeoutPromise]);
      
      clearTimeout(timeoutId);
      
      if (!snap.exists()) return;
      const remote = snap.val() || null;
      if (!remote) return;

      const localKey = makeStreakKey(mode, speedrunEnabled);
      saveJSON(localKey, remote);

      if (isMounted) {
        setStreakLabel(buildStreakLabel(mode, speedrunEnabled, remote));
      }
    } catch (err) {
      console.error("Failed to load remote streak for game", err);
      // Fall back to local streak data on error
    }
  })();

  return () => {
    isMounted = false;
    if (timeoutId) clearTimeout(timeoutId);
  };
}, [authUser, mode, speedrunEnabled, numBoards]);
```

**Why This Fixes It:**
- Adds a 5-second timeout using `Promise.race()`
- Cleans up timeout on success
- Prevents hanging requests from consuming resources
- Falls back to local data on timeout

---

### Bug 5: Keyboard Event Listener Reference Stale Closure

**Location:** `src/hooks/useKeyboard.js` (lines 38-46)

**Severity:** MEDIUM

**Description:**
The keyboard event listener is attached in a useEffect with an empty dependency array, while the callback refs are updated in separate useEffects. If the component re-renders and the ref updates occur out of sync with the listener, stale callback references could be used.

**Current Code (PROBLEMATIC):**
```javascript
export function useKeyboard({ disabled, onEnter, onBackspace, onLetter }) {
  const disabledRef = useRef(disabled);
  const onEnterRef = useRef(onEnter);
  const onBackspaceRef = useRef(onBackspace);
  const onLetterRef = useRef(onLetter);

  useEffect(() => {
    disabledRef.current = disabled;
  }, [disabled]);

  useEffect(() => {
    onEnterRef.current = onEnter;
  }, [onEnter]);

  useEffect(() => {
    onBackspaceRef.current = onBackspace;
  }, [onBackspace]);

  useEffect(() => {
    onLetterRef.current = onLetter;
  }, [onLetter]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (disabledRef.current) return;
      const raw = e.key;
      if (raw === "Backspace") {
        e.preventDefault();
        onBackspaceRef.current?.();
        return;
      }
      if (raw === "Enter") {
        e.preventDefault();
        onEnterRef.current?.();
        return;
      }
      const key = raw.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        onLetterRef.current?.(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);  // Empty dependency array - listener never updates
}
```

**Fixed Code:**
```javascript
export function useKeyboard({ disabled, onEnter, onBackspace, onLetter }) {
  const disabledRef = useRef(disabled);
  const onEnterRef = useRef(onEnter);
  const onBackspaceRef = useRef(onBackspace);
  const onLetterRef = useRef(onLetter);

  // Update all refs in a single effect
  useEffect(() => {
    disabledRef.current = disabled;
    onEnterRef.current = onEnter;
    onBackspaceRef.current = onBackspace;
    onLetterRef.current = onLetter;
  }, [disabled, onEnter, onBackspace, onLetter]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (disabledRef.current) return;

      const raw = e.key;

      if (raw === "Backspace") {
        e.preventDefault();
        onBackspaceRef.current?.();
        return;
      }

      if (raw === "Enter") {
        e.preventDefault();
        onEnterRef.current?.();
        return;
      }

      const key = raw.toUpperCase();
      if (/^[A-Z]$/.test(key)) {
        onLetterRef.current?.(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
}
```

**Why This Fixes It:**
- Consolidates all ref updates into a single effect
- Ensures all refs are synchronized before the listener uses them
- Maintains the efficient empty dependency array for the listener
- Reduces the number of useEffects

---

### Bug 6: Unvalidated Firebase Data Can Cause Runtime Errors

**Location:** `src/hooks/useSinglePlayerGame.js` (lines 63-88)

**Severity:** MEDIUM

**Description:**
Remote Firebase snapshots are loaded and used without schema validation. If Firebase data is corrupted, outdated, or malformed, it could crash the game when trying to access properties.

**Current Code (PROBLEMATIC):**
```javascript
if (authUser) {
  try {
    const solvedRef = ref(
      database,
      `users/${authUser.uid}/singlePlayer/solvedStates/${solvedKey}`
    );
    const snap = await get(solvedRef);
    if (snap.exists()) {
      solvedState = snap.val() || null;  // No validation
    }
  } catch (err) {
    console.error("Failed to load remote solved state, falling back to local", err);
  }
}

if (!solvedState) {
  solvedState = loadJSON(solvedKey, null);
}

const solvedBoardsCount =
  solvedState && Array.isArray(solvedState.boards)
    ? solvedState.boards.length
    : 0;
```

**Fixed Code:**
```javascript
// Add a validation helper function
function validateSolvedState(state) {
  if (!state || typeof state !== 'object') return null;
  if (!Array.isArray(state.boards)) return null;
  
  // Validate boards structure
  const validBoards = state.boards.filter(b => 
    b && 
    typeof b === 'object' &&
    Array.isArray(b.guesses) &&
    typeof b.isSolved === 'boolean' &&
    typeof b.isDead === 'boolean'
  );
  
  if (validBoards.length !== state.boards.length) {
    console.warn('Some boards in saved state were invalid and filtered out');
  }
  
  return {
    ...state,
    boards: validBoards,
    exitedDueToOutOfGuesses: typeof state.exitedDueToOutOfGuesses === 'boolean' 
      ? state.exitedDueToOutOfGuesses 
      : false,
    stageElapsedMs: typeof state.stageElapsedMs === 'number' 
      ? state.stageElapsedMs 
      : 0,
  };
}

// Then in the initialization code:
if (authUser) {
  try {
    const solvedRef = ref(
      database,
      `users/${authUser.uid}/singlePlayer/solvedStates/${solvedKey}`
    );
    const snap = await get(solvedRef);
    if (snap.exists()) {
      const rawData = snap.val();
      solvedState = validateSolvedState(rawData);
      if (!solvedState) {
        console.warn('Remote solved state failed validation, falling back to local');
      }
    }
  } catch (err) {
    console.error("Failed to load remote solved state, falling back to local", err);
  }
}

if (!solvedState) {
  solvedState = loadJSON(solvedKey, null);
  solvedState = validateSolvedState(solvedState);
}
```

**Why This Fixes It:**
- Validates Firebase data structure before using it
- Filters out invalid boards gracefully
- Provides console warnings when data is corrupted
- Prevents runtime errors from malformed data

---

## LOW SEVERITY ISSUES

### Bug 7: Board Grid Layout Not Optimal for Certain Board Counts

**Location:** `src/hooks/useBoardLayout.js` (lines 15-22)

**Severity:** LOW

**Description:**
The grid calculation using `Math.sqrt()` creates suboptimal layouts for certain numbers of boards. For example, 7 boards would create a 3×3 grid (9 cells) with 2 empty, while a 4×2 grid would be more efficient.

**Current Code:**
```javascript
const gridCols = useMemo(
  () => Math.ceil(Math.sqrt(Math.max(numBoards || safeBoards.length || 1, 1))),
  [numBoards, safeBoards.length]
);

const gridRows = useMemo(
  () => Math.ceil((numBoards || safeBoards.length || 1) / gridCols),
  [numBoards, safeBoards.length, gridCols]
);
```

**Fixed Code:**
```javascript
// Better grid layout algorithm that prefers wider boards
const gridCols = useMemo(() => {
  const n = Math.max(numBoards || safeBoards.length || 1, 1);
  
  // For small numbers, use specific layouts
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (n === 3) return 3;
  if (n === 4) return 2;
  if (n === 5) return 3;
  if (n === 6) return 3;
  if (n === 7) return 4;
  if (n === 8) return 4;
  
  // For larger numbers, use sqrt as before
  return Math.ceil(Math.sqrt(n));
}, [numBoards, safeBoards.length]);

const gridRows = useMemo(
  () => Math.ceil((numBoards || safeBoards.length || 1) / gridCols),
  [numBoards, safeBoards.length, gridCols]
);
```

**Why This Fixes It:**
- Provides better visual layout for common board counts
- Prefers wider layouts which are more readable
- Uses sqrt for larger numbers (fallback)
- Minimal performance impact

---

### Bug 8: Incomplete Error Handling - Redundant Loading State Reset

**Location:** `src/hooks/useWordLists.js` (lines 52-85)

**Severity:** LOW

**Description:**
The `reload` function sets `setLoading(false)` at the end of both success and catch blocks, which is redundant but not harmful.

**Current Code:**
```javascript
const reload = async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await loadWordListsOnce();
    setAnswerWords(data.answerWords);
    setAllowedSet(data.allowedSet);
    setLoading(false);  // First time
  } catch (e) {
    setError(e instanceof Error ? e.message : "Failed to load word lists");
    setLoading(false);  // Second time (redundant)
  }
};
```

**Fixed Code:**
```javascript
const reload = async () => {
  setLoading(true);
  setError(null);
  try {
    const data = await loadWordListsOnce();
    setAnswerWords(data.answerWords);
    setAllowedSet(data.allowedSet);
  } catch (e) {
    setError(e instanceof Error ? e.message : "Failed to load word lists");
  } finally {
    setLoading(false);  // Set once after try/catch
  }
};
```

**Why This Fixes It:**
- Uses finally block for guaranteed cleanup
- DRY principle - sets loading state once
- More idiomatic React/JavaScript

---

### Bug 9: Missing Solution Handling Should Warn User

**Location:** `src/components/game/GameSinglePlayer.jsx` (lines 430-465)

**Severity:** LOW

**Description:**
When submitting a guess, if `board.solution` is null/undefined, the board becomes silently unplayable. Users won't know what went wrong.

**Current Code:**
```javascript
const newBoards = boards.map((board) => {
  if (board.isSolved) return board;
  if (!isUnlimited && board.isDead) return board;

  const colors = board.solution ? scoreGuess(guess, board.solution) : [];  // Silent fail

  const prevGuesses = Array.isArray(board.guesses) ? board.guesses : [];
  // ...
});
```

**Fixed Code:**
```javascript
const newBoards = boards.map((board) => {
  if (board.isSolved) return board;
  if (!isUnlimited && board.isDead) return board;

  if (!board.solution) {
    console.error("Board missing solution, cannot score guess");
    // Return board unchanged
    return board;
  }

  const colors = scoreGuess(guess, board.solution);

  const prevGuesses = Array.isArray(board.guesses) ? board.guesses : [];
  // ...
});

// Also add this after submitting a guess
if (newBoards.some(b => !b.solution && !b.isSolved && !b.isDead)) {
  setTimedMessage("Error: Some boards are missing solutions. Please refresh the page.", 8000);
}
```

**Why This Fixes It:**
- Prevents silent failures
- Provides user feedback
- Logs errors for debugging
- Gracefully handles edge cases

---

### Bug 10: Marathon Speedrun Streak Data May Not Sync Correctly

**Location:** `src/lib/persist.js` (lines 55-62)

**Severity:** LOW

**Description:**
Streak data uses `makeStreakKey` which doesn't include `marathonIndex`, but `makeSolvedKey` does. This creates inconsistency for marathon speedrun modes where different stages might share streak data.

**Current Code:**
```javascript
export function makeStreakKey(mode, speedrunEnabled) {
  const variant = speedrunEnabled ? "speedrun" : "standard";
  return `${PREFIX}streak:${mode}:${variant}`;
}

export function makeSolvedKey(mode, numBoards, speedrunEnabled, marathonIndex = null, dateString = null) {
  const date = dateString || getCurrentDateString();
  if (mode === "marathon") {
    return `${PREFIX}solved:${mode}:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}:${marathonIndex}:${date}`;
  }
  return `${PREFIX}solved:${mode}:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}:${date}`;
}
```

**Fixed Code:**
```javascript
export function makeStreakKey(mode, speedrunEnabled, marathonIndex = null) {
  const variant = speedrunEnabled ? "speedrun" : "standard";
  if (mode === "marathon" && marathonIndex != null) {
    return `${PREFIX}streak:${mode}:${variant}:${marathonIndex}`;
  }
  return `${PREFIX}streak:${mode}:${variant}`;
}

// Update all calls to makeStreakKey to pass marathonIndex where available
// Example in GameSinglePlayer.jsx:
const localKey = makeStreakKey(mode, speedrunEnabled, mode === "marathon" ? marathonIndex : null);
```

**Why This Fixes It:**
- Ensures streak data is unique per marathon stage
- Prevents different stages from overwriting each other's streak data
- Maintains consistency with `makeSolvedKey` structure

---

## Summary of Fixes by Priority

| Priority | Bug | File | Impact |
|----------|-----|------|--------|
| CRITICAL | Duplicate word selection | `dailyWords.js` | Game mechanics broken |
| CRITICAL | Missing persistForUser | `GameSinglePlayer.jsx` | Progress not saved |
| CRITICAL | Race condition in init | `useSinglePlayerGame.js` | Progress lost on login |
| HIGH | Memory leak in streak loading | `GameSinglePlayer.jsx` | Resource waste |
| HIGH | Stale keyboard refs | `useKeyboard.js` | Input handling issues |
| HIGH | Unvalidated Firebase data | `useSinglePlayerGame.js` | Crashes possible |
| MEDIUM | Suboptimal grid layout | `useBoardLayout.js` | UX degradation |
| LOW | Redundant loading reset | `useWordLists.js` | Code quality |
| LOW | Silent solution failure | `GameSinglePlayer.jsx` | User confusion |
| LOW | Streak key inconsistency | `persist.js` | Data inconsistency |

