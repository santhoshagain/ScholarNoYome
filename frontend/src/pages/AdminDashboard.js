import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; 
import BACKEND_URL from './config';
import AdminsNavBar from './adminsNavBar'; 

const AdminDashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedScholarship, setSelectedScholarship] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
   
    const role = localStorage.getItem('role');
    if (!role) {
      navigate('/login'); 
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
      <AdminsNavBar />
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-content">
          <h1 className="admin-dashboard-title">Admin Dashboard</h1>
          <p className="admin-dashboard-subtitle">View the list of available scholarships.</p>

          <div className="row">
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

      {selectedScholarship && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedScholarship.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Description:</strong> {selectedScholarship.description}</p>
            <p><strong>Amount:</strong> ${selectedScholarship.amount}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default AdminDashboard;
