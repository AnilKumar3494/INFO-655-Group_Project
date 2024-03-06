import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import {FaArrowLeft} from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        {title: "About Us", linkId: "about"},
        {title: "My Experience", linkId: "experience"},
        {title: "My Projects", linkId: "projects"},
        {title: "Concepts & Talks", linkId: "talks"},
        {title: "Contact Me", linkId: "contact"},

    ];

    return (
        <footer className="footerWrapper">
            <hr className="gradient"/>
            <div className="footer-content">
                <div className="footer-heading">React Portfolio</div>

                {/* populating footer links dynamically */}
                {footerLinks.map((link, index) => (
                    <div key={index}>
                        <a href={`#${link.linkId}`}>{link.title}</a>
                    </div>
                ))}
                <a href="#header" className="scroll_up">
                    <FaArrowLeft/> Scroll Up
                </a>
                <div/>
                <div className="footer-address">
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
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
