import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import {Link as RouterLink}from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp
} from "react-icons/fa";

const Footer = () => {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>
            HORYZEN <br />
            Technologies
          </h2>

          <p>
            Empowering Students, Startups &
            Businesses Through Innovation,
            Technology, and Real-World Learning.
          </p>

          <div className="social-links">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/company/horyzen-technologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.instagram.com/horyzen_technologies?igsh=MWtkbTR1YW8ydjN1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>Quick Links</h3>


          <Link
            to="home"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Home
          </Link>

          <Link
            to="services"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Services
          </Link>

          <Link
            to="about"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            About
          </Link>



          <Link
            to="contact"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Contact
          </Link>

        </div>

        {/* SERVICES */}

        <div className="footer-links">

          <h3>Services</h3>

          <Link
            to="services"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Web Development
          </Link>
            <Link
            to="services"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            AI Solutions
          </Link>
          <Link
            to="why"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Why Horyzen
          </Link>
    
            <Link
            to="contact"
            smooth
            duration={800}
            className="foot-links"
            offset={window.innerWidth > 768 ? -50 : -40}
          >
            Consulting
          </Link>


          
          <RouterLink to="/apply-internship">
            Internships
          </RouterLink>

        </div>

        {/* CONTACT */}

        <div className="footer-links">

          <h3>Contact</h3>

          <a href="mailto:horyzentechnologies@gmail.com">
            horyzentechnologies@gmail.com
          </a>

          <a href="tel:+919156776198">
            +91 9156776198
          </a>

          <span>
            India
          </span>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Horyzen Technologies.
          All Rights Reserved.
        </p>

        <button
          className="scroll-top"
          onClick={scrollTop}
        >
          <FaArrowUp />
        </button>

      </div>

    </footer>
  );
};

export default Footer;