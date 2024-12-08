import React, { useState } from 'react';
import axios from 'axios';
import BACKEND_URL from './config';
import { Link } from 'react-router-dom';
import './styles/AppliedScholarship.css';

function AppliedScholarship() {
  const [studentId, setStudentId] = useState('');
  const [applications, setApplications] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFetchApplications = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/applications/${studentId}`);
      if (response.status === 204) {
        setErrorMessage('No applications found for the given student ID.');
        setApplications([]);
      } else {
        setApplications(response.data);
        setErrorMessage('');
      }
    } catch (error) {
      setErrorMessage('Error fetching applications. Please try again.');
      setApplications([]);
    }
  };

  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand text-primary" to="/">ScholarNoYome</Link>
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
                <Link className="nav-link text-primary" to="/student-dashboard">View Scholarships</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="container py-5">
        <h1 className="mb-4 text-center text-primary">Applied Scholarships</h1>

        {/* Input Section */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <input
            type="number"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="form-control w-25 me-2"
            placeholder="Enter Student ID"
          />
          <button
            onClick={handleFetchApplications}
            className="btn btn-primary"
          >
            Fetch Applications
          </button>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <p className="text-center text-danger">{errorMessage}</p>
        )}

        {/* Applications Table */}
        {applications.length > 0 && (
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.name}</td>
                    <td>${application.amount}</td>
                    <td>
                      <span
                        style={{
                          color: application.status === 'Accepted' ? 'green' : 'red',
                          fontWeight: 'bold',
                        }}
                      >
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppliedScholarship;
