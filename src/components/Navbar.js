import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const linksRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setNavHeight(
        document.getElementById("nav").getBoundingClientRect().height
      );
      setContainerHeight(
        document.querySelector(".nav-link").getBoundingClientRect().height * 5 +
          20
      );
    } else {
      setNavHeight(
        document.getElementById("nav").getBoundingClientRect().height + 20
      );
      setContainerHeight(0);
    }
  }, [isNavDropdownOpen]);
  useEffect(() => {
    if (isNavDropdownOpen) {
      const links = linksRef.current.querySelectorAll(".nav-link");
      let height = `${
        links[0].getBoundingClientRect().height * links.length
      }px`;
      linksRef.current.style.height = height;
    } else linksRef.current.style.height = 0;
  }, [isNavDropdownOpen]);

  return (
    <nav className="navbar" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h3>Rajtilak's Portfolio</h3>
          <FaBars
            className={`nav-toggle-btn ${
              isNavDropdownOpen && "nav-dropdown-open"
            }`}
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          />
        </div>
        <div
          className={`nav-links ${isNavDropdownOpen ? "show-links" : ""}`}
          ref={linksRef}
        >
          <Link
            to="home"
            smooth={true}
            duration={300}
            offset={-1 * navHeight - containerHeight}
            className="nav-link"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Home
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={300}
            offset={-1 * navHeight - containerHeight}
            className="nav-link"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Work
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={300}
            offset={-1 * navHeight - containerHeight}
            className="nav-link"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Projects
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={300}
            offset={-1 * navHeight - containerHeight}
            className="nav-link"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            offset={-1 * navHeight - containerHeight}
            className="nav-link"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
