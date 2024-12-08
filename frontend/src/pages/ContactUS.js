import React from 'react';
import { Link } from 'react-router-dom';

const ContactUS = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#3498db', width: '100%' }}>
        <div className="container-fluid"> {/* Full width container */}
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

      {/* Contact Us Section */}
      <section className="container-fluid py-5 flex-grow-1" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div className="section-title text-center mb-5">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us through the following contact details.</p>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="contact-detail">
              <h4>Email</h4>
              <p>contact@scholarshipportal.com</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-detail">
              <h4>Phone</h4>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-detail">
              <h4>Address</h4>
              <p>123 Scholarship Street, Education City, ABC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto" style={{ width: '100%' }}>
        <p>&copy; 2024 Scholarship Portal. All rights reserved.</p>
      </footer>

      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fc;
            margin: 0; /* Ensure no margin around the body */
            padding: 0; /* Ensure no padding around the body */
            width: 100%; /* Full width */
          }
          .section-title h2 {
            font-size: 2.5rem;
            color: #333;
            font-weight: 600;
          }
          .section-title p {
            font-size: 1rem;
            color: #555;
          }
          .contact-detail h4 {
            font-size: 1.5rem;
            color: #3498db;
            font-weight: 600;
          }
          .contact-detail p {
            color: #555;
          }
          footer {
            background-color: #2c3e50;
            color: white;
            padding: 20px 0;
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default ContactUS;
