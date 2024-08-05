import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import clientsInstance from "./i18n";
import Error from "host/Error";
import Home from "./pages/Home";
import ClientDetails from "./pages/ClientDetails";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #3f4254;
    background-color: #fff;
  }
`;


const App = () => {

  return (
    <I18nextProvider i18n={clientsInstance}>
        <GlobalStyle />
        <Routes>
          <Route index element={<Home />} />          
          <Route path=':id' element={<ClientDetails/>}/>
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
