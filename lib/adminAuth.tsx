"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? "";
const AUTH_KEY = "admin_authenticated";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => false,
  logout: () => {},
});

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(AUTH_KEY);
    if (stored === "true") setIsAuthenticated(true);
    setMounted(true);
  }, []);

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
  };

  if (!mounted) return null;

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(AuthContext);
}
