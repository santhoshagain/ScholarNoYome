import React, { useState } from 'react';
import './styles/RegisterPage.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student'); // Default role
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        name,
        email,
        password,
        role, // Include role in the request
      });

      alert(response.data.message);
      if (response.status === 200) {
        navigate('/login'); // Redirect to login page after successful signup
      }
    } catch (error) {
      alert('Error during signup');
      console.error('Signup error:', error);
    }
  };

  return (
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
        <button onClick={handleRegister} className="register-btn">Register</button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>.
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
