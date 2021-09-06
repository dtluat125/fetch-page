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
function Company() {
  return (
    <div className="company">
      <Header />
      <CompanyHeader />
      <HowItWorks />
      <USP2
        title="Grow and scale helping  businesses run more efficiently"
        theme={Theme1}
      />
      <TrustedBy />
      <FetchHelp />
      <Available />
      <Footer />
    </div>
  );
}

export default Company;
