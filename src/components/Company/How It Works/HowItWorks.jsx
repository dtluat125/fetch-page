import React from "react";
import "../../../assets/css/howItWorks.css";
import Feature from "./Feature";
import Feature1 from "../../../assets/img/Feature1.png";
import Feature2 from "../../../assets/img/Feature2.png";
import Feature3 from "../../../assets/img/Feature3.png";
import Feature4 from "../../../assets/img/Feature4.png";
function HowItWorks() {
  return (
    <div className="how-it-works">
      <div className="how-it-works__inner">
        <div className="how-it-works__text">
          <div className="how-it-works__title">How it works</div>
          <div className="how-it-works__small-text">
            Being one of the first in the industry has allowed us to gain a
            strong grasp of the Vietnamese market.
          </div>
        </div>
        <div className="how-it-works__features">
          <div className="how-it-works__features__inner">
            <Feature icon={Feature1} title="Talent Acquisition" />
            <Feature icon={Feature2} title="Managed Services" />
            <Feature icon={Feature3} title="Payroll & Contract " />
            <Feature icon={Feature4} title="Full-suite Consultancy" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
