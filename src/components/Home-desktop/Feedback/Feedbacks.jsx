import React from "react";
import "../../../assets/css/feedbacks.css";
import SlideTrack from "./SlideTrack";
function Feedbacks() {
  return (
    <div className="feedbacks-container">
      <div className="feedbacks__inner">
        <div className="text-group feedbacks__text-group">
          <div className="text-group__title feedbacks__title">Our Feedbacks</div>
          <div className="text-group__small-text feedbacks__small-text">
            <span>
              Separated they live in Bookmarks right at the coast of the famous <br />
              Semantics, large language ocean Separated they live in Bookmarks
              right
            </span>
          </div>
        </div>
        <SlideTrack/>
      </div>
    </div>
  );
}

export default Feedbacks;
