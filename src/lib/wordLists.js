// Word list loading utilities

export async function loadWordLists() {
  const baseUrl = import.meta.env.BASE_URL;
  const [answersRes, guessesRes] = await Promise.all([
    fetch(`${baseUrl}wordle-answers-alphabetical.txt`),
    fetch(`${baseUrl}valid-wordle-words.txt`)
  ]);

  if (!answersRes.ok) {
    throw new Error(`Failed to load answers: ${answersRes.status} ${answersRes.statusText}`);
  }
  if (!guessesRes.ok) {
    throw new Error(`Failed to load guesses: ${guessesRes.status} ${guessesRes.statusText}`);
  }

  const answersText = await answersRes.text();
  const guessesText = await guessesRes.text();

  const ANSWER_WORDS = answersText
    .split("\n")
    .filter((w) => w.trim().length === 5)
    .map((w) => w.trim().toUpperCase());

  const ALLOWED_GUESSES = guessesText
    .split("\n")
    .filter((w) => w.trim().length === 5)
    .map((w) => w.trim().toUpperCase());

  return { ANSWER_WORDS, ALLOWED_GUESSES };
}
