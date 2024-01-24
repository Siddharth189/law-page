import React from "react";
import "./styles.css";
import TeamCard from "./TeamCard";
function Team() {
  return (
    <div className="team-page">
      <div className="flex-row">
        <p>Qualified and dedicated Team</p>
        <div className="custom-line" style={{ width: "100px" }}></div>
      </div>
      <h3>MEET OUR ATTORNEYS</h3>
      <div className="flex-row-evenly">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default Team;
