import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <img
        src="/Assets/Logo.svg"
        alt="Little Lemon Logo"
        className="logo"
      />

      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={`nav-list ${isOpen ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>

        {/* Cart Badge inside menu for mobile */}
        <li className="nav-cart-mobile">
          <CartBadge />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
