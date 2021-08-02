import React, { useState } from "react";
import backgroundImg from "../images/banner_background.jpg";

const SingleProject = ({ detailsLeft }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const sideMargin = "5%";
  const alignSide = detailsLeft ? "left" : "right";
  const textAlignSide = detailsLeft ? "start" : "end";
  const translateInitial = detailsLeft
    ? "project-details-left"
    : "project-details-right";

  return (
    <div
      className="single-project"
      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
      onMouseEnter={() => setIsDetailsOpen(true)}
      onMouseLeave={() => setIsDetailsOpen(false)}
    >
      <img src={backgroundImg} alt="Project Image" className="project-img" />
      {isDetailsOpen && <div className="img-after"></div>}
      <h2
        className={`project-title ${translateInitial} ${
          isDetailsOpen && "show-details"
        }`}
        style={{ [alignSide]: sideMargin }}
      >
        Project Title
      </h2>
      <div
        className={`words-container ${translateInitial} project-domains ${
          isDetailsOpen && "show-details"
        }`}
        style={{ [alignSide]: sideMargin }}
      >
        <p className="word">lorem</p>
        <p className="word">lorem</p>
        <p className="word">lorem</p>
      </div>

      <p
        className={`${translateInitial} project-desc ${
          isDetailsOpen && "show-details"
        }`}
        style={{
          [alignSide]: sideMargin,
          textAlign: textAlignSide,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis debitis
        tempora quaerat fugit corrupti explicabo exercitationem porro quis ab
        veritatis!
      </p>
      <a
        href=""
        className={`btn ${translateInitial} project-github-btn ${
          isDetailsOpen && "show-details"
        }`}
        style={{ [alignSide]: sideMargin }}
      >
        Go to Github
      </a>
      <p className="project-helper">Click to see Project Details</p>
    </div>
  );
};

export default SingleProject;
