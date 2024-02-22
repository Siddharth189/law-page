import React from "react";
import { MdOutlineBalance } from "react-icons/md";

function SettleCard({ title, brief }) {
  return (
    <div className="settle-card flex-column-between">
      <div className="settle-card-top flex-row-between">
        <div className="balance-box flex-row-center">
          <MdOutlineBalance className="icon-style" />
        </div>
        <div className="flex-column-between">
          <h2>{title}</h2>
          <div
            className="custom-line"
            style={{
              width: "100px",
              marginTop: "0px",
              marginLeft: "0px",
              marginBottom: "0px",
            }}
          ></div>
        </div>
      </div>
      <p style={{ color: "#434343" }}>{brief}</p>
    </div>
  );
}

export default SettleCard;
