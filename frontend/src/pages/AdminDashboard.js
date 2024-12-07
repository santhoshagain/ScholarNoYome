import React, { useState, useEffect } from 'react';
import './styles/AdminDashboard.css';
import BACKEND_URL from './config';

const AdminDashboard = () => {
  const [scholarships, setScholarships] = useState([]);
  const [newScholarship, setNewScholarship] = useState({
    name: '',
    description: '',
    amount: ''
  });
  const [editScholarship, setEditScholarship] = useState({
    id: null,
    name: '',
    description: '',
    amount: ''
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewScholarship({ ...newScholarship, [name]: value });
  };

  const handleAddScholarship = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URL}/scholarships`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newScholarship)
      });
      const addedScholarship = await response.json();
      setScholarships([...scholarships, addedScholarship]);
      setNewScholarship({ name: '', description: '', amount: '' });
    } catch (error) {
      console.error('Error adding scholarship:', error);
    }
  };

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

  const handleEditScholarship = (scholarship) => {
    setEditScholarship(scholarship);
  };

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
      const updatedScholarship = await response.json();
      setScholarships(scholarships.map((scholarship) => 
        scholarship.id === updatedScholarship.id ? updatedScholarship : scholarship
      ));
      setEditScholarship({ id: null, name: '', description: '', amount: '' });
    } catch (error) {
      console.error('Error updating scholarship:', error);
    }
  };

  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-content">
        <h1 className="admin-dashboard-title">Admin Dashboard</h1>
        <p className="admin-dashboard-subtitle">Manage scholarships and add new opportunities for students.</p>

        <div className="scholarship-list">
          <h2>Available Scholarships</h2>
          {scholarships.length > 0 ? (
            scholarships.map((scholarship) => (
              <div className="scholarship-card" key={scholarship.id}>
                <h3>{scholarship.name}</h3>
                <p>{scholarship.description}</p>
                <p>Amount: ${scholarship.amount}</p>
                <div className="scholarship-actions">
                  <button className="admin-menu-button" onClick={() => handleEditScholarship(scholarship)}>Edit</button>
                  <button className="admin-menu-button" onClick={() => handleDeleteScholarship(scholarship.id)}>Delete</button>
                </div>
              </div>
            ))
          ) : (
            <p>No scholarships available at the moment.</p>
          )}
        </div>

        <div className="add-scholarship">
          <h2>Add New Scholarship</h2>
          <form onSubmit={handleAddScholarship}>
            <input
              type="text"
              name="name"
              placeholder="Scholarship Name"
              value={newScholarship.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={newScholarship.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={newScholarship.amount}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="admin-menu-button">Add Scholarship</button>
          </form>
        </div>

        {editScholarship.id && (
          <div className="edit-scholarship">
            <h2>Edit Scholarship</h2>
            <form onSubmit={handleUpdateScholarship}>
              <input
                type="text"
                name="name"
                value={editScholarship.name}
                onChange={(e) => setEditScholarship({ ...editScholarship, name: e.target.value })}
                required
              />
              <textarea
                name="description"
                value={editScholarship.description}
                onChange={(e) => setEditScholarship({ ...editScholarship, description: e.target.value })}
                required
              />
              <input
                type="number"
                name="amount"
                value={editScholarship.amount}
                onChange={(e) => setEditScholarship({ ...editScholarship, amount: e.target.value })}
                required
              />
              <button type="submit" className="admin-menu-button">Update Scholarship</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
