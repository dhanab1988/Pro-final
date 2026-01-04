import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="footer-grid">

        {/* Logo */}
        <div>
          <img
            src={process.env.PUBLIC_URL + "/Assets/Logo.svg"}
            alt="Little Lemon Logo"
            className="footer-logo"
          />
        </div>

        {/* Navigation */}
        <nav aria-label="Doormat Navigation">
          <h4>Doormat Navigation</h4>
          <ul>
            <li><Link to="/"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Home
</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/booking">Reservations</Link></li>
            <li><Link to="/order">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Information */}
        <address>
          <h4>Contact</h4>
          <p>123 Main Street, Chicago, IL</p>
          <p>+1 234 567 890</p>
          <p>Email: info@littlelemon.com</p>
        </address>

        {/* Social Media Links */}
        <section>
          <h4>Social Media Links</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </section>

      </section>
    </footer>
  );
}

export default Footer;
