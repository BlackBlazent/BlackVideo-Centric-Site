import * as Sentry from "@sentry/react";

if (import.meta.env.DEV) {
  (window as any).Sentry = Sentry;
}

Sentry.init({
  dsn: "https://6ef64e9ddcae7993b02dfd8eabaf991d@o4510662338019328.ingest.us.sentry.io/4510804606386176",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});