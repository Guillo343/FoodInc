import React from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/logoAlt.png" alt="Logo" /> FoodInc</a>
      </div>
      <ul className="navbar-menu">
        <li><Link className="underlineLink" href="/search">Search</Link></li>
        <li><Link className="underlineLink" href="/recipes">Recipes</Link></li>
        <li><Link className="underlineLink" href="/about">About</Link></li>
        <li><Link className="underlineLink" href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};
