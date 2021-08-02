import React, { useState } from "react";
import SingleBlog from "./SingleBlog";
import blogImg from "../images/banner_background.jpg";

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(0);
  const blogData = [
    {
      title: "Blog",
      img: blogImg,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, consectetur!",
    },
    {
      title: "Blog1",
      img: blogImg,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, consectetur!",
    },
    {
      title: "Blog2",
      img: blogImg,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, consectetur!",
    },
  ];

  const handleNextClick = () => {
    setActiveBlog((prevState) => {
      console.log(prevState);
      if (prevState + 1 < blogData.length) prevState = prevState + 1;
      return prevState;
    });
  };
  const handlePrevClick = () => {
    setActiveBlog((prevState) => {
      console.log(prevState);
      if (prevState - 1 >= 0) prevState = prevState - 1;
      return prevState;
    });
  };
  return (
    <div className="blogs-container">
      <h3 id="blog">Blogs:</h3>
      <div className="underline"></div>
      <div className="blog-container">
        {blogData.map((blog, index) => {
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
              nextBtnVisible={index < blogData.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
