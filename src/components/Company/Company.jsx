import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import USP2 from "../Home-desktop/USP/USP2";
import CompanyHeader from "./Company Header/CompanyHeader";
import HowItWorks from "./How It Works/HowItWorks";
import Theme1 from "../../assets/img/Theme1.svg";
import TrustedBy from "./Trusted By/TrustedBy";
import FetchHelp from "./Fetch Help/FetchHelp";
import RedTheme from "../RedTheme";
import { Skeleton } from "antd";
import AOS from "aos"
function Company() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkImg = () => {
      var images = company.querySelectorAll("img");
      var imagesArr = Array.from(images);
      //console.log(imagesArr.length);
      let count = 0;
      imagesArr.forEach((img) => {
        if (img.complete) incrementCounter();
        else img.addEventListener("load", incrementCounter);
      });
      function incrementCounter() {
        count++;
        //console.log(loading);
        if (count === imagesArr.length) {
          setTimeout(() => {
            setLoading(false);
            AOS.refresh();
          }, );
        }
      }
    };
    var company = document.querySelector(".company");
    if (document.readyState === "complete") {
      checkImg();
    } else window.addEventListener("load", checkImg);
    return () => {
      window.removeEventListener("load", () => {
        setLoading(true);
        
      });
    };
  });

  return (
    <div className="company">
      <Header />
      <CompanyHeader loading={loading} />
      <div className="company-header c-cus-container " data-aos="fade-right">
        <div className=" ant-row ant-row-center">
          {loading ? (
            <Skeleton active />
          ) : (
            <div className="company-banner ant-col ant-col-xs-24 ant-col-sm-24 ant-col-lg-16 ant-col-xl-16">
              {
                <>
                  <div className="c-h1-title">
                    Let Fetch scale your business to new heights
                  </div>
                  <div className="c-h6-title">
                    What really matters while running a business is time and
                    productivity. With Fetch, you get to place greater focus on
                    these details with a robust team.
                  </div>
                </>
              }
            </div>
          )}
        </div>
      </div>
      <HowItWorks loading={loading} />
      <USP2
        loading={loading}
        title="What makes Fetch different?"
        theme={Theme1}
        backgroundColor="#F9FBFE"
        subtitle1="Quality talents at the right cost"
        text1="All specialists are vetted and guaranteed to deliver results without any additional fees."
        subtitle2="All-in-one service"
        text2="We're always available to support you whenever you require our assistance regarding our partnership."
        company={true}
      />
      <TrustedBy loading={loading} />
      <FetchHelp loading={loading} />
      <RedTheme
        title="Run your business effortlessly with Fetch"
        subtitle="Connect with us to find a fitting solution today."
        buttonText="Contact us"
        loading={loading}
        to="/contact"
      />
      <Footer />
    </div>
  );
}

export default Company;
