import React from 'react';
import {
  describe,
  it,
  expect,
  vi,
  beforeEach,
  afterEach,
} from 'vitest';
import { render, screen, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FLIP_COMPLETE_MS } from './lib/gameConstants';

// --- React Router mock with controllable query string ---
let currentQuery = '?mode=daily&speedrun=false&boards=1';

vi.mock('react-router-dom', () => ({
  useSearchParams: () => [new URLSearchParams(currentQuery)],
  useNavigate: () => vi.fn(),
}));

// --- Auth / misc hooks ---
vi.mock('./hooks/useAuth', () => ({
  useAuth: vi.fn(() => ({
    user: null,
    sendFriendRequest: vi.fn(),
    isVerifiedUser: false,
    friends: [],
    cancelSentChallenge: vi.fn(),
  })),
}));

// --- Timed message hook with shared mocks ---
const setMessageMock = vi.fn();
const setTimedMessageMock = vi.fn();
const clearMessageTimerMock = vi.fn();

vi.mock('./hooks/useTimedMessage', () => ({
  useTimedMessage: vi.fn(() => ({
    message: '',
    setMessage: setMessageMock,
    setTimedMessage: setTimedMessageMock,
    clearMessageTimer: clearMessageTimerMock,
  })),
}));

// --- Share + keyboard hooks ---
vi.mock('./hooks/useShare', () => ({
  useShare: vi.fn(() => ({
    handleShare: vi.fn(),
    handleShareCode: vi.fn(),
  })),
}));

vi.mock('./hooks/useKeyboard', () => ({
  useKeyboard: vi.fn(), // no-op
}));

// 1v1 + leaderboard are stubbed out
vi.mock('./hooks/useOneVOneGame', () => ({
  useOneVOneGame: vi.fn(() => ({
    gameState: null,
    createGame: vi.fn(),
    joinGame: vi.fn(),
    startGame: vi.fn(),
    submitGuess: vi.fn(),
    switchTurn: vi.fn(),
    setWinner: vi.fn(),
    requestRematch: vi.fn(),
    setFriendRequestStatus: vi.fn(),
    setReady: vi.fn(),
    resetGame: vi.fn(),
    leaveGame: vi.fn(),
  })),
}));

vi.mock('./hooks/useLeaderboard', () => ({
  submitSpeedrunScore: vi.fn(),
}));

// Mock word list loader used by 1v1 flows so tests do not hit real data
vi.mock('./lib/wordLists', () => ({
  loadWordLists: vi.fn(async () => ({
    ANSWER_WORDS: ['apple', 'other'],
    ALLOWED_GUESSES: ['APPLE', 'OTHER'],
  })),
}));

// --- Game utils / persistence / daily words ---
export const calculateNonSpeedrunScoreMock = vi.fn(() => 999);
export const calculateSpeedrunScoreMock = vi.fn(() => 123);

vi.mock('./lib/gameUtils', () => ({
  calculateNonSpeedrunScore: (...args) => calculateNonSpeedrunScoreMock(...args),
  calculateSpeedrunScore: (...args) => calculateSpeedrunScoreMock(...args),
  generateShareText: vi.fn(() => 'share-text'),
  isMobileDevice: vi.fn(() => false),
}));

export const saveJSONMock = vi.fn();
export const loadJSONMock = vi.fn();
export const makeSolvedKeyMock = vi.fn(() => 'mw:solved:key');
export const marathonMetaKeyMock = vi.fn((speedrun) =>
  `mw:meta:marathon:${speedrun ? 'speedrun' : 'standard'}`,
);

vi.mock('./lib/persist', () => ({
  loadJSON: (...args) => loadJSONMock(...args),
  saveJSON: (...args) => saveJSONMock(...args),
  removeKey: vi.fn(),
  clearAllMultiWordle: vi.fn(),
  makeDailyKey: vi.fn(() => 'mw:daily:key'),
  makeMarathonKey: vi.fn(() => 'mw:marathon:key'),
  marathonMetaKey: (...args) => marathonMetaKeyMock(...args),
  makeSolvedKey: (...args) => makeSolvedKeyMock(...args),
}));

