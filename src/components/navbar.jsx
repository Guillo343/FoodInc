import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/logoAlt.png" alt="Logo" /> FoodInc</a>
      </div>
      <div className='navbar-toggle' onClick={toggleMenu}>&#9776;</div>
      <ul className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <li><Link className="underlineLink" to='/search' onClick={toggleMenu}>Search</Link></li>
        <li><Link className="underlineLink" to='/recipes' onClick={toggleMenu}>Recipes</Link></li>
        <li><Link className="underlineLink" to='/about' onClick={toggleMenu}>About</Link></li>
        <li><Link className="underlineLink" to='/contact' onClick={toggleMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};
