import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/StudentDashboard.css';
import BACKEND_URL from './config';
import { Link, useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const role = localStorage.getItem('role');
    if (role !== 'Student') {
      navigate('/login'); // Redirect to login if the role is not 'Student'
    }

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
  }, [navigate]);

  // Handle applying for a scholarship
  const applyScholarship = async (scholarshipId, scholarshipName, scholarshipAmount) => {
    // Prompt for Student ID and Name every time
    const studentId = prompt('Please enter your Student ID:');
    if (!studentId) {
      alert('Student ID is required to apply for scholarships.');
      return;
    }

    const studentName = prompt('Please enter your Student Name:');
    if (!studentName) {
      alert('Student Name is required to apply for a scholarship.');
      return;
    }

    const applicationData = {
      studentId: parseInt(studentId), // Convert to number if needed
      name: scholarshipName,
      amount: scholarshipAmount,
      studentName: studentName,
    };

    try {
      const response = await fetch(`${BACKEND_URL}/applications/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        alert('You have successfully applied for the scholarship!');
      } else {
        const errorData = await response.json();
        console.error('Error details:', errorData);
        alert('Failed to apply for the scholarship.');
      }
    } catch (error) {
      console.error('Error applying for scholarship:', error);
      alert('An error occurred while applying for the scholarship.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('role');  // Remove user role
    localStorage.removeItem('studentId');  // Remove studentId
    navigate('/login');  // Redirect to the login page
  };

  return (
    <div className="dashboard-container bg-light">
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">ScholarNoYome</Link>
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
                <Link className="nav-link text-white" to="/appliedscholarships">Applied Scholarships</Link>
              </li>
              {/* Logout Button */}
              <li className="nav-item">
                <button className="nav-link btn text-white" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center p-5 bg-primary text-white">
        <h1>Welcome to the Scholarship Dashboard</h1>
        <p className="lead">Discover the best opportunities to fund your education</p>
      </div>

      {/* Scholarships Section */}
      <div className="container py-5">
        <h2 className="mb-4 text-primary">Available Scholarships</h2>
        {scholarships.length > 0 ? (
          <div className="row g-4">
            {scholarships.map((scholarship) => (
              <div className="col-md-6 col-lg-4" key={scholarship.id}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title text-primary">{scholarship.name}</h5>
                    <p className="card-text">{scholarship.description}</p>
                    <p className="text-success fw-bold">Amount: ${scholarship.amount}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <button
                      className="btn btn-outline-primary w-100"
                      onClick={() =>
                        applyScholarship(scholarship.id, scholarship.name, scholarship.amount)
                      }
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted fs-5">
              No scholarships available at the moment. Please check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
