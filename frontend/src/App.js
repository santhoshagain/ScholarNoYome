import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>  {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} />  {/* Replaced component with element */}
        <Route path="/login" element={<LoginPage />} />  {/* Replaced component with element */}
        <Route path="/register" element={<RegisterPage />} />  {/* Replaced component with element */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;