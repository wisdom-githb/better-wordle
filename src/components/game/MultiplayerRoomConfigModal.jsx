import React from "react";
import Modal from "../Modal";

export default function MultiplayerRoomConfigModal({
  isOpen,
  onRequestClose,
  boardOptions,
  boardsDraft,
  onChangeBoardsDraft,
  speedrunDraft,
  onChangeSpeedrunDraft,
  onSave,
}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={{ padding: "24px" }}>
        <h2
          style={{
            margin: 0,
            marginBottom: "24px",
            fontSize: 20,
            fontWeight: "bold",
            color: "#ffffff",
          }}
        >
          Multiplayer Room Configuration
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                color: "#d7dadc",
                fontSize: 14,
              }}
            >
              Number of Boards
            </label>
            <select
              value={boardsDraft}
              onChange={(e) => onChangeBoardsDraft(parseInt(e.target.value, 10))}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: 6,
                border: "1px solid #3a3a3c",
                background: "#1a1a1b",
                color: "#ffffff",
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {boardOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <input
              type="checkbox"
              id="multiplayer-speedrun-config-checkbox"
              checked={speedrunDraft}
              onChange={(e) => onChangeSpeedrunDraft(e.target.checked)}
              style={{ cursor: "pointer", width: "18px", height: "18px" }}
            />
            <label
              htmlFor="multiplayer-speedrun-config-checkbox"
              style={{ color: "#d7dadc", fontSize: 14, cursor: "pointer", margin: 0 }}
            >
              Speedrun Mode (Unlimited guesses, timed)
            </label>
          </div>

          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            <button
              onClick={onRequestClose}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 8,
                border: "1px solid #3a3a3c",
                background: "transparent",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: 8,
                border: "none",
                background: "#6aaa64",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Save for Rematch
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
