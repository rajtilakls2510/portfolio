import React, { useState } from "react";
import SingleEducation from "./SingleEducation";

const Education = () => {
  const [activeEducation, setActiveEducation] = useState(0);
  const educationData = [
    {
      instituteName: "College 1",
      degreeCourse: "B. Tech. CSE",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nam.",
      email: "somthing@mail.com",
      website: "https://www.ticollege.ac.in/",
    },
    {
      instituteName: "School ",
      degreeCourse: "High School Science",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nam.",
      email: "somthing@mail.com",
      website: "https://www.ticollege.ac.in/",
    },
    {
      instituteName: "College 2",
      degreeCourse: "M. Tech. CS",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, nam.",
      email: "somthing@mail.com",
      website: "https://www.ticollege.ac.in/",
    },
  ];

  const handleNextClick = () => {
    setActiveEducation((prevState) => {
      console.log(prevState);
      if (prevState + 1 < educationData.length) prevState = prevState + 1;
      return prevState;
    });
  };
  const handlePrevClick = () => {
    setActiveEducation((prevState) => {
      console.log(prevState);
      if (prevState - 1 >= 0) prevState = prevState - 1;
      return prevState;
    });
  };
  return (
    <div className="blogs-container">
      <h3>Education:</h3>
      <div className="underline"></div>
      <div className="blog-container">
        {educationData.map((education, index) => {
          return (
            <SingleEducation
              key={index}
              {...education}
              visibilityClass={`${index < activeEducation ? "prev-blog" : ""} ${
                index === activeEducation ? "active-blog" : ""
              } ${index > activeEducation ? "next-blog" : ""}`}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              prevBtnVisible={index > 0}
              nextBtnVisible={index < educationData.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
