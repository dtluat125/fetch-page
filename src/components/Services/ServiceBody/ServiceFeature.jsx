import { Skeleton } from "antd";
import SkeletonImage from "antd/lib/skeleton/Image";
import React from "react";

function ServiceFeature({
  featureTheme,
  featureTitle,
  featureSubtitle,
  id,
  loading,
  animation,
  index,
}) {
  let left, right;
  if (index % 2 !== 0) {
    left = "left";
    right = "right";
  } else {
    left = "right";
    right = "left";
  }
  return (
    <div className="c-page-header service-feature" id={id} >
      <div className="service-feature__inner row">
        <div className="col-lg-6 service-feature__left service-feature__text-side">
          {loading ? (
            <Skeleton active />
          ) : (
            <div className="service-feature__text-group c-header-text-group">
              <div className="service-feature__title c-h4-title" data-aos={"fade-" + left}>
                {featureTitle}
              </div>
              <div className="service-feature__subtitle c-p-subtitle" data-aos={"fade-" + left}>
                {featureSubtitle}
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-6 service-feature__right c-theme-holder "data-aos={"fade-down-" + right}>
          {loading ? (
            <SkeletonImage active />
          ) : (
            <img src={featureTheme} alt="" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceFeature;
