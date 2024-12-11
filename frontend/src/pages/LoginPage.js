import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import BACKEND_URL from './config';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Check if user is already logged in and redirect to dashboard
  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role === 'Student') {
      navigate('/Student-Dashboard');
    } else if (role === 'Admin') {
      navigate('/Admin-Dashboard');
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email.includes('@')) {
      alert('Please enter a valid email address with "@"');
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/login`, { email, password });

      alert(response.data.message);

      if (response.status === 200) {
        // Store user role in localStorage for session persistence
        localStorage.setItem('role', response.data.role);

        const userRole = response.data.role;
        if (userRole === 'Student') {
          navigate('/Student-Dashboard');
        } else if (userRole === 'Admin') {
          navigate('/Admin-Dashboard');
        }
      }
    } catch (error) {
      alert('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Scholarship Portal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Note Section */}
      <div className="container mt-3">
        <div
          className="alert alert-danger"
          role="alert"
          style={{ fontSize: '28px', marginBottom: '10px' }}
        >
          <strong>For testing purposes, you can use these credentials:</strong>
          <ul style={{ marginBottom: '5px', paddingLeft: '20px' }}>
            <li><strong>Admin Access</strong>: Email: <code>admin@admin</code>, Password: <code>admin</code></li>
            <li>
              <strong>Student Access</strong>: Email: <code>kumar@s</code>, Password: <code>Kumar@18</code>, 
              Student ID: <code>82</code>, Name: <code>Kumar</code>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="container d-flex justify-content-center align-items-center min-vh-100"
        style={{ marginTop: '-200px' }} // Reduce gap between the text and login fields
      >
        <div
  className="card shadow-lg"
  style={{
    width: '350px',
    borderRadius: '10px',
    padding: '20px',
    margin: '0 auto',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  }}
>
  <h2
    className="text-center"
    style={{
      fontSize: '20px',
      marginBottom: '20px',
      color: '#333',
    }}
  >
    Login
  </h2>
  <div className="mb-4">
    <input
      type="email"
      className="form-control"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={{
        fontSize: '14px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ced4da',
        width: '100%',
      }}
    />
  </div>
  <div className="mb-4">
    <input
      type="password"
      className="form-control"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{
        fontSize: '14px',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ced4da',
        width: '100%',
      }}
    />
  </div>
  <button
    onClick={handleLogin}
    style={{
      fontSize: '14px',
      padding: '10px 0',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      width: '100%',
    }}
  >
    Login
  </button>
</div>
</div>
    </>
  );
};

export default LoginPage;
