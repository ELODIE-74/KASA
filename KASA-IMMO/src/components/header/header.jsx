import React from "react";
import { Link } from "react-router-dom";
import "../../utils/style/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Kasa</div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/apropos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
