import React, { useState } from 'react';
import BACKEND_URL from './config';
import { useNavigate } from 'react-router-dom';
import AdminNavBar from './adminsNavBar'; 

const AddScholarship = () => {
  const [newScholarship, setNewScholarship] = useState({
    name: '',
    description: '',
    amount: ''
  });
  const navigate = useNavigate();

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
      if (response.ok) {
        navigate('/admin-dashboard'); 
      }
    } catch (error) {
      console.error('Error adding scholarship:', error);
    }
  };

  return (
    <div>
      <AdminNavBar /> 
      <div className="container py-5">
        <h2 className="text-center text-dark mb-5">Add New Scholarship</h2>
        
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div className="card shadow-lg rounded-3">
              <div className="card-header bg-primary text-white text-center py-4">
                <h4>Create Scholarship</h4>
              </div>
              
              <div className="card-body">
                <form onSubmit={handleAddScholarship}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Scholarship Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Enter scholarship name"
                      value={newScholarship.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      className="form-control"
                      placeholder="Provide a detailed description"
                      value={newScholarship.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="form-control"
                      placeholder="Enter scholarship amount"
                      value={newScholarship.amount}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-success w-100 py-2">Add Scholarship</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScholarship;
