import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/painting">Painting</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/info">Info</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;