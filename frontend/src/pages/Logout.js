// components/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Clear auth state
    navigate('/Login'); // Redirect to login
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
