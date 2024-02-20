import React from "react";
import "./talks.css";

import CouroselSlider from "./CouroselSlider";

const TalksArray = [
  {
    title: "Git",
    content:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, officiis.",
    url: "#",
  },
  {
    title: "Hooks",
    content: "HOOKS: consectetur adipisicing elit. Recusandae, officiis.",
    url: "#",
  },
  {
    title: "States",
    content:
      "HOOKS: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint sunt expedita? Iste doloremque blanditiis sint aperiam voluptatem libero impedit.",
    url: "#",
  },
];

const Talks = () => {
  return (
    <div>
      <section className="courosel_main">
        <h5>Things I am Learning</h5>
        <h2>Concepts & Talks</h2>
        <CouroselSlider slideHeadings={TalksArray} />
      </section>
    </div>
  );
};

export default Talks;
