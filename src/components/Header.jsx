import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/">#vanlife</Link>
      </h1>
      <nav className="nav">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}

export default Header;
