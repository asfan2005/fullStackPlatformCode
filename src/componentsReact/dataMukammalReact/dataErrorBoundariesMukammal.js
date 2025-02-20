import React from 'react';

const dataErrorBoundariesMukammal = [
    {
        id: 1,
        title: "Basic Error Boundary Pattern",
        code: `
// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again.</h2>;
    }

    return this.props.children;
  }
}

// Example component that might throw an error
class MyComponent extends React.Component {
  render() {
    if (this.props.shouldError) {
      throw new Error('Test error');
    }
    return <div>My Component Content</div>;
  }
}

// Usage
const App = () => (
  <ErrorBoundary>
    <MyComponent shouldError={false} />
  </ErrorBoundary>
);

export { ErrorBoundary, MyComponent, App };`,
        description: "Asosiy Error Boundary pattern",
        result: `{
    "feature": "Basic Error Boundary",
    "concepts": [
        "Error Catching",
        "Fallback UI",
        "Error Logging",
        "Component Recovery"
    ]
}`
    },
    {
        id: 2,
        title: "Advanced Error Boundary with Reset",
        code: `
import React from 'react';

class ResetableErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleReset = this.handleReset.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Send error to logging service
    console.error('Error logged:', error);
    // Implement your error logging logic here
    // logErrorToService(error, errorInfo);
  }

  handleReset() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <button onClick={this.handleReset}>
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Example usage
const MyApp = () => (
  <ResetableErrorBoundary>
    <div>Protected Content</div>
  </ResetableErrorBoundary>
);

export { ResetableErrorBoundary, MyApp };`,
        description: "Reset funksiyali Error Boundary pattern",
        result: `{
    "feature": "Resetable Error Boundary",
    "concepts": [
        "Error Recovery",
        "State Reset",
        "User Interaction",
        "Error Reporting"
    ]
}`
    },
    {
        id: 3,
        title: "Error Boundary with Fallback Component",
        code: `
import React from 'react';

const FallbackComponent = ({ error, resetError }) => (
  <div className="error-fallback">
    <h2>Something went wrong:</h2>
    <pre>{error.message}</pre>
    <button onClick={resetError}>Try again</button>
  </div>
);

class ErrorBoundaryWithFallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error details:', error);
    // Implement your error logging logic here
    // logError(error, errorInfo);
  }

  resetError() {
    this.setState({ error: null });
  }

  render() {
    if (this.state.error) {
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

// Example usage
const AppWithFallback = () => (
  <ErrorBoundaryWithFallback>
    <div>Protected Content</div>
  </ErrorBoundaryWithFallback>
);

export { ErrorBoundaryWithFallback, FallbackComponent, AppWithFallback };`,
        description: "Fallback komponentli Error Boundary pattern",
        result: `{
    "feature": "Fallback Error Boundary",
    "concepts": [
        "Custom Error UI",
        "Error Details",
        "Recovery Options",
        "Component Separation"
    ]
}`
    },
    {
        id: 4,
        title: "Error Boundary with Context",
        code: `
import React, { useContext, createContext } from 'react';

const ErrorContext = createContext();

class ContextErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.resetError = this.resetError.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught in context:', error);
  }

  resetError() {
    this.setState({ error: null });
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    const contextValue = {
      error,
      resetError: this.resetError
    };

    if (error && fallback) {
      return (
        <ErrorContext.Provider value={contextValue}>
          {fallback}
        </ErrorContext.Provider>
      );
    }

    return (
      <ErrorContext.Provider value={contextValue}>
        {children}
      </ErrorContext.Provider>
    );
  }
}

// Custom hook to use error context
const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within ErrorBoundary');
  }
  return context;
};

// Example usage
const ErrorFallback = () => {
  const { error, resetError } = useError();
  return (
    <div>
      <h2>Error occurred: {error.message}</h2>
      <button onClick={resetError}>Reset</button>
    </div>
  );
};

const AppWithContext = () => (
  <ContextErrorBoundary fallback={<ErrorFallback />}>
    <div>Protected Content</div>
  </ContextErrorBoundary>
);

export { ContextErrorBoundary, useError, ErrorFallback, AppWithContext };`,
        description: "Context bilan Error Boundary pattern",
        result: `{
    "feature": "Context Error Boundary",
    "concepts": [
        "Error Context",
        "Global Error State",
        "Error Hooks",
        "Flexible Error Handling"
    ]
}`
    }
];

export default dataErrorBoundariesMukammal;