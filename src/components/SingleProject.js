import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa";

const SingleProject = ({ title, domains, desc, img, github, date }) => {
  const [isDescOpen, setIsDescOpen] = useState(false);

  return (
    <a
      href={github}
      target="_blank"
      rel="noopener noreferrer"
      className="single-project"
      onMouseEnter={() => setIsDescOpen(true)}
      onMouseLeave={() => setIsDescOpen(false)}
    >
      <div className="project-preview">
        <img src={img} alt={title} className="project-img" />
        <div className="project-details">
          <h4>{title}</h4>
          <div className="words-container">
            {domains.map((domain, index) => {
              return (
                <p key={index} className="word">
                  {domain}
                </p>
              );
            })}
          </div>
          <div className="project-time">
            <FaRegClock /> {date}
          </div>
        </div>
      </div>
      {isDescOpen && <p>{desc}</p>}
    </a>
  );
};

export default SingleProject;
