import React, { useState, useEffect } from "react";
import "./nav.css";

import { FaHome, FaUser, FaFileCode, FaBlog } from "react-icons/fa";

import { MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /**const [activeIndex, setActiveIndex] = useState(0);*/

  const navItems = [
    { icon: <FaHome />, toolTip: "Home", id: "#header", url: "#" },
    { icon: <FaUser />, toolTip: "User", id: "#about", url: "#" },
    { icon: <FaBlog />, toolTip: "Message", id: "#services", url: "#"},
    { icon: <FaFileCode />, toolTip: "Experience", id: "#projects", url: "#"},
    { icon: <MdOutlineMessage />, toolTip: "Message", id: "#contact", url: "#"}
  ];

  /*function activeClass() {
    return "active";
  }*/

  return (
    <nav>
      {navItems.map((item, itemIndex) => (
        <div className="nav_items" key={itemIndex}>
          <a
            href={item.id}
            title={item.toolTip}
            onClick={() => setActiveIndex(itemIndex)}
            className={activeNav === item.id ? "active" : ""}
            /*className={itemIndex === activeIndex ? "active" : ""}*/
          >
            {item.icon}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Nav;