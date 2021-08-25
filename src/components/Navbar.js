import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    // console.log(document.querySelector(".nav-link"));
    console.log(window);
    if (window.innerWidth < 768) {
      setNavHeight(
        document.getElementById("nav").getBoundingClientRect().height
      );
      setContainerHeight(
        document.querySelector(".nav-link").getBoundingClientRect().height * 4 +
          20
      );
    } else {
      setNavHeight(
        document.getElementById("nav").getBoundingClientRect().height + 20
      );
      setContainerHeight(0);
    }
  }, [isNavDropdownOpen]);
  console.log(navHeight, containerHeight);
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
        <div className={`nav-links ${isNavDropdownOpen ? "show-links" : ""}`}>
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
