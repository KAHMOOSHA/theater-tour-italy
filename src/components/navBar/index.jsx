import { Link } from "react-router-dom";
import "./navbar.css";
// import { useState } from "react";
const Navbar = () => {
  let navLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Calender",
      link: "/calender",
    },
  ];
  return (
    <header className="nav__bar">
      <div className="logo unselectable">All That's Left To Me</div>
      <nav>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
