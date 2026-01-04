import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Replace 'Little-Lemon-Capstone-Project' with your repo name
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/Little-Lemon-Capstone-Project">
    <App />
  </BrowserRouter>
);
