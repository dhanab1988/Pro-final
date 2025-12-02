import React from 'react';
import Nav from './Nav';
import lemonIcon from './Assets/Logo .svg';

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={lemonIcon} alt="Lemon Logo" />
       
      </div>
      <Nav />
    </header>
  );
}

export default Header;
