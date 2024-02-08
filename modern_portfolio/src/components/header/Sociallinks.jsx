import React from "react";
//Using React-icons from GitHub
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Sociallinks = () => {
  return (
    <div className="social_links">
      <a href="#Linkedin" target="_blank">
        <FaLinkedin />
      </a>
      <a href="#Linkedin" target="_blank">
        <FaGithub />
      </a>
      <a href="#Linkedin" target="_blank">
        <MdOutlineWeb />
      </a>
    </div>
  );
};

export default Sociallinks;
