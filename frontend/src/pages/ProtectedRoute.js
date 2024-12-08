// components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check authentication
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;
