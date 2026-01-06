import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;
      if (menuOpen && !menuRef.current.contains(event.target)) {       
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* LEFT */}
        <div className="navbar-left">
          <span className="logo">MircZen</span>
        </div>

        {/* RIGHT */}
        <div className="navbar-right" ref={menuRef}>
          {/* Hamburger button */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Dropdown menu */}
          <div className={`menu-dropdown ${menuOpen ? "open" : ""}`}>
            <a href="/#socials" onClick={() => setMenuOpen(false)}>
              Social
            </a>
            <a href="/#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <Link to="/recipes" onClick={() => setMenuOpen(false)}>
              Recipes
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
