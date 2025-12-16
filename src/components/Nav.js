import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav container">
      <img src="/Assets/Logo.svg" alt="Little Lemon Logo" className="logo" />

      {/* Hamburger button */}
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        ☰
      </button>

      {/* Navigation links */}
      <ul className={`nav-list ${isOpen ? "show" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
        <li><Link to="/booking" onClick={closeMenu}>Reservations</Link></li>
        <li><Link to="/order" onClick={closeMenu}>Order Online</Link></li>
        <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
      </ul>

      {/* Desktop Cart */}
      <Link to="/cart" className="nav-cart-desktop cart-badge-link">
        <i className="cart-icon">🛒</i>
        {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
      </Link>
    </nav>
  );
}

export default Nav;
