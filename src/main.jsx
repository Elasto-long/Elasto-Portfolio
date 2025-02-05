import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import App from "./App.jsx";
// import "../src/app.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/elastomech">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
