import React from "react";
import "./projects.css";

function projectBuilder(props) {
  return (
    <div className="project_container">
      <dt>
        <span className="image" role="img">
          <img src={props.image} />
        </span>
        <h2>{props.name}</h2>
      </dt>
      <dd>{props.description}</dd>
      <button className="btn_projects">
        <a className="btn_projects" href={props.link} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </button>
    </div>
  );
}

export default projectBuilder;
