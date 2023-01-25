import React from "react";
import { RiTimer2Line, RiListUnordered } from "react-icons/ri";
import { IoStatsChart } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <RiTimer2Line className="navIcon" />
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <IoStatsChart className="navIcon" />
            </Link>
          </li>
          <li>
            <Link to="/activities">
              <RiListUnordered className="navIcon" />
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
