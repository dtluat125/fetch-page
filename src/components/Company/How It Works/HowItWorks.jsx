import React from "react";
import "../../../assets/css/howItWorks.css";
import Feature from "./Feature";
import Feature1 from "../../../assets/img/Feature1.png";
import Feature2 from "../../../assets/img/Feature2.png";
import Feature3 from "../../../assets/img/Feature3.png";
import Feature4 from "../../../assets/img/Feature4.png";
import CompanyPic1 from "../../../assets/img/CompanyPic1.png";
import CheckIcon from "../../../assets/img/CheckIcon.png";
import { Col, Row, Skeleton } from "antd";
import { Link } from "react-router-dom";
import SkeletonButton from "antd/lib/skeleton/Button";
function HowItWorks({ loading }) {
  return (
    <div className="how-it-works">
      <div className="how-it-works__inner ">
        <Col sm={24} lg={16} xl={16} className="ant-col c-cus-container" data-aos="fade-left">
          <div className="company-pic1 ant-row ant-row-center">
            {loading ? <Skeleton /> : <img src={CompanyPic1} alt="" />}
          </div>
          {loading ? (
            <Skeleton active />
          ) : (
            <div className="how-it-works__title-group" data-aos="fade-left">
              <div
                className="c-h3-title c-h3-title--maintain"
                style={{ textAlign: "center", marginBottom: 14 }}
              >
                We offer customised packages to each client
              </div>
              <div className="c-h6-title " style={{ textAlign: "center" }}>
                No longer is hiring and managing offshore staff daunting. With
                Fetch, you get to build your remote dream.
              </div>
            </div>
          )}
        </Col>
        <Row gutter={24} className="how-it-works__features ant-row" >
          <Col
            xs={24}
            sm={24}
            md={16}
            xl={16}
            className="how-it-works__features__inner"
          >
            <div className="how-it-works__features__banner" data-aos="fade-left">
              {loading ? (
                <Skeleton />
              ) : (
                <span className="c-h5-title ant-col" >Client services</span>
              )}{" "}
            </div>
            <Row gutter={[27, 27]}>
              <Col span={12}>
                <Row  >
                  <Feature
                    animation="fade-up"
                    loading={loading}
                    destination="/services/1"
                    backgroundColor="#D2E2ED"
                    icon={Feature1}
                    title="Talent Acquisition"
                  />

                  <Feature
                  animation="fade-up"
                    loading={loading}
                    destination="/services/3"
                    icon={Feature2}
                    color="#FFFFFF"
                    title="Payroll and compliances"
                    backgroundColor="#17274E"
                  />
                </Row>
              </Col>
              <Col span={12}>
                <Row  >
                  <Feature
                  animation="fade-up"
                    loading={loading}
                    destination="/services/2"
                    backgroundColor="#FF6847"
                    icon={Feature3}
                    title="Services management"
                    color="#FFFFFF"
                  />

                  <Feature
                  animation="fade-up"
                    loading={loading}
                    destination="/services/4"
                    icon={Feature4}
                    color="#FFFFFF"
                    title="Full-suite project consultancy"
                    backgroundColor="#FFBE16"
                  />
                </Row>
              </Col>
            </Row>
            {/* <Feature icon={Feature2} title="Managed Services" />
            <Feature icon={Feature3} title="Payroll & Contract " />
            <Feature icon={Feature4} title="Full-suite Consultancy" /> */}
          </Col>
          <Col
            xs={24}
            sm={24}
            md={8}
            xl={8}
            className="how-it-works__features__left"
          >
            {loading ? (
              <Skeleton />
            ) : (
              <div className="how-it-work__sub-group">
                <div className="c-h5-title c-h5-title--maintain"  data-aos="fade-right">
                  We offer a diverse range of products
                </div>
                <div className="c-p-subtitle" data-aos="fade-right">
                  From team management to project consultancy, we will always
                  have a service available to meet your business requirements.
                </div>
              </div>
            )}
            {loading ? (
              <Skeleton />
            ) : (
              <div className="how-it-work__sub-group">
                <div className="c-h5-title c-h5-title--maintain" data-aos="fade-right">
                  Flexible and catered to your needs
                </div>
                <div className="c-p-subtitle" data-aos="fade-right">
                  Don't need a particular feature in the service selected? No
                  problem. Our plans are designed to be adaptable to match your
                  requests accordingly.
                </div>
              </div>
            )}

            <div className="check-group">
              {loading ? (
                <>
                  <Skeleton avatar="true" />
                  <Skeleton avatar="true" />
                  <Skeleton avatar="true" />
                  <Skeleton avatar="true" />
                </>
              ) : (
                <>
                  <div className="check-item ant-row" data-aos="fade-right">
                    <div className="check-icon__container">
                      <div className="check-icon check-icon--yellow">
                        <img src={CheckIcon} alt="" />
                      </div>
                    </div>
                    <div className="c-p-subtitle">Talent acquisition</div>
                  </div>
                  <div className="check-item ant-row" data-aos="fade-right">
                    <div className="check-icon__container">
                      <div className="check-icon check-icon--yellow">
                        <img src={CheckIcon} alt="" />
                      </div>
                    </div>
                    <div className="c-p-subtitle">Services management</div>
                  </div>
                  <div className="check-item ant-row" data-aos="fade-right">
                    <div className="check-icon__container">
                      <div className="check-icon check-icon--yellow">
                        <img src={CheckIcon} alt="" />
                      </div>
                    </div>
                    <div className="c-p-subtitle">Payroll and compliances</div>
                  </div>
                  <div className="check-item ant-row" data-aos="fade-right">
                    <div className="check-icon__container">
                      <div className="check-icon check-icon--yellow">
                        <img src={CheckIcon} alt="" />
                      </div>
                    </div>
                    <div className="c-p-subtitle">
                      Full-suite project consultancy
                    </div>
                  </div>
                </>
              )}
            </div>
          </Col>
        </Row>
        <div className="text-group-with-button" data-aos="zoom-in">
          {loading?<Skeleton/>:<div className="c-h6-title" style={{minWidth: "50%"}}> 
            Find tailormade, flexible solutions, designed for your business
            needs.
          </div>}{loading?<SkeletonButton/>:
          <button className="c-large-button" style={{ background: "#fff" }}>
            Learn more
          </button>}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
