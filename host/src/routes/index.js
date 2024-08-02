import React from "react";
import PathConstants from "./pathConstants";

const Home = React.lazy(() => import("../pages/Home"))
const Login = React.lazy(() => import("../pages/Login"))
const Clients = React.lazy(() => import("clients/Home"))
const Library = React.lazy(() => import("library/Home"))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.LOGIN, element: <Login /> },
    { path: PathConstants.CLIENTS, element: <Clients /> },
    { path: PathConstants.LIBRARY, element: <Library /> },
]

export default routes;