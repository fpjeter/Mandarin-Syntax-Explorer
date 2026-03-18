import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/**
 * React error boundary — catches JS crashes and shows a friendly
 * fallback instead of a blank screen. Critical for iOS users where
 * un-caught errors produce a black screen on the dark background.
 */
export class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    ErrorBoundaryState
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error('[ErrorBoundary]', error, info.componentStack);
    }

    render() {
        if (!this.state.hasError) return this.props.children;

        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0f172a',
                color: '#e2e8f0',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                padding: '2rem',
                textAlign: 'center',
            }}>
                <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                }}>
                    🌳
                </div>
                <h1 style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                    background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    Something went wrong
                </h1>
                <p style={{
                    fontSize: '0.925rem',
                    color: '#94a3b8',
                    maxWidth: '28rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                }}>
                    The app ran into an unexpected error. This can sometimes
                    happen on older browsers. Try refreshing the page.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    style={{
                        padding: '0.75rem 2rem',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(139, 92, 246, 0.4)',
                        background: 'rgba(139, 92, 246, 0.15)',
                        color: '#c4b5fd',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                >
                    Refresh Page
                </button>
                {this.state.error && (
                    <details style={{
                        marginTop: '2rem',
                        fontSize: '0.75rem',
                        color: '#64748b',
                        maxWidth: '28rem',
                        textAlign: 'left',
                    }}>
                        <summary style={{ cursor: 'pointer', marginBottom: '0.5rem' }}>
                            Technical details
                        </summary>
                        <pre style={{
                            whiteSpace: 'pre-wrap',
                            wordBreak: 'break-all',
                            background: 'rgba(15, 23, 42, 0.5)',
                            padding: '1rem',
                            borderRadius: '0.5rem',
                            border: '1px solid #1e293b',
                        }}>
                            {this.state.error.message}
                        </pre>
                    </details>
                )}
            </div>
        );
    }
}