vi.mock('./lib/dailyWords', () => ({
  selectDailyWords: vi.fn(),
  getCurrentDateString: vi.fn(() => '2024-01-01'),
  SeededRandom: class {
    constructor() {
      this.x = 0;
    }
    next() {
      this.x += 0.1;
      return this.x % 1;
    }
  },
}));

// --- useSinglePlayerGame mock with per-test implementation ---
// We invoke the per-test implementation inside a useEffect so that any
// state updates (setBoards, setIsLoading, etc.) happen after the initial
// render and only once, avoiding infinite re-render loops.
const useSinglePlayerGameMock = vi.fn();
vi.mock('./hooks/useSinglePlayerGame', () => ({
  useSinglePlayerGame: (args) => {
    React.useEffect(() => {
      useSinglePlayerGameMock(args);
    }, []);
  },
}));

// --- Lightweight component stubs ---
vi.mock('./components/game/GameHeader', () => ({
  default: () => <div data-testid="game-header" />, // eslint-disable-line react/display-name
}));
vi.mock('./components/game/GameToast', () => ({
  default: ({ message }) => (
    <div data-testid="toast">{message}</div>
  ), // eslint-disable-line react/display-name
}));
let lastGamePopupProps = null;
vi.mock('./components/game/GamePopup', () => ({
  __esModule: true,
  default: (props) => {
    lastGamePopupProps = props;
    return <div data-testid="popup">POPUP</div>;
  }, // eslint-disable-line react/display-name
}));
vi.mock('./components/game/OutOfGuessesPopup', () => ({
  default: () => <div data-testid="out-of-guesses">OUT</div>, // eslint-disable-line react/display-name
}));
vi.mock('./components/game/BoardSelector', () => ({
  default: () => null, // eslint-disable-line react/display-name
}));
vi.mock('./components/FeedbackModal', () => ({
  default: () => null, // eslint-disable-line react/display-name
}));
vi.mock('./components/SiteHeader', () => ({
  default: () => <header data-testid="site-header" />, // eslint-disable-line react/display-name
}));
vi.mock('./components/game/OneVOneGameView', () => ({
  default: () => <div data-testid="onevone-view" />, // eslint-disable-line react/display-name
}));

// GameBoard: expose currentGuess to tests
vi.mock('./components/game/GameBoard', () => ({
  default: ({ currentGuess }) => (
    <div data-testid="current-guess">{currentGuess}</div>
  ), // eslint-disable-line react/display-name
}));

import { useOneVOneGame } from './hooks/useOneVOneGame';
import { useAuth } from './hooks/useAuth';
import { useKeyboard } from './hooks/useKeyboard';
import Game from './Game';

beforeEach(() => {
  vi.clearAllMocks();
  lastGamePopupProps = null;
  currentQuery = '?mode=daily&speedrun=false&boards=1';
  loadJSONMock.mockImplementation((_, fallback) => fallback);
  window.scrollTo = vi.fn();
});

afterEach(() => {
  vi.useRealTimers();
});

