import React from "react";

function ServiceFeature({ featureTheme, featureTitle, featureSubtitle, id }) {
  return (
    <div className="c-page-header service-feature" id={id}>
      <div className="service-feature__inner row">
        <div className="col-lg-6 service-feature__left service-feature__text-side">
          <div className="service-feature__text-group c-header-text-group">
            <div className="service-feature__title c-h4-title">
              {featureTitle}
            </div>
            <div className="service-feature__subtitle c-p-subtitle">
              {featureSubtitle}
            </div>
          </div>
        </div>
        <div className="col-lg-6 service-feature__right c-theme-holder">
          <img src={featureTheme} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ServiceFeature;
