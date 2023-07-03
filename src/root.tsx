import React from "react";
import { BrowserRouter } from "react-router-dom";

import ErrorHandler from "./hoc/withErrorHandler/errorHandler";
import ErrorBoundary from "./shared/components/errorBoundary/errorBoundary";
import App from "./app";

const Root: React.FC = (props) => {
    return (
        <>
            <ErrorHandler />
            <ErrorBoundary>
                <BrowserRouter>
                    <App {...props} />
                </BrowserRouter>
            </ErrorBoundary>
        </>
    );
};

export default Root;
