import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import Error from "host/Error";
import Home from "./pages/Home";
import clientsInstance from "./i18n";


const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }
`;

const App = () => {
 
  return (
    <I18nextProvider i18n={clientsInstance}>
        <GlobalStyle />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
    </I18nextProvider>
  );
};

export default App;

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StrictMode>
    <Router basename="/clients">
      <App />
    </Router>
  </StrictMode>
);
