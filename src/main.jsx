import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";

ReactDOM.createRoot(document.querySelector(".places")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
