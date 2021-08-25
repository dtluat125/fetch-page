import React, { useEffect, useState } from "react";
import "../../css/header.css";
import logo from "../../images/Group 5169054.png";
import dropdownIcon from "../../images/Vector 15.png";
import MenuItem from "./MenuItem";
import NavbarClose from "../../images/NavbarClose.png";
import NavbarOpen from "../../images/NavbarOpen.png";
import DropdownItem from "./DropdownItem";
import OurStory from "../../images/OurStory.png";
import MarketReport from "../../images/MarketReport.png";
import FAQs from "../../images/FAQs.png";
import TalentAcquisition from "../../images/TalentAcquisition.png";
import ServiceManagement from "../../images/ServiceManageMent.png";
import Payroll from "../../images/Payroll.png";
import FullSuite from "../../images/FullSuite.png";
import UpperArrow from "../../images/UpperArrow.png";
function Header() {
  const [collapse, setCollapse] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 1000) setCollapse(true);
      else setCollapse(false);
    };
    changeNav();
    window.addEventListener("resize", changeNav);
  });
  // Handle nav toggle
  const openNav = () => {
    setShowContent(true);
  };

  const closeNav = () => {
    setShowContent(false);
  };
  return (
    <div className="header">
      <div
        className="header__inner"
        style={!showContent ? { height: 100 } : {}}
      >
        <div className="group-5169054 header__logo">
          <img src={logo} alt="" />
        </div>
        <div
          className={
            collapse && !showContent
              ? "header__left collapse"
              : collapse && showContent
              ? "header__left collapse show"
              : "header__left"
          }
        >
          <div className="header__menu-group">
            <div className="header__menu-first-group">
              <MenuItem title="For Companies" />
              <MenuItem title="For Jobseekers" />
            </div>
            <div className="dropdown">
              <MenuItem
                title="Services"
                dropdownToggle={true}
                icon={dropdownIcon}
                id="services"
              />
              <div
                className="dropdown-menu header__dropdown-menu"
                aria-labelledby="services"
              >
                <div className="upperArrow"></div>
                <DropdownItem
                  title="Our story"
                  text="Learn more about us"
                  icon={OurStory}
                />
                <DropdownItem
                  title="Market Report"
                  text="Reports and downloads too"
                  icon={MarketReport}
                />
                <DropdownItem
                  title="FAQs"
                  text="Questions & Answers"
                  icon={FAQs}
                />
              </div>
            </div>
            <div className="dropdown">
              <MenuItem
                title="Resources"
                dropdownToggle={true}
                icon={dropdownIcon}
                id="resources"
              />
              <div
                className="dropdown-menu header__dropdown-menu"
                aria-labelledby="resources"
              >
                <div className="upperArrow"></div>
                <DropdownItem
                  title="Talent Acquisition"
                  text="Procure talents from Vietnam
                  "
                  icon={TalentAcquisition}
                />
                <DropdownItem
                  title="Services management"
                  text="Employee directives and administration
                  "
                  icon={ServiceManagement}
                />
                <DropdownItem
                  title="Payroll and compliances"
                  text="Streamlined contracting and payroll process
                  "
                  icon={Payroll}
                />
                <DropdownItem
                  title="Full-suite project consultancy"
                  text="Comprehensive projects management
                  "
                  icon={FullSuite}
                />
              </div>
            </div>
          </div>
          <div className="header__contact-button-container">
            <div role="button" className="header__contact-button">
              <span className="header__contact-button__content">
                Contact Us
              </span>
            </div>
          </div>
        </div>
        {collapse &&
          (showContent ? (
            <div className="navbar-toggler" role="button" onClick={closeNav}>
              <img src={NavbarClose} />
            </div>
          ) : (
            <div className="navbar-toggler" role="button" onClick={openNav}>
              <img src={NavbarOpen} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Header;
