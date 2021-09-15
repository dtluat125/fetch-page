import React from "react";
import "../../../assets/css/usp.css";
import Usp2Theme from "../../../assets/img/Usp2Theme.png";
import CheckIcon from "../../../assets/img/CheckIcon.png";
import SkeletonImage from "antd/lib/skeleton/Image";
import { Skeleton } from "antd";
function USP2({ title, theme, company, backgroundColor, loading }) {
  return (
    <div className="usp2-container" data-aos="fade-left" style={{ width: "100%" }}>
      <div className="usp2-container__inner c-cus-container row ">
        {loading ? (
          <SkeletonImage
            className="col-md-6 usp2__left"
            style={{ minWidth: 300 }}
          />
        ) : (
          <div className="col-md-6 usp2__left">
            <div className="usp__theme">
              <img src={title ? theme : Usp2Theme} alt="" />
            </div>
          </div>
        )}
        <div className="col-md-6 usp2__right">
          {loading?<Skeleton paragraph="false"/>:<div className="usp__title  c-h3-title">
            {title ? title : "Fetch helps businesses run more efficiently"}
          </div>}
          {company&&!loading && (
            <div className="usp__content">
              <div className="usp__text-group">
                <div className="check-icon__container">
                  <div className="check-icon check-icon--yellow">
                    <img src={CheckIcon} alt="" />
                  </div>
                </div>
                <div className="usp__text-group__content">
                  <div className="usp__content__title">Fast-free Hiring </div>
                  <div className="usp__content__small-text">
                    Being one of the first in the industry has allowed us to
                    gain a strong grasp of the Vietnamese market.
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
                  <div className="usp__content__title">Full-control hiring</div>
                  <div className="usp__content__small-text">
                    Being one of the first in the industry has allowed us to
                    gain a strong grasp of the Vietnamese market.
                  </div>
                </div>
              </div>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}

export default USP2;
