import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CounterApp } from "./components/CounterApp/CounterApp";
import FirstApp from "./components/FirstApp/FirstApp";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <FirstApp
      title="Soy una webapp hecha con react.js"
      subtitle="Soy generado con vite.js"
    />
    {/* <CounterApp value={0} /> */}
  </React.StrictMode>
);
