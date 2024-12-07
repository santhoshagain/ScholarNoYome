import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';


const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empower Your Future with Scholarships</h1>
          <p>Unlock the door to educational opportunities with our curated list of scholarships.</p>
          <div className="cta-buttons">
            <Link to="/login" className="btn login-btn">Sign In</Link>
            <Link to="/register" className="btn register-btn">Join Us</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <img src="scholarship.svg" alt="Scholarships" className="feature-icon"/>
          <h2>Discover Scholarships</h2>
          <p>Access a wide range of scholarships tailored to your needs.</p>
        </div>
        <div className="feature">
          <img src="register.svg" alt="Register" className="feature-icon"/>
          <h2>Quick Registration</h2>
          <p>Get started in minutes and begin applying for financial aid opportunities.</p>
        </div>
        <div className="feature">
          <img src="track.svg" alt="Track" className="feature-icon"/>
          <h2>Track Applications</h2>
          <p>Stay updated on your scholarship applications and their status.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-card">
          <p>“This platform helped me find the perfect scholarship to fund my education. It's super easy to use!”</p>
          <h4>- John Doe, Scholarship Recipient</h4>
        </div>
        <div className="testimonial-card">
          <p>“I managed to apply to multiple scholarships in just a few clicks. Amazing experience!”</p>
          <h4>- Jane Smith, University Student</h4>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <img src="partner1.svg" alt="Partner 1" className="partner-logo"/>
          <img src="partner2.svg" alt="Partner 2" className="partner-logo"/>
          <img src="partner3.svg" alt="Partner 3" className="partner-logo"/>
          <img src="partner4.svg" alt="Partner 4" className="partner-logo"/>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I apply for a scholarship?</h3>
          <p>You can browse through available scholarships and apply by filling out the application form online.</p>
        </div>
        <div className="faq-item">
          <h3>What do I need to register?</h3>
          <p>All you need is your email address, some basic personal information, and your academic details.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Scholarship Journey?</h2>
        <p>Sign up today and gain access to hundreds of scholarships tailored just for you.</p>
        <Link to="/register" className="btn large-btn">Register Now</Link>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>© 2024 Scholarship Portal | Empowering Education</p>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