// Helper: configure a simple single-board non-speedrun game
const configureSingleBoardNonSpeedrun = () => {
  useSinglePlayerGameMock.mockImplementation(
    ({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
      setIsUnlimited,
      stageStartRef,
      stageEndRef,
      committedRef,
      committedStageMsRef,
      setRevealId,
      setIsFlipping,
    }) => {
      setBoards([
        {
          solution: 'APPLE',
          guesses: [],
          isSolved: false,
          isDead: false,
          lastRevealId: null,
        },
      ]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsUnlimited(false);
      stageStartRef.current = Date.now();
      stageEndRef.current = null;
      committedRef.current = false;
      committedStageMsRef.current = 0;
      setRevealId(0);
      setIsFlipping(false);
      setIsLoading(false);
    },
  );
};

// Helper: configure a single-board daily speedrun game
const configureSingleBoardDailySpeedrun = (stageStartMs = 0) => {
  useSinglePlayerGameMock.mockImplementation(
    ({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
      setIsUnlimited,
      stageStartRef,
      stageEndRef,
      committedRef,
      committedStageMsRef,
      setRevealId,
      setIsFlipping,
    }) => {
      setBoards([
        {
          solution: 'APPLE',
          guesses: [],
          isSolved: false,
          isDead: false,
          lastRevealId: null,
        },
      ]);
      setAllowedSet(new Set(['APPLE']));
      setMaxTurns(999);
      setIsUnlimited(true);
      stageStartRef.current = stageStartMs;
      stageEndRef.current = null;
      committedRef.current = false;
      committedStageMsRef.current = 0;
      setRevealId(0);
      setIsFlipping(false);
      setIsLoading(false);
    },
  );
};

// Helper: configure a single-board marathon speedrun game
const configureMarathonSpeedrunStage = (stageStartMs = 0) => {
  useSinglePlayerGameMock.mockImplementation(
    ({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
      setIsUnlimited,
      stageStartRef,
      stageEndRef,
      committedRef,
      committedStageMsRef,
      setRevealId,
      setIsFlipping,
      numBoards,
    }) => {
      // numBoards is determined by marathonLevels[marathonIndex]
      setBoards([
        {
          solution: 'APPLE',
          guesses: [],
          isSolved: false,
          isDead: false,
          lastRevealId: null,
        },
      ]);
      setAllowedSet(new Set(['APPLE']));
      setMaxTurns(999);
      setIsUnlimited(true);
      stageStartRef.current = stageStartMs;
      stageEndRef.current = null;
      committedRef.current = false;
      committedStageMsRef.current = 0;
      setRevealId(0);
      setIsFlipping(false);
      setIsLoading(false);
    },
  );
};

// --- Tests ---

describe('Game – param guards', () => {
  it('defaults to daily standard 1-board when mode param is missing', () => {
    currentQuery = '';
    useSinglePlayerGameMock.mockImplementation(() => {});

    render(<Game marathonLevels={[1, 2, 3, 4]} />);

    expect(useSinglePlayerGameMock).toHaveBeenCalled();
    const args = useSinglePlayerGameMock.mock.calls[0][0];
    expect(args.mode).toBe('daily');
    expect(args.speedrunEnabled).toBe(false);
    expect(args.numBoards).toBe(1);
  });

  it('falls back to daily standard 1-board when mode/boards are invalid', () => {
    currentQuery = '?mode=not-a-real-mode&speedrun=true&boards=xyz';
    useSinglePlayerGameMock.mockImplementation(() => {});

    render(<Game marathonLevels={[1, 2, 3, 4]} />);

    const args = useSinglePlayerGameMock.mock.calls[0][0];
    expect(args.mode).toBe('daily');
    expect(args.speedrunEnabled).toBe(false);
    expect(args.numBoards).toBe(1);
  });
});

describe('Game – non-speedrun end-of-game', () => {
  it('when all boards solved before maxTurns saves solved state, computes score and shows GamePopup after flip', async () => {
    vi.useFakeTimers();
    configureSingleBoardNonSpeedrun();

    render(<Game marathonLevels={[1]} />);

    const aKey = screen.getByRole('button', { name: 'A' });
    const pKey = screen.getByRole('button', { name: 'P' });
    const lKey = screen.getByRole('button', { name: 'L' });
    const eKey = screen.getByRole('button', { name: 'E' });
    const enterKey = screen.getByRole('button', { name: 'Enter' });

    // Solve in one guess: APPLE
    fireEvent.click(aKey);
    fireEvent.click(pKey);
    fireEvent.click(pKey);
    fireEvent.click(lKey);
    fireEvent.click(eKey);

    fireEvent.click(enterKey);

    // Solved branch should save solved state and compute score
    expect(saveJSONMock).toHaveBeenCalled();
    const [solvedKey, solvedState] = saveJSONMock.mock.calls.find(
      ([k]) => k === 'mw:solved:key',
    );
    expect(solvedKey).toBe('mw:solved:key');
    expect(solvedState.allSolved).toBe(true);
    expect(calculateNonSpeedrunScoreMock).toHaveBeenCalled();

    // Popup should appear only after FLIP_COMPLETE_MS
    await act(async () => {
      vi.advanceTimersByTime(FLIP_COMPLETE_MS - 50);
    });
    expect(screen.queryByTestId('popup')).toBeNull();

    await act(async () => {
      vi.advanceTimersByTime(100);
    });
    expect(screen.getByTestId('popup')).toBeInTheDocument();

    // Popup props include the mocked score
    expect(lastGamePopupProps.score).toBe(999);
    expect(lastGamePopupProps.allSolved).toBe(true);
  });

  it('when finished but not all solved shows OutOfGuesses popup (non-speedrun)', async () => {
    vi.useFakeTimers();

    // Board already has 1 wrong guess; next wrong guess reaches maxTurns and dies
    useSinglePlayerGameMock.mockImplementation(
      ({
        setBoards,
        setAllowedSet,
        setIsLoading,
        setMaxTurns,
        setIsUnlimited,
        stageStartRef,
        stageEndRef,
        committedRef,
        committedStageMsRef,
        setRevealId,
        setIsFlipping,
      }) => {
        setBoards([
          {
            solution: 'APPLE',
            guesses: [
              { word: 'OTHER', colors: ['grey', 'grey', 'grey', 'grey', 'grey'] },
            ],
            isSolved: false,
            isDead: false,
            lastRevealId: null,
          },
        ]);
        setAllowedSet(new Set(['OTHER']));
        setMaxTurns(2); // second wrong guess will exhaust turns
        setIsUnlimited(false);
        stageStartRef.current = Date.now();
        stageEndRef.current = null;
        committedRef.current = false;
        committedStageMsRef.current = 0;
        setRevealId(0);
        setIsFlipping(false);
        setIsLoading(false);
      },
    );

    render(<Game marathonLevels={[1]} />);

    const oKey = screen.getByRole('button', { name: 'O' });
    const tKey = screen.getByRole('button', { name: 'T' });
    const hKey = screen.getByRole('button', { name: 'H' });
    const eKey = screen.getByRole('button', { name: 'E' });
    const rKey = screen.getByRole('button', { name: 'R' });
    const enterKey = screen.getByRole('button', { name: 'Enter' });

    // Second wrong guess: OTHER again
    fireEvent.click(oKey);
    fireEvent.click(tKey);
    fireEvent.click(hKey);
    fireEvent.click(eKey);
    fireEvent.click(rKey);

    fireEvent.click(enterKey);

    // Out-of-guesses branch should not save solved state
    const solvedCall = saveJSONMock.mock.calls.find(
      ([k]) => k === 'mw:solved:key',
    );
    expect(solvedCall).toBeUndefined();

    // After flip completes, OutOfGuesses popup should appear, but not the main GamePopup
    await act(async () => {
      vi.advanceTimersByTime(FLIP_COMPLETE_MS + 50);
    });

    expect(screen.getByTestId('out-of-guesses')).toBeInTheDocument();
    // GamePopup is only shown when user exits/continues; not yet
    // Our stub may be rendered later; at this point we expect none
    expect(screen.queryByTestId('popup')).toBeNull();
  });
});


describe('Game – speedrun timers', () => {
  it('daily speedrun: freezeStageTimer uses Date.now difference and GamePopup receives stageElapsedMs/popupTotalMs', async () => {
    vi.useFakeTimers();

    // Daily speedrun query params
    currentQuery = '?mode=daily&speedrun=true&boards=1';
    vi.setSystemTime(0);

    configureSingleBoardDailySpeedrun(0); // stageStartRef.current = 0

    render(<Game marathonLevels={[1]} />);

    // Advance time by 10s before solving
    vi.setSystemTime(10_000);

    const aKey = screen.getByRole('button', { name: 'A' });
    const pKey = screen.getByRole('button', { name: 'P' });
    const lKey = screen.getByRole('button', { name: 'L' });
    const eKey = screen.getByRole('button', { name: 'E' });
    const enterKey = screen.getByRole('button', { name: 'Enter' });

    fireEvent.click(aKey);
    fireEvent.click(pKey);
    fireEvent.click(pKey);
    fireEvent.click(lKey);
    fireEvent.click(eKey);

    fireEvent.click(enterKey);

    // After flip completes, popup should show with stageElapsedMs ~ 10_000
    await act(async () => {
      vi.advanceTimersByTime(FLIP_COMPLETE_MS + 50);
    });

    expect(lastGamePopupProps).not.toBeNull();
    expect(lastGamePopupProps.stageElapsedMs).toBe(10_000);
    expect(lastGamePopupProps.popupTotalMs).toBe(10_000);

    // Speedrun score uses popupTotalMs (or stageElapsedMs if 0)
    expect(calculateSpeedrunScoreMock).toHaveBeenCalledWith(10_000, 1);
  });

  it('marathon speedrun: popupTotalMs uses cumulative time from previous stages', async () => {
    vi.useFakeTimers();

    // Marathon speedrun query params
    currentQuery = '?mode=marathon&speedrun=true';

    const metaKey = marathonMetaKeyMock(true);
    // Existing marathon meta: one previous stage with 5s
    loadJSONMock.mockImplementation((key, fallback) => {
      if (key === metaKey) {
        return {
          index: 1, // current stage index
          cumulativeMs: 5_000,
          stageTimes: [{ boards: 1, ms: 5_000 }],
        };
      }
      return fallback;
    });

    vi.setSystemTime(0);
    configureMarathonSpeedrunStage(0); // current stage start

    render(<Game marathonLevels={[1, 2]} />);

    // Advance time by 7s before solving this stage
    vi.setSystemTime(7_000);

    const aKey = screen.getByRole('button', { name: 'A' });
    const pKey = screen.getByRole('button', { name: 'P' });
    const lKey = screen.getByRole('button', { name: 'L' });
    const eKey = screen.getByRole('button', { name: 'E' });
    const enterKey = screen.getByRole('button', { name: 'Enter' });

    fireEvent.click(aKey);
    fireEvent.click(pKey);
    fireEvent.click(pKey);
    fireEvent.click(lKey);
    fireEvent.click(eKey);

    fireEvent.click(enterKey);

    // After flip completes, popup should show
    await act(async () => {
      vi.advanceTimersByTime(FLIP_COMPLETE_MS + 50);
    });

    expect(lastGamePopupProps).not.toBeNull();

    // Stage elapsed = 7s, cumulative popup total = 5s (previous) + 7s (current) = 12s
    expect(lastGamePopupProps.stageElapsedMs).toBe(7_000);
    expect(lastGamePopupProps.popupTotalMs).toBe(12_000);

    // commitStageIfNeeded should have saved updated marathon meta
    const metaSaveCall = saveJSONMock.mock.calls.find(
      ([k]) => k === metaKey,
    );
    expect(metaSaveCall).toBeDefined();
    const [, savedMeta] = metaSaveCall;
    expect(savedMeta.cumulativeMs).toBe(12_000);
    expect(savedMeta.stageTimes).toEqual(
      expect.arrayContaining([
        { boards: 1, ms: 5_000 },
        { boards: 2, ms: 7_000 },
      ]),
    );
  });
});

describe('Game – 1v1 isInputBlocked', () => {
  it('blocks input when it is not the players turn in non-speedrun 1v1', async () => {
    const mockUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    // Auth: logged-in, verified host user
    useAuth.mockReturnValue({
      user: mockUser,
      sendFriendRequest: vi.fn(),
      // Mark user as *not* verified so 1v1 init effect bails out early,
      // avoiding async state updates that require explicit act(...).
      isVerifiedUser: false,
      friends: [],
      cancelSentChallenge: vi.fn(),
    });

    // 1v1 game state: non-speedrun, guest turn
    useOneVOneGame.mockReturnValue({
      gameState: {
        hostId: 'host-1',
        guestId: 'guest-2',
        status: 'playing',
        speedrun: false,
        currentTurn: 'guest',
        solution: 'APPLE',
        hostGuesses: [],
        guestGuesses: [],
      },
      createGame: vi.fn(),
      joinGame: vi.fn(),
      startGame: vi.fn(),
      submitGuess: vi.fn(),
      switchTurn: vi.fn(),
      setWinner: vi.fn(),
      requestRematch: vi.fn(),
      setFriendRequestStatus: vi.fn(),
      setReady: vi.fn(),
      resetGame: vi.fn(),
      leaveGame: vi.fn(),
    });

    // Keep single-player hook minimal – just mark loading false
    useSinglePlayerGameMock.mockImplementation(({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
    }) => {
      setBoards([]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsLoading(false);
    });

    currentQuery = '?mode=1v1&speedrun=false&code=111111&boards=1&host=true';

    await act(async () => {
      render(<Game marathonLevels={[1]} />);
    });

    expect(useKeyboard).toHaveBeenCalled();
    const keyboardArgs = useKeyboard.mock.calls[useKeyboard.mock.calls.length - 1][0];
    expect(keyboardArgs.disabled).toBe(true);
  });

  it('allows input when it is the players turn in non-speedrun 1v1', async () => {
    const mockUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    useAuth.mockReturnValue({
      user: mockUser,
      sendFriendRequest: vi.fn(),
      // Mark user as *not* verified so 1v1 init effect bails out early,
      // avoiding async state updates that require explicit act(...).
      isVerifiedUser: false,
      friends: [],
      cancelSentChallenge: vi.fn(),
    });

    useOneVOneGame.mockReturnValue({
      gameState: {
        hostId: 'host-1',
        guestId: 'guest-2',
        status: 'playing',
        speedrun: false,
        currentTurn: 'host',
        solution: 'APPLE',
        hostGuesses: [],
        guestGuesses: [],
      },
      createGame: vi.fn(),
      joinGame: vi.fn(),
      startGame: vi.fn(),
      submitGuess: vi.fn(),
      switchTurn: vi.fn(),
      setWinner: vi.fn(),
      requestRematch: vi.fn(),
      setFriendRequestStatus: vi.fn(),
      setReady: vi.fn(),
      resetGame: vi.fn(),
      leaveGame: vi.fn(),
    });

    useSinglePlayerGameMock.mockImplementation(({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
    }) => {
      setBoards([]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsLoading(false);
    });

    currentQuery = '?mode=1v1&speedrun=false&code=222222&boards=1&host=true';

    await act(async () => {
      render(<Game marathonLevels={[1]} />);
    });

    expect(useKeyboard).toHaveBeenCalled();
    const keyboardArgs = useKeyboard.mock.calls[useKeyboard.mock.calls.length - 1][0];
    expect(keyboardArgs.disabled).toBe(false);
  });
});

describe('Game – 1v1 winner calculation', () => {
  it('uses guesses on the primary board to decide winner in non-speedrun 1v1', async () => {
    const mockUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    useAuth.mockReturnValue({
      user: mockUser,
      sendFriendRequest: vi.fn(),
      // Mark user as *not* verified so 1v1 init effect bails out early,
      // avoiding async state updates that require explicit act(...).
      isVerifiedUser: false,
      friends: [],
      cancelSentChallenge: vi.fn(),
    });

    const setWinnerMock = vi.fn().mockResolvedValue(undefined);

    useOneVOneGame.mockReturnValue({
      gameState: {
        hostId: 'host-1',
        guestId: 'guest-1',
        status: 'playing',
        speedrun: false,
        solution: 'APPLE',
        hostGuesses: ['APPLE'],
        guestGuesses: ['OTHER', 'APPLE'],
      },
      createGame: vi.fn(),
      joinGame: vi.fn(),
      startGame: vi.fn(),
      submitGuess: vi.fn(),
      switchTurn: vi.fn(),
      setWinner: setWinnerMock,
      requestRematch: vi.fn(),
      setFriendRequestStatus: vi.fn(),
      setReady: vi.fn(),
      resetGame: vi.fn(),
      leaveGame: vi.fn(),
    });

    useSinglePlayerGameMock.mockImplementation(({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
    }) => {
      setBoards([]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsLoading(false);
    });

    currentQuery = '?mode=1v1&speedrun=false&code=333333&boards=1&host=true';

    await act(async () => {
      render(<Game marathonLevels={[1]} />);
    });

    expect(setWinnerMock).toHaveBeenCalledWith('333333', 'host');
  });

  it('sets winner to null when both solve primary in the same number of guesses', async () => {
    const mockUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    useAuth.mockReturnValue({
      user: mockUser,
      sendFriendRequest: vi.fn(),
      // Mark user as *not* verified so 1v1 init effect bails out early,
      // avoiding async state updates that require explicit act(...).
      isVerifiedUser: false,
      friends: [],
      cancelSentChallenge: vi.fn(),
    });

    const setWinnerMock = vi.fn().mockResolvedValue(undefined);

    useOneVOneGame.mockReturnValue({
      gameState: {
        hostId: 'host-1',
        guestId: 'guest-1',
        status: 'playing',
        speedrun: false,
        solution: 'APPLE',
        hostGuesses: ['OTHER', 'APPLE'],
        guestGuesses: ['OTHER', 'APPLE'],
      },
      createGame: vi.fn(),
      joinGame: vi.fn(),
      startGame: vi.fn(),
      submitGuess: vi.fn(),
      switchTurn: vi.fn(),
      setWinner: setWinnerMock,
      requestRematch: vi.fn(),
      setFriendRequestStatus: vi.fn(),
      setReady: vi.fn(),
      resetGame: vi.fn(),
      leaveGame: vi.fn(),
    });

    useSinglePlayerGameMock.mockImplementation(({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
    }) => {
      setBoards([]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsLoading(false);
    });

    currentQuery = '?mode=1v1&speedrun=false&code=444444&boards=1&host=true';

    await act(async () => {
      render(<Game marathonLevels={[1]} />);
    });

    expect(setWinnerMock).toHaveBeenCalledWith('444444', null);
  });

  it('uses time to decide winner in speedrun 1v1', async () => {
    const mockUser = {
      uid: 'host-1',
      displayName: 'Host Player',
      email: 'host@example.com',
    };

    useAuth.mockReturnValue({
      user: mockUser,
      sendFriendRequest: vi.fn(),
      // Mark user as *not* verified so 1v1 init effect bails out early,
      // avoiding async state updates that require explicit act(...).
      isVerifiedUser: false,
      friends: [],
      cancelSentChallenge: vi.fn(),
    });

    const setWinnerMock = vi.fn().mockResolvedValue(undefined);

    useOneVOneGame.mockReturnValue({
      gameState: {
        hostId: 'host-1',
        guestId: 'guest-1',
        status: 'playing',
        speedrun: true,
        solution: 'APPLE',
        hostGuesses: ['APPLE'],
        guestGuesses: ['APPLE'],
        hostTimeMs: 10_000,
        guestTimeMs: 15_000,
      },
      createGame: vi.fn(),
      joinGame: vi.fn(),
      startGame: vi.fn(),
      submitGuess: vi.fn(),
      switchTurn: vi.fn(),
      setWinner: setWinnerMock,
      requestRematch: vi.fn(),
      setFriendRequestStatus: vi.fn(),
      setReady: vi.fn(),
      resetGame: vi.fn(),
      leaveGame: vi.fn(),
    });

    useSinglePlayerGameMock.mockImplementation(({
      setBoards,
      setAllowedSet,
      setIsLoading,
      setMaxTurns,
    }) => {
      setBoards([]);
      setAllowedSet(new Set(['APPLE', 'OTHER']));
      setMaxTurns(6);
      setIsLoading(false);
    });

    currentQuery = '?mode=1v1&speedrun=true&code=555555&boards=1&host=true';

    await act(async () => {
      render(<Game marathonLevels={[1]} />);
    });

    expect(setWinnerMock).toHaveBeenCalledWith('555555', 'host');
  });
});
