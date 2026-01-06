import { useEffect, useState } from "react";

let cached = null; // { answerWords, allowedGuesses, allowedSet }
let cachedPromise = null;

async function loadWordListsOnce() {
  if (cached) return cached;
  if (cachedPromise) return cachedPromise;

  cachedPromise = (async () => {
    const baseUrl = import.meta.env.BASE_URL;
    const [answersRes, guessesRes] = await Promise.all([
      fetch(`${baseUrl}wordle-answers-alphabetical.txt`),
      fetch(`${baseUrl}valid-wordle-words.txt`)
    ]);

    if (!answersRes.ok) {
      throw new Error(`Failed to load answers (${answersRes.status})`);
    }
    if (!guessesRes.ok) {
      throw new Error(`Failed to load guesses (${guessesRes.status})`);
    }

    const answersText = await answersRes.text();
    const guessesText = await guessesRes.text();

    const answerWords = answersText
      .split("\n")
      .map((w) => w.trim())
      .filter((w) => w.length === 5)
      .map((w) => w.toUpperCase());

    const allowedGuesses = guessesText
      .split("\n")
      .map((w) => w.trim())
      .filter((w) => w.length === 5)
      .map((w) => w.toUpperCase());

    cached = {
      answerWords,
      allowedGuesses,
      allowedSet: new Set(allowedGuesses)
    };

    return cached;
  })();

  return cachedPromise;
}

export function useWordLists() {
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);
  const [answerWords, setAnswerWords] = useState(cached?.answerWords || []);
  const [allowedSet, setAllowedSet] = useState(cached?.allowedSet || new Set());

  const reload = async () => {
    // optional: allow manual retry
    setLoading(true);
    setError(null);
    try {
      const data = await loadWordListsOnce();
      setAnswerWords(data.answerWords);
      setAllowedSet(data.allowedSet);
      setLoading(false);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load word lists");
      setLoading(false);
    }
  };

  useEffect(() => {
    let alive = true;

    if (cached) return;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await loadWordListsOnce();
        if (!alive) return;
        setAnswerWords(data.answerWords);
        setAllowedSet(data.allowedSet);
        setLoading(false);
      } catch (e) {
        if (!alive) return;
        setError(e instanceof Error ? e.message : "Failed to load word lists");
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return { loading, error, answerWords, allowedSet, reload };
}
