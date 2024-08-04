import  { createContext, useState, useEffect } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import PathConstants from '../pathConstants';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('authToken');


  useEffect(() => {
    if (token) {
      console.log("Logged in already!")
      setIsAuthenticated(true);
    }
    console.log("Please log in")
  }, []);


  useEffect(() => {
    if (!isAuthenticated && location.pathname !== PathConstants.HOME) {
      navigate(PathConstants.LOGIN);
    }
  }, [isAuthenticated, location]);



  const login = (email, password) => {
    if (email === 'coach@kahunas.io' && password === 'pass@123') {
      setIsAuthenticated(true);
      setUser({ email });
      localStorage.setItem('authToken', 'kahunas-token');
      navigate(PathConstants.CLIENTS)
    } else {
      alert('Invalid credentials');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
