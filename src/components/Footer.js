import React from "react";

const Footer = () => {
  return (
    <footer className="contact-footer" id="contact">
      <div className="footer-container">
        <div className="contact-container">
          <h3>Contact:</h3>
          <div className="underline"></div>
          <p>
            Email:{" "}
            <a href="#" rel="noopener noreferrer">
              rajtilakls2510@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/rajtilak-pal-5a78b7192/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/rajtilak-pal-5a78b7192/
            </a>
          </p>
          <p>
            Github:{" "}
            <a
              href="https://github.com/rajtilakls2510"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/rajtilakls2510
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://www.facebook.com/rajtilak.pal.9"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.facebook.com/rajtilak.pal.9
            </a>
          </p>
          <p>
            Medium:{" "}
            <a
              href="https://medium.com/@rajtilakls2510"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://medium.com/@rajtilakls2510
            </a>
          </p>
        </div>
        <div className="creation-container">
          <h3>Creation: </h3>
          <div className="underline"></div>
          <h4>Created by: Rajtilak Pal</h4>
          <p>Date Created: 02/08/2021</p>
          <p>Last Updated: 02/08/2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
