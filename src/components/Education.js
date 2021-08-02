import React, { useState } from "react";
import SingleEducation from "./SingleEducation";
import educationDetails from "../educationDetails";

const Education = () => {
  const [activeEducation, setActiveEducation] = useState(0);
  const handleNextClick = () => {
    setActiveEducation((prevState) => {
      console.log(prevState);
      if (prevState + 1 < educationDetails.length) prevState = prevState + 1;
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
        {educationDetails.map((education, index) => {
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
              nextBtnVisible={index < educationDetails.length - 1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
