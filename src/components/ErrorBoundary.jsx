import React from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";


function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 text-red-700 px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">Something went wrong 😢</h1>
        <p className="mb-6 text-lg">
          {error.message || "An unexpected error has occurred."}
        </p>
        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset state or reload page
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
