import React from "react";
import "../../../assets/css/usp.css";
import UspTheme from "../../../assets/img/Efficient.png";
import CheckIcon from "../../../assets/img/CheckIcon.png";
function USP1() {
  return (
    <div className="usp-container">
      <div className="usp-container__inner row">
        <div className="col-md-6 usp__left">
          <div className="usp__title">
            Fetch helps businesses run more efficiently
          </div>
          <div className="usp__content">
            <div className="usp__text-group">
              <div className="check-icon__container">
                <div className="check-icon">
                  <img src={CheckIcon} alt="" />
                </div>
              </div>
              <div className="usp__text-group__content">
                <div className="usp__content__title">We’re Experienced</div>
                <div className="usp__content__small-text">
                  Being one of the first in the industry has allowed us to gain
                  a strong grasp of the Vietnamese market.
                </div>
              </div>
            </div>
            <div className="usp__text-group">
              <div className="check-icon__container">
                <div className="check-icon">
                  <img src={CheckIcon} alt="" />
                </div>
              </div>
              <div className="usp__text-group__content">
                <div className="usp__content__title">We’re Experienced</div>
                <div className="usp__content__small-text">
                  Being one of the first in the industry has allowed us to gain
                  a strong grasp of the Vietnamese market.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 usp__right">
          <div className="usp__theme">
            <img src={UspTheme} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default USP1;
