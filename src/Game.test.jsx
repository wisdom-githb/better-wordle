import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

// Keep Helmet from trying to touch the real document head.
vi.mock('react-helmet-async', () => ({
  Helmet: ({ children }) => <>{children}</>,
}));

let latestSinglePlayerProps = null;
let latestOneVOneProps = null;

vi.mock('./components/game/GameSinglePlayer', () => ({
  __esModule: true,
  default: (props) => {
    latestSinglePlayerProps = props;
    return <div data-testid="single-player" />;
  },
}));

vi.mock('./components/game/GameOneVOne', () => ({
  __esModule: true,
  default: (props) => {
    latestOneVOneProps = props;
    return <div data-testid="onevone" />;
  },
}));

import Game from './Game';

const MARATHON_LEVELS = [1, 2, 3, 4];

function renderAt(path) {
  latestSinglePlayerProps = null;
  latestOneVOneProps = null;

  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route
          path="/game"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
        <Route
          path="/game/:mode"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
        <Route
          path="/game/:mode/:boards"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
        <Route
          path="/game/:mode/:boards/:variant"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
        <Route
          path="/game/1v1/:code"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
        <Route
          path="/game/1v1/:code/:variant"
          element={
            <React.Suspense fallback={null}>
              <Game marathonLevels={MARATHON_LEVELS} />
            </React.Suspense>
          }
        />
      </Routes>
    </MemoryRouter>,
  );
}

describe('Game – routing and param guards', () => {
  it('defaults to daily standard 1-board when no mode query/params are provided', async () => {
    renderAt('/game');

    const view = await screen.findByTestId('single-player');
    expect(view).toBeInTheDocument();
    expect(latestSinglePlayerProps).toMatchObject({
      mode: 'daily',
      speedrunEnabled: false,
      marathonLevels: MARATHON_LEVELS,
    });
    // With no boards param, GameSinglePlayer falls back internally to 1 board.
    expect(latestSinglePlayerProps.boardsParam).toBeNull();
  });

  it('falls back to daily standard 1-board when query mode/boards are invalid', async () => {
    renderAt('/game?mode=not-a-real-mode&speedrun=true&boards=xyz');

    const view = await screen.findByTestId('single-player');
    expect(view).toBeInTheDocument();
    expect(latestSinglePlayerProps).toMatchObject({
      mode: 'daily',
      speedrunEnabled: false,
    });
    expect(latestSinglePlayerProps.boardsParam).toBeNull();
  });

  it('uses path params for mode/boards when present', async () => {
    renderAt('/game/marathon/3');

    const view = await screen.findByTestId('single-player');
    expect(view).toBeInTheDocument();
    expect(latestSinglePlayerProps).toMatchObject({
      mode: 'marathon',
      boardsParam: '3',
      speedrunEnabled: false,
    });
  });

  it('enables speedrun when variant path segment is "speedrun"', async () => {
    renderAt('/game/daily/2/speedrun');

    const view = await screen.findByTestId('single-player');
    expect(view).toBeInTheDocument();
    expect(latestSinglePlayerProps).toMatchObject({
      mode: 'daily',
      boardsParam: '2',
      speedrunEnabled: true,
    });
  });

  it('renders the 1v1 game shell for 1v1 routes', async () => {
    renderAt('/game/1v1/123456');

    const view = await screen.findByTestId('onevone');
    expect(view).toBeInTheDocument();
    expect(latestSinglePlayerProps).toBeNull();
  });
});
