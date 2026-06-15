// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate checking token from localStorage or API
    const token = localStorage.getItem("auth_token");
    if (token) {
      setIsAuthenticated(true);
      setUser({ name: "Olha", role: "admin" }); // Example user object
    }
    setIsLoading(false);
  }, []);

  const login = async () => {
    setIsLoading(true);
    localStorage.setItem("auth_token", "fake-jwt-token");
    setIsAuthenticated(true);
    setUser({ name: "Olha", role: "admin" });
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}