import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css';
import BACKEND_URL from './config'; // Replace with your backend URL
import AdminsNavBar from './adminsNavBar'; // Import the top navbar

const EditScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const [editScholarship, setEditScholarship] = useState({
    id: null,
    name: '',
    description: '',
    amount: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Fetch scholarships on component mount
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/scholarships`);
        if (!response.ok) {
          throw new Error('Failed to fetch scholarships');
        }
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        setErrorMessage('Error fetching scholarships.');
        console.error('Error fetching scholarships:', error);
      }
    };

    fetchScholarships();
  }, []);

  // Open the modal and set selected scholarship for editing
  const handleEditScholarship = (scholarship) => {
    setEditScholarship(scholarship);
    setShowModal(true);
  };

  // Handle updating a scholarship
  const handleUpdateScholarship = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/scholarships/${editScholarship.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editScholarship)
      });

      if (!response.ok) {
        throw new Error('Failed to update scholarship');
      }

      const updatedScholarship = await response.json();
      setScholarships((prevScholarships) =>
        prevScholarships.map((scholarship) =>
          scholarship.id === updatedScholarship.id ? updatedScholarship : scholarship
        )
      );
      setShowModal(false);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Error updating scholarship.');
      console.error('Error updating scholarship:', error);
    }
  };

  // Close the modal without saving changes
  const handleCancel = () => {
    setEditScholarship({ id: null, name: '', description: '', amount: '' });
    setShowModal(false);
    setErrorMessage('');
  };

  return (
    <div>
      <AdminsNavBar />
      <div className="edit-scholarship-container">
        <div className="edit-scholarship-content">
          <h1 className="edit-scholarship-title">Edit Scholarship</h1>
          <p className="edit-scholarship-subtitle">Update scholarship details.</p>

          <div className="scholarship-list">
            <h2>Available Scholarships</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {scholarships.length > 0 ? (
              scholarships.map((scholarship) => (
                <div className="scholarship-card" key={scholarship.id}>
                  <h3>{scholarship.name}</h3>
                  <p>{scholarship.description}</p>
                  <p>Amount: ${scholarship.amount}</p>
                  <div className="scholarship-actions">
                    <button
                      className="admin-menu-button"
                      onClick={() => handleEditScholarship(scholarship)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No scholarships available at the moment.</p>
            )}
          </div>

          {/* Modal for editing scholarship */}
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Edit Scholarship</h2>
                <form onSubmit={handleUpdateScholarship}>
                  <input
                    type="text"
                    name="name"
                    value={editScholarship.name}
                    onChange={(e) =>
                      setEditScholarship({ ...editScholarship, name: e.target.value })
                    }
                    placeholder="Scholarship Name"
                    required
                  />
                  <textarea
                    name="description"
                    value={editScholarship.description}
                    onChange={(e) =>
                      setEditScholarship({ ...editScholarship, description: e.target.value })
                    }
                    placeholder="Description"
                    required
                  />
                  <input
                    type="number"
                    name="amount"
                    value={editScholarship.amount}
                    onChange={(e) =>
                      setEditScholarship({ ...editScholarship, amount: e.target.value })
                    }
                    placeholder="Amount"
                    required
                  />
                  <div className="modal-actions">
                    <button type="submit" className="admin-menu-button">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="admin-menu-button cancel-button"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditScholarship;
