import React, { useState, useEffect, useRef } from "react";
import backgroundImg from "../images/banner_background.jpg";

const SingleProject = ({ detailsLeft }) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const textAlignSide = detailsLeft ? "start" : "end";
  const translateInitial = detailsLeft
    ? "project-details-left"
    : "project-details-right";

  const projectDetailsRef = useRef(null);
  const projectImgRef = useRef(null);
  useEffect(() => {
    const detailsHeight =
      projectDetailsRef.current.getBoundingClientRect().height;
    projectImgRef.current.style.height = `${detailsHeight}px`;
  }, [isDetailsOpen]);

  return (
    <div
      className="single-project"
      onClick={() => setIsDetailsOpen(!isDetailsOpen)}
      // onMouseEnter={() => setIsDetailsOpen(true)}
      // onMouseLeave={() => setIsDetailsOpen(false)}
    >
      <img
        src={backgroundImg}
        alt="Project"
        className="project-img"
        ref={projectImgRef}
      />
      <div
        className={`project-details ${isDetailsOpen ? "show-details" : ""} ${
          detailsLeft ? "project-align-left" : "project-align-right"
        } ${translateInitial}`}
        ref={projectDetailsRef}
      >
        <h2 className="project-title ">Project Title</h2>
        <div className="words-container  project-domains ">
          <p className="word">lorem</p>
          <p className="word">lorem</p>
          <p className="word">lorem</p>
        </div>

        <p
          className=" project-desc "
          style={{
            textAlign: textAlignSide,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          debitis tempora quaerat fugit corrupti explicabo exercitationem porro
          quis ab veritatis!
        </p>
        <a href="#" className="btn  project-github-btn ">
          Go to Github
        </a>
      </div>
      <p className="project-helper">
        Click to {isDetailsOpen ? "close" : "see"} Project Details
      </p>
    </div>
  );
};

export default SingleProject;
