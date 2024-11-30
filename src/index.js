import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"; // BrowserRouter 추가
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router basename={process.env.PUBLIC_URL}>
    {" "}
    {/* basename 설정 */}
    <App />
  </Router>
);
