import { useMediaQuery } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useTheme } from "@material-ui/styles";
import React from "react";
import "../../../assets/css/companyHeader.css";
import CompanyHeaderBackground from "../../../assets/img/CompanyHeaderBackground.svg";
import CompanyHeaderBackgroundMobile from "../../../assets/img/CompanyHeaderBackgroundMobile.svg";


function CompanyHeader({loading}) {
  const theme = useTheme();
  const matches = useMediaQuery('(max-width: 500px)');
  return (
    <div
      className="company-header-container" data-aos-anchor-placement="top-center"
    >
     {loading?<Skeleton variant="rect" style={{width: "100%",}}/>: <img src={matches?CompanyHeaderBackgroundMobile:CompanyHeaderBackground} alt="" />}
    </div>
  );
}

export default CompanyHeader;
