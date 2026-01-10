import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useShare } from './useShare';
import { mocks } from '../test/setupTests';

vi.mock('../lib/gameUtils', () => ({
  isMobileDevice: vi.fn(),
}));

import { isMobileDevice } from '../lib/gameUtils';

beforeEach(() => {
  vi.clearAllMocks();
});

describe('useShare', () => {
  it('copies to clipboard and sets success message on desktop', async () => {
    (isMobileDevice).mockReturnValue(false);
    const setTimedMessage = vi.fn();
    const shareText = 'Result text';

    const { result } = renderHook(() => useShare(shareText, setTimedMessage));

    await act(async () => {
      await result.current.handleShare();
    });

    expect(mocks.clipboardWriteTextMock).toHaveBeenCalledWith(shareText);
    expect(setTimedMessage).toHaveBeenCalledWith('Copied to clipboard!', 2000);
  });

  it('uses navigator.share on mobile and does not fall back when it succeeds', async () => {
    (isMobileDevice).mockReturnValue(true);
    const setTimedMessage = vi.fn();
    const shareText = 'Mobile share text';

    const { result } = renderHook(() => useShare(shareText, setTimedMessage));

    await act(async () => {
      await result.current.handleShare();
    });

    expect(mocks.shareMock).toHaveBeenCalledTimes(1);
    expect(mocks.clipboardWriteTextMock).not.toHaveBeenCalled();
    expect(setTimedMessage).not.toHaveBeenCalled();
  });

  it('treats AbortError from navigator.share as a silent cancel', async () => {
    (isMobileDevice).mockReturnValue(true);
    mocks.shareMock.mockRejectedValueOnce({ name: 'AbortError' });
    const setTimedMessage = vi.fn();

    const { result } = renderHook(() => useShare('text', setTimedMessage));

    await act(async () => {
      await result.current.handleShare();
    });

    expect(mocks.clipboardWriteTextMock).not.toHaveBeenCalled();
    expect(setTimedMessage).not.toHaveBeenCalled();
  });

  it('handleShareCode copies game code to clipboard when share is unavailable', async () => {
    (isMobileDevice).mockReturnValue(false);
    const setTimedMessage = vi.fn();

    const { result } = renderHook(() => useShare('ignored', setTimedMessage));

    await act(async () => {
      await result.current.handleShareCode('123456');
    });

    expect(mocks.clipboardWriteTextMock).toHaveBeenCalledWith(
      'Join my Better Wordle game with code: 123456',
    );
    expect(setTimedMessage).toHaveBeenCalledWith('Code copied to clipboard!', 2000);
  });
});