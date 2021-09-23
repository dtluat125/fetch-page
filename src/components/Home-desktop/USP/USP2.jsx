import React from "react";
import "../../../assets/css/usp.css";
import Usp2Theme from "../../../assets/img/Usp2Theme.png";
import CheckIcon from "../../../assets/img/CheckIcon.png";
import SkeletonImage from "antd/lib/skeleton/Image";
import { Skeleton } from "antd";
function USP2({ title, theme, company, backgroundColor, loading }) {
  return (
    <div className="usp2-container" style={{ width: "100%" }}>
      <div className="usp2-container__inner c-cus-container row ">
        {loading ? (
          <SkeletonImage
            className="col-md-6 usp2__left"
            style={{ minWidth: 300 }}
          />
        ) : (
          <div className="col-md-6 usp2__left" data-aos="fade-down-right">
            <div className="usp__theme">
              <img src={title ? theme : Usp2Theme} alt="" />
            </div>
          </div>
        )}
        <div className="col-md-6 usp2__right">
          {loading ? (
            <Skeleton paragraph="false" />
          ) : (
            <div data-aos="fade-left" className="usp__title  c-h3-title">
              {title ? title : "Fetch helps businesses run more efficiently"}
            </div>
          )}
          {company && !loading && (
            <div className="usp__content">
              <div className="usp__text-group" data-aos="fade-left">
                <div className="check-icon__container">
                  <div className="check-icon check-icon--yellow">
                    <img src={CheckIcon} alt="" />
                  </div>
                </div>
                <div className="usp__text-group__content">
                  <div className="usp__content__title c-h5-title c-h5-title--bold">
                    Quality talents at the right cost{" "}
                  </div>
                  <div className="usp__content__small-text">
                    All specialists are vetted and guaranteed to deliver results
                    without any additional fees.
                  </div>
                </div>
              </div>
              <div className="usp__text-group" data-aos="fade-left">
                <div className="check-icon__container">
                  <div className="check-icon check-icon--yellow">
                    <img src={CheckIcon} alt="" />
                  </div>
                </div>
                <div className="usp__text-group__content">
                  <div className="usp__content__title c-h5-title c-h5-title--bold">All-in-one service</div>
                  <div className="usp__content__small-text">
                  We're always available to support you whenever you require our assistance regarding our partnership.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default USP2;
