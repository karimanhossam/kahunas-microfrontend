import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import PathConstants from "./pathConstants";
import hostInstance from "./i18n";
import { AuthProvider } from "./context/AuthContext";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import Clients from "clients/App";
import Library from "library/App";
import Error from "./pages/Error";

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

  .app-content {
    margin: 22px 60px;
  }
`;

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <I18nextProvider i18n={hostInstance}>
          <GlobalStyle />
          <Header />
          <div className="app-content">
            <React.Suspense fallback="Loading...">
              <Routes>
                <Route path={PathConstants.HOME} element={<Home />} />
                <Route path={PathConstants.LOGIN} element={<LoginForm />} />
                <Route
                  path={`${PathConstants.CLIENTS}/*`}
                  element={<Clients />}
                >
                  <Route index element={<Clients />} />
                </Route>
                <Route
                  path={`${PathConstants.LIBRARY}/*`}
                  element={<Library />}
                >
                  <Route index element={<Library />} />
                </Route>
                <Route path="*" element={<Error />} />
              </Routes>
            </React.Suspense>
          </div>
        </I18nextProvider>
      </Router>
    </AuthProvider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
