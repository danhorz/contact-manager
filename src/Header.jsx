// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Contact Manager</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;