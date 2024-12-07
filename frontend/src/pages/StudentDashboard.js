import React, { useState, useEffect } from 'react';
import './styles/StudentDashboard.css';
import BACKEND_URL from './config';

const StudentDashboard = () => {
  const [scholarships, setScholarships] = useState([]);

  useEffect(() => {
    // Fetch available scholarships
    const fetchScholarships = async () => {
      try {
        // Use the environment variable for the backend URL
        const response = await fetch(`${BACKEND_URL}/scholarships`);
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        console.error('Error fetching scholarships:', error);
      }
    };

    fetchScholarships();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1 className="dashboard-title">Available Scholarships</h1>
        <p className="dashboard-subtitle">Explore and apply for scholarships that match your interests and needs.</p>

        {scholarships.length > 0 ? (
          <div className="scholarship-list">
            {scholarships.map((scholarship) => (
              <div className="scholarship-card" key={scholarship.id}>
                <h3>{scholarship.name}</h3>
                <p>{scholarship.description}</p>
                <p>Amount: ${scholarship.amount}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-scholarships">No scholarships available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
