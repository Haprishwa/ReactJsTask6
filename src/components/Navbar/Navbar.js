// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <ul className={`menu ${showMenu ? 'show' : ''}`}>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={handleMenuClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} onClick={handleMenuClick}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} onClick={handleMenuClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="education" smooth={true} duration={500} onClick={handleMenuClick}>
            Education
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={handleMenuClick}>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
