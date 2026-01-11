import '@testing-library/jest-dom';
import React from 'react';
import { vi } from 'vitest';

// React 18 testing-library hint
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Basic DOM/window stubs that code expects
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true,
});

// Mock react-helmet-async so Helmet/HelmetProvider are no-ops in tests.
// This avoids jsdom errors when the real HelmetDispatcher expects a
// browser document/head implementation.
vi.mock('react-helmet-async', () => {
  return {
    HelmetProvider: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, null, children),
    Helmet: ({ children }: { children?: React.ReactNode }) => React.createElement(React.Fragment, null, children),
  };
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
