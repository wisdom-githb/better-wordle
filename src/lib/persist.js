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

export function makeDailyKey(numBoards, speedrunEnabled) {
  return `${PREFIX}game:daily:${numBoards}:${speedrunEnabled ? "speedrun" : "standard"}`;
}

export function makeMarathonKey(speedrunEnabled) {
  return `${PREFIX}game:marathon:${speedrunEnabled ? "speedrun" : "standard"}`;
}

export function marathonMetaKey(speedrunEnabled) {
  return `${PREFIX}meta:marathon:${speedrunEnabled ? "speedrun" : "standard"}`;
}
