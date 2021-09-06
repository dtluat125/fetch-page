import React from "react";
import "../../../assets/css/trustedCus.css";
import CusLogoHolder from "./CusLogoHolder";
import Cus1 from "../../../assets/img/Cus1.png"
import Cus2 from "../../../assets/img/Cus2.png"
import Cus3 from "../../../assets/img/Cus3.png"
import Cus4 from "../../../assets/img/Cus4.png"
import Cus5 from "../../../assets/img/Cus5.png"
import Cus6 from "../../../assets/img/Cus6.png"
function TrustedCus({signUp}) {
  return (
    <div className="trusted-cus">
      <div className="trusted-cus__inner">
        <div className="trusted-cus__top row">
          <div className="trusted-cus__content col-md-8">
            <div className="trusted-by-many">Trusted by many</div>
            <div className="trusted-cus__small-text">
              We’re proud to share our growing list of satisfied partners
            </div>
        
          </div >
            {!signUp?
            <button className="c-large-button trusted-cus__view-more-button col-md-4" ><span>View more</span></button>:
            <button className="c-large-button trusted-cus__sign-up-button col-md-4"><span>Sign up</span></button>
            }
        </div>
        {!signUp&&<div className="trusted-cus__bottom">
            <CusLogoHolder logo={Cus1}/>
            <CusLogoHolder logo={Cus2}/>
            <CusLogoHolder logo={Cus3}/>
            <CusLogoHolder logo={Cus4}/>
            <CusLogoHolder logo={Cus5}/>
            <CusLogoHolder logo={Cus6}/>
        </div>}
      </div>
    </div>
  );
}

export default TrustedCus;
