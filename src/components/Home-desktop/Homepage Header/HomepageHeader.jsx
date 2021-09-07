import React from "react";
import "../../../assets/css/homepageHeader.css";
import TextField from "./TextField";
import imageGroup from "../../../assets/img/Group 5169003.png";

function HomepageHeader() {
  return (
    <div className="hompage__header">
      <div className="homepage__header__inner c-page-header__inner row">
        <div className="homepage__header__left col-md-6">
          <div className=" c-h1-title homepage__header__h1 ">
            Smoother recruiting begins with Fetch
          </div> 
          <div className="c-h6-title hompage__header__small-text">
            No longer is hiring and managing offshore staff daunting. With
            Fetch, you get to build your remote dream team effortlessly while we
            handle the paperwork!
          </div>
          <button className="c-large-button homepage__header__signup-button">
            <span>Learn more</span>{" "}
          </button>
        </div>

        <div className="hompage__header__image-group col-md-6" >
          <img src={imageGroup} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomepageHeader;
