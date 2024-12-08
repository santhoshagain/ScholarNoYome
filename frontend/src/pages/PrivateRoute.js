import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ role }) => {
  const userRole = localStorage.getItem('role');

  if (!userRole) {
    return <Navigate to="/login" />; // Redirect to login page if not logged in
  }

  if (userRole !== role) {
    return <Navigate to={`/${userRole.toLowerCase()}-dashboard`} />; // Redirect to the correct dashboard based on role
  }

  return <Outlet />; // Render the component if logged in
};

export default PrivateRoute;
