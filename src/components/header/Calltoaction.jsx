import React from "react";

const Calltoaction = () => {
  const resumeLink = "";
  return (
    <div className="call_to_action">
      <a className="btn" href={resumeLink}>
        My Resume
      </a>
      <a className="btn btn_primary" href="#contact">
        Get in Touch
      </a>
    </div>
  );
};

export default Calltoaction;
