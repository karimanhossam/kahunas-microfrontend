import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";

import "./index.css";

  const App = () => {
    return (
      <Home/>
    )
  };

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)