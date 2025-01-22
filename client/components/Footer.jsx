import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { CgArrowUp } from "react-icons/cg";
import LOGO from "../assests/images/logo.png";

import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const menuItems = [
    { label: "HOME", link: "/", state: { targetId: "header" } },
    { label: "ATTORNEYS", link: "/", state: { targetId: "commit" } },
    { label: "SERVICES", link: "/", state: { targetId: "services" } },
    { label: "BLOG", link: "/", state: { targetId: "blog" } },
    { label: "CONTACT", link: "/about" },
  ];
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 1,
        width: 30,
      }}
    />
  );

  return (
    <div className="footer flex-column-center">
      <div className="flex-row back-to-top-btn-container">
        <div className="small-horizontal-line"></div>
        <button
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP
        </button>
        <CgArrowUp style={{ color: "#f58c17" }} />
        <div className="small-horizontal-line"></div>
      </div>

      <ul
        className="flex-row list-row"
        style={{ width: "70%", marginTop: "30px", marginBottom: "40px" }}
      >
        <ul className="flex-row list-row header-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                state={item.state}
                replace={location.pathname === item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </ul>
      <div className="newsletter flex-row-evenly" style={{ width: "70%" }}>
        <p style={{ fontSize: "1.3rem" }}>
          Subscribe to our <span style={{ color: "#f58c17" }}>Newsletter</span>{" "}
        </p>
        <span>
          <input
            style={{
              padding: "5px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            type="email"
            placeholder="Enter Phone Number/Email"
          />
          <button className="subscribe-btn" type="submit">
            Subscribe
          </button>
        </span>
      </div>
      <div
        className="flex-row-evenly footer-links"
        style={{
          width: "100%",
          color: "#7d7d7d",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "25%" }}>
          <ul style={{ listStyle: "none" }}>
            <li>
              <p className="header-logo">
                <a href="#header">
                  <img src={LOGO} alt="logo" />
                </a>
              </p>
            </li>

            <li>
              <ul className="social-list">
                <li>
                  <TfiFacebook style={{ color: "#f58c17" }} />
                </li>
                <li>
                  <ImLinkedin2 style={{ color: "#f58c17" }} />
                </li>
                <li>
                  <ImTwitter style={{ color: "#f58c17" }} />
                </li>
                <li>
                  <FaPinterestP style={{ color: "#f58c17" }} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex-row">
            <h4 style={{ color: "#333333" }}>Types of Cases</h4>
            <div className="small-horizontal-line"></div>
          </div>
          <ul style={{ listStyle: "none" }}>
            <li>Accidents, Rape, Murder</li>
            <li>Cheating (420), Forgery</li>
            {/* <li>Domestic violence, Marriage registration, Divorce matters</li>
            <li>Matrimonial Disputes, 498A Dowry, Sexual Harassment</li>
            <li>Cyber Crimes, Cheque bounce matters</li>
            <li>
              All types of bail matters like regular bail and anticipatory bail
            </li> */}
          </ul>
        </div>
        <div>
          <div className="flex-row">
            <h4 style={{ color: "#333333" }}>Multiple Locations</h4>
            <div className="small-horizontal-line"></div>
          </div>
          <ul style={{ listStyle: "none" }}>
            <li>
              Chamber No 197, <br />
              Street no 6 District & Sessions <br />
              Court at Surajpur <br />
              Uttar Pradesh 201308 India
            </li>
          </ul>
        </div>

        <div>
          <div className="flex-row">
            <h4 style={{ color: "#333333" }}>Our Team</h4>
            <div className="small-horizontal-line"></div>
          </div>

          <ul style={{ listStyle: "none" }}>
            <li>Adv. Mohit Bhati</li>
            <li>Shashi Kant Bhati</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          marginBottom: "10px",
          borderBottom: "1px solid #f58c17",
        }}
      >
        {" "}
      </div>
      <div
        className="flex-row-evenly"
        style={{ marginBottom: "10px", width: "70%" }}
      >
        <p style={{ color: "#7d7d7d" }}>
          @ 2024 ADHIVAKTA Law Cafe | All Rights Are Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
