import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WORD_LENGTH, buildLetterMapFromGuesses, getTurnsUsed, formatElapsed } from "../../lib/wordle";
import { FLIP_COMPLETE_MS } from "../../lib/gameConstants";
import { useAuth } from "../../hooks/useAuth";
import { useMultiplayerGame } from "../../hooks/useMultiplayerGame";
import { useMultiplayerController } from "../../hooks/useMultiplayerController";
import { useTimedMessage } from "../../hooks/useTimedMessage";
import { useShare } from "../../hooks/useShare";
import { useKeyboard } from "../../hooks/useKeyboard";
import { useBoardLayout } from "../../hooks/useBoardLayout";
import GameToast from "./GameToast";
import MultiplayerRoomConfigModal from "./MultiplayerRoomConfigModal";
import MultiplayerGameView from "./MultiplayerGameView";
import GamePopup from "./GamePopup";
import BoardSelector from "./BoardSelector";
import FeedbackModal from "../FeedbackModal";
import Keyboard from "../Keyboard";
import "../../Game.css";
import { MULTIPLAYER_WAITING_TIMEOUT_MS } from "../../lib/multiplayerConfig";

const MULTIPLAYER_BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

export default function GameMultiplayer() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { code: codeParam } = useParams();

  const { message, setMessage, setTimedMessage, clearMessageTimer } = useTimedMessage("");
  const {
    user: authUser,
    sendFriendRequest,
    isVerifiedUser,
    friends,
    cancelSentChallenge,
    sendChallenge,
    loading: authLoading,
  } = useAuth();

  const rawMode = searchParams.get("mode");
  const isHost = searchParams.get("host") === "true";
  const speedrunEnabled = (() => {
    if (rawMode === "multiplayer") {
      return searchParams.get("speedrun") === "true";
    }
    return false;
  })();

  const boardsParam = searchParams.get("boards");
  const maxPlayersParam = searchParams.get("maxPlayers");
  const isPublicParam = searchParams.get("isPublic");

  const gameCode = codeParam || searchParams.get("code") || null;

  // Only start listening to the multiplayer game in Firebase once we know the user
  // auth state. This avoids a confusing "permission_denied" error when a
  // friend opens a shared multiplayer link without being signed in.
  const effectiveGameCode = authUser ? gameCode : null;

  const multiplayerGame = useMultiplayerGame(effectiveGameCode, isHost, speedrunEnabled);

  const [boards, setBoards] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const currentGuessRef = useRef("");
  const [maxTurns, setMaxTurns] = useState(6);
  const [allowedSet, setAllowedSet] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [showOutOfGuesses, setShowOutOfGuesses] = useState(false);
  const endingGameRef = useRef(false);
  const popupClosedRef = useRef(false);
  const shouldShowPopupAfterFlipRef = useRef(false);

  const [isUnlimited, setIsUnlimited] = useState(false);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(null);
  const [revealId, setRevealId] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const boardRefs = useRef({});
  const [showBoardSelector, setShowBoardSelector] = useState(false);

  const [multiplayerNowMs, setMultiplayerNowMs] = useState(Date.now());
  const [waitingNowMs, setWaitingNowMs] = useState(Date.now());
  const waitingExpiredRef = useRef(false);

  // High-frequency timer for speedrun elapsed time.
  useEffect(() => {
    if (!multiplayerGame.gameState?.speedrun) return;
    const id = setInterval(() => {
      setMultiplayerNowMs(Date.now());
    }, 100);
    return () => clearInterval(id);
  }, [multiplayerGame.gameState?.speedrun]);

  // Low-frequency timer for room lifetime / expiration countdown (waiting + playing).
  useEffect(() => {
    const createdAt = multiplayerGame.gameState?.createdAt;
    if (!createdAt) {
      waitingExpiredRef.current = false;
      return;
    }
    const id = setInterval(() => {
      setWaitingNowMs(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, [multiplayerGame.gameState?.createdAt]);

  // Keep an always-fresh ref of the current guess so that even callbacks
  // captured by mocks or older renders (e.g. in tests) see the latest value.
  useEffect(() => {
    currentGuessRef.current = currentGuess;
  }, [currentGuess]);

  const numBoards = useMemo(
    () => (boards.length > 0 ? boards.length : 1),
    [boards]
  );

  const gameState = multiplayerGame.gameState;

  // Boards configuration for lobby display and invites.
  const initialBoardsConfig = useMemo(() => {
    // Prefer persisted config from Firebase when available.
    const configBoards = gameState && Number.isFinite(gameState.configBoards)
      ? gameState.configBoards
      : null;
    if (configBoards != null) return configBoards;

    if (boardsParam != null) {
      const parsed = parseInt(boardsParam, 10);
      if (Number.isFinite(parsed)) {
        return Math.max(1, Math.min(32, parsed));
      }
    }

    return numBoards || 1;
  }, [gameState, boardsParam, numBoards]);

  // Auto-close rooms that exceed the lifetime window (waiting + playing).
  useEffect(() => {
    const gs = multiplayerGame.gameState;
    if (!gs || !gameCode || !gs.createdAt) return;
    if (waitingExpiredRef.current) return;

    const ageMs = waitingNowMs - gs.createdAt;
    if (ageMs >= MULTIPLAYER_WAITING_TIMEOUT_MS) {
      waitingExpiredRef.current = true;
      (async () => {
        try {
          await multiplayerGame.expireGame(gameCode);
        } finally {
          navigate("/");
        }
      })();
    }
  }, [waitingNowMs, multiplayerGame.gameState?.createdAt, gameCode, navigate, multiplayerGame.expireGame]);

  const {
    friendRequestSent,
    hasPlayerSolvedAllMultiplayerBoards,
    isMultiplayerConfigModalOpen,
    multiplayerConfigBoardsDraft,
    multiplayerConfigSpeedrunDraft,
    setIsMultiplayerConfigModalOpen,
    setMultiplayerConfigBoardsDraft,
    setMultiplayerConfigSpeedrunDraft,
    handleMultiplayerReady,
    handleMultiplayerStart,
    handleCancelHostedChallenge,
    handleAddFriendRequest,
    openMultiplayerConfigFromEnd,
    applyMultiplayerConfig,
    handleRematchStart,
  } = useMultiplayerController({
    isMultiplayer: true,
    isHost,
    gameCode,
    speedrunEnabled,
    boardsParam,
    numBoards,
    maxPlayersParam,
    isPublicParam,
    authUser,
    isVerifiedUser,
    multiplayerGame,
    boards,
    setBoards,
    maxTurns,
    setMaxTurns,
    allowedSet,
    setAllowedSet,
    setIsUnlimited,
    setIsLoading,
    setShowPopup,
    setCurrentGuess,
    setIsFlipping,
    revealId,
    isFlipping,
    navigate,
    setTimedMessage,
    endingGameRef,
    popupClosedRef,
    shouldShowPopupAfterFlipRef,
    sendFriendRequest,
    cancelSentChallenge,
    maxMultiplayerBoards: MULTIPLAYER_BOARD_OPTIONS.length,
  });

  const { perBoardLetterMaps, focusedLetterMap, gridCols, gridRows } = useBoardLayout(
    boards,
    selectedBoardIndex,
    numBoards
  );

  const invalidCurrentGuess =
    currentGuess.length === WORD_LENGTH &&
    allowedSet.size > 0 &&
    !allowedSet.has(currentGuess);

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const allSolved = useMemo(
    () => boards.length > 0 && boards.every((b) => b.isSolved),
    [boards]
  );

  const isInputBlocked = useCallback(() => {
    if (allSolved) return true;
    if (hasPlayerSolvedAllMultiplayerBoards) return true;
    if (showPopup || showOutOfGuesses) return true;

    if (typeof document !== "undefined") {
      const active = document.activeElement;
      if (
        active &&
        active instanceof HTMLElement &&
        (active.tagName === "INPUT" ||
          active.tagName === "TEXTAREA" ||
          active.isContentEditable)
      ) {
        return true;
      }
    }

    if (multiplayerGame.gameState) {
      const gameState = multiplayerGame.gameState;
      if (gameState.status !== "playing") return true;
    }

    return false;
  }, [
    allSolved,
    hasPlayerSolvedAllMultiplayerBoards,
    showPopup,
    showOutOfGuesses,
    multiplayerGame.gameState,
  ]);

  const addLetter = (letter) => {
    if (currentGuess.length >= WORD_LENGTH) return;
    setCurrentGuess((prev) => prev + letter);
    if (message) {
      setMessage("");
      clearMessageTimer();
    }
  };

  const removeLetter = () => {
    if (currentGuess.length === 0) return;
    setCurrentGuess((prev) => prev.slice(0, -1));
    if (message) {
      setMessage("");
      clearMessageTimer();
    }
  };

  const submitGuess = async () => {
    if (showPopup || showOutOfGuesses) return;

    const guess = currentGuessRef.current;

    // If the guess is not complete (fewer than WORD_LENGTH letters), treat
    // Enter as "clear" so the player can quickly start over.
    if (guess.length !== WORD_LENGTH) {
      if (guess.length > 0) {
        setCurrentGuess("");
      }
      return;
    }

    // For multiplayer, we still prevent obviously invalid words from being
    // submitted when we have a local dictionary. This keeps the shared
    // board state clean while the server remains authoritative. If the
    // dictionary has not yet loaded (empty set), fall back to allowing the
    // guess and let the server remain authoritative.
    if (allowedSet.size > 0 && !allowedSet.has(guess)) {
      setTimedMessage("Not in word list.", 5000);
      setCurrentGuess("");
      return;
    }

    if (multiplayerGame.gameState) {
      const gameState = multiplayerGame.gameState;
      const isSpeedrun = gameState.speedrun || false;

      const solutionArray =
        Array.isArray(gameState.solutions) && gameState.solutions.length > 0
          ? gameState.solutions
          : gameState.solution
          ? [gameState.solution]
          : [];
      if (solutionArray.length === 0) return;

      // Get current player's guesses from the players map
      const players = gameState.players || {};
      const myPlayer = authUser && players[authUser.uid];
      const myGuesses = (myPlayer && myPlayer.guesses) || [];
      const mySolvedAll = solutionArray.every((sol) => myGuesses.includes(sol));
      const myFinished = mySolvedAll || (!isSpeedrun && myGuesses.length >= maxTurns);

      if (myFinished) {
        setTimedMessage("You have already finished!", 2000);
        return;
      }

      const guessToSubmit = guess;
      setCurrentGuess("");
      setMessage("");
      clearMessageTimer();

      try {
        setRevealId((x) => x + 1);
        setIsFlipping(true);

        setTimeout(() => {
          setIsFlipping(false);
        }, FLIP_COMPLETE_MS);

        await multiplayerGame.submitGuess(gameCode, guessToSubmit, []);
      } catch (error) {
        // Reset flipping state on error
        setIsFlipping(false);
        setTimedMessage(error.message || "Failed to submit guess", 5000);
        // Restore the guess so user can retry
        setCurrentGuess(guessToSubmit);
      }
      return;
    }
  };

  useKeyboard({
    disabled: isInputBlocked(),
    onEnter: submitGuess,
    onBackspace: removeLetter,
    onLetter: addLetter,
  });

  const handleBack = useCallback(() => {
    if (gameCode) {
      // Best-effort cleanup so the player no longer appears in the room.
      multiplayerGame.leaveGame(gameCode);
    }
    navigate("/");
  }, [navigate, gameCode, multiplayerGame]);

  const handleVirtualKey = (key) => {
    if (isInputBlocked()) return;

    if (key === "ENTER") submitGuess();
    else if (key === "BACK") removeLetter();
    else addLetter(key);
  };

  const handleCancelHostedChallengeWithCleanup = useCallback(async () => {
    if (!gameCode) {
      navigate('/');
      return;
    }
    try {
      // Delete the hosted room and clear any pending challenge metadata.
      await multiplayerGame.leaveGame(gameCode);
      await cancelSentChallenge(gameCode);
    } catch (error) {
      setTimedMessage(error.message || 'Failed to cancel challenge', 5000);
    }
    navigate('/');
  }, [gameCode, navigate, multiplayerGame, cancelSentChallenge, setTimedMessage]);

  // As a final safety net, if this component unmounts while the player is still
  // associated with a room, attempt to leave that room so they are removed
  // from the waiting room / players list even when navigating away via
  // browser back or global navigation.
  useEffect(() => {
    return () => {
      if (gameCode) {
        multiplayerGame.leaveGame(gameCode);
      }
    };
  }, [gameCode, multiplayerGame.leaveGame]);

  const solutionsText = useMemo(
    () => boards.map((b) => b.solution).filter(Boolean).map((w) => w.toUpperCase()).join(" · "),
    [boards]
  );
  const turnsUsed = useMemo(() => getTurnsUsed(boards), [boards]);

  const statusText =
    speedrunEnabled
      ? ""
      : boards.length > 0 && !showPopup && !showOutOfGuesses
      ? `Guesses used: ${turnsUsed}/${maxTurns}${isUnlimited ? " (unlimited)" : ""}`
      : "";

  const marathonHasNext = false;
  const marathonLevels = [];
  const marathonIndex = 0;
  const stageElapsedMs = 0;
  const popupTotalMs = 0;
  const isMarathonSpeedrun = false;

  const gridColsMultiplayer = gridCols;
  const gridRowsMultiplayer = gridRows;

  const shareText = useMemo(() => {
    if (!boards || boards.length === 0) {
      return "Play Better Wordle!";
    }
    return "Play Better Wordle Multiplayer Mode!";
  }, [boards]);

  const { handleShare, handleShareCode } = useShare(shareText, setTimedMessage);

  const handleUpdateConfig = useCallback(
    async (partialConfig) => {
      if (!gameCode) return;
      try {
        await multiplayerGame.updateConfig(gameCode, partialConfig);
        setTimedMessage("Room settings updated.", 3000);
      } catch (error) {
        setTimedMessage(error.message || "Failed to update room settings", 5000);
      }
    },
    [gameCode, multiplayerGame, setTimedMessage]
  );

  const pageTitle = "Multiplayer Wordle-Style Battles – Game | Better Wordle";
  const pageDescription =
    "Play Better Wordle Multiplayer Mode, challenge friends with custom board counts and speedrun mode, and see who solves multi-board puzzles faster.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <GameToast message={message} />

      <MultiplayerRoomConfigModal
        isOpen={isMultiplayerConfigModalOpen}
        onRequestClose={() => setIsMultiplayerConfigModalOpen(false)}
        boardOptions={MULTIPLAYER_BOARD_OPTIONS}
        boardsDraft={multiplayerConfigBoardsDraft}
        onChangeBoardsDraft={(value) => setMultiplayerConfigBoardsDraft(value)}
        speedrunDraft={multiplayerConfigSpeedrunDraft}
        onChangeSpeedrunDraft={(value) => setMultiplayerConfigSpeedrunDraft(value)}
        onSave={applyMultiplayerConfig}
        isHost={gameState && authUser ? gameState.hostId === authUser.uid : false}
      />

      <MultiplayerGameView
        mode="multiplayer"
        gameCode={gameCode}
        authUser={authUser}
        authLoading={authLoading}
        multiplayerGame={multiplayerGame}
        isLoading={isLoading}
        initialNumBoards={initialBoardsConfig}
        maxTurns={maxTurns}
        currentGuess={currentGuess}
        invalidCurrentGuess={invalidCurrentGuess}
        revealId={revealId}
        boardRefs={boardRefs}
        boards={boards}
        selectedBoardIndex={selectedBoardIndex}
        setSelectedBoardIndex={setSelectedBoardIndex}
        friendRequestSent={friendRequestSent}
        onAddFriendRequest={handleAddFriendRequest}
        onShareCode={handleShareCode}
        onReady={handleMultiplayerReady}
        onStartGame={handleMultiplayerStart}
        onBack={handleBack}
        onOpenFeedback={() => setShowFeedbackModal(true)}
        onCancelChallenge={handleCancelHostedChallengeWithCleanup}
        onRematch={handleRematchStart}
        setShowFeedbackModal={setShowFeedbackModal}
        setTimedMessage={setTimedMessage}
        multiplayerNowMs={multiplayerNowMs}
        waitingNowMs={waitingNowMs}
        onChangeMode={openMultiplayerConfigFromEnd}
        friends={friends}
        onUpdateConfig={handleUpdateConfig}
        onInviteFriend={async (friend) => {
          if (!friend || !friend.id || !gameCode) return;
          try {
            const ok = await sendChallenge(
              friend.id,
              friend.name,
              gameCode,
              initialBoardsConfig,
              speedrunEnabled,
            );
            if (!ok) {
              setTimedMessage(
                "A challenge with this friend is already pending. Accept or dismiss it before sending another.",
                5000,
              );
              return;
            }
            setTimedMessage("Invite sent to friend.", 3000);
          } catch (error) {
            setTimedMessage(error.message || "Failed to invite friend", 5000);
          }
        }}
      />

      {showPopup && (
        <GamePopup
          allSolved={allSolved}
          boards={boards}
          speedrunEnabled={speedrunEnabled}
          stageElapsedMs={stageElapsedMs}
          popupTotalMs={popupTotalMs}
          formatElapsed={formatElapsed}
          solvedCount={solvedCount}
          mode="multiplayer"
          marathonHasNext={marathonHasNext}
          onShare={handleShare}
          onClose={() => {
            setShowPopup(false);
            popupClosedRef.current = true;
          }}
          onNextStage={() => {}}
          freezeStageTimer={() => 0}
          isMarathonSpeedrun={isMarathonSpeedrun}
          commitStageIfNeeded={() => {}}
          isMultiplayer={true}
          multiplayerGameState={multiplayerGame.gameState}
          winner={multiplayerGame.gameState ? multiplayerGame.gameState.winner : null}
          isPlayerHost={
            multiplayerGame.gameState && authUser
              ? multiplayerGame.gameState.hostId === authUser.uid
              : false
          }
          currentUserId={authUser ? authUser.uid : null}
          onAddFriend={handleAddFriendRequest}
          friendRequestSent={friendRequestSent}
          onRematch={handleRematchStart}
          onChangeMode={() => {
            setShowPopup(false);
            popupClosedRef.current = true;
            openMultiplayerConfigFromEnd();
          }}
        />
      )}

      <FeedbackModal
        isOpen={showFeedbackModal}
        onRequestClose={() => setShowFeedbackModal(false)}
      />

      {gameState && gameState.status === "playing" && (
        <BoardSelector
          numBoards={numBoards}
          showBoardSelector={showBoardSelector}
          setShowBoardSelector={setShowBoardSelector}
          boards={boards}
          selectedBoardIndex={selectedBoardIndex}
          setSelectedBoardIndex={setSelectedBoardIndex}
          boardRefs={boardRefs}
          isUnlimited={false}
          speedrunEnabled={speedrunEnabled}
          statusText={statusText}
        />
      )}

      {gameState &&
        gameState.status === "playing" &&
        !hasPlayerSolvedAllMultiplayerBoards && (
          <footer className="keyboardFooter">
            <Keyboard
              numBoards={numBoards}
              selectedBoardIndex={selectedBoardIndex}
              perBoardLetterMaps={perBoardLetterMaps}
              focusedLetterMap={focusedLetterMap}
              gridCols={gridColsMultiplayer}
              gridRows={gridRowsMultiplayer}
              onVirtualKey={handleVirtualKey}
            />
          </footer>
        )}
    </>
  );
}
