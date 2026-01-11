import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GamePopup from './GamePopup';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('GamePopup - single player', () => {
  const formatElapsed = (ms) => `${(ms / 1000).toFixed(1)}s`;

  it('shows congratulations title, score, and solutions list when allSolved', () => {
    const onShare = vi.fn();
    const onClose = vi.fn();

    const boards = [
      { solution: 'APPLE', isSolved: true },
      { solution: 'BERRY', isSolved: false },
    ];

    render(
      <GamePopup
        allSolved={true}
        boards={boards}
        score={123}
        speedrunEnabled={false}
        stageElapsedMs={0}
        popupTotalMs={0}
        formatElapsed={formatElapsed}
        solvedCount={2}
        mode="daily"
        marathonHasNext={false}
        onShare={onShare}
        onClose={onClose}
        onNextStage={() => {}}
        freezeStageTimer={() => 0}
        isMarathonSpeedrun={false}
        commitStageIfNeeded={() => {}}
        isOneVOne={false}
      />
    );

    expect(screen.getByText(/Congratulations!/i)).toBeInTheDocument();
    expect(screen.getByText(/Score: 123/)).toBeInTheDocument();
    expect(screen.getByText(/Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Board 1: APPLE/)).toBeInTheDocument();
  });

  it('shows stage summary and next-stage button in marathon speedrun', () => {
    const onNextStage = vi.fn();
    const freezeStageTimer = vi.fn(() => 5000);
    const commitStageIfNeeded = vi.fn();
    const onClose = vi.fn();

    render(
      <GamePopup
        allSolved={false}
        boards={[{ solution: 'APPLE', isSolved: true }]}
        score={50}
        speedrunEnabled={true}
        stageElapsedMs={5000}
        popupTotalMs={10000}
        formatElapsed={formatElapsed}
        solvedCount={1}
        mode="marathon"
        marathonHasNext={true}
        onShare={() => {}}
        onClose={onClose}
        onNextStage={onNextStage}
        freezeStageTimer={freezeStageTimer}
        isMarathonSpeedrun={true}
        commitStageIfNeeded={commitStageIfNeeded}
        isOneVOne={false}
      />
    );

    expect(screen.getByText(/Total time:/)).toBeInTheDocument();
    expect(screen.getByText(/Stage time:/)).toBeInTheDocument();

    const nextStageButton = screen.getByRole('button', { name: /Next Stage/i });
    fireEvent.click(nextStageButton);

    expect(freezeStageTimer).toHaveBeenCalledTimes(1);
    expect(commitStageIfNeeded).toHaveBeenCalledWith(5000);
    expect(onNextStage).toHaveBeenCalledTimes(1);
  });
});

describe('GamePopup - 1v1 mode', () => {
  const formatElapsed = (ms) => `${(ms / 1000).toFixed(1)}s`;

  it('shows win/lose/tie labels and scores in non-speedrun 1v1', () => {
    const onRematch = vi.fn();
    const onChangeMode = vi.fn();

    const oneVOneGameState = {
      speedrun: false,
      status: 'finished',
      hostRematch: true,
      guestRematch: false,
    };

    render(
      <GamePopup
        allSolved={false}
        boards={[]}
        score={0}
        speedrunEnabled={false}
        stageElapsedMs={0}
        popupTotalMs={0}
        formatElapsed={formatElapsed}
        solvedCount={0}
        mode="daily"
        marathonHasNext={false}
        onShare={() => {}}
        onClose={() => {}}
        onNextStage={() => {}}
        freezeStageTimer={() => 0}
        isMarathonSpeedrun={false}
        commitStageIfNeeded={() => {}}
        isOneVOne={true}
        oneVOneGameState={oneVOneGameState}
        myScore={200}
        opponentScore={150}
        winner={null}
        isPlayerHost={true}
        onRematch={onRematch}
        onChangeMode={onChangeMode}
      />
    );

    expect(screen.getByText(/You Won!/i)).toBeInTheDocument();
    expect(screen.getByText(/Your Score/i)).toBeInTheDocument();
    expect(screen.getByText(/Opponent's Score/i)).toBeInTheDocument();

    // Rematch and Change Mode buttons should be present for host
    expect(screen.getByRole('button', { name: /Rematch/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Change Mode/i })).toBeInTheDocument();
  });
});
