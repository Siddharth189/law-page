import React from "react";

function Types({ description, points,image }) {
  return (
    <div className="types">
      <div>
        <img src={image} alt="team1" />
    
      </div>
      <div className="team-card-name flex-column-center">
        <h4>{description}</h4>
        <p>{points}</p>
      </div>
    </div>
  );
}

export default Types;
