import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import teamMember1 from './assets/images/teamMember1.jpg';
import teamMember2 from './assets/images/teamMember2.jpg';
import teamMember3 from './assets/images/teamMember3.jpg';

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#3498db' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">Scholarship Portal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Student-Dashboard">Scholarships</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Our Team</h1>
        <p>We are a passionate group of professionals dedicated to making a difference.</p>
      </section>

      {/* About Us Section */}
      <section className="container py-5">
        <div className="section-title">
          <h2>About Us</h2>
          <p>Our mission is to create meaningful impact through innovation and teamwork.</p>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="about-card text-center">
              <img src={teamMember1} alt="Team Member 1" />
              <div className="team-member">
                <h5>Santhosh Kumar CH</h5>
                <p>Backend</p>
                <p>Cyber Security</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="about-card text-center">
              <img src={teamMember2} alt="Team Member 2" />
              <div className="team-member">
                <h5>Raja N</h5>
                <p>Frontend</p>
                <p>Cyber Security</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="about-card text-center">
              <img src={teamMember3} alt="Team Member 3" />
              <div className="team-member">
                <h5>Yaswanth N</h5>
                <p>Database</p>
                <p>Cyber Security</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container py-5 text-center">
        <h2>Get in Touch</h2>
        <p>Have questions or want to collaborate? We'd love to hear from you!</p>
        <Link to="/contact">
          <button className="contact-button">
            Contact Us
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2024 Scholarship Portal. All rights reserved.</p>
      </footer>

      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fc;
          }
          .hero-section {
            background: linear-gradient(135deg, #6c5ce7, #00bcd4);
            color: white;
            padding: 50px 0;
            text-align: center;
          }
          .hero-section h1 {
            font-size: 3rem;
            font-weight: bold;
          }
          .section-title {
            font-size: 2rem;
            margin-bottom: 30px;
            text-align: center;
            color: #333;
            font-weight: 600;
          }
          .about-card {
            background-color: #ffffff;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            padding: 30px;
            margin: 20px 0;
          }
          .about-card img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .team-member {
            text-align: center;
          }
          .team-member h5 {
            font-size: 1.5rem;
            color: #333;
            font-weight: 500;
          }
          .team-member p {
            color: #555;
          }
          .contact-button {
            background-color: #6c5ce7;
            color: white;
            border-radius: 30px;
            padding: 10px 20px;
            text-transform: uppercase;
            font-weight: bold;
            border: none;
            transition: background-color 0.3s;
          }
          .contact-button:hover {
            background-color: #00bcd4;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default AboutUs;
