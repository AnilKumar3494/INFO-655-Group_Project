import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    "My Experience",
    "Get in Touch",
    "About Us",
    "Our Services",
  ];

  return (
    <footer className="footerWrapper">
      <hr className="gradient" />
      <div className="footer-content">
        <div className="footer-heading">React Portfolio</div>

        {/* populating footer links dynamically */}
        {footerLinks.map((link, index) => (
          <div key={index}>
            <a href="#services">{link}</a>
          </div>
        ))}
        <div />
        <div className="footer-address">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <a href="https://drexel.edu/cci/" target="_blank" rel="noreferrer">
            3675 Market St 10th floor, Philadelphia, PA 19104, United States
          </a>
          <p className="footer-copyright">
            &copy; {currentYear} Team 655. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
