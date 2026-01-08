import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import HamburgerMenu from "./components/HamburgerMenu";
import FeedbackModal from "./components/FeedbackModal";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading, updateUsername, error } = useAuth();
  const [username, setUsername] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
      return;
    }
    if (user) {
      setUsername(user.displayName || "");
    }
  }, [user, loading, navigate]);

  const handleSave = async () => {
    if (!username.trim()) {
      setMessage("Username cannot be empty");
      return;
    }

    setIsSaving(true);
    setMessage("");
    try {
      await updateUsername(username);
      setMessage("Username updated successfully!");
    } catch (err) {
      setMessage(`Error: ${error || err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="profileRoot">
      <div className="profileContainer">
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#d7dadc" }}>
            Loading...
          </div>
        ) : (
          <>
            <header className="profileHeader">
              <button
                onClick={handleCancel}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: "bold",
                  letterSpacing: 1
                }}
              >
                ← Home
              </button>
              <h1 className="profileTitle">Profile</h1>
              <HamburgerMenu onOpenFeedback={() => setShowFeedbackModal(true)} />
            </header>

            <div className="profileContent">
              <div className="profileCard">
                <div className="profileSection">
                  <h2>User Information</h2>
                  <div className="profileField">
                    <label>Email</label>
                    <div className="profileValue">{user?.email || "N/A"}</div>
                  </div>

                  <div className="profileField">
                    <label htmlFor="username">Username</label>
                    <input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="profileInput"
                      placeholder="Enter your username"
                    />
                  </div>

                  {message && (
                    <div
                      className={`profileMessage ${
                        message.includes("Error") ? "error" : "success"
                      }`}
                    >
                      {message}
                    </div>
                  )}

                  <div className="profileActions">
                    <button
                      onClick={handleSave}
                      disabled={isSaving}
                      className="profileBtn profileBtnSave"
                    >
                      {isSaving ? "Saving..." : "Save Changes"}
                    </button>
                    <button
                      onClick={handleCancel}
                      disabled={isSaving}
                      className="profileBtn profileBtnCancel"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <FeedbackModal
          isOpen={showFeedbackModal}
          onRequestClose={() => setShowFeedbackModal(false)}
        />
      </div>
    </div>
  );
}
