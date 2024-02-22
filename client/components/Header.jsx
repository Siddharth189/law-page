import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";
import LOGO from "./../assests/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const isMobile = window.innerWidth <= 768; // Set your preferred breakpoint

  const menuItems = [
    "HOME",
    "ATTORNEYS",
    "PRACTICE",
    "AREA",
    "BLOG",
    "CONTACT",
  ];

  return (
    <div id="header" className="header">
      <div className="flex-row-center header-upper-row">
        <div className="page-style flex-row-between">
          <ul className="flex-row list-row header-list">
            <li>
              <BsTelephoneFill className="header-icon-style icon-style" />
              945-717-7171
            </li>
            <li>
              <IoMail className="header-icon-style icon-style" />
              info@injury&accident.com
            </li>
            <li>
              <HiBuildingOffice2 className="header-icon-style icon-style" />
              (931)020-4200
            </li>
          </ul>
          <a href="#contact" className="consult-btn">
            Free Consultations
          </a>
          {/* <button className="consult-btn">Free Consultations</button> */}
        </div>
      </div>
      <div className="flex-row-center">
        <div className="page-style flex-row-between header-lower-row">
          <p className="header-logo">
            <a href="#header">
              <img src={LOGO} alt="logo" />
            </a>
          </p>
          <ul className="flex-row list-row header-list">
            <li>
              <Link to="/#header">HOME</Link>
            </li>
            <li>
              <Link to="/#commit">ATTORNEYS</Link>
            </li>
            <li>
              <Link to="/#commit">PRACTICE</Link>
            </li>
            <li>
              <Link to="#services"> AREA</Link>
            </li>
            <li>
              <Link to={`/` + `#blog`}>BLOG</Link>
            </li>
            <li>
              <Link to="/about">CONTACT</Link>
            </li>
            <li>|</li>
            <li>
              <IoSearch className="icon-style" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
