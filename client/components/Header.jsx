import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";
import LOGO from "./../assests/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { label: "HOME", link: "/" },
    { label: "ATTORNEYS", link: "/#commit" },
    { label: "PRACTICE", link: "/#commit" },
    { label: "AREA", link: "/#services" },
    { label: "BLOG", link: "/#blog" },
    { label: "CONTACT", link: "/about" },
  ];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
        </div>
      </div>
      <div className="flex-row-center">
        <div className="page-style flex-row-between header-lower-row">
          <p className="header-logo">
            <a href="#header">
              <img src={LOGO} alt="logo" />
            </a>
          </p>
          <div className="menu-icon" onClick={toggleMenu}>
            <IoSearch className="icon-style" />
          </div>
          {showMenu && (
            <ul className="flex-row list-row header-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
