import React, { useEffect } from "react";
import ServiceFeature from "./ServiceFeature";
import ServiceFeatureTheme1 from "../../../assets/img/ServiceFeatureTheme1.png";
import ServiceFeatureTheme2 from "../../../assets/img/ServiceFeatureTheme2.png";
import ServiceFeatureTheme3 from "../../../assets/img/ServiceFeatureTheme3.png";
import ServiceFeatureTheme4 from "../../../assets/img/ServiceFeatureTheme4.png";
import ServiceFeatureTheme5 from "../../../assets/img/ServiceFeatureTheme5.png";
import ServiceFeatureTheme6 from "../../../assets/img/ServiceFeatureTheme6.png";
import ServiceFeatureTheme7 from "../../../assets/img/ServiceFeatureTheme7.png";
import ServiceFeatureTheme8 from "../../../assets/img/ServiceFeatureTheme8.png";
import ServiceFeatureTheme9 from "../../../assets/img/ServiceFeatureTheme9.png";
import ServiceFeatureTheme10 from "../../../assets/img/ServiceFeatureTheme10.png";
import ServiceFeatureTheme11 from "../../../assets/img/ServiceFeatureTheme11.png";
import ServiceFeatureTheme12 from "../../../assets/img/ServiceFeatureTheme12.png";
import ServiceFeatureTheme13 from "../../../assets/img/ServiceFeatureTheme13.png";
import ServiceFeatureTheme14 from "../../../assets/img/ServiceFeatureTheme14.png";
import ServiceFeatureTheme15 from "../../../assets/img/ServiceFeatureTheme15.png";
import ServiceFeatureTheme16 from "../../../assets/img/ServiceFeatureTheme16.png";
import ServiceFeatureTheme17 from "../../../assets/img/ServiceFeatureTheme17.png";
import ServiceFeatureTheme18 from "../../../assets/img/ServiceFeatureTheme18.png";
import "../../../assets/css/serviceBody.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Skeleton } from "antd";
function ServiceBody(props) {
  const featuresArr = [
    [
      {
        featureTheme: ServiceFeatureTheme1,
        featureTitle: "A multi-dynamic pool of talents",
        featureSubtitle:
          "We bring you access to the best techies you can find in Vietnam through our vast recruitment network.",
      },

      {
        featureTheme: ServiceFeatureTheme2,
        featureTitle: "A comprehensive journey from start to finish",
        featureSubtitle:
          "Enjoy an experienced team of dedicated recruiters and account managers to assist you through your recruitment journey and provide advisory support.",
      },
      {
        featureTheme: ServiceFeatureTheme3,
        featureTitle: "Vigorous candidate profiling",
        featureSubtitle:
          "Upon establishing your project's requirements, we will prepare the job descriptions for internal review to search for the best persons to undertake the task.",
      },
      {
        featureTheme: ServiceFeatureTheme4,
        featureTitle: "100% involvement and control",
        featureSubtitle:
          "When we've filtered the suitable candidates that meet your specifications, you get to run your own interviews and technical test throughout the selection process.",
      },
      {
        featureTheme: ServiceFeatureTheme5,
        featureTitle: "Quality control assurance",
        featureSubtitle:
          "We understand the need for communication and proficiency. That's why we run strenuous English proficiency test filtering and background checks to ensure that each employee meets our high standards of requirement.",
      },
      {
        featureTheme: ServiceFeatureTheme6,
        featureTitle: "Probational term guarantee",
        featureSubtitle:
          "We are confident in the capabilities of every member of our community. However, should you be dissatisfied with your selected party, you get to enjoy a free replacement to find your perfect fit. (T&Cs apply)",
      },
    ],
    [
      {
        featureTheme: ServiceFeatureTheme7,
        featureTitle: "Fully-equipped office space",
        featureSubtitle:
          "From a dedicated working area to private meeting rooms, your remote employees can access our facility to help them focus on productivity and efficiency.",
      },

      {
        featureTheme: ServiceFeatureTheme8,
        featureTitle: "Work discipline practice",
        featureSubtitle:
          "Office managers act on your behalf to record attendance and enforce proper work ethics that adheres to all NDA and compliance.",
      },
      {
        featureTheme: ServiceFeatureTheme9,
        featureTitle: "Managed administrative duties",
        featureSubtitle:
          "We cover all typical administrative responsibilities that include contract review reminders as well as mail and equipment handling. Furthermore, we provide your team with anything they should need for their projects.",
      },
      {
        featureTheme: ServiceFeatureTheme10,
        featureTitle: "Attentive employee welfare",
        featureSubtitle:
          "We believe that each staff member's well-being is crucial in a happy community which directly impacts work productivity.Events and activities are conducted to help boost their morale and job satisfaction – this includes weekly sports activities, celebrations, team bonding dinners and trips and snacks to enjoy while working.",
      },
    ],
    [
      {
        featureTheme: ServiceFeatureTheme11,
        featureTitle: "Locally-compliant contracts",
        featureSubtitle:
          "Fetch allows you to generate and provide contracts that meet the requirements set by local authorities without a need for you to create a legal company entity.",
      },

      {
        featureTheme: ServiceFeatureTheme12,
        featureTitle: "Flexible employment arrangements",
        featureSubtitle:
          "Whether you require a freelancer to work on a short-term project or a full-time team member, we have various engagements to meet your needs.",
      },
      {
        featureTheme: ServiceFeatureTheme13,
        featureTitle: "Straight forward tax payments",
        featureSubtitle:
          "We make tax contributions a simple process by incorporating all fees in a single payment for you.",
      },
      {
        featureTheme: ServiceFeatureTheme14,
        featureTitle: "Seamless payroll management",
        featureSubtitle:
          "Make your payments in your preferred currency easily through a monthly-itemised invoice. Fetch carries out each payment process individually that's synced to our HR data.",
      },
    ],
    [
      {
        featureTheme: ServiceFeatureTheme15,
        featureTitle:
          "Meticulous end-to-end management of your organisation's project and tech needs",
        featureSubtitle:
          "Our three-pronged approach gives you a personalised business solution, allowing you to undertake any task effortlessly.",
      },

      {
        featureTheme: ServiceFeatureTheme16,
        featureTitle: "Step 1: Understanding your needs",
        featureSubtitle:
          "A consultant will work closely and assimilate into your organisation to thoroughly understand your business and current IT infrastructure, as well as technical capabilities. This aids in devising a strategy to achieve your business goals.",
      },
      {
        featureTheme: ServiceFeatureTheme17,
        featureTitle: "Step 2: Execution",
        featureSubtitle:
          "We bring you access to the best techies you can find in Vietnam through our vast recruitment network.",
      },
      {
        featureTheme: ServiceFeatureTheme18,
        featureTitle: "Step 3: Long-term sustainability",
        featureSubtitle:
          "The consultant will guide your local staff to take over the team's management when they’re thoroughly trained and proficient, thereby allowing full control and sustainability for independent growth into the future for your organisation.",
      },
    ],
  ];

  const featuresTitle = featuresArr[props.id - 1].map(
    (feature) => feature.featureTitle
  );
  useEffect(() => {
    window.addEventListener("scroll", () => {
      var scrollDistance = window.scrollY;
      let current = "";
      let features = document.querySelectorAll(".service-feature");
      features?.forEach((feature, index) => {
        let rect = feature.getBoundingClientRect();
        let bottom =
          window.innerHeight - feature.getBoundingClientRect().bottom;
        current = feature.getAttribute("id");
        let top = window.innerHeight - rect.top;
        let height = rect.bottom - rect.top;
        if (top > height / 2 && bottom < 60) {
          let options = document.querySelectorAll(
            ".sidebar-option-container-wrapper"
          );
          let optionsArr = Array.from(options);
          let currentOptions = optionsArr.find(
            (option) => option.getAttribute("option") == current
          );
          let previousOptions = optionsArr.filter(
            (option) => option.getAttribute("option")[1] < current[1]
          );
          let previousOptionsArr =
            previousOptions && Array.from(previousOptions);
          previousOptions?.forEach((option) => {
            option
              .querySelector(".sidebar-option-container")
              .classList.add("scrolled");
          });
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
            if (option.getAttribute("option")[1] > current[1]) {
              option
                .querySelector(".sidebar-option-container.scrolled")
                ?.classList.remove("scrolled");
            }
          });
        } else {
        }
      });
      let serviceBody = document.querySelector(".service-body");
      let sidebar = document.querySelector(".sidebar");
      let bodyRect = serviceBody?.getBoundingClientRect();
      let top = bodyRect?.top;
      if (top < 0) {
        sidebar.classList.add("sidebar--fixed");
      } else if (top > 0) {
        console.log(top);
        sidebar.classList.remove("sidebar--fixed");
      }
    });
  });
  return (
    <Router>
      <div className="service-body">
        <div className="service-body__inner c-page-header__inner row">
          <div className="service-body__left col-lg-4">
            <div className="sidebar">
              {props.loading?<Skeleton/>:
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
              }
            </div>
          </div>
          <div className="service-body__right col-lg-8">
            {featuresArr[props.id - 1]?.map((feature, index) => {
              const { featureTheme, featureTitle, featureSubtitle } = feature;
              return (
                <ServiceFeature
                  featureTheme={featureTheme}
                  featureTitle={featureTitle}
                  featureSubtitle={featureSubtitle}
                  key={index}
                  id={"a" + index}
                  loading={props.loading}
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
