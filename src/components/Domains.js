import React, { useState } from "react";
import domainData from "../domains";
import SingleDomain from "./SingleDomain";

const Domains = () => {
  const [activeDomain, setActiveDomain] = useState(0);

  const handleNextClick = () => {
    setActiveDomain((prevState) => {
      if (prevState + 1 < domainData.length) prevState = prevState + 1;
      return prevState;
    });
  };
  const handlePrevClick = () => {
    setActiveDomain((prevState) => {
      if (prevState - 1 >= 0) prevState = prevState - 1;
      return prevState;
    });
  };

  return (
    <section className="domains-section">
      <h3 id="work">Domains that I have worked on:</h3>
      <div className="underline"></div>
      <div className="domain-container">
        {domainData.map((domain, index) => {
          return (
            <SingleDomain
              key={index}
              {...domain}
              visibilityClass={`${index < activeDomain ? "prev-domain" : ""} ${
                index === activeDomain ? "active-domain" : ""
              } ${index > activeDomain ? "next-domain" : ""}`}
              onNextClick={handleNextClick}
              onPrevClick={handlePrevClick}
              prevBtnVisible={index > 0}
              nextBtnVisible={index < domainData.length - 1}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Domains;
