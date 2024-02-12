import React from "react";
import "./experience.css";
// import { FaCheckCircle } from "react-icon/bs";
import { FaCheckCircle } from "react-icons/fa";

const SkillsDisplay = ({ skillsData }) => {
  return (
    <div className="experience_content">
      {skillsData.map((expertise, index) => (
        <article className="experience_details" key={index}>
          <FaCheckCircle className="experience_details-icon" />
          <div>
            <h4>{expertise.skill}</h4>
            <small className="text-light">{expertise.level}</small>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SkillsDisplay;

{
  /* <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCheckCircle className="experience_details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Basic</small>
              </div>
            </article> */
}
