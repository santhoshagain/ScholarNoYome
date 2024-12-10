import React, { useState, useEffect } from 'react';
import BACKEND_URL from './config'; // Your backend URL configuration
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminNavBar from './adminsNavBar'; // Importing the NavBar component

const VappliedScholarship = () => {
  const [applications, setApplications] = useState([]);

  // Fetch all applications from backend
  const fetchApplications = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/applications/all`);
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []); // Run on component mount

  // Handle Accept button click
  const handleAccept = async (applicationId) => {
    try {
      const applicationToUpdate = applications.find(app => app.id === applicationId);
      applicationToUpdate.status = "Accepted"; // Set the updated status

      const response = await fetch(`${BACKEND_URL}/applications/${applicationId}/accept`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationToUpdate), // Send the updated data
      });

      if (response.ok) {
        // Refresh the list of applications after acceptance
        fetchApplications();
      } else {
        console.error('Failed to accept application');
      }
    } catch (error) {
      console.error('Error accepting application:', error);
    }
  };

  // Handle Reject button click
  const handleReject = async (applicationId) => {
    try {
      const applicationToUpdate = applications.find(app => app.id === applicationId);
      applicationToUpdate.status = "Rejected"; // Set the updated status

      const response = await fetch(`${BACKEND_URL}/applications/${applicationId}/reject`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationToUpdate), // Send the updated data
      });

      if (response.ok) {
        // Refresh the list of applications after rejection
        fetchApplications();
      } else {
        console.error('Failed to reject application');
      }
    } catch (error) {
      console.error('Error rejecting application:', error);
    }
  };

  return (
    <div>
      <AdminNavBar /> {/* Include the NavBar component */}

      <div className="container py-5">
        <h2 className="mb-4 text-center">Applied Scholarships</h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Scholarship Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application) => (
                  <tr key={application.id}>
                    <td>{application.studentName}</td>
                    <td>{application.name}</td>
                    <td>${application.amount}</td>
                    <td>{application.status}</td>
                    <td>
                      {/* Accept button is always green */}
                      <button
                        className="btn btn-success me-2"
                        onClick={() => handleAccept(application.id)}
                        disabled={application.status === 'Accepted'} // Disable if already accepted
                        style={{ backgroundColor: 'green' }} // Set the background color based on status
                      >
                        Accept
                      </button>

                      {/* Reject button is always red */}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleReject(application.id)}
                        disabled={application.status === 'Rejected'} // Disable if already rejected
                        style={{ backgroundColor: 'red' }} // Set the background color based on status
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VappliedScholarship;