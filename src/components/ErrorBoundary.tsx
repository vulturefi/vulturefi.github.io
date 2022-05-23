import React from 'react'
import * as Sentry from '@sentry/react'

interface Props {
  children: React.ReactNode
}

const ErrorBoundary = ({ children }: Props): React.ReactElement => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <>
          <div>
            You have encountered an error. It has been reported to our team and
            we will fix it ASAP.
          </div>
          <div>{error.toString()}</div>
          <div>{componentStack}</div>
          <button
            onClick={() => {
              /* When resetError() is called it will remove the Fallback component */
              /* and render the Sentry ErrorBoundary's children in their initial state */
              resetError()
            }}
          >
            Click here to reset the app.
          </button>
        </>
      )}
    >
      {children}
    </Sentry.ErrorBoundary>
  )
}

export default ErrorBoundary
