import { Skeleton } from "@material-ui/lab";
import React from "react";
import "../../../assets/css/companyHeader.css";
import CompanyHeaderBackground from "../../../assets/img/CompanyHeaderBackground.svg";
function CompanyHeader({loading}) {
  return (
    <div
      className="company-header-container" data-aos-anchor-placement="top-center"
    >
     {loading?<Skeleton variant="rect" style={{width: "100%",}}/>: <img src={CompanyHeaderBackground} alt="" />}
    </div>
  );
}

export default CompanyHeader;
