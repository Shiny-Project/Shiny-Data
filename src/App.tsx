import React from "react";
import ErrorBoundary from "src/components/ErrorBoundary";
import DataViewer from "./app/DataViewer";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <DataViewer />
            </ErrorBoundary>
        </div>
    );
}

export default App;
