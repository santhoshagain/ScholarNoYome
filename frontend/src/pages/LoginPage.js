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

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card shadow-lg p-4" style={{ width: '400px', borderRadius: '10px' }}>
          <h2 className="text-center mb-4">Login</h2>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
