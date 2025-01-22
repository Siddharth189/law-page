import React from "react";
import "./styles.css";
import ServiceCard from "./ServiceCard";
import { FaCarCrash } from "react-icons/fa";
import { FaHeartPulse } from "react-icons/fa6";
import { FaHeartBroken } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { PiHandshakeDuotone } from "react-icons/pi";
import { LuGrape } from "react-icons/lu";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiSlap } from "react-icons/gi";

function Services() {
  return (
    <div id="services" className="services flex-column-center">
      <div className="page-style">
        <div className="flex-row">
          <p>We serve the best services.</p>
          <div className="custom-line" style={{ width: "100px" }}></div>
        </div>
        <h3>TYPES OF CASES WE HANDLE</h3>
        <div className="flex-row-between">
          <ServiceCard type="Accident" Icon={FaCarCrash} desc={"Lorem23"} />
          <ServiceCard type="Rape" Icon={LuGrape} desc={"Lorem23"} />
          <ServiceCard type="Murder" Icon={FaCarCrash} desc={"Lorem23"} />
          <ServiceCard
            type="Domestic Violence"
            Icon={FaHeartPulse}
            desc={"Lorem23"}
          />
          <ServiceCard
            type="Marriage Registration"
            Icon={PiHandshakeDuotone}
            desc={"Lorem23"}
          />
          <ServiceCard
            type="Divorce Matters"
            Icon={FaHeartBroken}
            desc={"Lorem23"}
          />
          <ServiceCard
            type="Matrimonial Disputes"
            Icon={GiSlap}
            desc={"Lorem23"}
          />
          <ServiceCard
            type="Dowry 498A"
            Icon={GiTakeMyMoney}
            desc={"Lorem23"}
          />
          <ServiceCard
            type="Sexual Harassment"
            Icon={FaPersonBreastfeeding}
            desc={"Lorem23"}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
