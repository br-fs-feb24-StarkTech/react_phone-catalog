import React from 'react';
import { Navigate } from 'react-router-dom';
import { usePrivateRoutesContext } from '../../context/PrivateRoutesContext';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = usePrivateRoutesContext();
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
