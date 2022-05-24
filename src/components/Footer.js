import React from "react";
import contactDetails from "../contactDetails";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Footer = () => {
  const { email, linkedin, github, facebook, medium } = contactDetails;

  return (
    <footer className="contact-footer" id="contact">
      <ToastContainer />
      <div className="footer-container">
        <div className="contact-container">
          <h3>Contact:</h3>
          <div className="underline"></div>
          <p>
            Email:{" "}
            <CopyToClipboard
              text={email}
              onCopy={() => toast.success("Email copied to clipboard")}
            >
              <span>{email}</span>
            </CopyToClipboard>
          </p>
          <p>
            LinkedIn:{" "}
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              {linkedin}
            </a>
          </p>
          <p>
            Github:{" "}
            <a href={github} target="_blank" rel="noopener noreferrer">
              {github}
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a href={facebook} target="_blank" rel="noopener noreferrer">
              {facebook}
            </a>
          </p>
          <p>
            Medium:{" "}
            <a href={medium} target="_blank" rel="noopener noreferrer">
              {medium}
            </a>
          </p>
        </div>
        <div className="creation-container">
          <h3>Creation: </h3>
          <div className="underline"></div>
          <h4>Created by: Rajtilak Pal</h4>
          <p>Date Created: 02/08/2021</p>
          <p>Last Updated: 24/05/2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
