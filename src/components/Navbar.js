import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
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
        <div className={`nav-links ${isNavDropdownOpen && "show-links"}`}>
          <Link
            to="home"
            smooth={true}
            duration={300}
            offset={-100}
            className="nav-link"
            // onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Home
          </Link>
          <Link
            to="work"
            smooth={true}
            duration={300}
            offset={-100}
            className="nav-link"
            // onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Work
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={300}
            offset={-100}
            className="nav-link"
            // onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Blog
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            offset={-100}
            className="nav-link"
            // onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
