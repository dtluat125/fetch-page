import React from "react";
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
function Company() {
  return (
    <div className="company">
      <Header />
      <CompanyHeader />
      <div className="company-header c-cus-container ">
        <div className=" ant-row ant-row-center">
          <div className="company-banner ant-col ant-col-xs-24 ant-col-sm-24 ant-col-lg-16 ant-col-xl-16">
            <div className="c-h1-title">
              Let Fetch scale your business to new heights
            </div>
            <div className="c-h6-title">
              What really matters while running a business is time and
              productivity. With Fetch, you get to place greater focus on these
              details with a robust team.
            </div>
          </div>
        </div>
      </div>
      <HowItWorks />
      <USP2
        title="What makes Fetch different?"
        theme={Theme1}
        backgroundColor="#F9FBFE"
      />
      <TrustedBy />
      <FetchHelp />
      <RedTheme title="Run your business effortlessly with Fetch" subtitle="Connect with us to find a fitting solution today." buttonText = "Contact us" />
      <Footer />
    </div>
  );
}

export default Company;
