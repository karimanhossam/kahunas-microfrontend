import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import "./index.css";

const App = () => (
  <>
  <Header/>
  </>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)