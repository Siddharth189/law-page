import React from "react";
import "./styles.css";
import TeamCard from "./TeamCard";
function Team() {
  return (
    <div className="flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>Qualified and dedicated Team</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>

        <div className="flex-row-between">
          <TeamCard
            name="Adv. Mohit Bhati"
            designation="Attorny at Law"
            image="MAN1"
          />
          <TeamCard
            name="Adv. Shashi kant Bhati"
            designation="Attorny at Law"
            image="MAN2"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
