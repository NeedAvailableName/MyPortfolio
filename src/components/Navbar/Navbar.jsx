import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Dang Pham</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="Projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="Certificates" spy={true} smooth={true}>
                Certificates
              </Link>
            </li>
            <li>
              <Link to="Activities" spy={true} smooth={true}>
                Activities
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
