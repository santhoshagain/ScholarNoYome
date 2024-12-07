import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminNavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">ScholarNoYome</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/admin-dashboard">View Scholarships</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-scholarship">Add Scholarship</Link>
            </li>
            {/* Edit Link for editing a scholarship */}
            <li className="nav-item">
              <Link className="nav-link" to="/edit-scholarship">Edit Scholarship</Link>
            </li>
            {/* Delete Button (optional, normally part of the content) */}
            <li className="nav-item">
              <Link className="nav-link" to="/delete-scholarship">Delete Scholarship</Link>
          
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view-applied">View Applied Scholarship</Link>
          
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavBar;
