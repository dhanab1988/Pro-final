import React, { useState } from 'react';

function Nav() {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav>
      <button 
        className="nav-toggle"
        aria-label="Toggle navigation"
        onClick={() => setNavActive(!navActive)}
      >
        ☰
      </button>
      <ul className={`nav-links ${navActive ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
        <li><a href="#">Reservations</a></li>
        <li><a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
