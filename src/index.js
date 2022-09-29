import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.css";
import App from "./App";

import { ThemeProvider } from "./utils/Theme/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
