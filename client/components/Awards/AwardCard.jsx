import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const AwardCard = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  if (!cards || !Array.isArray(cards) || cards.length === 0) {
    return <p>No cards available</p>;
  }

  const showPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  const showNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex-row-between">
      <button className="award-btn" onClick={showPreviousCard}>
        <GrFormPrevious
          style={{ verticalAlign: "middle", fontSize: "1.7rem", color: "gray" }}
        />
      </button>
      <div className="page-style flex-row-between">
        {cards
          .slice(currentCardIndex, currentCardIndex + 4)
          .map((card, index) => (
            <img key={index} src={card} alt="awards" className="award-img" />
          ))}
      </div>
      <button onClick={showNextCard} className="award-btn">
        <GrFormNext
          style={{ verticalAlign: "middle", fontSize: "1.7rem", color: "gray" }}
        />
      </button>
    </div>
  );
};

export default AwardCard;
