// src/test/sentry.test.tsx
import { describe, it, expect, vi } from 'vitest';
import * as Sentry from "@sentry/react";

// Mock Sentry so we don't actually send data during tests
vi.mock("@sentry/react", async () => {
  const actual = await vi.importActual("@sentry/react");
  return {
    ...actual,
    captureException: vi.fn(),
  };
});

describe('BlackVideo Sentry Integration', () => {
  it('should capture manually thrown errors', () => {
    const testError = new Error("Sentry Test Error from BlackVideo");
    
    try {
      throw testError;
    } catch (e) {
      Sentry.captureException(e);
    }

    // Verify that Sentry's captureException was called with our error
    expect(Sentry.captureException).toHaveBeenCalledWith(testError);
  });
});