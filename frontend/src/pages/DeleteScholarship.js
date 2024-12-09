import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css';
import BACKEND_URL from './config';
import AdminsNavBar from './adminsNavBar'; 

const DeleteScholarship = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/scholarships`);
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        console.error('Error fetching scholarships:', error);
      }
    };

    fetchScholarships();
  }, []);

  const handleDeleteScholarship = async (id) => {
    try {
      await fetch(`${BACKEND_URL}/scholarships/${id}`, {
        method: 'DELETE'
      });
      setScholarships(scholarships.filter(scholarship => scholarship.id !== id));
    } catch (error) {
      console.error('Error deleting scholarship:', error);
    }
  };

  return (
    <div>
      <AdminsNavBar /> {/* Navbar placed at the top */}
      <div className="delete-scholarship-container">
        <div className="delete-scholarship-content">
          <h1 className="delete-scholarship-title">Delete Scholarship</h1>
          <p className="delete-scholarship-subtitle">Manage scholarships by deleting them when no longer needed.</p>

          <div className="scholarship-list">
            <h2>Available Scholarships</h2>
            {scholarships.length > 0 ? (
              scholarships.map((scholarship) => (
                <div className="scholarship-card" key={scholarship.id}>
                  <h3>{scholarship.name}</h3>
                  <p>{scholarship.description}</p>
                  <p>Amount: ${scholarship.amount}</p>
                  <div className="scholarship-actions">
                    <button className="admin-menu-button" onClick={() => handleDeleteScholarship(scholarship.id)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No scholarships available at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteScholarship;
