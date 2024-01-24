import React from "react";
import "./styles.css";
import ServiceCard from "./ServiceCard";
function Services() {
  return (
    <div className="service-page">
      <div className="flex-row">
        <p>We serve the best services.</p>
        <div className="custom-line" style={{ width: "100px" }}></div>
      </div>
      <h3>TYPES OF CASES WE HANDLE</h3>
      <div className="flex-row-evenly">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}

export default Services;
