import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ACC from "../../assests/images/accident.jpg";
import MUR from "../../assests/images/murder.jpg";
import DIV from "../../assests/images/divorce.jpeg";
import MAR from "../../assests/images/marriage.jpg";
import MAT from "../../assests/images/matridisputes.jpeg";
import RAPE from "../../assests/images/rape.jpg";
import DOW from "../../assests/images/dowry.jpeg";
import DOM from "../../assests/images/domestic.jpg";
import SEXUAL from "../../assests/images/sexual.png";
const typeToImage = {
  accident: ACC,
  murder: MUR,
  divorce: DIV,
  marriage: MAR,
  matrimonial: MAT,
  rape: RAPE,
  dowry: DOW,
  domestic: DOM,
  sexual: SEXUAL,
};
function ServiceCard({ type, Icon }) {
  // match first word with the image objects
  const imagePath = typeToImage[type.toLowerCase().split(" ")[0]];

  return (
    <div className="service-card flex-column-center">
      {/* dynamic image according to the type(prop) */}
      <img src={`${imagePath}`} alt={type} />
      <div className="service-card-icon">
        {/* dynamic component according to the type(prop) */}
        <Icon className="icon-style" />
      </div>

      <a className="service-card-btn" href="">
        <div className=" flex-row-between">
          <p>{type}</p>
          <BsArrowRight className="icon-style" />
        </div>
      </a>
    </div>
  );
}

export default ServiceCard;
