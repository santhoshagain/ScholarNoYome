import React, { useState, useEffect } from 'react';
import './styles/ScholarshipPage.css';
import BACKEND_URL from './config';
import AdminsNavBar from './adminsNavBar';  // Importing the navbar

const ScholarshipPage = () => {
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

  return (
    <div>
      <AdminsNavBar /> {/* Add the navbar here */}
      <div className="container py-5">
        <h1 className="scholarship-page-title text-center mb-5">Available Scholarships</h1>
        {scholarships.length > 0 ? (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {scholarships.map((scholarship) => (
              <div className="col" key={scholarship.id}>
                <div className="card scholarship-card shadow-sm border-0">
                  <div className="card-body">
                    <h5 className="card-title">{scholarship.name}</h5>
                    <p className="card-text">{scholarship.description}</p>
                    <p className="card-text">
                      <strong>Amount:</strong> ${scholarship.amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No scholarships available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default ScholarshipPage;
