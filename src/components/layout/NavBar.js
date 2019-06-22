import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const NavBar = ({ title, icon }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "GitHub Finder",
  icon: "fab fa-github"
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBar;
