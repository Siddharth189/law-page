import React from "react";
import "./styles.css";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <div className="flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>We serve the best services.</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>
        <h3>TYPES OF CASES WE HANDLE</h3>
        <div className="flex-row-between">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Services;