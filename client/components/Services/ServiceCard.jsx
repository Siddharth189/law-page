import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { typeToImage } from "../utils";
import { Link } from "react-router-dom";

function ServiceCard({ type, Icon, desc }) {
  // match first word with the image objects
  const imagePath = typeToImage[type.toLowerCase().split(" ")[0]];

  return (
    <div className="service-card flex-column-center">
      <img src={`${imagePath}`} alt={type} />
      <div className="service-card-icon">
        <Icon className="icon-style" />
      </div>

      <Link
        className="service-card-btn"
        to={{
          pathname: `/blog/${type.toLowerCase().split(" ")[0]}`,
          state: {
            title: { type },
            description: { desc },
            image: imagePath,
          },
        }}
      >
        <div className=" flex-row-between">
          <p>{type}</p>
          <BsArrowRight className="icon-style" />
        </div>
      </Link>
    </div>
  );
}

export default ServiceCard;
