import React from "react";
import "../../../assets/css/feedbacks.css";
import SlideTrack from "./SlideTrack";
import FloatTheme from "../../../assets/img/FloatTheme.png";
function Feedbacks() {
  return (
    <div className="feedbacks-container">
      <div className="c-float-group">
        <div className="float-group__theme">
          <img src={FloatTheme} alt="" />
        </div>
        <div className="float-group__content">
          <div className="c-h3-title float-group__title">
            In search of a career instead?
          </div>
          <div className="c-h6-title float-group__subtitle">
            We are always looking to expand the Fetch team.
          </div>
        </div>
        <div className="c-large-button" role="button">
          Find now
        </div>
      </div>
      <div className="feedbacks__inner">
        <div className="text-group feedbacks__text-group">
          <div className="c-h3-title text-group__title feedbacks__title">
            Client reviews and testimony
          </div>
          <div className=" c-h6-title text-group__small-text feedbacks__small-text">
            What Fetch partners have to say
          </div>
        </div>
        <SlideTrack />
      </div>
    </div>
  );
}

export default Feedbacks;
