import React from "react";
//Using React-icons from GitHub
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Sociallinks = () => {
  return (
<<<<<<< Updated upstream
    <div className="social_links">
      <a href="#Linkedin" target="_blank">
        <FaLinkedin />
      </a>
      <a href="#Linkedin" target="_blank">
=======
    <div className="social_links_container">
      <div className="social_links">
        {/* Dynamically updating values */}
        {socialDetails.map((socialDetail, index) => (
          <a
            href={socialDetail.href}
            key={index}
            title={socialDetail.title}
            target="_blank"
          >
            {socialDetail.icon}
          </a>
        ))}

        {/* <a href="#Linkedin" target="_blank">
>>>>>>> Stashed changes
        <FaGithub />
      </a>
      <a href="#Linkedin" target="_blank">
        <MdOutlineWeb />
<<<<<<< Updated upstream
      </a>
=======
      </a> */}
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Sociallinks;
