import React from "react";
import "./talks.css";

import CouroselSlider from "./CouroselSlider";

const TalksArray = [
  {
    title: "Git",
    content:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, officiis.",
    url: "www.google.com",
  },
  {
    title: "Hooks",
    content: "HOOKS: consectetur adipisicing elit. Recusandae, officiis.",
    url: "www.google.com",
  },
  {
    title: "States",
    content: "HOOKS: consectetur adipisicing elit. Recusandae, officiis.",
    url: "www.google.com",
  },
];

const Talks = () => {
  return (
    <div>
      <section className="courosel_main">
        <h2>Talks</h2>
        <CouroselSlider slideHeadings={TalksArray} />
      </section>
    </div>
  );
};

export default Talks;
