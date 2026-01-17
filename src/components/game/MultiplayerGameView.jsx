import React, { useState, Suspense, lazy } from "react";
import GameHeader from "./GameHeader";
import MultiplayerWaitingRoom from "./MultiplayerWaitingRoom";
import OpponentBoardView from "./OpponentBoardView";
import GameBoard from "./GameBoard";
import SiteHeader from "../SiteHeader";
import MultiplayerChat from "./MultiplayerChat";

const AuthModal = lazy(() => import("../AuthModal"));
import { KEYBOARD_HEIGHT, formatElapsed as formatElapsedLib, scoreGuess } from "../../lib/wordle";
import { FLIP_MS } from "../../lib/gameConstants";
import { MULTIPLAYER_WAITING_TIMEOUT_MS } from "../../lib/multiplayerConfig";

/**
 * Presentation component for all multiplayer-specific game views (formerly 1v1).
 * Handles: waiting room, error/loading states, dual boards, scores, and rematch button.
 */
export default function MultiplayerGameView({
  mode,
  gameCode,
  authUser,
  authLoading,
  oneVOneGame,
  isLoading,
  maxTurns,
  currentGuess,
  invalidCurrentGuess,
  revealId,
  boardRefs,
  boards,
  selectedBoardIndex,
  setSelectedBoardIndex,
  friendRequestSent,
  onAddFriendRequest,
  onShareCode,
  onReady,
  onStartGame,
  onBack,
  onOpenFeedback,
  onRematch,
  setShowFeedbackModal,
  setTimedMessage,
  oneVOneNowMs,
  waitingNowMs,
  initialNumBoards,
  onChangeMode,
  friends,
  onCancelChallenge,
  onInviteFriend,
  onUpdateConfig,
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const gameState = oneVOneGame.gameState;

  // If we're still resolving auth, show a simple loading state that includes the header.
  if (authLoading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#121213",
          color: "#ffffff",
        }}
      >
        <SiteHeader onOpenFeedback={onOpenFeedback} />
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          Loading authentication...
        </div>
      </div>
    );
  }

  // If the user is not signed in, show a dedicated login-required screen for Multiplayer Mode.
  if (!authUser) {
    return (
      <>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#121213",
            color: "#ffffff",
          }}
        >
          <SiteHeader onOpenFeedback={onOpenFeedback} />
          <main
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              Sign in to play Multiplayer Mode
            </h2>
            <p
              style={{
                maxWidth: 480,
                fontSize: 14,
                color: "#d7dadc",
                marginBottom: 24,
                lineHeight: 1.6,
              }}
            >
              A Better Wordle account is required to host or join multiplayer rooms.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                width: "100%",
                maxWidth: 320,
              }}
            >
              <button
                type="button"
                className="homeBtn homeBtnGreen homeBtnLg"
                onClick={() => setShowAuthModal(true)}
              >
                Sign In
              </button>
              <button
                type="button"
                className="homeBtn homeBtnOutline homeBtnLg"
                onClick={onBack}
              >
                Back to Home
              </button>
            </div>
          </main>
        </div>

        <Suspense fallback={null}>
          <AuthModal
            isOpen={showAuthModal}
            onRequestClose={() => setShowAuthModal(false)}
          />
        </Suspense>
      </>
    );
  }

  // If the invited friend has declined the challenge (via Challenges modal),
  // show a simple message to the host and offer a way back home.
  if (gameState && gameState.status === "cancelled") {
    const declinedBy = gameState.cancelledByName || "Your friend";
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121213", color: "#ffffff" }}>
        <SiteHeader onOpenFeedback={onOpenFeedback} />
        <div
          style={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>Multiplayer Challenge</h2>
          <p style={{ fontSize: 16, color: "#d7dadc", marginBottom: 16 }}>
            {declinedBy} has declined the challenge.
          </p>
          <button
            onClick={onBack}
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              border: "none",
              background: "#6aaa64",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Home
          </button>
        </div>
      </div>
    );
  }

  // Waiting room view
  if (gameState && gameState.status === "waiting") {
    const isPlayerHost = authUser && gameState.hostId === authUser.uid;
    const opponentId = isPlayerHost ? gameState.guestId : gameState.hostId;
    const isFriendWithOpponent =
      !!opponentId && Array.isArray(friends)
        ? friends.some((f) => f.id === opponentId)
        : false;
    const createdAt = typeof gameState.createdAt === "number" ? gameState.createdAt : null;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121213", color: "#ffffff" }}>
        <SiteHeader onOpenFeedback={onOpenFeedback} />
        <GameHeader
          mode={mode}
          numBoards={initialNumBoards || 1}
          speedrunEnabled={false}
        />
        <MultiplayerWaitingRoom
          gameCode={gameCode || ""}
          gameState={gameState}
          isHost={isPlayerHost}
          onReady={onReady}
          onStartGame={onStartGame}
          friendRequestSent={friendRequestSent}
          onShareCode={onShareCode}
          onCancelChallenge={isPlayerHost ? onCancelChallenge : undefined}
          createdAt={createdAt}
          waitingNowMs={waitingNowMs}
          waitingTimeoutMs={MULTIPLAYER_WAITING_TIMEOUT_MS}
          initialBoards={initialNumBoards || 1}
          onUpdateConfig={isPlayerHost ? onUpdateConfig : undefined}
          onAddFriend={
            !isFriendWithOpponent
              ? (opponentName) => {
                  if (!opponentId) return;
                  onAddFriendRequest(opponentName, opponentId);
                }
              : undefined
          }
          friends={friends}
          authUserId={authUser ? authUser.uid : null}
          onInviteFriend={onInviteFriend}
        />

        <MultiplayerChat gameCode={gameCode || ""} authUser={authUser} />
      </div>
    );
  }

  // Error view
  if (oneVOneGame.error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121213",
          color: "#ffffff",
          flexDirection: "column",
          gap: "16px",
          padding: "20px",
        }}
      >
        <div style={{ color: "#f06272", textAlign: "center" }}>
          Error: {oneVOneGame.error}
        </div>
        <button
          onClick={onBack}
          style={{
            padding: "12px 24px",
            borderRadius: 8,
            border: "none",
            background: "#6aaa64",
            color: "#ffffff",
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Home
        </button>
      </div>
    );
  }

  // Loading view while connecting or waiting for gameState
  if (isLoading || oneVOneGame.loading || (gameCode && !gameState)) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121213",
          color: "#ffffff",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {!authUser ? (
          <>Loading authentication...</>
        ) : gameCode && !gameState ? (
          <>Connecting to game...</>
        ) : isLoading ? (
          <>Loading word lists...</>
        ) : (
          <>Loading game...</>
        )}
      </div>
    );
  }

  if (!gameState) {
    return null;
  }

  const isSpeedrun = gameState.speedrun || false;
  const isPlayerHost = authUser && gameState.hostId === authUser.uid;
  const opponentId =
    authUser && gameState
      ? authUser.uid === gameState.hostId
        ? gameState.guestId
        : gameState.hostId
      : null;
  const isFriendWithOpponent =
    !!opponentId && Array.isArray(friends)
      ? friends.some((f) => f.id === opponentId)
      : false;

  const playersMap = gameState.players || null;
  const playerIds = playersMap ? Object.keys(playersMap) : [];
  const isMultiRoom = !!playersMap && playerIds.length > 2;

  // Total room lifetime (for expiry display)
  const createdAt = typeof gameState.createdAt === "number" ? gameState.createdAt : null;
  let expiryLabel = null;
  if (createdAt) {
    const ageMs = waitingNowMs - createdAt;
    const remainingMs = Math.max(0, MULTIPLAYER_WAITING_TIMEOUT_MS - ageMs);
    const totalSeconds = Math.floor(remainingMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    if (minutes > 0) {
      expiryLabel = `${minutes}m ${seconds.toString().padStart(2, "0")}s`;
    } else {
      expiryLabel = `${seconds}s`;
    }
  }

  // Show all solution words in header (similar to multi-board daily)
  const solutionList = Array.isArray(gameState.solutions) && gameState.solutions.length > 0
    ? gameState.solutions
    : gameState.solution
    ? [gameState.solution]
    : [];
  const solutionsText = solutionList.map((w) => w.toUpperCase()).join(" · ");
  const numBoardsForHeader = solutionList.length || 1;

  // Whose turn is it? Used to highlight the active board.
  const isMyTurn =
    !isSpeedrun &&
    gameState.status === "playing" &&
    gameState.currentTurn === (isPlayerHost ? "host" : "guest");

  const myGuesses = isPlayerHost
    ? gameState.hostGuesses || []
    : gameState.guestGuesses || [];
  const opponentGuesses = isPlayerHost
    ? gameState.guestGuesses || []
    : gameState.hostGuesses || [];

  const mySolved = gameState.solution && myGuesses.includes(gameState.solution);
  const opponentSolved = gameState.solution && opponentGuesses.includes(gameState.solution);

  // In multi-board 1v1, hide opponent guesses until the local player has
  // solved *all* boards. This applies only when there is more than one
  // solution/board.
  const isMultiBoard = solutionList.length > 1;
  const mySolvedAllBoards = isMultiBoard
    ? solutionList.every((sol) => myGuesses.includes(sol))
    : mySolved;
  const hideOpponentBoards = isMultiBoard && !mySolvedAllBoards;
  // When hiding, we still want to show colors but not letters.
  const hideOpponentLetters = hideOpponentBoards;

  // Rematch flags for current player vs opponent
  const myRematch = isPlayerHost ? gameState.hostRematch : gameState.guestRematch;
  const opponentRematch = isPlayerHost ? gameState.guestRematch : gameState.hostRematch;

  const myGuessCount = myGuesses.length;
  const opponentGuessCount = opponentGuesses.length;

  const currentTurnLabel = isSpeedrun || isMultiRoom
    ? isMultiRoom
      ? "Multiplayer: everyone guessing"
      : "Speedrun: both players guessing"
    : gameState.currentTurn === (isPlayerHost ? "host" : "guest")
    ? "Your turn"
    : "Opponent's turn";

  const renderSpeedrunTime = (isMine) => {
    const timeMs = isMine
      ? isPlayerHost
        ? gameState.hostTimeMs || null
        : gameState.guestTimeMs || null
      : isPlayerHost
      ? gameState.guestTimeMs || null
      : gameState.hostTimeMs || null;

    if (timeMs !== null) return formatElapsedLib(timeMs);

    const startTime = isMine
      ? isPlayerHost
        ? gameState.hostStartTime || gameState.startedAt
        : gameState.guestStartTime || gameState.startedAt
      : isPlayerHost
      ? gameState.guestStartTime || gameState.startedAt
      : gameState.hostStartTime || gameState.startedAt;

    if (startTime) return formatElapsedLib(oneVOneNowMs - startTime);
    return "0:00";
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#121213",
          color: "#ffffff",
        }}
      >
        <SiteHeader onOpenFeedback={onOpenFeedback} />

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            // Reserve keyboard height while playing; once the game is finished,
            // shrink bottom padding so comments and end-of-game controls sit
            // closer to the bottom of the viewport.
            paddingBottom:
              (gameState.status === "finished" ? 16 : KEYBOARD_HEIGHT) + 16,
          }}
        >
          <GameHeader
            mode={mode}
            numBoards={numBoardsForHeader}
            speedrunEnabled={isSpeedrun}
          />

          {solutionsText && solutionsText.length > 0 && (
            <div
              style={{
                padding: "0 16px 8px",
                fontSize: 12,
                color: "#d7dadc",
                textTransform: "uppercase",
                fontWeight: "normal",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {solutionsText}
            </div>
          )}

          <div
            style={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              maxWidth: "1200px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            {expiryLabel && (
              <div
                style={{
                  fontSize: 11,
                  color: "#9ca3af",
                  textAlign: "center",
                  marginBottom: 4,
                }}
              >
                Room expires in {expiryLabel}.
              </div>
            )}
            {/* Status bar: boards, guesses, timer */}
            <div
              style={{
                marginBottom: 4,
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #3a3a3c",
                background: "#18181a",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              {/* Left: boards count */}
              <div
                style={{
                  fontSize: 12,
                  color: "#d7dadc",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                }}
              >
                Boards:{" "}
                <span style={{ fontWeight: "bold" }}>{numBoardsForHeader}</span>
              </div>

              {/* Center: big timer for speedrun, your guesses for standard */}
              <div style={{ flex: 1, textAlign: "center" }}>
                {isSpeedrun ? (
                  <div
                    style={{
                      fontSize: 22,
                      fontWeight: "bold",
                      letterSpacing: 1,
                      color: "#ffffff",
                    }}
                  >
                    {renderSpeedrunTime(true)}
                  </div>
                ) : (
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#ffffff",
                    }}
                  >
                    Your guesses: {myGuesses.length}/{maxTurns}
                  </div>
                )}
              </div>

              {/* Right: guesses descriptor */}
              <div
                style={{
                  fontSize: 12,
                  color: "#d7dadc",
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  textAlign: "right",
                }}
              >
                Guesses:{" "}
                <span style={{ fontWeight: "bold" }}>
                  {isSpeedrun ? "Unlimited" : maxTurns}
                </span>
              </div>
            </div>

            {/* Scores and turn indicator */}
            <div
              style={{
                textAlign: "center",
                fontSize: 14,
                color: "#d7dadc",
                marginBottom: "8px",
              }}
            >
              {gameState.status === "finished" ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "24px",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>
                      {isSpeedrun ? "Your Time" : "Your Guesses"}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      {isSpeedrun ? renderSpeedrunTime(true) : myGuessCount}
                    </div>
                  </div>
                  <div style={{ fontSize: 20, color: "#818384" }}>vs</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>
                      {isSpeedrun ? "Opponent's Time" : "Opponent's Guesses"}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      {isSpeedrun ? renderSpeedrunTime(false) : opponentGuessCount}
                    </div>
                  </div>
                </div>
              ) : isSpeedrun ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "24px",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 12, color: "#818384" }}>Your Time</div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#ffffff",
                        }}
                      >
                        {renderSpeedrunTime(true)}
                      </div>
                    </div>
                    <div style={{ fontSize: 20, color: "#818384" }}>vs</div>
                    <div>
                      <div style={{ fontSize: 12, color: "#818384" }}>
                        Opponent's Time
                      </div>
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#ffffff",
                        }}
                      >
                        {renderSpeedrunTime(false)}
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#818384",
                      marginTop: "8px",
                      textAlign: "center",
                    }}
                  >
                    {currentTurnLabel}
                  </div>
                </>
              ) : (
                currentTurnLabel
              )}
            </div>

            {/* Rematch status text */}
            {gameState.status === "finished" && (
              <div
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: "#c9b458",
                  marginBottom: "4px",
                  minHeight: 18,
                }}
              >
                {myRematch && !opponentRematch && "Waiting for opponent to accept rematch..."}
                {!myRematch && opponentRematch && "Opponent wants a rematch"}
                {myRematch && opponentRematch && "Starting rematch..."}
              </div>
            )}

            {/* Add Friend Button */}
            {gameState && authUser && !isFriendWithOpponent && (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "12px",
                }}
              >
                <button
                  onClick={() => {
                    if (friendRequestSent) return;
                    const opponentName =
                      authUser?.uid === gameState.hostId
                        ? gameState.guestName
                        : gameState.hostName;
                    const opponentId =
                      authUser?.uid === gameState.hostId
                        ? gameState.guestId
                        : gameState.hostId;
                    if (opponentName && opponentId) {
                      onAddFriendRequest(opponentName, opponentId);
                    }
                  }}
                  disabled={friendRequestSent}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "1px solid #3a3a3c",
                    background: "transparent",
                    color: "#ffffff",
                    fontSize: "12px",
                    fontWeight: "bold",
                    cursor: friendRequestSent ? "not-allowed" : "pointer",
                    letterSpacing: "0.5px",
                    transition: "all 0.2s ease",
                    opacity: friendRequestSent ? 0.6 : 1,
                  }}
                >
                  {friendRequestSent
                    ? "Friend request sent"
                    : `Add ${
                        gameState.hostId === authUser?.uid
                          ? gameState.guestName
                          : gameState.hostName
                      } as Friend`}
                </button>
              </div>
            )}

            {/* Boards and opponent visibility */}
            {isMultiRoom ? (
              <>
                {/* Your boards only */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                    width: "100%",
                  }}
                >
                  {boards.map((board, index) => (
                    <div key={index} style={{ width: "100%" }}>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#818384",
                          marginBottom: "8px",
                          textAlign: "center",
                        }}
                      >
                        Your Board {boards.length > 1 ? `#${index + 1}` : ""}
                      </div>
                      <GameBoard
                        board={board}
                        index={index}
                        numBoards={boards.length}
                        maxTurns={maxTurns}
                        isUnlimited={isSpeedrun}
                        currentGuess={currentGuess}
                        invalidCurrentGuess={invalidCurrentGuess}
                        revealId={revealId}
                        isSelected={selectedBoardIndex === index}
                        onToggleSelect={() =>
                          setSelectedBoardIndex((prev) => (prev === index ? null : index))
                        }
                        boardRef={(el) => {
                          boardRefs.current[index] = el;
                        }}
                        speedrunEnabled={isSpeedrun}
                        isCurrentTurn={true}
                      />
                    </div>
                  ))}
                </div>

                {/* Summaries for other players */}
                {playersMap && playerIds.length > 1 && (
                  <div
                    style={{
                      marginTop: 16,
                      padding: "12px 12px 8px",
                      borderRadius: 8,
                      border: "1px solid #3a3a3c",
                      background: "#18181a",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 13,
                        color: "#d7dadc",
                        marginBottom: 8,
                        textAlign: "left",
                        fontWeight: "bold",
                      }}
                    >
                      Other players (guesses · greens · yellows)
                    </div>
                    <div
                      style={{
                        maxHeight: 220,
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                      }}
                    >
                      {playerIds
                        .filter((pid) => pid !== (authUser ? authUser.uid : ""))
                        .map((pid) => {
                          const p = playersMap[pid];
                          if (!p) return null;
                          const guesses = p.guesses || [];

                          // Aggregate green/yellow counts across all boards.
                          let totalGreens = 0;
                          let totalYellows = 0;
                          guesses.forEach((word) => {
                            solutionList.forEach((sol) => {
                              const colors = scoreGuess(word, sol);
                              colors.forEach((c) => {
                                if (c === "green") totalGreens += 1;
                                else if (c === "yellow") totalYellows += 1;
                              });
                            });
                          });

                          return (
                            <div
                              key={pid}
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "6px 8px",
                                borderRadius: 6,
                                background: "#202124",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                }}
                              >
                                <div
                                  style={{
                                    color: "#ffffff",
                                    fontSize: 13,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {p.name || "Player"}
                                </div>
                                <div
                                  style={{
                                    color: "#818384",
                                    fontSize: 11,
                                  }}
                                >
                                  {guesses.length} guess{guesses.length === 1 ? "" : "es"}
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  gap: 10,
                                  fontSize: 11,
                                  color: "#d7dadc",
                                }}
                              >
                                <span>
                                  G: <strong>{totalGreens}</strong>
                                </span>
                                <span>
                                  Y: <strong>{totalYellows}</strong>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  width: "100%",
                }}
              >
                {boards.map((board, index) => {
                  const solutionForBoard = board.solution || gameState.solution;
                  
                  // Build opponent colors for this board from opponent guesses.
                  // Once the opponent has solved THIS board (guessed this
                  // solution), we stop showing additional guesses on that
                  // board. This mirrors how we treat the local player's
                  // own boards so progress per board is frozen at solve.
                  const firstOpponentSolveIndex = opponentGuesses.indexOf(solutionForBoard);
                  const opponentLimit =
                    firstOpponentSolveIndex === -1
                      ? opponentGuesses.length
                      : firstOpponentSolveIndex + 1;

                  const opponentColors = opponentGuesses.slice(0, opponentLimit).map((word) => {
                    const colorStrings = scoreGuess(word, solutionForBoard);
                    return colorStrings.map((c) =>
                      c === "green" ? 2 : c === "yellow" ? 1 : 0
                    );
                  });

                  return (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        gap: "24px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        width: "100%",
                      }}
                    >
                      {/* Player Board for this word (left) */}
                      <div style={{ flex: "0 0 auto", width: "auto" }}>
                        <div
                          style={{
                            fontSize: 14,
                            color: "#818384",
                            marginBottom: "8px",
                            textAlign: "center",
                          }}
                        >
                          Your Board {boards.length > 1 ? `#${index + 1}` : ""}
                        </div>
                        <GameBoard
                          board={board}
                          index={index}
                          numBoards={boards.length}
                          maxTurns={maxTurns}
                          isUnlimited={isSpeedrun}
                          currentGuess={currentGuess}
                          invalidCurrentGuess={invalidCurrentGuess}
                          revealId={revealId}
                          isSelected={selectedBoardIndex === index}
                          onToggleSelect={() =>
                            setSelectedBoardIndex((prev) => (prev === index ? null : index))
                          }
                          boardRef={(el) => {
                            boardRefs.current[index] = el;
                          }}
                          speedrunEnabled={isSpeedrun}
                          isCurrentTurn={isMyTurn}
                        />
                      </div>

                      {/* Opponent Board for this word (right) */}
                      <div style={{ flex: "0 0 auto", width: "auto" }}>
                        <div
                          style={{
                            fontSize: 14,
                            color: "#818384",
                            marginBottom: "8px",
                            textAlign: "center",
                          }}
                        >
                          Opponent's Board {boards.length > 1 ? `#${index + 1}` : ""}
                        </div>
                        <OpponentBoardView
                          opponentColors={opponentColors}
                          isActive={!isSpeedrun && !isMyTurn && gameState.status === "playing"}
                          opponentGuesses={opponentGuesses}
                          solution={solutionForBoard}
                          maxTurns={maxTurns}
                          playerSolved={board.isSolved}
                          hideLetters={hideOpponentLetters}
                          boardNumber={index + 1}
                          isSpeedrun={isSpeedrun}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </main>

        {/* Rematch & change-mode buttons when game is finished */}
        {gameState.status === "finished" && (
          <div
            style={{
              position: "fixed",
              bottom: KEYBOARD_HEIGHT + 20,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 1100,
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                onClick={onRematch}
                style={{
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "none",
                  background: "#6aaa64",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: "bold",
                  cursor: "pointer",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                }}
              >
                Rematch
              </button>

              {isPlayerHost && onChangeMode && (
                <button
                  onClick={onChangeMode}
                  style={{
                    padding: "12px 18px",
                    borderRadius: 10,
                    border: "1px solid #3a3a3c",
                    background: "#18181a",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: "bold",
                    cursor: "pointer",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  }}
                >
                  Change mode
                </button>
              )}
            </div>
          </div>
        )}

        <MultiplayerChat gameCode={gameCode || ""} authUser={authUser} />
      </div>
    </>
  );
}
