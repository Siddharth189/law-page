import React from "react";
import { IoSearch } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="flex-row-evenly header-upper-row">
        <ul className="flex-row list-row">
          <li>
            <BsTelephoneFill
              style={{ marginRight: "10px", verticalAlign: "middle" }}
            />
            Phone
          </li>
          <li>
            <IoMail style={{ marginRight: "10px", verticalAlign: "middle" }} />
            Mail
          </li>
          <li>
            <HiBuildingOffice2
              style={{ marginRight: "10px", verticalAlign: "middle" }}
            />
            Telephone
          </li>
        </ul>
        <button className="consult-btn">Free Consultations</button>
      </div>
      <div className="flex-row-evenly header-lower-row">
        <p>LOGO</p>
        <ul className="flex-row list-row">
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
  );
}

export default Header;
