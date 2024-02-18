import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";
import LOGO from "./../assests/images/logo.png";

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
              <BsTelephoneFill className="header-icon-style" />
              945-717-7171
            </li>
            <li>
              <IoMail className="header-icon-style" />
              info@injury&accident.com
            </li>
            <li>
              <HiBuildingOffice2 className="header-icon-style" />
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
              <a href="#header">HOME</a>
            </li>
            <li>
              <a href="#commit">ATTORNEYS</a>
            </li>
            <li>
              <a href="#commit">PRACTICE</a>
            </li>
            <li>
              <a href="#services"> AREA</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
            <li>|</li>
            <li>
              <IoSearch style={{ verticalAlign: "middle" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
