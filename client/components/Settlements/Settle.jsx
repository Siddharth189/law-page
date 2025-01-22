import React from "react";
import "./style.css";
import SettleCard from "./SettleCard";

function Settle() {
  return (
    <div className="settle flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>Previous Cases</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>
        <h3 style={{ color: "#001A46" }}>SETTLEMENTS & JURY VERDICTS</h3>
        <div className="flex-row-between">
          <SettleCard
            title="$9,70,7879 Project Value Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
          <SettleCard
            title="$9,70,7879 Project Value Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
          <SettleCard
            title="$9,70,7879 Project Value Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
          <SettleCard
            title="$9,70,7879 Project Value Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
          <SettleCard
            title="$9,70,7879 Project Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
          <SettleCard
            title="$9,70,7879 Project Value Settlement"
            brief="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        nostrum nesciunt consectetur possimus ipsa nisi dolores voluptas."
          />
        </div>
      </div>
    </div>
  );
}

export default Settle;
