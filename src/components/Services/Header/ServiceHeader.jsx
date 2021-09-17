import { Col, Skeleton } from "antd";
import SkeletonImage from "antd/lib/skeleton/Image";
import React from "react";
import "../../../assets/css/serviceHeader.css";
function ServiceHeader({ theme, headerTitle, headerSubtitle, loading, touchBottom }) {

  return (
    <div className="c-page-header service-header">
      <div className="c-page-header__inner service-header__inner row">
        <Col lg={16} className="service-header__left">
            {loading?<Skeleton active/>:
          <div className="service-header__text-group c-header-text-group">
            <div className="service-header__title c-h1-title">
              {headerTitle}
            </div>
            <div className="service-header__subtitle c-h6-subtitle">
              {headerSubtitle}
            </div>
          </div>}
        </Col>
        <Col lg={8} className="service-header__right c-theme-holder" >
          {loading&&touchBottom ? <SkeletonImage /> : <img style={touchBottom?{transform: `translateY(20px)`}:{}} src={theme} alt="" />}
        </Col>
      </div>
    </div>
  );
}

export default ServiceHeader;
