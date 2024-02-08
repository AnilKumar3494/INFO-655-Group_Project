import React from "react";
import { useState, useEffect } from "react";

import "./header.css";
import Calltoaction from "./Calltoaction";
import Sociallinks from "./Sociallinks";

//Arrow down icon
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  //Add our images and then make it into a corousel
  const imgLinks = [];

  //group members names
  const [currentIndex, setCurrentIndex] = useState(0);
  const userName = {
    names: ["AK", "WU", "DC", "MC"],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % userName.names.length);
    }, 1500); //

    return () => clearInterval(intervalId);
  }, [userName.names.length]);

  return (
    <header>
      <div className="container header_container">
        <h5>Hello, we are</h5>
        <h1>{userName.names[currentIndex]}</h1>
        <h5 className="text-light">A Team of Engineers && Devs</h5>

        <h4>This Page is portfolio of #team member name</h4>

        <Calltoaction />

        <div className="our-imgs">
          <img src={imgLinks} alt="our images" />
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down <FaArrowRight />
        </a>

        <Sociallinks />
      </div>
    </header>
  );
};

export default Header;
