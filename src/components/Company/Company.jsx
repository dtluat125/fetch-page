import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import USP2 from "../Home-desktop/USP/USP2";
import CompanyHeader from "./Company Header/CompanyHeader";
import HowItWorks from "./How It Works/HowItWorks";
import Theme1 from "../../assets/img/Theme1.png";
import TrustedBy from "./Trusted By/TrustedBy";
import FetchHelp from "./Fetch Help/FetchHelp";
import Available from "./Available";
import RedTheme from "../RedTheme";
import { Skeleton } from "antd";
function Company({loading}) {
  
  return (
    <div className="company">
      <Header />
      <CompanyHeader loading={loading} />
      <div className="company-header c-cus-container ">
        <div className=" ant-row ant-row-center">
         {loading?<Skeleton  active/> : <div className="company-banner ant-col ant-col-xs-24 ant-col-sm-24 ant-col-lg-16 ant-col-xl-16">{<>
            <div className="c-h1-title">
              Let Fetch scale your business to new heights
            </div>
            <div className="c-h6-title">
              What really matters while running a business is time and
              productivity. With Fetch, you get to place greater focus on these
              details with a robust team.
            </div></>}
          </div>}
        </div>
      </div>
      <HowItWorks loading={loading} />
      <USP2
        loading={loading}
        title="What makes Fetch different?"
        theme={Theme1}
        backgroundColor="#F9FBFE"
        subtitle1="Fast-free Hiring"
        text1="Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."
        subtitle2="Full-control hiring"
        text2="Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market."
        company={true}
      />
      <TrustedBy loading={loading} />
      <FetchHelp loading={loading} />
      <RedTheme
        title="Run your business effortlessly with Fetch"
        subtitle="Connect with us to find a fitting solution today."
        buttonText="Contact us"
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default Company;
