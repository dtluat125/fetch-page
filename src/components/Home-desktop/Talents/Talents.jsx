import React from "react";
import "../../../assets/css/talents.css";
import Map from "../../../assets/img/Map.png";
import Vietnam from "../../../assets/img/Vietnam.png";
import Card from "./Card";
import InterviewPic from "../../../assets/img/InterviewPic.png";
function Talents() {
  return (
    <div className="talents-container">
      <div className="talents__inner">
        <div className="talents__map">
          <div className="talents__map__content">
            <div className="talents__map__content__title">
              Choose from our <br /> multi-dynamic pool of talents
            </div>
            <div className="talents__map__content__text">
              Whether you're looking for a software developer, tester or
              designer from Vietnam, we got you covered to a T. Expect:
            </div>
          </div>
          <div className="talents__map-holder">
            <img src={Map} className="map-img"></img>
          </div>
        </div>

        <div className="talents__cards">
          <div className="talents__cards__inner">
            <Card
              photo={InterviewPic}
              title="Interview Process"
              content="No staff delegation – enjoy absolute control over the entire hiring process"
            />
            <Card
              photo={InterviewPic}
              title="Interview Process"
              content="No staff delegation – enjoy absolute control over the entire hiring process"
            />
            <Card
              photo={InterviewPic}
              title="Interview Process"
              content="No staff delegation – enjoy absolute control over the entire hiring process"
            />
          </div>
        </div>
        <div className="talents__trusted">
          <div className="talents__trusted__inner">
            <div className="trusted-cus__content">
              <div className="trusted-by-many text--white">Trusted by many</div>
              <div class="trusted-cus__small-text text--white">
                Be part of our growing network of satisfied partners
              </div>
            </div>
            <button class="c-large-button trusted-cus__view-more-button button--red">
              <span className="text--white">Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;
