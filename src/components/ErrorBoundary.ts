import React from "react";

interface ErrorBoundaryProps {
    onError?: (error: Error) => void;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
    componentDidCatch(error: Error) {
        this.props.onError && this.props.onError(error);
    }
    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;
