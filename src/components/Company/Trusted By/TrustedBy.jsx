import React from "react";
import Cus1 from "../../../assets/img/Cus1.png";
import Cus2 from "../../../assets/img/Cus2.png";
import Cus3 from "../../../assets/img/Cus3.png";
import Cus4 from "../../../assets/img/Cus4.png";
import Cus5 from "../../../assets/img/Cus5.png";
import "../../../assets/css/trustedBy.css";
import { Carousel, Col, Skeleton } from "antd";
import SkeletonInput from "antd/lib/skeleton/Input";
function TrustedBy({loading}) {
  const settings = {
    className: "slick-trusted-by",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    centerPadding: "0px"
  };

  return (
    <div className="conpany-trusted-by" data-aos="fade-right">
      <div className="company-trusted-by__inner">
        <Col
          xs={24}
          sm={24}
          md={16}
          lg={8}
          className="company-trusted-by__text"
        >
          {loading?<Skeleton.Input active style={{minWidth: 300, textAlign: "center"}}/>:<div
            className="company-trusted-by__title c-h3-title c-h3-title--maintain"
            style={{ fontSize: 37 }}
          >
            Trusted by many
          </div>}{loading?<Skeleton active/>:
          <div className="company-trusted-by__small-text c-h6-title">
            Being one of the first in the industry has allowed us to gain a
            strong grasp of the Vietnamese market.
          </div>}
        </Col>

        <div className=" cus-container-fluid">{
          loading?<SkeletonInput/>:
          <Carousel {...settings}>
            <div className="brand-card brand-card--white">
              <div className="brand-card__inner">
                <img src={Cus1} alt="" />
              </div>
            </div>
            <div className="brand-card brand-card--white">
              <div className="brand-card__inner">
                <img src={Cus2} alt="" />
              </div>
            </div>
            <div className="brand-card brand-card--white">
              <div className="brand-card__inner">
                <img src={Cus3} alt="" />
              </div>
            </div>
            <div className="brand-card brand-card--white">
              <div className="brand-card__inner">
                <img src={Cus4} alt="" />
              </div>
            </div>
            <div className="brand-card brand-card--white">
              <div className="brand-card__inner">
                <img src={Cus5} alt="" />
              </div>
            </div>
          </Carousel>}
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
