import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false, redirect: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log this to sentry, Azure Monitor, trackJs, New Relic
    console.error("Error boundary cought an Error", error, info);
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h2>
          Some error occured, <Link to="/">Click Here</Link> to go to Home Page
          or wait for 5 Seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
