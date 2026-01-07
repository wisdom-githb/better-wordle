import React from "react";

export default function GameToast({ message }) {
  if (!message) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#1a1a1b",
        color: "#f06272",
        padding: "12px 20px",
        borderRadius: 8,
        fontSize: 14,
        fontWeight: "bold",
        border: "1px solid #3a3a3c",
        boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        zIndex: 3000,
        pointerEvents: "none",
        maxWidth: "90vw",
        textAlign: "center"
      }}
    >
      {message}
    </div>
  );
}
