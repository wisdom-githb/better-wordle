import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import FeedbackModal from "./components/FeedbackModal";
import SiteHeader from "./components/SiteHeader";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading, updateUsername, error, isVerifiedUser, resendVerificationEmail, linkGoogleAccount } = useAuth();
  const [username, setUsername] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [message, setMessage] = useState("");
  const [linkingGoogle, setLinkingGoogle] = useState(false);
  const [sendingVerification, setSendingVerification] = useState(false);

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

  const handleResendVerification = async () => {
    if (!user || isVerifiedUser) return;
    setSendingVerification(true);
    setMessage("");
    try {
      await resendVerificationEmail();
      setMessage('Verification email sent. Please check your inbox (and spam folder).');
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    } finally {
      setSendingVerification(false);
    }
  };

  const handleLinkGoogle = async () => {
    if (!user) return;
    setLinkingGoogle(true);
    setMessage("");
    try {
      await linkGoogleAccount();
      setMessage('Google account linked successfully!');
    } catch (err) {
      if (err.code === 'auth/credential-already-in-use' || err.code === 'auth/provider-already-linked') {
        setMessage('Google account is already linked.');
      } else {
        setMessage(`Error: ${err.message}`);
      }
    } finally {
      setLinkingGoogle(false);
    }
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
            <SiteHeader onOpenFeedback={() => setShowFeedbackModal(true)} />

            <div className="profileContent">
              <h1 className="profileTitle">Profile</h1>
              <div className="profileCard">
                <div className="profileSection">
                  <h2>User Information</h2>
                  <div className="profileField">
                    <label>Email</label>
                    <div className="profileValue">{user?.email || "N/A"}</div>
                  </div>

                  <div className="profileField">
                    <label>Status</label>
                    <div className="profileValue">
                      {isVerifiedUser ? 'Verified' : 'Not verified'}
                      {!isVerifiedUser && user && user.providerData?.some(p => p.providerId === 'password') && (
                        <>
                          <span style={{ marginLeft: 8, fontSize: 12, color: '#ffa726' }}>
                            (Some features are disabled until you verify.)
                          </span>
                        </>
                      )}
                    </div>
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
                        message.startsWith('Error') ? 'error' : 'success'
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

                <div className="profileSection" style={{ marginTop: '24px' }}>
                  <h2>Account Security</h2>

                  {!isVerifiedUser && user && user.providerData?.some(p => p.providerId === 'password') && (
                    <div className="profileField">
                      <label>Email verification</label>
                      <div className="profileValue" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>Your email is not verified.</span>
                        <button
                          onClick={handleResendVerification}
                          disabled={sendingVerification}
                          className="profileBtn profileBtnSave"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                        >
                          {sendingVerification ? 'Sending...' : 'Resend link'}
                        </button>
                      </div>
                    </div>
                  )}

                  {user && !user.providerData?.some(p => p.providerId === 'google.com') && (
                    <div className="profileField">
                      <label>Google account</label>
                      <div className="profileValue" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>Not linked</span>
                        <button
                          onClick={handleLinkGoogle}
                          disabled={linkingGoogle}
                          className="profileBtn profileBtnSave"
                          style={{ padding: '6px 10px', fontSize: '12px' }}
                        >
                          {linkingGoogle ? 'Linking...' : 'Connect Google account'}
                        </button>
                      </div>
                    </div>
                  )}

                  {user && user.providerData?.some(p => p.providerId === 'google.com') && (
                    <div className="profileField">
                      <label>Google account</label>
                      <div className="profileValue">Linked</div>
                    </div>
                  )}
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
