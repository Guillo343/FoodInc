import React from 'react';
import { Link } from 'react-router-dom';
import '../style/footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to='/privacy'>Privacy Policy</Link></li>
        <li><Link to='/terms'>Terms of Service</Link></li>
        <li><Link to='/sitemap'>Site Map</Link></li>
      </ul>
      <div className="footer-subscription">
        <h3>Subscribe to our Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <p>© 2024 FoodInc. All rights reserved.</p>
    </footer>
  );
};
