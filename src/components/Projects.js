import React from "react";

import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="projects-section">
      <h3>Projects that i have worked on: </h3>
      <div className="underline"></div>

      <div className="project-container">
        <SingleProject detailsLeft={true} />
        <SingleProject detailsLeft={false} />
        <SingleProject detailsLeft={true} />
        <SingleProject detailsLeft={false} />
      </div>
    </section>
  );
};

export default Projects;
