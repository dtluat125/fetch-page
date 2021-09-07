import React, { useEffect } from "react";
import ServiceFeature from "./ServiceFeature";
import ServiceFeatureTheme1 from "../../../assets/img/ServiceFeatureTheme1.png";
import "../../../assets/css/serviceBody.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function ServiceBody(props) {
  const features = [
    {
      featureTheme: ServiceFeatureTheme1,
      featureTitle: "A multi-dynamic pool of talents",
      featureSubtitle:
        "We bring you access to the best techies you can find in Vietnam through our vast recruitment network.",
    },

    {
      featureTheme: ServiceFeatureTheme1,
      featureTitle: "AAAA",
      featureSubtitle:
        "We bring you access to the best techies you can find in Vietnam through our vast recruitment network.",
    },
    {
      featureTheme: ServiceFeatureTheme1,
      featureTitle: "BBBBB",
      featureSubtitle:
        "We bring you access to the best techies you can find in Vietnam through our vast recruitment network.",
    },
  ];

  const featuresTitle = features.map((feature) => feature.featureTitle);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scrollDistance = window.scrollY;
      let current = "";
      let features = document.querySelectorAll(".service-feature");
      features.forEach((feature, index) => {
        let rect = feature.getBoundingClientRect();
        let bottom =
          window.innerHeight - feature.getBoundingClientRect().bottom;
        current = feature.getAttribute("id");
        let top = window.innerHeight - rect.top;
        let height = rect.bottom - rect.top;
        if (top > height/2 && bottom < 60) {
          let options = document.querySelectorAll(
            ".sidebar-option-container-wrapper"
          );
          let optionsArr = Array.from(options);
          let currentOptions = optionsArr.find(
            (option) => option.getAttribute("option") == current
          );
          currentOptions
            .querySelector(".sidebar-option-container")
            .classList.add("active");
          console.log(current + " active");
          optionsArr.forEach((option) => {
            if (option.getAttribute("option") !== current) {
              option
                .querySelector(".sidebar-option-container.active")
                ?.classList.remove("active");
            }
          });
        } else {
        }
      });
    });
  });
  return (
    <Router>
      <div className="service-body">
        <div className="service-body__inner c-page-header__inner row">
          <div className="service-body__left col-md-4">
            <div className="sidebar">
              <div className="sidebar-content">
                <div className="sidebar-title c-h5-title">{props.title}</div>
                <div className="sidebar-options">
                  {featuresTitle.map((featureTitle, index) => (
                    <a
                      href={"#a" + index}
                      option={"a" + index}
                      className="sidebar-option-container-wrapper"
                    >
                      <div className="sidebar-option-container" role="button">
                        <div className="a-wrapper">
                          <a className="sidebar-option c-p-subtitle">
                            {featureTitle}
                          </a>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="service-body__right col-md-8">
            {features?.map((feature, index) => {
              const { featureTheme, featureTitle, featureSubtitle } = feature;
              return (
                <ServiceFeature
                  featureTheme={featureTheme}
                  featureTitle={featureTitle}
                  featureSubtitle={featureSubtitle}
                  key={index}
                  id={"a" + index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default ServiceBody;
