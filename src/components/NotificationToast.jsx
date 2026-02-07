import React, { useEffect } from "react";

const DEFAULT_DURATION_MS = 5000;

export default function NotificationToast({ message, onClick, onDismiss, durationMs = DEFAULT_DURATION_MS }) {
  useEffect(() => {
    if (!message || !onDismiss) return;
    const t = window.setTimeout(onDismiss, durationMs);
    return () => window.clearTimeout(t);
  }, [message, onDismiss, durationMs]);

  if (!message) return null;

  const text = typeof message === "string" ? message : String(message);

  return (
    <button
      type="button"
      onClick={onClick}
      role="status"
      aria-live="polite"
      aria-label={`${text} Click to view notifications`}
      style={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        padding: "12px 20px",
        borderRadius: 10,
        fontSize: 14,
        fontWeight: "bold",
        boxShadow: "0 10px 30px rgba(0,0,0,0.55)",
        zIndex: 4000,
        maxWidth: "90vw",
        textAlign: "center",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(24,24,27,0.96)",
        color: "#e5e7eb",
        border: "1px solid #6aaa64",
        cursor: "pointer",
        pointerEvents: "auto",
      }}
    >
      <span>{text}</span>
      <span style={{ fontSize: 12, opacity: 0.9 }}>Click to view</span>
    </button>
  );
}
