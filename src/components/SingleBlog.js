import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SingleBlog = ({
  title,
  img,
  desc,
  visibilityClass,
  onPrevClick,
  onNextClick,
  nextBtnVisible,
  prevBtnVisible,
}) => {
  console.log(title, img, desc);
  return (
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
  );
};

export default SingleBlog;
