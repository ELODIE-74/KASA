import React from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logoheader.png";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoHeader} alt="Logo Kasa" />
      </div>
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
