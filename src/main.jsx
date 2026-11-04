import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import SimulatedError from "./components/SimulatedError";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <SimulatedError />
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
