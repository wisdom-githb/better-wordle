import React, { useState, Suspense, lazy } from "react";
import GameHeader from "./GameHeader";
import OneVOneWaitingRoom from "./OneVOneWaitingRoom";
import OpponentBoardView from "./OpponentBoardView";
import GameBoard from "./GameBoard";
import SiteHeader from "../SiteHeader";

const AuthModal = lazy(() => import("../AuthModal"));
import { KEYBOARD_HEIGHT, formatElapsed as formatElapsedLib, scoreGuess } from "../../lib/wordle";
import { FLIP_MS } from "../../lib/gameConstants";

/**
 * Presentation component for all 1v1-specific game views.
 * Handles: waiting room, error/loading states, dual boards, scores, and rematch button.
 */
export default function OneVOneGameView({
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
  initialNumBoards,
  onChangeMode,
  friends,
  onCancelChallenge,
  onInviteFriend,
  onUpdateRoomName,
  onCloseRoom,
}) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const gameState = oneVOneGame.gameState;
  const playersMap = gameState && gameState.players && typeof gameState.players === "object" ? gameState.players : null;
  const playerCount = playersMap ? Object.keys(playersMap).length : (() => {
    if (!gameState) return 0;
    let count = 0;
    if (gameState.hostId) count += 1;
    if (gameState.guestId) count += 1;
    return count;
  })();

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

  // If the user is not signed in, show a dedicated login-required screen for 1v1.
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
              Sign in to play 1v1 games
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
              A Better Wordle account is required to host or join 1v1 games.
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
          <h2 style={{ fontSize: 22, fontWeight: "bold", marginBottom: 16 }}>1v1 Challenge</h2>
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

    const maxPlayers = Number.isFinite(gameState.maxPlayers) ? gameState.maxPlayers : undefined;
    const roomName = gameState.roomName || (gameState.hostName ? `${gameState.hostName}'s room` : 'Room');
    const waitingBoards = Number.isFinite(gameState.numBoards)
      ? gameState.numBoards
      : Array.isArray(gameState.solutions) && gameState.solutions.length > 0
      ? gameState.solutions.length
      : initialNumBoards || 1;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121213", color: "#ffffff" }}>
        <SiteHeader onOpenFeedback={onOpenFeedback} />
        <GameHeader
          mode={mode}
          numBoards={waitingBoards}
          speedrunEnabled={false}
        />
        <OneVOneWaitingRoom
          gameCode={gameCode || ""}
          gameState={gameState}
          isHost={isPlayerHost}
          currentUserId={authUser?.uid || null}
          maxPlayers={maxPlayers}
          roomName={roomName}
          onReady={onReady}
          onStartGame={onStartGame}
          friendRequestSent={friendRequestSent}
          onShareCode={onShareCode}
          onCancelChallenge={isPlayerHost ? onCancelChallenge : undefined}
          onCloseRoom={isPlayerHost ? onCloseRoom : undefined}
          onAddFriend={
            !isFriendWithOpponent
              ? (opponentName) => {
                  if (!opponentId) return;
                  onAddFriendRequest(opponentName, opponentId);
                }
              : undefined
          }
          friends={friends}
          onInviteFriend={onInviteFriend}
          onUpdateRoomName={onUpdateRoomName}
        />
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
    authUser && gameState && playerCount === 2
      ? authUser.uid === gameState.hostId
        ? gameState.guestId
        : gameState.hostId
      : null;
  const isFriendWithOpponent =
    !!opponentId && Array.isArray(friends)
      ? friends.some((f) => f.id === opponentId)
      : false;

  // Show all solution words in header (similar to multi-board daily)
  const solutionList = Array.isArray(gameState.solutions) && gameState.solutions.length > 0
    ? gameState.solutions
    : gameState.solution
    ? [gameState.solution]
    : [];
  const solutionsText = solutionList.map((w) => w.toUpperCase()).join(" · ");
  const numBoardsForHeader = solutionList.length || 1;

  // 1v1 is no longer turn-based; all players can guess concurrently.
  const useTwoPlayerLayout = false;

  const isMyTurn = true;

  const myGuesses = (() => {
    if (playersMap && authUser) {
      const me = playersMap[authUser.uid];
      if (me && Array.isArray(me.guesses)) return me.guesses;
    }
    return isPlayerHost ? gameState.hostGuesses || [] : gameState.guestGuesses || [];
  })();

  const opponentGuesses = (() => {
    if (playersMap && authUser && playerCount === 2) {
      const others = Object.values(playersMap).filter((p) => p.id !== authUser.uid);
      if (others[0] && Array.isArray(others[0].guesses)) return others[0].guesses;
    }
    return isPlayerHost ? gameState.guestGuesses || [] : gameState.hostGuesses || [];
  })();

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

  const currentTurnLabel = isSpeedrun
    ? playerCount > 1
      ? "Everyone is guessing"
      : "Speedrun mode"
    : playerCount > 1
    ? "Everyone is guessing"
    : "Standard mode";

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

            {/* Boards: for all player counts, render your boards and show an opponent summary. */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                width: "100%",
              }}
            >
              {/* Render your boards (same layout for 1v1 and multi-player) */}
              {boards.map((board, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                  }}
                >
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
                      isCurrentTurn={false}
                    />
                  </div>
                </div>
              ))}

              {/* Summary of other players' progress (including 1v1) */}
              {playersMap && authUser && (
                <div
                  style={{
                    marginTop: "8px",
                    padding: "12px",
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
                      fontWeight: "bold",
                    }}
                  >
                    Other players
                  </div>
                  {Object.values(playersMap)
                    .filter((p) => p.id !== authUser.uid)
                    .map((p) => {
                      const guesses = Array.isArray(p.guesses) ? p.guesses : [];
                      const totalGuesses = guesses.length;
                      const perBoardStats = solutionList.map((solution) => {
                        let greens = 0;
                        let yellows = 0;
                        guesses.forEach((word) => {
                          const colors = scoreGuess(word, solution);
                          colors.forEach((c) => {
                            if (c === "green") greens += 1;
                            else if (c === "yellow") yellows += 1;
                          });
                        });
                        return { greens, yellows };
                      });
                      let timeLabel = null;
                      if (isSpeedrun && typeof p.timeMs === "number") {
                        timeLabel = formatElapsedLib(p.timeMs);
                      }
                      return (
                        <div
                          key={p.id}
                          style={{
                            padding: "6px 0",
                            fontSize: 12,
                            color: "#d7dadc",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <span style={{ fontWeight: "bold" }}>{p.name}</span>
                            <span>
                              {totalGuesses} guess{totalGuesses === 1 ? "" : "es"}
                              {timeLabel ? ` · ${timeLabel}` : ""}
                            </span>
                          </div>
                          {perBoardStats.map((stat, idx) => (
                            <div
                              key={idx}
                              style={{
                                marginTop: 2,
                                marginLeft: 4,
                                fontSize: 11,
                                color: "#818384",
                              }}
                            >
                              Board #{idx + 1}: {stat.greens} green
                              {stat.greens === 1 ? "" : "s"}
                              {" · "}
                              {stat.yellows} yellow
                              {stat.yellows === 1 ? "" : "s"}
                            </div>
                          ))}
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
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
      </div>
    </>
  );
}
