import React, { createContext, useContext, ReactNode } from 'react';
import { useAuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';

type PrivateRoutesContextType = {
  isAuthenticated: boolean;
};

const PrivateRoutesContext = createContext<PrivateRoutesContextType | undefined>(undefined);

export const usePrivateRoutesContext = () => {
  const context = useContext(PrivateRoutesContext);
  if (context === undefined) {
    throw new Error('usePrivateRoutesContext must be used within a PrivateRoutesProvider');
  }
  return context;
};

export const PrivateRoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = useAuthContext(); // Pega o token do AuthContext

  const isAuthenticated = !!token; // Verifica se o token existe

  return (
    <PrivateRoutesContext.Provider value={{ isAuthenticated }}>
      {children}
    </PrivateRoutesContext.Provider>
  );
};
