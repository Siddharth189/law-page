import React from "react";
import "./style.css";

function Testimonials() {
  return (
    <div className="test-page-big">
      <div className="test-page flex-column-center">
        <div className="page-style flex-row-between">
          <div className="details">
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem
                ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum
                dolor sit amet consectetur adipisicing elit Lorem ipsum dolor
                sit amet consectetur adipisicing elit
              </p>
            </div>
          </div>

          <div className="form">
            <div className="flex-row">
              <p>Testimonials</p>
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
              WHAT OUR CLIENTS SAYS ABOUT US
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
