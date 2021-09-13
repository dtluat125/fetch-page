import React, { useEffect, useState } from "react";
import "../../../assets/css/usp.css";

import CheckIcon from "../../../assets/img/CheckIcon.png";
function USP1(props) {
  const [inMobile, setInMobile] = useState(false);
  useEffect(() => {
    const probeWindow  = () => {
      let windowWidth = window.innerWidth;
      if(windowWidth <= 400) {
        setInMobile(true)
      }
      else setInMobile(false)
    }
    probeWindow();
    window.addEventListener("resize", probeWindow);

  }, )
  return (
    <div className="c-cus-container usp-container">
      <div className="usp-container__inner row">
        <div className="col-md-6 usp__left">
          <div className="c-h2-title usp__title">{props.uspTitle}</div>
          <div className="usp__content">
            <div className="usp__text-group">
              <div className="check-icon__container">
                <div className="check-icon check-icon--yellow"> 
                  <img src={CheckIcon} alt="" />
                </div>
              </div>
              <div className="usp__text-group__content">
                <div className="usp__content__title c-h5-title">{props.uspSubtitle1}</div>
                <div className="usp__content__small-text c-p-subtitle">
                  {props.uspText1}
                </div>
              </div>
            </div>
            <div className="usp__text-group">
              <div className="check-icon__container">
                <div className="check-icon check-icon--yellow">
                  <img src={CheckIcon} alt="" />
                </div>
              </div>
              <div className="usp__text-group__content">
                <div className="usp__content__title c-h5-title">{props.uspSubtitle2}</div>
                <div className="usp__content__small-text c-p-subtitle">
                {props.uspText2}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 usp__right">
          <div className="usp__theme">
            <img src={!inMobile?props.uspTheme:props.uspMobileTheme?props.uspMobileTheme:props.uspTheme} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default USP1;
