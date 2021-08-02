import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleEducation = ({
  instituteName,
  degreeCourse,
  desc,
  email,
  website,
  visibilityClass,
  onPrevClick,
  onNextClick,
  nextBtnVisible,
  prevBtnVisible,
}) => {
  return (
    <article className={`blog ${visibilityClass}`}>
      <h2>{instituteName}</h2>
      <h5>{degreeCourse}</h5>
      <p>{desc}</p>
      <p>Email : {email}</p>
      <a
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        className="word"
      >
        Website
      </a>
      {prevBtnVisible && (
        <div
          className="btn blog-change-btn blog-prev-btn"
          onClick={onPrevClick}
        >
          <FaChevronLeft />
        </div>
      )}
      {nextBtnVisible && (
        <div
          className="btn blog-change-btn blog-next-btn"
          onClick={onNextClick}
        >
          <FaChevronRight />
        </div>
      )}
    </article>
  );
};

export default SingleEducation;
