import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes"
import Layout from "./components/layout"
import Error from "./pages/Error";

import "./index.css";

const App = () => {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Error />,
      children: routes
    },
  ])

 return (
      <RouterProvider router={router} />
  )
};

const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)