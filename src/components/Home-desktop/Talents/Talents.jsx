import React from "react";
import "../../../assets/css/talents.css";
import Map from "../../../assets/img/Map.png";
import Vietnam from "../../../assets/img/Vietnam.png";
import Card from "./Card";
import InterviewPic from "../../../assets/img/InterviewPic.png";
import Star from "../../../assets/img/Star.png";

function Talents() {
  return (
    <div className="talents-container">
      <div className="talents__inner">
        <div className="talents__map">
          <div className="talents__map__content">
            <div className="star-holder">
              <img src={Star} alt="" />
            </div>
            <div className="c-h1-title talents__map__content__title">
              Get the best talents in Vietnam with us
            </div>
            <div className="c-h6-title talents__map__content__text">
              Whether you're looking for a software developer, tester or
              designer, we got you covered.
            </div>
            <div className="c-large-button" role="button" >Find out more</div>
          </div>

          <div
            className="talents__map-holder"
            style={{ backgroundImage: `url(${Map})` }}
          >
            <img src={Vietnam} className="map-img"></img>
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
        
      </div>
    </div>
  );
}

export default Talents;
