import ReactDom from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./components/CSS/App.CSS";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
