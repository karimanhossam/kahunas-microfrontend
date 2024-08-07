import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import PathConstants from "./pathConstants";
import hostInstance from "./i18n";
import { AuthProvider } from "./context/AuthContext";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import Clients from "clients/App";
import Library from "library/App";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";

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

  main {
    margin: 22px 60px;
    max-width: 1200px;
  }
`;

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path={PathConstants.LOGIN} element={<LoginForm />} />
        <Route
          path={`${PathConstants.CLIENTS}/*`}
          element={
            <ProtectedRoute>
              <Clients />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${PathConstants.LIBRARY}/*`}
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Error />} />
      </Route>
    )
  );
  return (
    <AuthProvider>
      <I18nextProvider i18n={hostInstance}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </I18nextProvider>
    </AuthProvider>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
