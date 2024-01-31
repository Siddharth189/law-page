import React, { useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import "./commit.css";

function Commit() {
  const text = `Jonathan LaCour and the attorneys at Win Injury & Accident Law take
  smart and thoughtful approach to prosecuting its cases.
  As a result, the majority of their cases are so well prepared
  employer defendants have no choice but to settle for substantial
  amounts long before trial.
  We understand how difficult it can be to be treated so poorly, but
  also rely on your employees for your livelihood.`;
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="flex-column-center">
      <div className="flex-row-between">
        <div className="half left-side-half-big">
          <div className="left-side-half flex-row-center">
            <div className="commit-content">
              <div className="flex-row">
                <h3>Our Attorneys</h3>
                <div className="custom-line" style={{ width: "50px" }}></div>
              </div>
              <p style={{ textWrap: "wrap" }}>
                {showMore ? text : text.substring(0, 1000)}
              </p>
              <button className="consult-btn" onClick={handleReadMore}>
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>
        </div>

        <div className="half right-side-half-big">
          <div className="right-side-half flex-row-center">
            <div className="commit-content">
              <div className="flex-row">
                <h3>Our Commitment</h3>
                <div className="custom-line" style={{ width: "50px" }}></div>
              </div>
              Our Commitment to you to ensure that we:
              <ul className="list-row">
                <li>
                  <GiCheckMark
                    style={{
                      verticalAlign: "middle",
                      fontSize: "0.85rem",
                    }}
                  />
                  do everything possible to maximise the value of your claim,
                  including hiring experts, case mangers, and engaging outside
                  services at no upfront cost to you,
                </li>
                <li>
                  <GiCheckMark
                    style={{
                      verticalAlign: "middle",
                      fontSize: "0.85rem",
                    }}
                  />
                  ensure that we communicate with you at all critical points of
                  your matter. We want you to know exactly what is going on in
                  your case and why, and
                </li>
                <li>
                  <GiCheckMark
                    style={{
                      verticalAlign: "middle",
                      fontSize: "0.85rem",
                    }}
                  />
                  to treat you like family and look after your best interest,
                  always.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Commit;
