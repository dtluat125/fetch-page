import React, { useEffect, useState } from "react";
import "../../assets/css/header.css";
import logo from "../../assets/img/Group 5169054.png";
import dropdownIcon from "../../assets/img/Vector 15.png";
import MenuItem from "./MenuItem";
import NavbarClose from "../../assets/img/NavbarClose.png";
import NavbarOpen from "../../assets/img/NavbarOpen.png";
import DropdownItem from "./DropdownItem";
import OurStory from "../../assets/img/OurStory.png";
import MarketReport from "../../assets/img/MarketReport.png";
import FAQs from "../../assets/img/FAQs.png";
import TalentAcquisition from "../../assets/img/TalentAcquisition.png";
import ServiceManagement from "../../assets/img/ServiceManageMent.png";
import Payroll from "../../assets/img/Payroll.png";
import FullSuite from "../../assets/img/FullSuite.png";
import UpperArrow from "../../assets/img/UpperArrow.png";
import { Link, BrowserRouter as Router } from "react-router-dom";
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
          <Link to="/">
            <div className="group-5169054 header__logo">
              <img src={logo} alt="" />
            </div>
          </Link>
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
                <Link to="/company">
                  <MenuItem title="For Companies" />
                </Link>
                <Link to="/jobseeker">
                  <MenuItem title="For Jobseekers" />
                </Link>
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
                  <Link to="/services/1">
                    <DropdownItem
                      title="Talent Acquisition"
                      text="Procure talents from Vietnam
                  "
                      icon={TalentAcquisition}
                    />
                  </Link>
                  <Link to="/services/2">
                    <DropdownItem
                      title="Services management"
                      text="Employee directives and administration
                  "
                      icon={ServiceManagement}
                    />
                  </Link>
                  <Link to="/services/3">
                    <DropdownItem
                      title="Payroll and compliances"
                      text="Streamlined contracting and payroll process
                  "
                      icon={Payroll}
                    />
                  </Link>
                  <Link to="/services/4">
                    <DropdownItem
                      title="Full-suite project consultancy"
                      text="Comprehensive projects management
                  "
                      icon={FullSuite}
                    />
                  </Link>
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
                    title="Our story"
                    text="Learn more about us"
                    icon={OurStory}
                  />
                  <DropdownItem
                    title="Market Report"
                    text="Reports and downloads too"
                    icon={MarketReport}
                  />
                  <Link to="/faq">
                    <DropdownItem
                      title="FAQs"
                      text="Questions & Answers"
                      icon={FAQs}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="header__contact-button-container">
              <Link to="/contact">
                <div role="button" className="header__contact-button">
                  <span className="header__contact-button__content">
                    Contact Us
                  </span>
                </div>
              </Link>
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
