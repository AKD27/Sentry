import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.1 : 1.0,
  ignoreErrors: ["Non-Error exception captured", "ResizeObserver loop limit exceeded"],
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
