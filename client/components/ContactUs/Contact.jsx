import React from "react";
import "./contact.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";

function Contact() {
  return (
    <div className="contact-page-big">
      <div className="contact-page flex-row-evenly">
        <div className="details">
          <div className="card">
            <h3>
              <ImLocation2
                style={{
                  color: "#f58c17",
                  verticalAlign: "middle",
                  margin: "7px 10px 10px 0px",
                  fontSize: "1.5rem",
                  fontWeight: "normal",
                }}
              />
              Location
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
              ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <div className="dashed-line"></div>
            <h3>
              <BsTelephoneFill
                style={{
                  color: "#f58c17",
                  verticalAlign: "middle",
                  margin: "7px 10px 10px 0px",
                }}
              />
              Make a call
            </h3>
            <p>+91 78979 98421</p>
            <p style={{ fontStyle: "italic" }}>(Free Consulting 24/7)</p>
            <div className="dashed-line"></div>
            <h3>
              <IoMail
                style={{
                  color: "#f58c17",
                  verticalAlign: "middle",
                  margin: "7px 10px 10px 0px",
                  fontSize: "1.5rem",
                }}
              />
              Send an email
            </h3>
            <p>info@inquery&accident.com</p>
          </div>
        </div>

        <div className="form">
          <div className="flex-row">
            <p>Contact Us</p>
            <div
              style={{
                borderBottom: "2px solid #f58c17",
                marginBottom: "9px",
                marginLeft: "7px",
                width: "350px",
              }}
            ></div>
          </div>
          <h3 style={{ marginBottom: "35px", marginTop: "10px" }}>
            REQUEST A CONSULTATION TOTALLY FREE
          </h3>

          <p>Fill out the form below.</p>
          <form className="flex-row-between contact-form">
            <input type="text" placeholder="Name*" name="name" />
            <input type="text" placeholder="Phone*" name="phone" />
            <input type="text" placeholder="Email*" name="email" />
            <input type="text" placeholder="Type of Case" name="type" />
            <input
              type="textbox"
              placeholder="Case Description*"
              name="description"
            />
            <div className="flex-row-between">
              <button className="submit-btn" type="submit">
                Submit Request
              </button>
              <div style={{ marginTop: "35px" }}>
                <input type="checkbox" />
                <label htmlFor="agree">
                  I agree to recieve communication from Win & law firm
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
