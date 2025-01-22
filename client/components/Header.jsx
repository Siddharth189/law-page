import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import "./header.css";
import LOGO from "./../assests/images/logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(true);
  const location = useLocation();

  const menuItems = [
    { label: "HOME", link: "/", state: { targetId: "header" } },
    { label: "ATTORNEYS", link: "/", state: { targetId: "commit" } },
    { label: "SERVICES", link: "/", state: { targetId: "services" } },
    { label: "BLOG", link: "/", state: { targetId: "blog" } },
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
          <Link
            to="/"
            state={{ targetId: "contact" }}
            replace={location.pathname === "/"}
            className="consult-btn"
          >
            Free Consultations
          </Link>
        </div>
      </div>
      <div className="flex-row-center">
        <div className="page-style flex-row-between header-lower-row">
          <p className="header-logo">
            <Link to="/">
              <img src={LOGO} alt="logo" />
            </Link>
          </p>
          {showMenu && (
            <ul className="flex-row list-row header-list">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    state={item.state}
                    replace={location.pathname === item.link} // Avoid reload if already on the same page
                  >
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
