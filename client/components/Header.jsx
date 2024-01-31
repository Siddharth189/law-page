import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";

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
    <div className="header">
      <div className="flex-row-center header-upper-row">
        <div className="page-style flex-row-between">
          <ul className="flex-row list-row header-list">
            <li>
              <BsTelephoneFill className="header-icon-style" />
              789-799-8421
            </li>
            <li>
              <IoMail className="header-icon-style" />
              info@injury&accident.com
            </li>
            <li>
              <HiBuildingOffice2 className="header-icon-style" />
              (789)799-421
            </li>
          </ul>
          <button className="consult-btn">Free Consultations</button>
        </div>
      </div>
      <div className="flex-row-center">
        <div className="page-style flex-row-between header-lower-row">
          <p>LOGO</p>
          <ul className="flex-row list-row header-list">
            <li>HOME</li>
            <li>ATTORNEYS</li>
            <li>PRACTICE</li>
            <li>AREA</li>
            <li>BLOG</li>
            <li>CONTACT</li>
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
