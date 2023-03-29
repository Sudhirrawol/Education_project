import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.querySelector("#root")).render(<App />);
