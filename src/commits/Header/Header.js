import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <ul className="header-menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="contato">
              <a href="#contato">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
