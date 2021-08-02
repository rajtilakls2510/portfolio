import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleBlog = ({
  title,
  img,
  desc,
  link,
  visibilityClass,
  onPrevClick,
  onNextClick,
  nextBtnVisible,
  prevBtnVisible,
}) => {
  return (
    <>
      <article className={`blog ${visibilityClass}`}>
        <h2>{title}</h2>
        <img src={img} alt="Blog" className="blog-img" />
        <p>{desc}</p>
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
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="blog-link"
      />
    </>
  );
};

export default SingleBlog;
