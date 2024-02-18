import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { ImLinkedin2 } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import { FaPinterestP } from "react-icons/fa";
import { CgArrowUp } from "react-icons/cg";
import LOGO from "../assests/images/logo.png";

import "./footer.css";

function Footer() {
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
      <div className="flex-row">
        <div className="small-horizontal-line"></div>
        <a href="#header" className="back-to-top-btn">
          BACK TO TOP
        </a>
        <CgArrowUp style={{ color: "#f58c17" }} />
        <div className="small-horizontal-line"></div>
      </div>

      <ul
        className="flex-row list-row"
        style={{ width: "70%", marginTop: "30px", marginBottom: "40px" }}
      >
        <li>HOME</li>
        <li>ATTORNEYS</li>
        <li>PRACTICE</li>
        <li>AREA</li>
        <li>BLOG</li>
        <li>CONTACT</li>
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
            placeholder="Enter your Email Address"
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam quos sit voluptate porro, doloremque veritatis.
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
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
          </ul>
        </div>
        <div>
          <div className="flex-row">
            <h4 style={{ color: "#333333" }}>Multiple Locations</h4>
            <div className="small-horizontal-line"></div>
          </div>
          <ul style={{ listStyle: "none" }}>
            <li>Address 1</li>
            <li>Address 2</li>
            <li>Address 3</li>
          </ul>
        </div>

        <div>
          <div className="flex-row">
            <h4 style={{ color: "#333333" }}>Our Team</h4>
            <div className="small-horizontal-line"></div>
          </div>

          <ul style={{ listStyle: "none" }}>
            <li>Siddharth Singh</li>
            <li>Yuvraj</li>
            <li>Harsh</li>
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
          @ 2021 WIN Injury & Accident Trail Laywers | All Rights Are Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
