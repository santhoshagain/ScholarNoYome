import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const lightBlue = '#48C6EF';
  const darkBlue = '#6F86D6';
  const textColor = '#444';

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: lightBlue, padding: '0.8rem 1rem' }}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'white' }}>Scholarship Portal</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ color: 'white' }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ fontSize: '1rem', color: 'white' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Student-Dashboard" style={{ fontSize: '1rem', color: 'white' }}>Scholarships</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ fontSize: '1rem', color: 'white' }}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{ fontSize: '1rem', color: 'white' }}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ 
        background: `linear-gradient(135deg, ${lightBlue} 0%, ${darkBlue} 100%)`, 
        height: '80vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        color: 'white', 
        padding: '0 20px' 
      }}>
        <div className="hero-content" style={{ maxWidth: '600px', textAlign: 'center', animation: 'fadeIn 1.5s ease-in' }}>
          <h1 style={{ fontSize: '3.2rem', fontWeight: 'bold' }}>Empower Your Future with Scholarships</h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Unlock the door to educational opportunities with our curated list of scholarships.</p>
          <div>
            <Link to="/login" className="btn btn-primary btn-lg me-3" style={{ borderRadius: '30px', transition: 'transform 0.3s' }}>Sign In</Link>
            <Link to="/register" className="btn btn-success btn-lg" style={{ borderRadius: '30px', transition: 'transform 0.3s' }}>Join Us</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5" style={{ backgroundColor: '#f4f4f9' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature" style={{ textAlign: 'center', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                <h2 style={{ fontSize: '1.5rem', color: lightBlue }}>Discover Scholarships</h2>
                <p style={{ fontSize: '1rem', color: '#666' }}>Access a wide range of scholarships tailored to your needs.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature" style={{ textAlign: 'center', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                <h2 style={{ fontSize: '1.5rem', color: lightBlue }}>Quick Registration</h2>
                <p style={{ fontSize: '1rem', color: '#666' }}>Get started in minutes and begin applying for financial aid opportunities.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature" style={{ textAlign: 'center', background: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', transition: 'transform 0.3s' }}>
                <h2 style={{ fontSize: '1.5rem', color: lightBlue }}>Track Applications</h2>
                <p style={{ fontSize: '1rem', color: '#666' }}>Stay updated on your scholarship applications and their status.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer py-3" style={{ backgroundColor: '#2d3436', color: 'white' }}>
        <div className="container text-center">
          <p>© 2024 Scholarship Portal | Empowering Education</p>
          <div>
            <Link className="footer-link" to="/about" style={{ color: lightBlue, textDecoration: 'none' }}>About</Link> | 
            <Link className="footer-link" to="/contact" style={{ color: lightBlue, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
