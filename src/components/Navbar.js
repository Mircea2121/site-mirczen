
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <span className="logo">MircZen</span>
        </div>

        <div className="navbar-right">
          <a href="#socials">Social</a>
          <a href="#about">About</a>
          <a href="#recipes">Recipes</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
