import React, { useState } from "react";
import SingleBlog from "./SingleBlog";
import blogDetails from "../blogDetails";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(0);

  const handleNextClick = () => {
    setActiveBlog((prevState) => {
      if (prevState + 1 < blogDetails.length) prevState = prevState + 1;
      return prevState;
    });
  };
  const handlePrevClick = () => {
    setActiveBlog((prevState) => {
      if (prevState - 1 >= 0) prevState = prevState - 1;
      return prevState;
    });
  };
  return (
    <div className="blogs-container">
      <h3 id="blog">Blogs:</h3>
      <div className="underline"></div>
      <div className="blog-container">
        {blogDetails.map((blog, index) => {
          return (
            <SingleBlog
              key={index}
              {...blog}
              visibilityClass={`${index < activeBlog ? "prev-blog" : ""} ${
                index === activeBlog ? "active-blog" : ""
              } ${index > activeBlog ? "next-blog" : ""}`}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              prevBtnVisible={index > 0}
              nextBtnVisible={index < blogDetails.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
