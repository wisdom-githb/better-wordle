import { useCallback, useEffect, useRef, useState } from "react";

export function useStageTimer(speedrunEnabled, tickMs = 250) {
  const startRef = useRef(null);
  const endRef = useRef(null);
  const [nowMs, setNowMs] = useState(Date.now());
  const [isFrozen, setIsFrozen] = useState(false);

  const start = useCallback(() => {
    const t = Date.now();
    startRef.current = t;
    endRef.current = null;
    setIsFrozen(false);
    setNowMs(t);
  }, []);

  const freeze = useCallback(() => {
    if (!startRef.current) return 0;
    if (endRef.current == null) {
      endRef.current = Date.now();
    }
    setIsFrozen(true);
    setNowMs(endRef.current);
    return (endRef.current ?? Date.now()) - startRef.current;
  }, []);

  const elapsedMs = (() => {
    if (!speedrunEnabled || !startRef.current) return 0;
    const end = endRef.current ?? nowMs;
    return end - startRef.current;
  })();

  useEffect(() => {
    if (!speedrunEnabled) return;

    let id = null;

    const tick = () => {
      if (document.visibilityState === "visible") {
        setNowMs(Date.now());
      }
    };

    id = window.setInterval(tick, tickMs);
    const onVis = () => tick();
    document.addEventListener("visibilitychange", onVis);

    return () => {
      if (id != null) window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [speedrunEnabled, tickMs]);

  return { start, freeze, elapsedMs, isFrozen };
}
