import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import "./footer.css";


const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footerWrapper">
            <hr className="gradient"/>
            <div className="footer-content">
                <div className="footer-heading">
                    React Portfolio
                </div>
                <div className="footer-links">
                    <a href="#experience">My Experience</a>
                    <a href="#contact">Get in Touch</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Our Services</a>
                </div>
                <div className="footer-address">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    <a href="https://drexel.edu/cci/" target="_blank" rel="noreferrer">3675 Market St 10th floor,
                        Philadelphia, PA 19104, United States</a>
                    <p className="footer-copyright">&copy; {currentYear} Team 655. All rights reserved.</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
