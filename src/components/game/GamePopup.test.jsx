import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import GamePopup from './GamePopup';

vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

describe('GamePopup - single player', () => {
  const formatElapsed = (ms) => `${(ms / 1000).toFixed(1)}s`;

  it('shows congratulations title, score, solutions list, and View Comments CTA when allSolved daily', () => {
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
        speedrunEnabled={false}
        stageElapsedMs={0}
        popupTotalMs={0}
        formatElapsed={formatElapsed}
        solvedCount={2}
        turnsUsed={3}
        maxTurns={8}
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
    expect(screen.getByText(/Guesses used: 3\/8/)).toBeInTheDocument();
    expect(screen.getByText(/Solutions/i)).toBeInTheDocument();
    expect(screen.getByText(/Board 1: APPLE/)).toBeInTheDocument();

    // Close button should show "View Comments" in solved daily/marathon modes.
    expect(screen.getByRole('button', { name: /View Comments/i })).toBeInTheDocument();
    // Home button has been removed from the popup actions.
    expect(screen.queryByRole('button', { name: /Home/i })).not.toBeInTheDocument();
  });

  it('shows stage summary and next-stage button in marathon speedrun when all boards are solved', () => {
    const onNextStage = vi.fn();
    const freezeStageTimer = vi.fn(() => 5000);
    const commitStageIfNeeded = vi.fn();
    const onClose = vi.fn();

    render(
      <GamePopup
        allSolved={true}
        boards={[{ solution: 'APPLE', isSolved: true }]}
        speedrunEnabled={true}
        stageElapsedMs={5000}
        popupTotalMs={10000}
        formatElapsed={formatElapsed}
        solvedCount={1}
        turnsUsed={6}
        maxTurns={8}
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

  it('does not show Next Stage button in marathon popup when stage was not fully solved', () => {
    const onNextStage = vi.fn();
    const freezeStageTimer = vi.fn(() => 5000);
    const commitStageIfNeeded = vi.fn();
    const onClose = vi.fn();

    render(
      <GamePopup
        allSolved={false}
        boards={[{ solution: 'APPLE', isSolved: false }]}
        speedrunEnabled={true}
        stageElapsedMs={5000}
        popupTotalMs={10000}
        formatElapsed={formatElapsed}
        solvedCount={0}
        turnsUsed={8}
        maxTurns={8}
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

    expect(screen.queryByRole('button', { name: /Next Stage/i })).toBeNull();
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
