import { useContext, useEffect } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import PathConstants from '../pathConstants';


const useAuthMiddleware = () => {
  const {isAuthenticated} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== PathConstants.HOME) {
      navigate(PathConstants.LOGIN);
    }
  }, [isAuthenticated, navigate]);

  return useContext(AuthContext);
};

export default useAuthMiddleware;
