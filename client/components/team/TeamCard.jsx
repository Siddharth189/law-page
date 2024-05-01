import React from "react";
import MAN from "../../assests/images/man.jpg";
function TeamCard({ name, designation,image }) {
  return (
    <div className="team-card ">
      <div>
        <img src={image} alt="team1" />
    
      </div>
      <div className="team-card-name flex-column-center">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  );
}

export default TeamCard;
