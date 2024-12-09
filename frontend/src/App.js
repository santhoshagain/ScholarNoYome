import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
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
import AppliedScholarships from './pages/AppliedScholarships';
import PrivateRoute from './pages/PrivateRoute';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<RegisterPage />} />  
        
        <Route element={<PrivateRoute role="Student" />}>
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Route>
        <Route element={<PrivateRoute role="Admin" />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>
        <Route path="/add-scholarship" element={<AddScholarship />} />
        <Route path="/edit-scholarship" element={<EditScholarship />} />
        <Route path="/delete-scholarship" element={<DeleteScholarship />} />
        <Route path="/view-applied" element={<VappliedScholarship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/appchart" element={<ApplicationsChart />} />
        <Route path="/appliedscholarships" element={<AppliedScholarships />} />
        <Route path="/logout" element={<Logout />} />


      </Routes>
    </Router>
  );
}

export default App;