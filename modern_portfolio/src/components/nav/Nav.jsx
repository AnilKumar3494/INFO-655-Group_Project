import React, { useState } from "react";
import "./nav.css";

import { FaHome, FaUser, FaFileCode, FaBlog } from "react-icons/fa";

import { MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { icon: <FaHome />, toolTip: "Home", id: "#", url: "#" },
    { icon: <FaUser />, toolTip: "User", id: "#", url: "#" },
    {
      icon: <FaBlog />,
      toolTip: "Message",
      id: "#",
      url: "#",
    },
    {
      icon: <FaFileCode />,
      toolTip: "Experience",
      id: "#experience",
      url: "#",
    },
    {
      icon: <MdOutlineMessage />,
      toolTip: "Message",
      id: "#contact",
      url: "#",
    },
  ];

  function activeClass() {
    return "active";
  }

  return (
    <nav>
      {navItems.map((item, itemIndex) => (
        <div className="nav_items" key={itemIndex}>
          <a
            href={item.id}
            title={item.toolTip}
            onClick={() => setActiveIndex(itemIndex)}
            className={itemIndex === activeIndex ? "active" : ""}
          >
            {item.icon}
          </a>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
