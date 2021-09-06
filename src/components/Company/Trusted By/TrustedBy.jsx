import React from "react";
import Cus1 from "../../../assets/img/Cus1.png";
import Cus2 from "../../../assets/img/Cus1.png";
import Cus3 from "../../../assets/img/Cus1.png";
import "../../../assets/css/trustedBy.css"
function TrustedBy() {
  return (
    <div className="conpany-trusted-by">
      <div className="company-trusted-by__inner">
        <div className="company-trusted-by__text">
          <div className="company-trusted-by__title">Trusted by many</div>
          <div className="company-trusted-by__small-text">
            Being one of the first in the industry has allowed us to gain a
            strong grasp of the Vietnamese market.
          </div>
        </div>

        <div className="company-trusted-by__brands">
          <div className="brand-card brand-card--gray" >
            <img src={Cus1} alt="" />
          </div>
          <div className="brand-card brand-card--white">
            <img src={Cus2} alt="" />
          </div>
          <div className="brand-card brand-card--gray">
            <img src={Cus3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
