import React from "react";
import MAN1 from "../../assests/images/man.jpg";
import MAN2 from "../../assests/images/man2.jpeg";

const typeToImage = {
  man1: MAN1,
  man2: MAN2,
};

function TeamCard({ name, designation, image }) {
  const imagePath = typeToImage[image.toLowerCase().split(" ")[0]];

  return (
    <div className="team-card ">
      <div>
        <img src={`${imagePath}`} alt={image} />
      </div>
      <div className="team-card-name flex-column-center">
        <h4>{name}</h4>
        <p>{designation}</p>
      </div>
    </div>
  );
}

export default TeamCard;
