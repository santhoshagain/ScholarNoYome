import React, { useState } from 'react';
import './styles/RegisterPage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import BACKEND_URL from './config';
import 'bootstrap/dist/css/bootstrap.min.css'; // Include Bootstrap

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); // Default role
  const navigate = useNavigate();

  const validateInputs = () => {
    if (name.trim().length < 3) {
      alert('Name must be at least 3 characters long.');
      return false;
    }

    if (!email.includes('@')) {
      alert('Please enter a valid email address with "@"');
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character.'
      );
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/signup`, {
        name,
        email,
        password,
        role,
      });

      alert(response.data.message);
      if (response.status === 200) {
        navigate('/login'); // Redirect to login page
      }
    } catch (error) {
      alert('Error during signup');
      console.error('Signup error:', error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">ScholarNoYome</Link>
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Register Page Content */}
      <div className="register-container">
        <div className="register-card">
          <h2>Create an Account</h2>
          <p>Sign up to start applying for scholarships and tracking your applications.</p>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <button onClick={handleRegister} className="btn btn-primary w-100">
            Register
          </button>
          <p className="mt-3">
            Already have an account? <Link to="/login">Login here</Link>.
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
