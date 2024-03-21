import React from "react";
import "./about.css";
import TeamImg from '../../assets/team.png'
import { FiUsers } from "react-icons/fi";
import { TfiBlackboard } from "react-icons/tfi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const imgLinks = [];

  const cardsData = [
    { icon: <FiUsers />, title: "Team", description: "4 Developers" },
    { icon: <TfiBlackboard />, title: "Course", description: "INFO 655" },
    { icon: <VscFolderLibrary />, title: "Project", description: "Portfolio" },
  ];

  return (
    <section id="about">
      <h4>Get to Know</h4>
      <h2>About Us</h2>

      <div className="about_container">
        <div className="about_us">
          <div className="about_us-image">
            <img src={TeamImg} alt="Our image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            {cardsData.map((card, index) => (
              <article key={index} className="about_card">
                <div className="about_icon">{card.icon}</div>
                <h5>{card.title}</h5>
                <small>{card.description}</small>
              </article>
            ))}
          </div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              nesciunt vero a autem. Tempora molestiae ducimus, quia atque eaque,
              reprehenderit at aliquid consequatur deleniti iusto qui sunt ipsam
              sed expedita.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk!
            </a>
        </div>
      </div>
    </section>
  );
};

export default About;
