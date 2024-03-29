import React, { useEffect, useState } from "react";
import "../../assets/css/header.scss";
import logo from "../../assets/img/LogoDefault.svg";
import logoMobile from "../../assets/img/LogoMobile.svg";
import dropdownIcon from "../../assets/img/Vector 15.png";
import MenuItem from "./MenuItem";
import NavbarClose from "../../assets/img/NavbarClose.png";
import NavbarOpen from "../../assets/img/NavbarOpen.png";
import DropdownItem from "./DropdownItem";
import OurStory from "../../assets/img/OurStory.png";
import MarketReport from "../../assets/img/MarketReport.png";
// import FAQs from "../../assets/img/FAQs.png";
import TalentAcquisition from "../../assets/img/TalentAcquisition.png";
import ServiceManagement from "../../assets/img/ServiceManageMent.png";
import Payroll from "../../assets/img/Payroll.png";
import FullSuite from "../../assets/img/FullSuite.png";
// import UpperArrow from "../../assets/img/UpperArrow.png";
import DownArrowWhite from "../../assets/img/DownArrowWhite.png";
import NavbarOpenWhite from "../../assets/img/NavbarOpenWhite.png";
import Calculator from "../../assets/img/Calculator.png";
import { Link } from "react-router-dom";

function Header({ logoProp, theme, logoMobileProp }) {
  const [collapse, setCollapse] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [collapseDropdown, setCollapseDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [inMobile, setInMobile] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth < 1000) setCollapse(true);
      else setCollapse(false);
      if (windowWidth < 755) setCollapseDropdown(true);
      else setCollapseDropdown(false);
      if (windowWidth < 400) setInMobile(true);
      else setInMobile(false);
    };
    changeNav();
    window.addEventListener("resize", changeNav);
    console.log(collapseDropdown);
  }, [collapseDropdown, inMobile]);

  useEffect(() => {
    const appContainer = document.querySelector(".app-container");
    if (inMobile && showContent) {
      appContainer?.classList?.add("nav-open");
    } else appContainer?.classList?.remove("nav-open");
  }, [inMobile, showContent]);
  // Handle nav toggle
  const openNav = () => {
    setShowContent(true);
  };

  const closeNav = () => {
    setShowContent(false);
  };
  // Mobile handler
  return (
    <div
      className={theme ? "header header--yellow" : "header"}
      style={theme && { backgroundColor: theme }}
    >
      <div
        className={
          collapse && !showContent
            ? "header__inner head-collapse"
            : collapse && showContent
            ? "header__inner head-collapse show"
            : "header__inner"
        }
        style={
          !showContent
            ? inMobile
              ? { height: 70 }
              : { height: 100 }
            : inMobile
            ? { minHeight: "100vh", height: "100vh" }
            : {}
        }
      >
        <Link to="/">
          <div className="group-5169054 header__logo">
            <img
              src={
                !inMobile
                  ? logoProp
                    ? logoProp
                    : logo
                  : logoMobileProp
                  ? logoMobileProp
                  : logoMobile
              }
              alt=""
            />
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
          <div
            className={
              "header__menu-group" +
              (inMobile && showContent ? " nav-open" : "")
            }
          >
            <div className="header__menu-first-group">
              <Link to="/company">
                <MenuItem theme={theme} title="For Companies" />
              </Link>
              <Link to="/employees">
                <MenuItem theme={theme} title="For Jobseekers" />
              </Link>
            </div>

            <div className="dropdown">
              <MenuItem
                theme={theme}
                isMobile={isMobile}
                title="Services"
                dropdownToggle={!collapseDropdown}
                dropdownCollapse={collapseDropdown}
                icon={
                  !inMobile ? (theme ? DownArrowWhite : dropdownIcon) : false
                }
                id="services"
                target="servicesMenu"
              />
              <div
                className={
                  collapseDropdown
                    ? isMobile
                      ? inMobile
                        ? "header__dropdown-menu header__dropdown-collapse"
                        : "header__dropdown-menu "
                      : "header__dropdown-menu collapse "
                    : "dropdown-menu header__dropdown-menu"
                }
                id="servicesMenu"
                aria-labelledby="services"
              >
                <div className="dropdown-menu-container">
                  <Link to="/services/1">
                    <DropdownItem
                      onClick={closeNav}
                      title="Talent Acquisition"
                      text={!collapseDropdown && "Procure talents from Vietnam"}
                      icon={!collapseDropdown && TalentAcquisition}
                    />
                  </Link>
                  <Link to="/services/2">
                    <DropdownItem
                      onClick={closeNav}
                      title="Services management"
                      text={
                        !collapseDropdown &&
                        "Employee directives and administration"
                      }
                      icon={!collapseDropdown && ServiceManagement}
                    />
                  </Link>
                  <Link to="/services/3">
                    <DropdownItem
                      onClick={closeNav}
                      title="Payroll and compliances"
                      text={
                        !collapseDropdown &&
                        "Streamlined contracting and payroll process"
                      }
                      icon={!collapseDropdown && Payroll}
                    />
                  </Link>
                  <Link to="/services/4">
                    <DropdownItem
                      onClick={closeNav}
                      title="Full-suite project consultancy"
                      text={
                        !collapseDropdown && "Comprehensive projects management"
                      }
                      icon={!collapseDropdown && FullSuite}
                    />
                  </Link>
                </div>
                {!collapseDropdown && (
                  <div>
                    <div className="upperArrow"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="dropdown">
              <MenuItem
                theme={theme}
                title="Resources"
                dropdownToggle={!collapseDropdown}
                dropdownCollapse={collapseDropdown}
                icon={
                  !inMobile ? (theme ? DownArrowWhite : dropdownIcon) : false
                }
                target="resourcesMenu"
                id="resources"
                isMobile={isMobile}
              />
              <div
                id="resourcesMenu"
                className={
                  collapseDropdown
                    ? isMobile
                      ? inMobile
                        ? "header__dropdown-menu header__dropdown-collapse"
                        : "header__dropdown-menu "
                      : "header__dropdown-menu collapse "
                    : "dropdown-menu header__dropdown-menu"
                }
                aria-labelledby="resources"
              >
                {!collapseDropdown && <div className="upperArrow"></div>}
                <div className="dropdown-menu-container">
                  <Link to="/ourstory">
                    <DropdownItem
                      title="Our story"
                      text={!collapseDropdown && "Learn more about us"}
                      icon={!collapseDropdown && OurStory}
                    />
                  </Link>
                  <Link to="/404">
                    <DropdownItem
                      title="Market Report"
                      text={!collapseDropdown && "Reports and downloads too"}
                      icon={!collapseDropdown && MarketReport}
                    />
                  </Link>
                  {/* <Link to="/faq">
                  <DropdownItem
                    title="FAQs"
                    text={!collapseDropdown && "Questions & Answers"}
                    icon={!collapseDropdown && FAQs}
                  />
                </Link> */}
                  <Link to="/services/salary">
                    <DropdownItem
                      title="Vietnam Calculator"
                      text={!collapseDropdown && "Assess estimated costs"}
                      icon={!collapseDropdown && Calculator}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="header__contact-button-container">
            <Link to="/contact">
              <div
                role="button"
                className="header__contact-button"
                onClick={() => {
                  if (inMobile) closeNav();
                }}
              >
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
              <img src={NavbarClose} alt="toggler" />
            </div>
          ) : (
            <div className="navbar-toggler" role="button" onClick={openNav}>
              <img src={theme ? NavbarOpenWhite : NavbarOpen} alt="toggler" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Header;
