import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FriendsModal from "./FriendsModal";
import { useAuth } from "../hooks/useAuth";

export default function HamburgerMenu({ onOpenFeedback }) {
  const navigate = useNavigate();
  const { user, friendRequests, isVerifiedUser } = useAuth();
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const [showFriendsModal, setShowFriendsModal] = useState(false);

  return (
    <>
      <div style={{ position: "relative" }}>
        <button
          className="homeBtn homeBtnOutline"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          style={{
            padding: "4px 6px",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            background: "transparent",
            color: "#ffffff",
            cursor: "pointer"
          }}
          title="Menu"
        >
          ☰
        </button>
        {showHamburgerMenu && (
          <div
            style={{
              position: "absolute",
              top: "calc(100% + 4px)",
              right: 0,
              background: "#2b2b2e",
              border: "1px solid #3a3a3c",
              borderRadius: "8px",
              minWidth: "140px",
              zIndex: 1000,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
            }}
          >
            <button
              onClick={() => {
                navigate('/');
                setShowHamburgerMenu(false);
              }}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "13px",
                textAlign: "left",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                transition: "all 0.2s ease",
                borderBottom: "1px solid #3a3a3c"
              }}
              onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              Home
            </button>
            {user && (
              <button
                onClick={() => {
                  navigate('/profile');
                  setShowHamburgerMenu(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                  borderBottom: "1px solid #3a3a3c"
                }}
                onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                Profile
              </button>
            )}
            {user && (
              <button
                onClick={() => {
                  if (!isVerifiedUser) {
                    alert('Verify your email or sign in with Google to use friends.');
                    setShowHamburgerMenu(false);
                    return;
                  }
                  setShowFriendsModal(true);
                  setShowHamburgerMenu(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  background: "transparent",
                  border: "none",
                  color: "#ffffff",
                  fontSize: "13px",
                  textAlign: "left",
                  cursor: "pointer",
                  fontWeight: "600",
                  letterSpacing: "0.3px",
                  transition: "all 0.2s ease",
                  borderBottom: "1px solid #3a3a3c",
                  position: "relative",
                  display: "flex",
                  alignItems: "center"
                }}
                onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
                onMouseLeave={(e) => e.target.style.background = "transparent"}
              >
                Friends
                {friendRequests && friendRequests.length > 0 && (
                  <div style={{
                    marginLeft: "8px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: "#ef5350",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    {friendRequests.length}
                  </div>
                )}
              </button>
            )}
            <button
              onClick={() => {
                onOpenFeedback();
                setShowHamburgerMenu(false);
              }}
              style={{
                width: "100%",
                padding: "10px 16px",
                background: "transparent",
                border: "none",
                color: "#ffffff",
                fontSize: "13px",
                textAlign: "left",
                cursor: "pointer",
                fontWeight: "600",
                letterSpacing: "0.3px",
                transition: "all 0.2s ease"
              }}
              onMouseEnter={(e) => e.target.style.background = "rgba(255, 255, 255, 0.1)"}
              onMouseLeave={(e) => e.target.style.background = "transparent"}
            >
              Feedback
            </button>
          </div>
        )}
      </div>

      {showHamburgerMenu && (
        <div
          onClick={() => setShowHamburgerMenu(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
        />
      )}

      <FriendsModal
        isOpen={showFriendsModal}
        onRequestClose={() => setShowFriendsModal(false)}
      />
    </>
  );
}
