import React from 'react'
import './../style/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">FoodInc</a>
      </div>
      <ul className="navbar-menu">
        <li><a href="/recipes">Recipes</a></li>
        <li><a href="/how-to">How-To</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}
