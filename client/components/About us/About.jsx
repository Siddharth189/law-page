import React from "react";
import "./about.css";
import MAN from "../../assests/images/man.jpg";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";

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
          <h3 style={{ margin: "10px 0px" }}>WHO WE ARE</h3>
          <div className="flex-row-between">
            <p>
              We provides best initial legal Advice relating to all divorce and
              criminal matters. We have team of experienced Lawyer's staff who
              have decades of experience in handling sensitive divorce and
              criminal matters of all kinds.
              <br />
              <br />
              Different types of cases that may require presence and
              investigation of accused includes, Accidents, rape, murder,
              cheating (420), Forgery, Frauds cases, Economic Crimes,
              <br />
              <br />
              Domestic violence, Marriage registration, Divorce matters,
              Matrimonial Disputes, 498A Dowry, Sexual Harassment, Cyber Crimes,
              Cheque bounce matters, all types of bail matters like regular bail
              and anticipatory bail etc.
            </p>
          </div>
          <div className="about-btn">
            <Link to="/about">
              Know More <IoMdArrowRoundForward className="icon-style" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
