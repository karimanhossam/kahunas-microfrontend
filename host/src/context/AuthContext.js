import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("authToken");
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [user, setUser] = useState(null);

  const login = (email, password, onLogin) => {
    if (email === "coach@kahunas.io" && password === "pass@123") {
      setIsAuthenticated(true);
      setUser({ email });
      localStorage.setItem("authToken", "kahunas-token");
      onLogin();
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = (onLogout) => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("authToken");
    onLogout();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
