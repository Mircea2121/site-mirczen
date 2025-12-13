import React from "react";
import "./Footer.css";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer-title">MircZen</h3>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#socials">Social</a>
        <a href="#about">About</a>
      </div>

      <div className="footer-socials">
        <a href="https://www.tiktok.com/@mirczenn" 
           target="_blank" 
           rel="noopener noreferrer">
  <        FaTiktok className="footer-icon" />
        </a>

        <a href="https://www.instagram.com/mirczen" 
           target="_blank" 
           rel="noopener noreferrer">
  <        FaInstagram  className="footer-icon" />
        </a>
        <a href="https://www.youtube.com/@MircZen" 
           target="_blank" 
           rel="noopener noreferrer">
  <        FaYoutube className="footer-icon" />
        </a>
       <a href="https://www.facebook.com/profile.php?id=61564404992684" 
           target="_blank" 
           rel="noopener noreferrer">
  <        FaFacebook className="footer-icon" />
        </a>
      </div>

      <p className="copyright">© {new Date().getFullYear()} MircZen. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
