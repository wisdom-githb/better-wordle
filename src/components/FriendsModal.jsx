import React from "react";
import Modal from "./Modal";
import { useAuth } from "../hooks/useAuth";

export default function FriendsModal({ isOpen, onRequestClose }) {
  const { friends, friendRequests, acceptFriendRequest, declineFriendRequest } = useAuth();
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div style={{ textAlign: "center", minWidth: "400px", maxWidth: "500px" }}>
        <h2 style={{ margin: "0 0 24px 0", fontSize: "24px", fontWeight: "bold" }}>
          Friends & Requests
        </h2>

        {/* Friend Requests Section */}
        {friendRequests && friendRequests.length > 0 && (
          <div style={{ marginBottom: "24px" }}>
            <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
              Friend Requests ({friendRequests.length})
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "16px",
                borderBottom: "1px solid #3a3a3c",
                paddingBottom: "16px"
              }}
            >
              {friendRequests.map((request) => (
                <div
                  key={request.id}
                  style={{
                    padding: "12px 14px",
                    background: "#2b2b2e",
                    borderRadius: "8px",
                    border: "1px solid #6aaa64",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <div style={{ textAlign: "left", flex: 1 }}>
                    <span style={{ color: "#ffffff", fontWeight: "600" }}>
                      {request.fromName}
                    </span>
                    <div style={{ color: "#818384", fontSize: "11px", marginTop: "2px" }}>
                      wants to be friends
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => acceptFriendRequest(request.id, request.fromName)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#6aaa64",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer"
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => declineFriendRequest(request.id)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: "6px",
                        border: "1px solid #3a3a3c",
                        background: "transparent",
                        color: "#ffffff",
                        fontWeight: "bold",
                        fontSize: "11px",
                        cursor: "pointer"
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Friends Section */}
        <div>
          <h3 style={{ margin: "0 0 12px 0", fontSize: "16px", fontWeight: "bold", color: "#d7dadc", textAlign: "left" }}>
            Friends ({friends?.length || 0})
          </h3>
          {friends && friends.length > 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                maxHeight: "300px",
                overflowY: "auto",
                marginBottom: "20px"
              }}
            >
              {friends.map((friend) => (
                <div
                  key={friend.id}
                  style={{
                    padding: "14px 16px",
                    background: "#2b2b2e",
                    borderRadius: "8px",
                    border: "1px solid #3a3a3c",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span style={{ color: "#ffffff", fontWeight: "600" }}>
                    {friend.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                padding: "32px 16px",
                color: "#818384",
                fontSize: "14px",
                marginBottom: "20px"
              }}
            >
              No friends yet. Send friend requests while playing 1v1 mode!
            </div>
          )}
        </div>

        <button
          onClick={onRequestClose}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#6aaa64",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
            letterSpacing: "0.5px"
          }}
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
