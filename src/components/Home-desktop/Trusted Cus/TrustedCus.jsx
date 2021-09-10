import React from "react";
import "../../../assets/css/trustedCus.css";
import CusLogoHolder from "./CusLogoHolder";
import Cus1 from "../../../assets/img/Cus1.png";
import Cus2 from "../../../assets/img/Cus2.png";
import Cus3 from "../../../assets/img/Cus3.png";
import Cus4 from "../../../assets/img/Cus4.png";
import Cus5 from "../../../assets/img/Cus5.png";
import Cus6 from "../../../assets/img/Cus6.png";
import { Carousel } from "antd";
function TrustedCus({ signUp }) {
  const settings = {
    className: "slick-trusted-cus",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: true,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="c-cus-container  trusted-cus ">
      <div className="trusted-cus__inner">
        <div className="trusted-cus__top row">
          <div className="trusted-cus__content col-md-8">
            <div className="trusted-by-many">Trusted by many</div>
            <div className="trusted-cus__small-text">
              We’re proud to share our growing list of satisfied partners
            </div>
          </div>
          <div
            className=" col-md-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <button className="c-large-button trusted-cus__view-more-button">
              <span>View more</span>
            </button>
          </div>
        </div>
        {!signUp && (
          <div className="trusted-cus__bottom">
            <Carousel {...settings}>
              <CusLogoHolder logo={Cus1} />
              <CusLogoHolder logo={Cus2} />
              <CusLogoHolder logo={Cus3} />
              <CusLogoHolder logo={Cus4} />
              <CusLogoHolder logo={Cus5} />
              <CusLogoHolder logo={Cus6} />
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}

export default TrustedCus;
