import React from 'react';
import './styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-content">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <p className="admin-dashboard-subtitle">Manage scholarships with ease.</p>

        <div className="admin-menu-list">
          <button className="admin-menu-button">View Scholarships</button>
          <button className="admin-menu-button">Add Scholarship</button>
          <button className="admin-menu-button">Update Scholarship</button>
          <button className="admin-menu-button">Delete Scholarship</button>
        </div>

        <p className="admin-dashboard-message">
          Stay tuned! We will add more features later.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboard;
