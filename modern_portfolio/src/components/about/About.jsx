import React from "react";
import "./about.css";
import { FiUsers } from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  const cardsData = [
    { icon: <FiUsers className="about_icon" />, title: 'Team', description: '4 Developers' },
    { icon: <VscFolderLibrary className="about_icon" />, title: 'Project', description: '5+ Completed' },
    { icon: <FiUsers className="about_icon" />, title: 'Team', description: '4 developers' }
  ];

  return(
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Us</h2>

      <div className="container about_container">
        <div className="about_us">
          <div className="about_us-image">
            <img src={imgLinks} alt="our images" /> 
          </div>
        </div>

        <div className="about_container">
          <div className="about_cards">
            {cardsData.map((card, index) => (
              <article key={index} className="about_card">
                {card.icon}
                <h5>{card.title}</h5>
                <small>{card.description}</small>
              </article>
              ))}
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nesciunt vero a autem. 
            Tempora molestiae ducimus, quia atque eaque, reprehenderit at aliquid consequatur 
            deleniti iusto qui sunt ipsam sed expedita.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk!</a>
        </div>
      </div>
    </section>
  )
};

export default About;
