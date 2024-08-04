import React from "react";
import PathConstants from "./pathConstants";

const Library = React.lazy(() => import("../pages/Home"))
const Clients = React.lazy(() => import("clients/Home"))

const routes = [
    { path: "/", element: <Library /> },
    { path: PathConstants.LIBRARY, element: <Library /> },
    { path: PathConstants.CLIENTS, element: <Clients /> },
]

export default routes;