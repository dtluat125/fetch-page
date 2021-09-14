import { Skeleton } from "@material-ui/lab";
import React from "react";
import "../../../assets/css/companyHeader.css";
import CompanyHeaderBackground from "../../../assets/img/CompanyHeaderBackground.png";
function CompanyHeader({loading}) {
  return (
    <div
      className="company-header-container"
    >
     {loading?<Skeleton variant="rect" style={{width: "100%", height: 200}}/>: <img src={CompanyHeaderBackground} alt="" />}
    </div>
  );
}

export default CompanyHeader;
