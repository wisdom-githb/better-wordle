import React, { useState, useEffect, Suspense, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "./hooks/useAuth";
import { useUserBadges } from "./hooks/useUserBadges";
import SiteHeader from "./components/SiteHeader";
import { loadStreak } from "./lib/persist";
import { database } from "./config/firebase";
import { ref, get } from "firebase/database";
import { syncLocalStreaksToRemoteOnLogin } from "./lib/singlePlayerStore";
import { ALL_BADGES, getEarnedBadgeDefs } from "./lib/badges";
import BadgeIcon from "./components/BadgeIcon";

const FeedbackModal = lazy(() => import("./components/FeedbackModal"));
import ArchiveModal from "./components/ArchiveModal";
import CrossModeComparisonModal from "./components/CrossModeComparisonModal";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const { user, loading, updateUsername, deleteAccount, isVerifiedUser, resendVerificationEmail, linkGoogleAccount, formatAuthErrorForDisplay } = useAuth();
  const [username, setUsername] = useState("");
  const [initialUsername, setInitialUsername] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [message, setMessage] = useState("");
  const [linkingGoogle, setLinkingGoogle] = useState(false);
  const [sendingVerification, setSendingVerification] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [streaks, setStreaks] = useState(null);
  const [streakLoadError, setStreakLoadError] = useState(null);
  const [streakRetryCount, setStreakRetryCount] = useState(0);
  const [archiveModal, setArchiveModal] = useState({ isOpen: false, mode: null, speedrunEnabled: false });
  const [statsModal, setStatsModal] = useState({ isOpen: false, mode: null, speedrunEnabled: false });
  const [showCrossModeComparison, setShowCrossModeComparison] = useState(false);
  const { userBadges, loading: badgesLoading } = useUserBadges(user);
  const earnedBadges = getEarnedBadgeDefs(userBadges);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/");
      return;
    }
    if (user) {
      const name = user.displayName || "";
      setUsername(name);
      setInitialUsername(name);
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    let isMounted = true;
    setStreakLoadError(null);

    async function loadProfileStreaks() {
      try {
        // Always have a local fallback for guests / offline usage.
        const local = {
          dailyStandard: loadStreak("daily", false),
          dailySpeedrun: loadStreak("daily", true),
          marathonStandard: loadStreak("marathon", false),
          marathonSpeedrun: loadStreak("marathon", true),
        };

        if (!user) {
          if (isMounted) setStreaks(local);
          return;
        }

        const streaksRef = ref(database, `users/${user.uid}/streaks`);
        const snap = await get(streaksRef);
        if (!snap.exists()) {
          try {
            await syncLocalStreaksToRemoteOnLogin(user, database);
          } catch (e) {
            // Non-fatal; we still show local streaks
          }
          if (isMounted) setStreaks(local);
          return;
        }

        const remote = snap.val() || {};
        const merged = {
          dailyStandard: remote.daily_standard || local.dailyStandard,
          dailySpeedrun: remote.daily_speedrun || local.dailySpeedrun,
          marathonStandard: remote.marathon_standard || local.marathonStandard,
          marathonSpeedrun: remote.marathon_speedrun || local.marathonSpeedrun,
        };

        if (isMounted) setStreaks(merged);
      } catch (err) {
        console.error("Failed to load streaks in profile", err);
        if (isMounted) {
          setStreaks(null);
          setStreakLoadError(err?.message || "Failed to load streaks.");
        }
      }
    }

    loadProfileStreaks();

    return () => {
      isMounted = false;
    };
  }, [user, streakRetryCount]);

  const handleSave = async () => {
    if (!username.trim()) {
      setMessage("Username cannot be empty");
      return;
    }

    setIsSaving(true);
    setMessage("");
    try {
      await updateUsername(username);
      setInitialUsername(username);
      setMessage("Username updated successfully!");
    } catch (err) {
      setMessage(`Error: ${formatAuthErrorForDisplay(err)}`);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setUsername(initialUsername);
    setMessage("");
  };

  const handleResendVerification = async () => {
    if (!user || isVerifiedUser) return;
    setSendingVerification(true);
    setMessage("");
    try {
      await resendVerificationEmail();
      setMessage('Verification email sent. Please check your inbox (and spam folder).');
    } catch (err) {
      setMessage(`Error: ${formatAuthErrorForDisplay(err)}`);
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
        setMessage(`Error: ${formatAuthErrorForDisplay(err)}`);
      }
    } finally {
      setLinkingGoogle(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!user) return;
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This will remove your friends and challenges and you will lose access to your synced progress.'
    );
    if (!confirmed) return;

    setIsDeleting(true);
    setMessage("");
    try {
      await deleteAccount();
      setMessage('Your account has been deleted.');
      navigate('/');
    } catch (err) {
      setMessage(`Error: ${formatAuthErrorForDisplay(err)}`);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile & Friends – Better Wordle</title>
        <meta
          name="description"
          content="Manage your Better Wordle profile, username, account security and linked Google account so your Wordle-style progress and Multiplayer Mode games stay in sync."
        />
      </Helmet>
      <div className="profileRoot">
      <div className="profileContainer">
        {loading ? (
          <div className="profileLoading">
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
                    <label>
                      Email
                      <span className="profileEmailStatus">
                        ({isVerifiedUser ? 'verified' : 'unverified'})
                      </span>
                    </label>
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
                        message.startsWith('Error') ? 'error' : 'success'
                      }`}
                    >
                      {message}
                    </div>
                  )}

                  {username !== initialUsername && (
                    <div className="profileActions">
                      <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="profileBtn homeBtn homeBtnGreen homeBtnLg"
                        style={{ opacity: isSaving ? 0.8 : 1, cursor: isSaving ? "not-allowed" : "pointer" }}
                      >
                        {isSaving ? "Saving..." : "Save Changes"}
                      </button>
                      <button
                        onClick={handleCancel}
                        disabled={isSaving}
                        className="profileBtn homeBtn homeBtnOutline homeBtnLg"
                        style={{ opacity: isSaving ? 0.8 : 1, cursor: isSaving ? "not-allowed" : "pointer" }}
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                {!badgesLoading && (
                  <div className="profileSection profileSectionSpacing">
                    <details className="profileDetails">
                      <summary className="profileDetailsSummary">Your badges</summary>
                      <div className="profileBadgesList">
                        {earnedBadges.length === 0 ? (
                          <p className="profileBadgesEmpty">You haven&apos;t earned any badges yet.</p>
                        ) : (
                          earnedBadges.map((b) => (
                            <div key={b.id} className="profileBadgeCard profileBadgeCardEarned">
                              <div className="profileBadgeCardHeader">
                                <BadgeIcon size="md" title={b.name} />
                                <div className="profileBadgeName">{b.name}</div>
                              </div>
                              <div className="profileBadgeDesc">{b.description}</div>
                            </div>
                          ))
                        )}
                      </div>
                    </details>
                    <details className="profileDetails">
                      <summary className="profileDetailsSummary">All badges</summary>
                      <div className="profileBadgesList">
                        {ALL_BADGES.map((b) => {
                          const earned = earnedBadges.some((eb) => eb.id === b.id);
                          return (
                            <div
                              key={b.id}
                              className={`profileBadgeCard ${earned ? 'profileBadgeCardEarned' : 'profileBadgeCardLocked'}`}
                            >
                              <div className="profileBadgeCardHeader">
                                <BadgeIcon size="md" title={b.name} />
                                <div className="profileBadgeName">
                                  {b.name}
                                  {earned && <span className="profileBadgeEarnedLabel"> · Earned</span>}
                                </div>
                              </div>
                              <div className="profileBadgeDesc">{b.description}</div>
                            </div>
                          );
                        })}
                      </div>
                    </details>
                  </div>
                )}

                {(streaks || streakLoadError) && (
                  <div className="profileSection profileSectionSpacing">
                    <h2>Game streaks</h2>
                    {streakLoadError ? (
                      <div className="profileField">
                        <div style={{ color: "#f87171", fontSize: 14, marginBottom: 8 }}>
                          {streakLoadError}
                        </div>
                        <button
                          type="button"
                          onClick={() => setStreakRetryCount((c) => c + 1)}
                          className="homeBtn homeBtnOutline homeBtnLg"
                        >
                          Retry
                        </button>
                      </div>
                    ) : (
                      <>
                    <div className="profileField">
                      <label style={{ fontSize: 12, color: "#9ca3af" }}>
                        Streaks are tied to your account and sync across devices once you're signed in.
                      </label>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {/* Daily Standard */}
                      <div className="streakCard" style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                          <div style={{ flex: 1 }}>
                            <div className="streakLabel">Daily Standard</div>
                            <div className="streakCurrent">
                              {streaks.dailyStandard.current} day{streaks.dailyStandard.current === 1 ? "" : "s"}
                            </div>
                            <div className="streakBest">Best: {streaks.dailyStandard.best}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button
                            type="button"
                            onClick={() => setArchiveModal({ isOpen: true, mode: 'daily', speedrunEnabled: false })}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Archive
                          </button>
                          <button
                            type="button"
                            onClick={() => navigate('/stats?mode=daily&speedrun=false')}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Advanced Stats
                          </button>
                        </div>
                      </div>

                      {/* Daily Speedrun */}
                      <div className="streakCard" style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                          <div style={{ flex: 1 }}>
                            <div className="streakLabel">Daily Speedrun</div>
                            <div className="streakCurrent">
                              {streaks.dailySpeedrun.current} day{streaks.dailySpeedrun.current === 1 ? "" : "s"}
                            </div>
                            <div className="streakBest">Best: {streaks.dailySpeedrun.best}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button
                            type="button"
                            onClick={() => setArchiveModal({ isOpen: true, mode: 'daily', speedrunEnabled: true })}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Archive
                          </button>
                          <button
                            type="button"
                            onClick={() => navigate('/stats?mode=daily&speedrun=true')}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Advanced Stats
                          </button>
                        </div>
                      </div>

                      {/* Marathon Standard */}
                      <div className="streakCard" style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                          <div style={{ flex: 1 }}>
                            <div className="streakLabel">Marathon Standard</div>
                            <div className="streakCurrent">
                              {streaks.marathonStandard.current} day{streaks.marathonStandard.current === 1 ? "" : "s"}
                            </div>
                            <div className="streakBest">Best: {streaks.marathonStandard.best}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button
                            type="button"
                            onClick={() => setArchiveModal({ isOpen: true, mode: 'marathon', speedrunEnabled: false })}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Archive
                          </button>
                          <button
                            type="button"
                            onClick={() => navigate('/stats?mode=marathon&speedrun=false')}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Advanced Stats
                          </button>
                        </div>
                      </div>

                      {/* Marathon Speedrun */}
                      <div className="streakCard" style={{ width: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                          <div style={{ flex: 1 }}>
                            <div className="streakLabel">Marathon Speedrun</div>
                            <div className="streakCurrent">
                              {streaks.marathonSpeedrun.current} day{streaks.marathonSpeedrun.current === 1 ? "" : "s"}
                            </div>
                            <div className="streakBest">Best: {streaks.marathonSpeedrun.best}</div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                          <button
                            type="button"
                            onClick={() => setArchiveModal({ isOpen: true, mode: 'marathon', speedrunEnabled: true })}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Archive
                          </button>
                          <button
                            type="button"
                            onClick={() => setStatsModal({ isOpen: true, mode: 'marathon', speedrunEnabled: true })}
                            className="homeBtn homeBtnOutline"
                            style={{
                              flex: 1,
                              padding: '8px 12px',
                              fontSize: 12,
                            }}
                          >
                            View Advanced Stats
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Cross-Mode Comparison Button */}
                    <div style={{ marginTop: 24, paddingTop: 24, borderTop: '1px solid #2b2b2e' }}>
                      <button
                        type="button"
                        onClick={() => setShowCrossModeComparison(true)}
                        className="homeBtn homeBtnGreen"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          fontSize: 14,
                          fontWeight: '600',
                        }}
                      >
                        View Cross-Mode Comparison
                      </button>
                      <div style={{ 
                        fontSize: 12, 
                        color: '#9ca3af', 
                        marginTop: 8, 
                        textAlign: 'center' 
                      }}>
                        Compare your performance across all game modes (Premium)
                      </div>
                    </div>
                      </>
                    )}
                  </div>
                )}

                <div className="profileSection profileSectionSpacing">
                  <h2>Account Security</h2>

                  {!isVerifiedUser && user && user.providerData?.some(p => p.providerId === 'password') && (
                    <div className="profileField">
                      <label>Email verification</label>
                      <div className="profileValue profileInlineField">
                        <span>Your email is not verified.</span>
                        <button
                          onClick={handleResendVerification}
                          disabled={sendingVerification}
                          className="homeBtn homeBtnGreen profileInlineButton"
                          style={{ opacity: sendingVerification ? 0.8 : 1, cursor: sendingVerification ? 'not-allowed' : 'pointer' }}
                        >
                          {sendingVerification ? 'Sending...' : 'Resend link'}
                        </button>
                      </div>
                    </div>
                  )}

                  {user && !user.providerData?.some(p => p.providerId === 'google.com') && (
                    <div className="profileField">
                      <label>Google account</label>
                      <div className="profileValue profileInlineField">
                        <span>Not linked</span>
                        <button
                          onClick={handleLinkGoogle}
                          disabled={linkingGoogle}
                          className="homeBtn homeBtnGreen profileInlineButton"
                          style={{ opacity: linkingGoogle ? 0.8 : 1, cursor: linkingGoogle ? 'not-allowed' : 'pointer' }}
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

                <div className="profileSection profileSectionSpacing">
                  <h2>Danger zone</h2>
                    <div className="profileField">
                      <label>Delete account</label>
                      <div className="profileValue profileDangerText">
                        This will permanently delete your Better Wordle account and associated friends/challenge data from Better Wordle. You'll need to create a new account to sign in again.
                      </div>
                    <button
                      onClick={handleDeleteAccount}
                      disabled={isDeleting}
                      className="profileDangerButton"
                      style={{
                        cursor: isDeleting ? 'not-allowed' : 'pointer',
                        opacity: isDeleting ? 0.8 : 1,
                      }}
                    >
                      {isDeleting ? 'Deleting account...' : 'Delete account'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <Suspense fallback={null}>
          <FeedbackModal
            isOpen={showFeedbackModal}
            onRequestClose={() => setShowFeedbackModal(false)}
          />
        </Suspense>

        <ArchiveModal
          isOpen={archiveModal.isOpen}
          onRequestClose={() => setArchiveModal({ isOpen: false, mode: null, speedrunEnabled: false })}
          mode={archiveModal.mode}
          speedrunEnabled={archiveModal.speedrunEnabled}
        />

        <CrossModeComparisonModal
          isOpen={showCrossModeComparison}
          onRequestClose={() => setShowCrossModeComparison(false)}
        />
      </div>
    </div>
    </>
  );
}
