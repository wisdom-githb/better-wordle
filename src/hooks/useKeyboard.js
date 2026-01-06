import { useEffect, useRef } from "react";

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
  }, []);
}
