import React from "react";
import AwardCard from "./AwardCard";
import "./award.css";
import award1 from "../../assests/images/award1.jpg";
import award2 from "../../assests/images/award2.jpg";
import award3 from "../../assests/images/award3.jpg";
import award4 from "../../assests/images/award4.jpg";
import award5 from "../../assests/images/award5.jpg";

function Awards() {
  const cards = [award1, award2, award5, award3, award4, award5];

  return (
    <div className="award flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>Success</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>
        <h3>OUR AWARDS</h3>
      </div>
      <AwardCard cards={cards} />
    </div>
  );
}

export default Awards;
