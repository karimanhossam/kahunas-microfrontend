import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


const useAuthMiddleware = () => {
  
  return useContext(AuthContext);
};

export default useAuthMiddleware;
