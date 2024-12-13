import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>NYT Movie Reviews</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/moviereviews">Reviews</Link>
        <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}

export default Header;
