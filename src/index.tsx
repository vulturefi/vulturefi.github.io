import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import reportWebVitals from './reportWebVitals'
import { FlagsProvider } from 'flagged';
import { setDefaultFeatures, getFeatures } from './featureflags'; 

setDefaultFeatures();

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.REACT_APP_ENVIRONMENT || 'development',
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.2,
  beforeSend(event) {
    // only send error occured in production or staging, not development
    if (process.env.REACT_APP_ENVIRONMENT === 'development') {
      console.error('Exceptions caught by Sentry: ', event.exception?.values)
      return null
    }
    /** @todo uncomment if we wanna show the report dialog for every error */
    // if (event.exception) {
    //   Sentry.showReportDialog({ eventId: event.event_id })
    // }
    return event
  },
})

ReactDOM.render(
  <ErrorBoundary>
    <FlagsProvider features={getFeatures()}>
      <App />
    </FlagsProvider>
  </ErrorBoundary>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
