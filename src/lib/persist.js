// Import getCurrentDateString for daily reset functionality
import { getCurrentDateString } from "./dailyWords.js";

const PREFIX = "mw:";
export const SESSION_KEY = `${PREFIX}session`;

export function loadJSON(key, fallback = null) {
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

export function saveJSON(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore storage failures
  }
}

export function removeKey(key) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

export function clearAllMultiWordle() {
  try {
    const keys = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const k = window.localStorage.key(i);
      if (k && k.startsWith(PREFIX)) keys.push(k);
    }
    keys.forEach((k) => window.localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

export function makeDailyKey(numBoards, speedrunEnabled, dateString = null) {
  const date = dateString || getCurrentDateString();
  return `${PREFIX}game:daily:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}:${date}`;
}

export function makeMarathonKey(speedrunEnabled, dateString = null) {
  const date = dateString || getCurrentDateString();
  return `${PREFIX}game:marathon:${speedrunEnabled ? "speedrun" : "standard"}:${date}`;
}

export function marathonMetaKey(speedrunEnabled) {
  // Marathon meta doesn't reset daily, only on reset all
  return `${PREFIX}meta:marathon:${speedrunEnabled ? "speedrun" : "standard"}`;
}

export function makeSolvedKey(mode, numBoards, speedrunEnabled, marathonIndex = null, dateString = null) {
  const date = dateString || getCurrentDateString();
  if (mode === "marathon") {
    return `${PREFIX}solved:${mode}:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}:${marathonIndex}:${date}`;
  }
  return `${PREFIX}solved:${mode}:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}:${date}`;
}