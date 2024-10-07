import React, { useState } from 'react';
import './styles/LoginPage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Use the environment variable for the backend URL
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email,
        password,
      });

      alert(response.data.message);
      if (response.status === 200) {
        navigate('/Student-Dashboard'); // Redirect to dashboard after successful login
      }
    } catch (error) {
      alert('Invalid credentials');
      console.error('Login error:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Your Account</h2>
        <p>Access your scholarship portal by logging in below.</p>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} className="login-btn">Login</button>
        <p className="signup-link">
          Don't have an account? <Link to="/register">Sign up here</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
