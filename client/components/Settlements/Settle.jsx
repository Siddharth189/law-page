import React from "react";
import "./style.css";
import SettleCard from "./SettleCard";

function Settle() {
  return (
    <div className="settle flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>Previous Cases</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>
        <h3>SETTLEMENTS & JURY VERDICTS</h3>
        <div className="flex-row-between">
          <SettleCard />
          <SettleCard />
          <SettleCard />
          <SettleCard />
        </div>
      </div>
    </div>
  );
}

export default Settle;
