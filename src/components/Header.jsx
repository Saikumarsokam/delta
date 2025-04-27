import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/portfolio-details">Portfolio Details</Link> | 
        <Link to="/service-details">Service Details</Link> | 
        <Link to="/starter-page">Starter Page</Link>
      </nav>
    </header>
  );
}

export default Header;
