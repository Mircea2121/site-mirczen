import React from "react";
import "./Hero.css";
import { FaTiktok, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>MircZen</h1>
        <p>Cooking & ASMR videos</p>

       <div className="hero-buttons">
          <a
            href="https://www.tiktok.com/@mirczenn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn tiktok"
           >
           <FaTiktok className="icon" />
          TikTok
            </a>

          <a
            href="https://www.instagram.com/mirczen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn instagram"
           >
           <FaInstagram className="icon" />
         Instagram
          </a>

          <a
            href="https://www.youtube.com/@MircZen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn youtube"
           >
           <FaYoutube className="icon" />
         YouTube
           </a>

           <a
             href="https://www.facebook.com/profile.php?id=61564404992684"
             target="_blank"
             rel="noopener noreferrer"
            className="btn facebook"
            >
           <FaFacebook className="icon" />
         Facebook
           </a>
     </div>
   </div>
</section>
  );
};

export default Hero;
