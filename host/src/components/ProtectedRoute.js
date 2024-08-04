import {Navigate, useLocation} from "react-router-dom"
import useAuthMiddleware from "../hooks/useAuthMiddleware";
import PathConstants from "../pathConstants";

const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useAuthMiddleware();
    let location = useLocation();
    if(!isAuthenticated) {
        return <Navigate to={PathConstants.LOGIN} state={{ from: location }} replace />
    }
 return children;

};

export default ProtectedRoute;