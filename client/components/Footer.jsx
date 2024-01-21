import React from "react";

function Footer() {
  return (
    <div className="footer flex-column">
      <button>Back to top </button>
      <ul className="flex-row list-row">
        <li>HOME</li>
        <li>ATTORNEYS</li>
        <li>PRACTICE</li>
        <li>AREA</li>
        <li>BLOG</li>
        <li>CONTACT</li>
      </ul>
      <div className="newsletter flex-row-evenly">
        <p>Subscribe to our Newsletter</p>
        <span>
          <input type="email" placeholder="Enter your Email Address" />
          <button type="submit">Subscribe</button>
        </span>
      </div>
      <div className="flex-row-evenly">
        <div>Logos</div>
        <div>
          Types of Cases
          <ul style={{ listStyle: "none" }}>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
            <li>Car Accidents</li>
          </ul>
        </div>
        <div>
          Multiple Locations
          <ul style={{ listStyle: "none" }}>
            <li>Address 1</li>
            <li>Address 2</li>
            <li>Address 3</li>
          </ul>
        </div>

        <div>
          Our Team--
          <ul style={{ listStyle: "none" }}>
            <li>Siddharth Singh</li>
            <li>Yuvraj</li>
            <li>Harsh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
