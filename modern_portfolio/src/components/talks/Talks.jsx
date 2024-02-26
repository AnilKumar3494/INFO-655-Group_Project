import React from "react";
import "./talks.css";

import CouroselSlider from "./CouroselSlider";

const TalksArray = [
  {
    title: "Git",
    content:
      " Git - A version control ----- Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, officiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quas iste delectus? Tempore, fugit minus!",
    url: "#",
  },
  {
    title: "Hooks",
    content:
      "HOOKS: consectetur adipisicing elit. Recusandae, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis incidunt vitae eveniet saepe quisquam suscipit magni autem accusamus odio sapiente sit nobis tempore amet modi, libero voluptate facilis dolorem nemo.",
    url: "#",
  },
  {
    title: "States",
    content:
      "STATE in REACT: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint sunt expedita? Iste doloremque blanditiis sint aperiam voluptatem libero impedit.",
    url: "#",
  },
  {
    title: "JavaScripy",
    content:
      "JavaScript: Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sint sunt expedita? Iste doloremque blanditiis sint aperiam voluptatem libero impedit.",
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
