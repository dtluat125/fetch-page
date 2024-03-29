import { Skeleton } from "antd";
import React from "react";
import CheckIcon from "../../../assets/img/CheckIcon.png";
function CheckedItem(props) {
  return (
    <div data-aos={props.animation}>
     {props.loading?<Skeleton active/> :<div className="usp__text-group">
        <div className="check-icon__container">
          <div className="check-icon check-icon--yellow">
            <img src={CheckIcon} alt="" />
          </div>
        </div>
        <div className="usp__text-group__content">
          <div className="usp__content__title c-h5-title c-h5-title--bold">
            {props.title ? props.title : "We’re Experienced"}
          </div>
          <div className="usp__content__small-text">
            {props.subtitle
              ? props.subtitle
              : "Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."}
          </div>
        </div>
      </div>}
    </div>
  );
}

export default CheckedItem;
