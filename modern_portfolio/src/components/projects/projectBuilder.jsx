import React from "react";
import "./projects.css";

function projectBuilder(props) {
  return (
    <div className="item">
      <dt>
        <span className="image" role="img">
          <img src={props.image} />
        </span>
        <span>{props.name}</span>
      </dt>
      <button className="btn">
        <a href={props.link}>Live Demo</a>
      </button>
      <dd>{props.description}</dd>
    </div>
  );
}

export default projectBuilder;
