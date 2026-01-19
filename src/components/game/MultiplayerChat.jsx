import React, { useEffect, useMemo, useRef, useState } from "react";
import { ref, onValue, push, set, query, limitToLast } from "firebase/database";
import { database } from "../../config/firebase";

/**
 * Lightweight real-time chat tied to a specific multiplayer room.
 * Messages live under: onevone/<gameCode>/chat/<autoId>
 * Limits display to last 100 messages to prevent unbounded growth.
 */
export default function MultiplayerChat({ gameCode, authUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  const canChat = useMemo(() => {
    return !!gameCode && !!authUser;
  }, [gameCode, authUser]);

  // Subscribe to chat messages for this room, limited to last 100 messages.
  useEffect(() => {
    if (!gameCode) return undefined;

    const chatRef = ref(database, `onevone/${gameCode}/chat`);
    // Limit to last 100 messages to prevent unbounded growth
    const chatQuery = query(chatRef, limitToLast(100));
    const unsubscribe = onValue(chatQuery, (snapshot) => {
      if (!snapshot.exists()) {
        setMessages([]);
        return;
      }
      const raw = snapshot.val() || {};
      const list = Object.entries(raw)
        .map(([id, data]) => ({ id, ...(data || {}) }))
        .sort((a, b) => {
          const at = typeof a.createdAt === "number" ? a.createdAt : 0;
          const bt = typeof b.createdAt === "number" ? b.createdAt : 0;
          return at - bt;
        });
      setMessages(list);
    });

    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, [gameCode]);

  // Auto-scroll to bottom when new messages arrive.
  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages.length, isOpen]);

  const handleSend = async (e) => {
    if (e) {
      e.preventDefault();
    }
    if (!canChat) return;
    const trimmed = input.trim();
    if (!trimmed) return;

    setIsSending(true);
    try {
      const chatRef = ref(database, `onevone/${gameCode}/chat`);
      const newRef = push(chatRef);
      const displayName =
        authUser.displayName || authUser.email || "Player";
      await set(newRef, {
        uid: authUser.uid,
        name: displayName,
        text: trimmed,
        createdAt: Date.now(),
      });
      setInput("");
      // Keep focus in the chat box so keyboard input does not go to the game.
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } catch (err) {
      // Best-effort only; surface error via console for debugging.
      // Multiplayer gameplay should not break if chat fails.
      // eslint-disable-next-line no-console
      console.error("Failed to send chat message", err);
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSend(e);
    }
  };

  if (!gameCode || !authUser) {
    return null;
  }

  return (
    <>
      {/* Floating chat toggle button - bottom right */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          position: "fixed",
          bottom: 190 + 20,
          right: 20,
          padding: "8px 14px",
          borderRadius: 999,
          backgroundColor: "#121213",
          border: "1px solid #ffffff",
          color: "#ffffff",
          fontSize: 12,
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: 8,
          boxShadow: "0 4px 16px rgba(0,0,0,0.7)",
        }}
        aria-label={isOpen ? "Close room chat" : "Open room chat"}
      >
        <span
          style={{
            display: "inline-flex",
            width: 18,
            height: 18,
            borderRadius: "50%",
            border: "2px solid #6aaa64",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
          }}
        >
          💬
        </span>
        <span>{isOpen ? "Close chat" : "Room chat"}</span>
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: 190 + 90,
            right: 20,
            width: 320,
            maxWidth: "90vw",
            maxHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1a1a1b",
            borderRadius: 12,
            border: "1px solid #3a3a3c",
            boxShadow: "0 8px 24px rgba(0,0,0,0.85)",
            zIndex: 9998,
          }}
        >
          <div
            style={{
              padding: "8px 12px",
              borderBottom: "1px solid #2f2f31",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Room chat
            </div>
            <div
              style={{
                fontSize: 11,
                color: "#9ca3af",
              }}
            >
              Visible to players in this room
            </div>
          </div>

          <div
            ref={listRef}
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "8px 10px 4px",
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            {messages.length === 0 ? (
              <div
                style={{
                  fontSize: 12,
                  color: "#9ca3af",
                  textAlign: "center",
                  padding: "8px 0",
                }}
              >
                No messages yet. Say hello to your opponents!
              </div>
            ) : (
              messages.map((m) => {
                const isMe = m.uid && authUser && m.uid === authUser.uid;
                const timeLabel = m.createdAt
                  ? new Date(m.createdAt).toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })
                  : "";
                return (
                  <div
                    key={m.id}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: isMe ? "flex-end" : "flex-start",
                    }}
                  >
                    <div
                      style={{
                        maxWidth: "100%",
                        padding: "6px 8px",
                        borderRadius: 8,
                        backgroundColor: isMe ? "#2563eb" : "#27272a",
                        color: "#f9fafb",
                        fontSize: 13,
                        wordBreak: "break-word",
                      }}
                    >
                      {!isMe && (
                        <div
                          style={{
                            fontSize: 11,
                            fontWeight: "bold",
                            color: "#d1d5db",
                            marginBottom: 2,
                          }}
                        >
                          {m.name || "Player"}
                        </div>
                      )}
                      <div>{m.text}</div>
                    </div>
                    {timeLabel && (
                      <div
                        style={{
                          fontSize: 10,
                          color: "#6b7280",
                          marginTop: 2,
                        }}
                      >
                        {timeLabel}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <form
            onSubmit={handleSend}
            style={{
              borderTop: "1px solid #2f2f31",
              padding: "6px 8px",
              display: "flex",
              gap: 6,
              alignItems: "center",
            }}
          >
            <input
              ref={inputRef}
              type="text"
              placeholder={canChat ? "Type a message" : "Sign in to chat"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={!canChat || isSending}
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: 999,
                border: "1px solid #3a3a3c",
                backgroundColor: "#121213",
                color: "#ffffff",
                fontSize: 13,
                outline: "none",
              }}
            />
            <button
              type="submit"
              disabled={!canChat || isSending || !input.trim()}
              style={{
                padding: "6px 10px",
                borderRadius: 999,
                border: "none",
                backgroundColor:
                  !canChat || isSending || !input.trim() ? "#3a3a3c" : "#6aaa64",
                color: "#ffffff",
                fontSize: 12,
                fontWeight: "bold",
                cursor:
                  !canChat || isSending || !input.trim() ? "default" : "pointer",
                textTransform: "uppercase",
                letterSpacing: 0.5,
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
