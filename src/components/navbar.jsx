import React from 'react';
import '../style/navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="../../public/logoAlt.png" alt="Logo" /> FoodInc</a>
      </div>
      <ul className="navbar-menu">
        <li><a className="underlineLink" href="/search">Search</a></li>
        <li><a className="underlineLink" href="/recipes">Recipes</a></li>
        <li><a className="underlineLink" href="/about">About</a></li>
        <li><a className="underlineLink" href="/contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};
