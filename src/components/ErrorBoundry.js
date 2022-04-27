import React from "react";
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  ///Error boundaries do not catch errors for:
  // Event handlers (learn more)
  // Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
  // Server side rendering
  // Errors thrown in the error boundary itself (rather than its children)

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(errorInfo);
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    // Normally, just render children
    return this.props.children;
  }
}
