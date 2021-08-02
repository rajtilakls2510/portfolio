import React from "react";
import profileImg from "../images/profile_image.jpg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="primary-info-container">
        <div className="photo-column" id="home">
          <img src={profileImg} alt="" className="profile-img" />
        </div>
        <div className="info-column">
          <h1 className="name-text">Rajtilak Pal</h1>

          <h3>About Me</h3>
          <p className="about-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus pariatur repudiandae temporibus facere nihil sunt
            deserunt? Unde, facilis. Aliquid, inventore hic? Aliquid minus
            deserunt dolorum nisi iure saepe adipisci cum?
          </p>

          <h3>Words that describe me: </h3>
          <div className="words-container">
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
          </div>
          <h3>Strengths: </h3>
          <div className="words-container">
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
            <p className="word">lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
