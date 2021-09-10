import React from "react";
import "../../../assets/css/companyHeader.css";
import CompanyHeaderBackground from "../../../assets/img/CompanyHeaderBackground.png";
function CompanyHeader() {
  return (
    <div
      className="company-header-container"
    >
      <img src={CompanyHeaderBackground} alt="" />
    </div>
  );
}

export default CompanyHeader;
