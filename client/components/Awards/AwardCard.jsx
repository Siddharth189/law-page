import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const AwardCard = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const visibleCardsCount = 5; // Number of awards to display at a time
  const totalCards = cards.length;

  if (!cards || !Array.isArray(cards) || totalCards === 0) {
    return <p>No cards available</p>;
  }

  const showPreviousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - visibleCardsCount + totalCards) % totalCards
    );
  };

  const showNextCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex + visibleCardsCount) % totalCards
    );
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < visibleCardsCount; i++) {
      visibleCards.push(cards[(currentCardIndex + i) % totalCards]);
    }
    return visibleCards;
  };

  return (
    <div className="flex-row-between">
      <button className="award-btn" onClick={showPreviousCard}>
        <GrFormPrevious
          style={{ verticalAlign: "middle", fontSize: "1.7rem", color: "gray" }}
        />
      </button>
      <div className="page-style flex-row-between">
        {getVisibleCards().map((card, index) => (
          <img key={index} src={card} alt="award" className="award-img" />
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
