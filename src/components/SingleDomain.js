import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleDomain = ({
  title,
  description,
  libraries,
  level: { current, outOf },
  visibilityClass,
  onNextClick,
  onPrevClick,
  prevBtnVisible,
  nextBtnVisible,
}) => {
  return (
    <article className={`domain ${visibilityClass}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <h4>Tools and Libraries used:</h4>
      <div className="words-container">
        {libraries.map((library, index) => {
          return (
            <p key={index} className="word">
              {library}
            </p>
          );
        })}
      </div>
      <div className="level-top">
        <p>
          Level {current}/{outOf}
        </p>
      </div>
      {prevBtnVisible && (
        <div
          className="btn domain-change-btn domain-prev-btn"
          onClick={onPrevClick}
        >
          <FaChevronLeft />
        </div>
      )}
      {nextBtnVisible && (
        <div
          className="btn domain-change-btn domain-next-btn"
          onClick={onNextClick}
        >
          <FaChevronRight />
        </div>
      )}
    </article>
  );
};

export default SingleDomain;
