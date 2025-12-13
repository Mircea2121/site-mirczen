import React from "react";
import "./SocialLinks.css";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section id="socials" className="social-section">
      <h2>Find me on social media</h2>

      <div className="social-grid">

        <div className="social-card tiktok">
          <FaTiktok className="icon-large" />
          <h3>TikTok</h3>
          <p>@mirczenn</p>
          <a href="https://www.tiktok.com/@mirczenn" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="visit-btn">
             Visit profile
            </a>
        </div>

        <div className="social-card instagram">
          <FaInstagram className="icon-large" />
          <h3>Instagram</h3>
          <p>@mirczen</p>
          <a href="https://www.instagram.com/mirczen" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="visit-btn">
             Visit profile
            </a>
        </div>

        <div className="social-card youtube">
          <FaYoutube className="icon-large" />
          <h3>YouTube</h3>
          <p>MircZen</p>
          <a href="https://www.youtube.com/@MircZen" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="visit-btn">
             Visit channel
            </a>
        </div>

        <div className="social-card facebook">
          <FaFacebook className="icon-large" />
          <h3>Facebook</h3>
          <p>MircZen</p>
          <a href="https://www.facebook.com/profile.php?id=61564404992684" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="visit-btn">
             Visit page
            </a>
        </div>

      </div>
    </section>
  );
};

export default SocialLinks;
