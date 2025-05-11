import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="crypto-header">
      <div className="logo">Crypto<span>Recommend</span></div>
      <nav>
        <ul className="nav-links">
          <li><a href="#recommendations">Recommendations</a></li>
          <li><a href="#market">Market</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
