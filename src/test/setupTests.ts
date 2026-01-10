import '@testing-library/jest-dom';

// React 18 testing-library hint
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Basic DOM/window stubs that code expects
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

// Navigator mocks
const clipboardWriteTextMock = vi.fn();

// @ts-expect-error - not fully typed here
if (!global.navigator) {
  // @ts-expect-error
  global.navigator = {};
}

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: clipboardWriteTextMock,
  },
  writable: true,
  configurable: true,
});

const shareMock = vi.fn().mockResolvedValue(undefined);
Object.defineProperty(navigator, 'share', {
  value: shareMock,
  writable: true,
});

// LocalStorage: use jsdom's implementation but clear between tests
beforeEach(() => {
  window.localStorage.clear();
});

// Helper exports for tests that want to assert side effects
export const mocks = {
  clipboardWriteTextMock,
  shareMock,
};