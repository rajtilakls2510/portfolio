import React from "react";
import SingleProject from "./SingleProject";
import projectDetails from "../projectDetails";

const Projects = () => {
  return (
    <section className="projects-section">
      <h3 id="projects">Projects that i have worked on: </h3>
      <div className="underline"></div>

      <div className="project-container">
        {projectDetails.map((project, index) => {
          return (
            <SingleProject
              key={index}
              {...project}
              detailsLeft={index % 2 === 0}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
