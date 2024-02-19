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
          <ServiceCard type="Accident" Icon={FaCarCrash} />
          <ServiceCard type="Rape" Icon={LuGrape} />
          <ServiceCard type="Murder" Icon={FaCarCrash} />
          <ServiceCard type="Domestic Violence" Icon={FaHeartPulse} />
          <ServiceCard type="Marriage Registration" Icon={PiHandshakeDuotone} />
          <ServiceCard type="Divorce Matters" Icon={FaHeartBroken} />
          <ServiceCard type="Matrimonial Disputes" Icon={GiSlap} />
          <ServiceCard type="Dowry 498A" Icon={GiTakeMyMoney} />
          <ServiceCard type="Sexual Harassment" Icon={FaPersonBreastfeeding} />
        </div>
      </div>
    </div>
  );
}

export default Services;
