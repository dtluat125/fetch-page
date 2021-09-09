import React from "react";
import "../../../assets/css/about.css";
function AboutFetch() {
  return (
    <div className="about-container">
      <div className="about__inner">
        <div className="text-group about__text-group ">
          <div className="text-group__title about__title ">All about Fetch</div>
          <div className="text-group__small-text about__small-text ">
            <span>
              Separated they live in Bookmarks right at the coast of the famous
              Semantics,
              <br /> large language ocean Separated they live in Bookmarks right
            </span> 
          </div>
        </div>
        <div className="about__features">
          <div className="about__features__inner row">
            <div className="about__feature col-md-4">
              <div className="about__count">500+</div>
              <div className="about__subtitle">Employees</div>
            </div>
            <div className="about__feature col-md-4">
              <div className="about__count">100+</div>
              <div className="about__subtitle">Partners</div>
            </div>
            <div className="about__feature col-md-4">
              <div className="about__count">7+</div>
              <div className="about__subtitle">Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFetch;
