import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import './styles/AdminNavBar.css'; 

const AdminNavBar = () => {
  const navigate = useNavigate();  

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('role');  
    localStorage.removeItem('studentId');  
    navigate('/login');  
  };

  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">ScholarNoYome</Link>
        
        <div className="navbar-menu">
          <div className="dropdown">
            <button className="dropdown-btn">Admin CRUD</button>
            <div className="dropdown-content">
              <Link to="/admin-dashboard">View Scholarships</Link>
              <Link to="/add-scholarship">Add Scholarship</Link>
              <Link to="/edit-scholarship">Update Scholarship</Link>
              <Link to="/delete-scholarship">Delete Scholarship</Link>
            </div>
          </div>
          
          <div className="dropdown">
            <button className="dropdown-btn">Other Operations</button>
            <div className="dropdown-content">
              <Link to="/view-applied">View Applied Scholarships</Link>
              <Link to="/appchart">View Applications Chart</Link>
            </div>
          </div>
          
          {/* Logout Button */}
          <button className="nav-link btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
