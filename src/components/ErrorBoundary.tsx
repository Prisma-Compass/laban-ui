import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static displayName = 'ErrorBoundary';

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[laban-ui:ErrorBoundary]', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', padding: 32, minHeight: 200,
          color: '#dc2626', textAlign: 'center',
        }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>⚠</div>
          <h3 style={{ margin: '0 0 8px', fontWeight: 600 }}>Component Error</h3>
          <p style={{ margin: '0 0 16px', color: '#6b7280', fontSize: 14 }}>
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={this.handleReset}
            style={{
              padding: '8px 24px', border: '1px solid #d1d5db',
              borderRadius: 8, background: '#fff', cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
