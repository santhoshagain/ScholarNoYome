import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css'; // Your custom CSS for styling
import BACKEND_URL from './config';
import AdminsNavBar from './adminsNavBar'; // Import the top navbar
import { Modal, Button } from 'react-bootstrap'; // Bootstrap Modal and Button

const AdminDashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

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

  const handleShowModal = (scholarship) => {
    setSelectedScholarship(scholarship);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedScholarship(null);
  };

  return (
    <div>
      <AdminsNavBar /> {/* Navbar placed at the top */}
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-content">
          <h1 className="admin-dashboard-title">Admin Dashboard</h1>
          <p className="admin-dashboard-subtitle">View the list of available scholarships.</p>

          <div className="row">
            {/* Scholarship List - Displayed in a grid layout */}
            {scholarships.length > 0 ? (
              scholarships.map((scholarship) => (
                <div className="col-md-4 col-sm-6" key={scholarship.id}>
                  <div className="scholarship-card" onClick={() => handleShowModal(scholarship)}>
                    <h3 className="scholarship-name">{scholarship.name}</h3>
                    <p className="scholarship-description">{scholarship.description}</p>
                    <p className="scholarship-amount">Amount: ${scholarship.amount}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No scholarships available at the moment.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal (Lightbox) for displaying detailed scholarship info */}
      {selectedScholarship && (
        <Modal show={showModal} onHide={handleCloseModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedScholarship.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Description</h4>
            <p>{selectedScholarship.description}</p>
            <h4>Amount: ${selectedScholarship.amount}</h4>
            {/* You can add any other information you'd like to display */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary">Take Action</Button> {/* Add action buttons if needed */}
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
