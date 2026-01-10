import React from "react";
import GameHeader from "./GameHeader";
import OneVOneWaitingRoom from "./OneVOneWaitingRoom";
import OpponentBoardView from "./OpponentBoardView";
import GameBoard from "./GameBoard";
import SiteHeader from "../SiteHeader";
import { KEYBOARD_HEIGHT, formatElapsed as formatElapsedLib, scoreGuess } from "../../lib/wordle";
import { calculateNonSpeedrunScore } from "../../lib/gameUtils";
import { FLIP_MS } from "../../lib/gameConstants";

/**
 * Presentation component for all 1v1-specific game views.
 * Handles: waiting room, error/loading states, dual boards, scores, and rematch button.
 */
export default function OneVOneGameView({
  mode,
  gameCode,
  authUser,
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
}) {
  const gameState = oneVOneGame.gameState;

  // Waiting room view
  if (gameState && gameState.status === "waiting") {
    const isPlayerHost = authUser && gameState.hostId === authUser.uid;

    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#121213", color: "#ffffff" }}>
        <SiteHeader onOpenFeedback={onOpenFeedback} />
        <GameHeader
          mode={mode}
          numBoards={initialNumBoards || 1}
          speedrunEnabled={false}
        />
        <OneVOneWaitingRoom
          gameCode={gameCode || ""}
          gameState={gameState}
          isHost={isPlayerHost}
          onReady={onReady}
          onStartGame={onStartGame}
          friendRequestSent={friendRequestSent}
          onShareCode={onShareCode}
          onAddFriend={(opponentName) => {
            const opponentId = isPlayerHost ? gameState.guestId : gameState.hostId;
            onAddFriendRequest(opponentName, opponentId);
          }}
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
          Go Home
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

  const myScoreValue = (() => {
    if (isSpeedrun) {
      const myTimeMs = isPlayerHost
        ? gameState.hostTimeMs || null
        : gameState.guestTimeMs || null;
      return myTimeMs !== null ? formatElapsedLib(myTimeMs) : "N/A";
    }
    const mockBoard = {
      guesses: myGuesses.map((word) => ({ word, colors: [] })),
      isSolved: mySolved,
    };
    return calculateNonSpeedrunScore([mockBoard], myGuesses.length, maxTurns, 1);
  })();

  const opponentScoreValue = (() => {
    if (isSpeedrun) {
      const opponentTimeMs = isPlayerHost
        ? gameState.guestTimeMs || null
        : gameState.hostTimeMs || null;
      return opponentTimeMs !== null ? formatElapsedLib(opponentTimeMs) : "N/A";
    }
    const mockBoard = {
      guesses: opponentGuesses.map((word) => ({ word, colors: [] })),
      isSolved: opponentSolved,
    };
    return calculateNonSpeedrunScore([mockBoard], opponentGuesses.length, maxTurns, 1);
  })();

  const currentTurnLabel = isSpeedrun
    ? "Speedrun: both players guessing"
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
      {/* Wordle-style 2-sided flip styles (shared with single-player mode) */}
      <style>{`
        .mw-tile {
          flex-shrink: 0;
          perspective: 900px;
        }

        .mw-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          will-change: transform;
        }

        @keyframes mwFlipCard {
          0%   { transform: rotateX(0deg); }
          100% { transform: rotateX(180deg); }
        }

        .mw-flip {
          animation: mwFlipCard ${FLIP_MS}ms ease-in-out both;
          animation-fill-mode: both;
        }

        .mw-face {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
          border-radius: 4px;
          text-transform: uppercase;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .mw-front { transform: rotateX(0deg); }
        .mw-back  { transform: rotateX(180deg); }
      `}</style>

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
            paddingBottom: KEYBOARD_HEIGHT + 16,
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
                      {isSpeedrun ? "Your Time" : "Your Score"}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      {myScoreValue}
                    </div>
                  </div>
                  <div style={{ fontSize: 20, color: "#818384" }}>vs</div>
                  <div>
                    <div style={{ fontSize: 12, color: "#818384" }}>
                      {isSpeedrun ? "Opponent's Time" : "Opponent's Score"}
                    </div>
                    <div
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#ffffff",
                      }}
                    >
                      {opponentScoreValue}
                    </div>
                  </div>
                </div>
              ) : isSpeedrun ? (
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
                  <div
                    style={{
                      fontSize: 12,
                      color: "#818384",
                      marginTop: "8px",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    {currentTurnLabel}
                  </div>
                </div>
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
            {gameState && authUser && (
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

            {/* Boards: for each word, show opponent + your board side by side */}
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
                    {/* Opponent Board for this word */}
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
                      />
                    </div>

                    {/* Player Board for this word */}
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
                        isUnlimited={false}
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
                        speedrunEnabled={false}
                        isCurrentTurn={isMyTurn}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Rematch button when game is finished */}
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
          </div>
        )}
      </div>
    </>
  );
}
