import React from "react";
import "../../../assets/css/trustedCus.css";
import CusLogoHolder from "./CusLogoHolder";
import Cus1 from "../../../assets/img/Cus1.svg";
import Cus2 from "../../../assets/img/Cus2.svg";
import Cus3 from "../../../assets/img/Cus3.svg";
import Cus4 from "../../../assets/img/Cus4.svg";
import Cus5 from "../../../assets/img/Cus5.svg";
import Cus6 from "../../../assets/img/Cus6.svg";
import { Carousel } from "antd";
import { Skeleton } from "@material-ui/lab";
import { Link } from "react-router-dom";
function TrustedCus({ signUp, loading }) {
  const settings = {
    className: "slick-trusted-cus",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          dots: true,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 1250,
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
    <div className="c-cus-container  trusted-cus " >
      <div className="trusted-cus__inner">
        <div className="trusted-cus__top row" data-aos="fade-left">
          <div className="trusted-cus__content col-md-8">
            {loading?<Skeleton variant="text" className="c-title trusted-by-many"/>:
            <div className="trusted-by-many">Trusted by many</div>
            }{loading?<Skeleton variant="text" className="trusted-cus__small-text"/>:<div className="trusted-cus__small-text">
              We’re proud to share our growing list of satisfied partners
            </div>}
          </div>
          <div
            className=" col-md-4 trusted-cus__button-container"
          
          >{loading?<Skeleton className="skeleton--button"/>:
          <Link to="/contact"><button className="c-large-button trusted-cus__view-more-button">
          <span>Learn more</span>
        </button></Link>
            }
          </div>
        </div>
        {!signUp && (
          <div className="trusted-cus__bottom" data-aos="fade-right">{loading?<div
          style={{display:"flex", flexWrap:"nowrap"}}
          >
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
            <Skeleton variant="rect" height="90px" className="cus-logo-holder"/>
          </div>:
            <Carousel {...settings}>
              <CusLogoHolder logo={Cus1} />
              <CusLogoHolder logo={Cus2} />
              <CusLogoHolder logo={Cus3} />
              <CusLogoHolder logo={Cus4} />
              <CusLogoHolder logo={Cus5} />
              <CusLogoHolder logo={Cus6} />
            </Carousel>}
          </div>
        )}
      </div>
    </div>
  );
}

export default TrustedCus;
