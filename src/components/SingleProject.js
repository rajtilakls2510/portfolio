import React, { useState, useEffect, useRef } from "react";

const SingleProject = ({ title, domains, desc, img, github, detailsLeft }) => {
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
        src={img}
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
        <h2 className="project-title ">{title}</h2>
        <div className="words-container  project-domains ">
          {domains.map((domain, index) => {
            return (
              <p key={index} className="word">
                {domain}
              </p>
            );
          })}
        </div>

        <p
          className=" project-desc "
          style={{
            textAlign: textAlignSide,
          }}
        >
          {desc}
        </p>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn  project-github-btn "
        >
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
