import React from "react";
import "./cover.css";

function Cover() {
  return (
    <div className="cover-big">
      <div className="cover flex-row-center">
        <div className="page-style">
          <div className="custom-line" style={{ width: "200px" }}></div>
          <h1>We Fight For Your Injustice</h1>
          <h1>as Like your Companion.</h1>
          <p>The Most Talented & Reputable Law Firm.</p>
          {/* <button className="submit-btn">CONTACT US</button> */}
          <button className="submit-btn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
}

export default Cover;
