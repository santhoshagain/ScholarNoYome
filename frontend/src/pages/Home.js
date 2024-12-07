import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <>
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

      {/* Hero Section */}
      <div className="home-container">
        <section className="hero">
          <div className="hero-content">
            <h1>Empower Your Future with Scholarships</h1>
            <p>Unlock the door to educational opportunities with our curated list of scholarships.</p>
            <div className="cta-buttons">
              <Link to="/login" className="btn btn-primary btn-lg me-3">Sign In</Link>
              <Link to="/register" className="btn btn-success btn-lg">Join Us</Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="feature">
                  <img src="scholarship.svg" alt="Scholarships" className="feature-icon" />
                  <h2>Discover Scholarships</h2>
                  <p>Access a wide range of scholarships tailored to your needs.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <img src="register.svg" alt="Register" className="feature-icon" />
                  <h2>Quick Registration</h2>
                  <p>Get started in minutes and begin applying for financial aid opportunities.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature">
                  <img src="track.svg" alt="Track" className="feature-icon" />
                  <h2>Track Applications</h2>
                  <p>Stay updated on your scholarship applications and their status.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="home-footer py-3 bg-dark text-white">
          <div className="container text-center">
            <p>© 2024 Scholarship Portal | Empowering Education</p>
            <div>
              <Link className="footer-link" to="/about">About</Link> | <Link className="footer-link" to="/contact">Contact Us</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
