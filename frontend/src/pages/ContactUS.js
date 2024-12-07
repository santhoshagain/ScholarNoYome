import React from 'react';
import { Link } from 'react-router-dom';

const ContactUS = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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

      {/* Contact Us Section */}
      <section className="container py-5 flex-grow-1">
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
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p>&copy; 2024 Scholarship Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUS;
