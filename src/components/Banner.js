import React from "react";
import details from "../profileDetails";

const Banner = () => {
  const { name, profile, about, words, strengths } = details;

  return (
    <section className="banner">
      <div className="primary-info-container">
        <div className="photo-column" id="home">
          <img src={profile} alt="" className="profile-img" />
        </div>
        <div className="info-column">
          <h1 className="name-text">{name}</h1>

          <h3>About Me</h3>
          <p>{about}</p>

          <h3>Words that describe me: </h3>
          <div className="words-container">
            {words.map((word, index) => {
              return (
                <p key={index} className="word">
                  {word}
                </p>
              );
            })}
          </div>
          <h3>Strengths: </h3>
          <div className="words-container">
            {strengths.map((strength, index) => {
              return (
                <p key={index} className="word">
                  {strength}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
