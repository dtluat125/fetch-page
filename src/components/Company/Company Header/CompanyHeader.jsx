import React from "react";
import "../../../assets/css/companyHeader.css";
import CompanyHeaderBackground from "../../../assets/img/CompanyHeaderBackground.png";
function CompanyHeader() {
  return (
    <div
      className="company-header-container"
      style={{ backgroundImage: `url(${CompanyHeaderBackground})` }}
    >
      <div className="company-header__inner">
        <div className="company-header__content">
          <div className="company-header__content-title">
            Building and scaling great teams with our partners
          </div>
          <div className="company-header__content-small-text">
            No longer is hiring and managing offshore staff daunting. With
            Fetch, you get to build your remote dream team effortlessly while we
            handle the paperwork!
          </div>
          <button className="sign-up-button c-large-button">
            <span>Sign up now</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyHeader;
