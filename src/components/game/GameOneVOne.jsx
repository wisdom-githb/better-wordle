import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { useSearchParams, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { WORD_LENGTH, buildLetterMapFromGuesses, getTurnsUsed, formatElapsed } from "../../lib/wordle";
import { FLIP_COMPLETE_MS } from "../../lib/gameConstants";
import { useAuth } from "../../hooks/useAuth";
import { useOneVOneGame } from "../../hooks/useOneVOneGame";
import { useOneVOneController } from "../../hooks/useOneVOneController";
import { useTimedMessage } from "../../hooks/useTimedMessage";
import { useShare } from "../../hooks/useShare";
import { useKeyboard } from "../../hooks/useKeyboard";
import GameToast from "./GameToast";
import OneVOneConfigModal from "./OneVOneConfigModal";
import OneVOneGameView from "./OneVOneGameView";
import GamePopup from "./GamePopup";
import BoardSelector from "./BoardSelector";
import FeedbackModal from "../FeedbackModal";
import Keyboard from "../Keyboard";
import "../../Game.css";

const ONE_V_ONE_BOARD_OPTIONS = Array.from({ length: 32 }, (_, i) => i + 1);

export default function GameOneVOne() {
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
    loading: authLoading,
  } = useAuth();

  const rawMode = searchParams.get("mode");
  const isHost = searchParams.get("host") === "true";
  const speedrunEnabled = (() => {
    if (rawMode === "1v1") {
      return searchParams.get("speedrun") === "true";
    }
    return false;
  })();

  const boardsParam = searchParams.get("boards");

  const gameCode = codeParam || searchParams.get("code") || null;

  // Only start listening to the 1v1 game in Firebase once we know the user
  // auth state. This avoids a confusing "permission_denied" error when a
  // friend opens a shared 1v1 link without being signed in.
  const effectiveGameCode = authUser ? gameCode : null;

  const oneVOneGame = useOneVOneGame(effectiveGameCode, isHost, speedrunEnabled);

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

  const [oneVOneNowMs, setOneVOneNowMs] = useState(Date.now());

  useEffect(() => {
    if (!oneVOneGame.gameState?.speedrun) return;
    const id = setInterval(() => {
      setOneVOneNowMs(Date.now());
    }, 100);
    return () => clearInterval(id);
  }, [oneVOneGame.gameState]);

  // Keep an always-fresh ref of the current guess so that even callbacks
  // captured by mocks or older renders (e.g. in tests) see the latest value.
  useEffect(() => {
    currentGuessRef.current = currentGuess;
  }, [currentGuess]);

  const numBoards = useMemo(
    () => (boards.length > 0 ? boards.length : 1),
    [boards]
  );

  const gameState = oneVOneGame.gameState;

  const {
    friendRequestSent,
    hasPlayerSolvedAllOneVOneBoards,
    isOneVOneConfigModalOpen,
    oneVOneConfigBoardsDraft,
    oneVOneConfigSpeedrunDraft,
    setIsOneVOneConfigModalOpen,
    setOneVOneConfigBoardsDraft,
    setOneVOneConfigSpeedrunDraft,
    handleOneVOneReady,
    handleOneVOneStart,
    handleCancelHostedChallenge,
    handleAddFriendRequest,
    openOneVOneConfigFromEnd,
    applyOneVOneConfig,
  } = useOneVOneController({
    isOneVOne: true,
    isHost,
    gameCode,
    speedrunEnabled,
    boardsParam,
    numBoards,
    authUser,
    isVerifiedUser,
    oneVOneGame,
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
    maxOneVOneBoards: ONE_V_ONE_BOARD_OPTIONS.length,
  });

  const perBoardLetterMaps = useMemo(
    () => boards.map((b) => buildLetterMapFromGuesses(b.guesses)),
    [boards]
  );

  const invalidCurrentGuess =
    currentGuess.length === WORD_LENGTH && !allowedSet.has(currentGuess);

  const focusedLetterMap = useMemo(() => {
    if (selectedBoardIndex == null) return null;
    return perBoardLetterMaps[selectedBoardIndex];
  }, [selectedBoardIndex, perBoardLetterMaps]);

  const solvedCount = useMemo(() => boards.filter((b) => b.isSolved).length, [boards]);

  const allSolved = useMemo(
    () => boards.length > 0 && boards.every((b) => b.isSolved),
    [boards]
  );

  const isInputBlocked = useCallback(() => {
    if (allSolved) return true;
    if (hasPlayerSolvedAllOneVOneBoards) return true;
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

    if (oneVOneGame.gameState) {
      const gameState = oneVOneGame.gameState;
      if (gameState.status !== "playing") return true;
      if (!gameState.speedrun) {
        const isPlayerHostLocal = authUser && gameState.hostId === authUser.uid;
        const isMyTurn =
          gameState.currentTurn === (isPlayerHostLocal ? "host" : "guest");
        if (!isMyTurn) return true;
      }
    }

    return false;
  }, [
    allSolved,
    hasPlayerSolvedAllOneVOneBoards,
    showPopup,
    showOutOfGuesses,
    oneVOneGame.gameState,
    authUser,
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

    // For 1v1 games, a full 5-letter guess should always go through the
    // submitGuess hook so that validation can happen on the backend.
    // We still surface a local "Not in word list" message when we have
    // a dictionary, but we do not return early here.
    if (!allowedSet.has(guess)) {
      setTimedMessage("Not in word list.", 5000);
      setCurrentGuess("");
    }

    if (oneVOneGame.gameState) {
      const gameState = oneVOneGame.gameState;
      const isPlayerHostLocal = authUser && gameState.hostId === authUser.uid;
      const isSpeedrun = gameState.speedrun || false;
      const isMyTurn =
        gameState.currentTurn === (isPlayerHostLocal ? "host" : "guest");

      if (!isSpeedrun && !isMyTurn) {
        setTimedMessage("Not your turn!", 3000);
        return;
      }

      const solutionArray =
        Array.isArray(gameState.solutions) && gameState.solutions.length > 0
          ? gameState.solutions
          : gameState.solution
          ? [gameState.solution]
          : [];
      if (solutionArray.length === 0) return;

      const myGuesses = isPlayerHostLocal
        ? gameState.hostGuesses || []
        : gameState.guestGuesses || [];
      const mySolvedAll = solutionArray.every((sol) => myGuesses.includes(sol));
      const myFinished = mySolvedAll || (!isSpeedrun && myGuesses.length >= maxTurns);

      if (myFinished) {
        if (!isSpeedrun) {
          try {
            await oneVOneGame.switchTurn(gameCode);
            setTimedMessage(
              "You have already finished! Switching turn...",
              2000
            );
          } catch (error) {
            setTimedMessage(error.message || "Failed to switch turn", 3000);
          }
        } else {
          setTimedMessage("You have already finished!", 2000);
        }
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

        await oneVOneGame.submitGuess(gameCode, guessToSubmit, []);
      } catch (error) {
        setTimedMessage(error.message || "Failed to submit guess", 5000);
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
    navigate("/");
  }, [navigate]);

  const handleVirtualKey = (key) => {
    if (isInputBlocked()) return;

    if (key === "ENTER") submitGuess();
    else if (key === "BACK") removeLetter();
    else addLetter(key);
  };

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

  const shareText = useMemo(() => {
    if (!boards || boards.length === 0) {
      return "Play Better Wordle!";
    }
    return "Play Better Wordle 1v1!";
  }, [boards]);

  const { handleShare, handleShareCode } = useShare(shareText, setTimedMessage);

  const pageTitle = "1v1 Wordle-Style Battles – Game | Better Wordle";
  const pageDescription =
    "Play 1v1 Wordle-style battles in Better Wordle, challenge friends with custom board counts and speedrun mode, and see who solves multi-board puzzles faster.";

  const gridCols1v1 = Math.ceil(Math.sqrt(Math.max(numBoards, 1)));
  const gridRows1v1 = Math.ceil(Math.max(numBoards, 1) / gridCols1v1);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Helmet>

      <GameToast message={message} />

      <OneVOneConfigModal
        isOpen={isOneVOneConfigModalOpen}
        onRequestClose={() => setIsOneVOneConfigModalOpen(false)}
        boardOptions={ONE_V_ONE_BOARD_OPTIONS}
        boardsDraft={oneVOneConfigBoardsDraft}
        onChangeBoardsDraft={(value) => setOneVOneConfigBoardsDraft(value)}
        speedrunDraft={oneVOneConfigSpeedrunDraft}
        onChangeSpeedrunDraft={(value) => setOneVOneConfigSpeedrunDraft(value)}
        onSave={applyOneVOneConfig}
      />

      <OneVOneGameView
        mode="1v1"
        gameCode={gameCode}
        authUser={authUser}
        authLoading={authLoading}
        oneVOneGame={oneVOneGame}
        isLoading={isLoading}
        initialNumBoards={numBoards}
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
        onReady={handleOneVOneReady}
        onStartGame={handleOneVOneStart}
        onBack={handleBack}
        onOpenFeedback={() => setShowFeedbackModal(true)}
        onCancelChallenge={handleCancelHostedChallenge}
        onRematch={async () => {
          if (!gameCode) return;
          try {
            await oneVOneGame.requestRematch(gameCode);
            setShowPopup(false);
            popupClosedRef.current = true;
          } catch (error) {
            setTimedMessage(error.message || "Failed to request rematch", 5000);
          }
        }}
        setShowFeedbackModal={setShowFeedbackModal}
        setTimedMessage={setTimedMessage}
        oneVOneNowMs={oneVOneNowMs}
        onChangeMode={openOneVOneConfigFromEnd}
        friends={friends}
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
          mode="1v1"
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
          isOneVOne={true}
          oneVOneGameState={oneVOneGame.gameState}
          winner={oneVOneGame.gameState ? oneVOneGame.gameState.winner : null}
          isPlayerHost={
            oneVOneGame.gameState && authUser
              ? oneVOneGame.gameState.hostId === authUser.uid
              : false
          }
          onRematch={async () => {
            if (!gameCode) return;
            try {
              await oneVOneGame.requestRematch(gameCode);
              setShowPopup(false);
              popupClosedRef.current = true;
            } catch (error) {
              setTimedMessage(error.message || "Failed to request rematch", 5000);
            }
          }}
          onChangeMode={() => {
            setShowPopup(false);
            popupClosedRef.current = true;
            openOneVOneConfigFromEnd();
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
        !hasPlayerSolvedAllOneVOneBoards && (
          <footer className="keyboardFooter">
            <Keyboard
              numBoards={numBoards}
              selectedBoardIndex={selectedBoardIndex}
              perBoardLetterMaps={perBoardLetterMaps}
              focusedLetterMap={focusedLetterMap}
              gridCols={gridCols1v1}
              gridRows={gridRows1v1}
              onVirtualKey={handleVirtualKey}
            />
          </footer>
        )}
    </>
  );
}
