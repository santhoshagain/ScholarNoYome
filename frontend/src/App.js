import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Updated import
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import adminsNavBar from './pages/adminsNavBar';
import AddScholarship from './pages/AddScholarship';
import EditScholarship from './pages/EditScholarship';
import DeleteScholarship from './pages/DeleteScholarship';
import VappliedScholarship from './pages/VappliedScholarship';
import AboutUs from './pages/AboutUS';
import ContactUS from './pages/ContactUS';
import ApplicationsChart from './pages/ApplicationsChart';

function App() {
  return (
    <Router>
      <Routes>  {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} />  {/* Replaced component with element */}
        <Route path="/login" element={<LoginPage />} />  {/* Replaced component with element */}
        <Route path="/register" element={<RegisterPage />} />  {/* Replaced component with element */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-scholarship" element={<AddScholarship />} />
        <Route path="/edit-scholarship" element={<EditScholarship />} />
        <Route path="/delete-scholarship" element={<DeleteScholarship />} />
        <Route path="/view-applied" element={<VappliedScholarship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/appchart" element={<ApplicationsChart />} />


      </Routes>
    </Router>
  );
}

export default App;