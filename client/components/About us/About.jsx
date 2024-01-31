import React from "react";
import "./about.css";
import MAN from "../../assests/images/man.jpg";

function About() {
  return (
    <div className="about flex-column-center">
      <div className="page-style flex-row-between">
        <div className="half img-card">
          <img src={MAN} alt="man" />
        </div>
        <div className="half">
          <div className="flex-row">
            <p>About Us</p>
            <div className="custom-line" style={{ width: "100px" }}></div>
          </div>
          <h3>WHO WE ARE</h3>
          <div className="flex-row-between">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            eos magni minima modi aperiam praesentium error dolor nisi nihil
            consequatur porro eius natus, fuga laudantium, accusamus repellendus
            laborum autem deleniti!
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
