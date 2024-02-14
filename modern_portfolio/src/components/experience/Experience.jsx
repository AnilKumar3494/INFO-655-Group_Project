import React from "react";
import "./experience.css";
// import { FaCheckCircle } from "react-icon/bs";
// import { FaCheckCircle } from "react-icons/fa";
import SkillsDisplay from "./SkillsDisplay";

const Experience = () => {
  const frontEndSkillsData = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Experienced" },
    { skill: "JavaScript", level: "Experienced" },
    { skill: "React", level: "Intermediate" },
    { skill: "Bootstrap", level: "Intermediate" },
    { skill: "Tailwind", level: "Basic" },
  ];

  const backendSkillsData = [
    { skill: "MySQL", level: "Intermediate" },
    { skill: "Python", level: "Intermediate" },
    { skill: "Node.js", level: "Intermediate" },
    { skill: "MongoDB", level: "Basic" },
    { skill: "Express", level: "Basic" },
  ];

  return (
    <section id="experience" className="experience">
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          {/* custom component to display skills dynamically*/}
          <SkillsDisplay skillsData={frontEndSkillsData} />
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <SkillsDisplay skillsData={backendSkillsData} />
        </div>
      </div>
    </section>
  );
};

export default Experience;

{
  /* <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */
}

{
  /* <div className="experience_content">
            UPDATING DYNAMICALLY
            {backendSkillsData.map((backendExpertise, expIndex) => (
              <article className="experience_details" key={expIndex}>
                <FaCheckCircle className="experience_details-icon" />
                <div>
                  <h4>{backendExpertise.skill}</h4>
                  <small>{backendExpertise.level}</small>
                </div>
              </article>
            ))}
          </div> */
}
