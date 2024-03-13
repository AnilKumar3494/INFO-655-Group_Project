import React from "react";
import "./projects.css";
import projectList from "./projectList";
import ProjectBuilder from "./projectBuilder";

function Projects() {
  return (
    <main>
      <section id="projects" className="projects_section">
        <h2>
          <span>My Projects</span>
        </h2>
        <dl className="project">{projectList.map(createEntry)}</dl>
      </section>
    </main>
  );
}

function createEntry(demo) {
  return (
    <ProjectBuilder
      key={demo.id}
      image={demo.image}
      name={demo.name}
      link={demo.link}
      description={demo.description}
    />
  );
}

export default Projects;
