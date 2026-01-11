import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import OutOfGuessesPopup from './OutOfGuessesPopup';

describe('OutOfGuessesPopup', () => {
  it('renders message with maxTurns and mode text', () => {
    render(
      <OutOfGuessesPopup
        maxTurns={6}
        mode="daily"
        marathonHasNext={false}
        onExit={() => {}}
        onContinue={() => {}}
        onNextStage={() => {}}
        freezeStageTimer={() => {}}
        setShowOutOfGuesses={() => {}}
        setShowPopup={() => {}}
      />
    );

    expect(screen.getByText(/All guesses used/i)).toBeInTheDocument();
    expect(
      screen.getByText(/You reached the max turns \(6\)\. Do you want to exit, continue with unlimited guesses,\?/)
    ).toBeInTheDocument();
  });

  it('shows Next stage button and calls handlers in marathon mode', () => {
    const onNextStage = vi.fn();
    const freezeStageTimer = vi.fn();
    const setShowOutOfGuesses = vi.fn();
    const setShowPopup = vi.fn();

    render(
      <OutOfGuessesPopup
        maxTurns={8}
        mode="marathon"
        marathonHasNext={true}
        onExit={() => {}}
        onContinue={() => {}}
        onNextStage={onNextStage}
        freezeStageTimer={freezeStageTimer}
        setShowOutOfGuesses={setShowOutOfGuesses}
        setShowPopup={setShowPopup}
      />
    );

    const btn = screen.getByRole('button', { name: /next stage/i });
    fireEvent.click(btn);

    expect(freezeStageTimer).toHaveBeenCalledTimes(1);
    expect(setShowOutOfGuesses).toHaveBeenCalledWith(false);
    expect(setShowPopup).toHaveBeenCalledWith(false);
    expect(onNextStage).toHaveBeenCalledTimes(1);
  });

  it('calls onExit and onContinue when buttons are clicked', () => {
    const onExit = vi.fn();
    const onContinue = vi.fn();

    render(
      <OutOfGuessesPopup
        maxTurns={6}
        mode="daily"
        marathonHasNext={false}
        onExit={onExit}
        onContinue={onContinue}
        onNextStage={() => {}}
        freezeStageTimer={() => {}}
        setShowOutOfGuesses={() => {}}
        setShowPopup={() => {}}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: /exit/i }));
    fireEvent.click(screen.getByRole('button', { name: /continue/i }));

    expect(onExit).toHaveBeenCalledTimes(1);
    expect(onContinue).toHaveBeenCalledTimes(1);
  });
});
