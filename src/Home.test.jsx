import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

vi.mock('./components/FeedbackModal', () => ({
  __esModule: true,
  default: ({ isOpen }) => (isOpen ? <div data-testid="feedback-modal" /> : null),
}));

vi.mock('./components/OneVOneModal', () => ({
  __esModule: true,
  default: ({ isOpen }) => (isOpen ? <div data-testid="onevone-modal" /> : null),
}));

vi.mock('./components/Modal', () => ({
  __esModule: true,
  default: ({ isOpen, children }) => (isOpen ? <div data-testid="generic-modal">{children}</div> : null),
}));

vi.mock('./components/SiteHeader', () => ({
  __esModule: true,
  default: ({ onOpenFeedback, onSignUpComplete }) => (
    <header>
      <button onClick={() => onOpenFeedback()}>Open Feedback</button>
      <button onClick={() => onSignUpComplete('user@example.com')}>Mock Sign Up Complete</button>
    </header>
  ),
}));

vi.mock('./lib/persist', () => ({
  loadJSON: vi.fn(() => null),
  saveJSON: vi.fn(),
  makeDailyKey: vi.fn((boards, speedrun) => `daily:${boards}:${speedrun}`),
  makeMarathonKey: vi.fn((speedrun) => `marathon:${speedrun}`),
  marathonMetaKey: vi.fn((speedrun) => `meta:${speedrun}`),
  makeSolvedKey: vi.fn((mode, boards, speedrun, index) => `${mode}:${boards}:${speedrun}:${index ?? 'na'}`),
  removeKey: vi.fn(),
}));

import {
  saveJSON,
  makeDailyKey,
  makeMarathonKey,
  marathonMetaKey,
  makeSolvedKey,
  removeKey,
} from './lib/persist';

import Home from './Home';

const renderWithRouter = (ui) =>
  render(
    <MemoryRouter
      initialEntries={['/']}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={ui} />
        {/* Match any /game path (e.g., /game/daily/3, /game/daily/3/speedrun) */}
        <Route path="/game/*" element={<div data-testid="game-route" />} />
      </Routes>
    </MemoryRouter>,
  );

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Home', () => {
  it('renders daily boards dropdown with 1–32 options and updates value', async () => {
    const setDailyBoards = vi.fn();

    await act(async () => {
      renderWithRouter(
        <Home dailyBoards={1} setDailyBoards={setDailyBoards} marathonLevels={[1, 2, 3, 4]} />,
      );
    });

    await screen.findByRole('heading', { name: /daily puzzles/i });

    const select = screen.getByLabelText(/simultaneous words/i);
    const options = Array.from(select.querySelectorAll('option'));
    expect(options).toHaveLength(32);
    expect(options[0]).toHaveTextContent('1');
    expect(options[31]).toHaveTextContent('32');

    fireEvent.change(select, { target: { value: '4' } });
    expect(setDailyBoards).toHaveBeenCalledWith(4);
  });

  it('navigates to correct game URLs for daily and saves boards count', async () => {
    const setDailyBoards = vi.fn();

    await act(async () => {
      renderWithRouter(
        <Home dailyBoards={3} setDailyBoards={setDailyBoards} marathonLevels={[1, 2, 3, 4]} />,
      );
    });

    await screen.findByRole('heading', { name: /daily puzzles/i });

    const playDailyBtn = screen.getByRole('button', { name: /play daily/i });
    const speedrunDailyBtn = screen.getByRole('button', { name: /speedrun daily/i });

    fireEvent.click(playDailyBtn);
    expect(saveJSON).toHaveBeenCalledWith('mw:dailyBoards', 3);

    fireEvent.click(speedrunDailyBtn);
    expect(saveJSON).toHaveBeenCalledWith('mw:dailyBoards', 3);

    // After navigating, a /game route (e.g., /game/daily/3 or /game/daily/3/speedrun)
    // should be rendered by React Router.
    const gameRoute = await screen.findByTestId('game-route');
    expect(gameRoute).toBeInTheDocument();
  });

  it('calls removeKey for the correct daily keys when resetting daily guesses', async () => {
    const setDailyBoards = vi.fn();

    await act(async () => {
      renderWithRouter(
        <Home dailyBoards={2} setDailyBoards={setDailyBoards} marathonLevels={[1, 2, 3, 4]} />,
      );
    });

    await screen.findByRole('heading', { name: /daily puzzles/i });

    const resetBtn = screen.getByRole('button', { name: /reset today['’]s daily guesses/i });
    fireEvent.click(resetBtn);

    expect(makeDailyKey).toHaveBeenCalledWith(2, false);
    expect(makeDailyKey).toHaveBeenCalledWith(2, true);
    expect(makeSolvedKey).toHaveBeenCalledWith('daily', 2, false);
    expect(makeSolvedKey).toHaveBeenCalledWith('daily', 2, true);
    expect(removeKey).toHaveBeenCalledTimes(4);
  });

  it('resets marathon keys and stage indices on reset marathon guesses', async () => {
    const setDailyBoards = vi.fn();

    await act(async () => {
      renderWithRouter(
        <Home dailyBoards={1} setDailyBoards={setDailyBoards} marathonLevels={[1, 2]} />,
      );
    });

    await screen.findByRole('heading', { name: /daily puzzles/i });

    const resetBtn = screen.getByRole('button', { name: /reset today['’]s marathon guesses/i });
    fireEvent.click(resetBtn);

    expect(makeMarathonKey).toHaveBeenCalledWith(false);
    expect(makeMarathonKey).toHaveBeenCalledWith(true);
    expect(marathonMetaKey).toHaveBeenCalledWith(false);
    expect(marathonMetaKey).toHaveBeenCalledWith(true);

    // Two boards * two speedrun modes = 4 solved keys
    expect(makeSolvedKey).toHaveBeenCalledWith('marathon', 1, false, 0);
    expect(makeSolvedKey).toHaveBeenCalledWith('marathon', 2, true, 1);
    expect(removeKey).toHaveBeenCalled();
  });

  it('opens verify email modal when SiteHeader sign-up completes', async () => {
    const setDailyBoards = vi.fn();

    await act(async () => {
      renderWithRouter(
        <Home dailyBoards={1} setDailyBoards={setDailyBoards} marathonLevels={[1, 2]} />,
      );
    });

    await screen.findByRole('heading', { name: /daily puzzles/i });

    fireEvent.click(screen.getByRole('button', { name: /mock sign up complete/i }));

    expect(screen.getByTestId('generic-modal')).toBeInTheDocument();
    expect(screen.getByText(/verify your email/i)).toBeInTheDocument();
    expect(screen.getByText('user@example.com')).toBeInTheDocument();
  });
});
