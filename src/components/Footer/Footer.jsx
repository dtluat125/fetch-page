import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/Logo.svg";
import "../../assets/css/footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import Linkedin from "../../assets/img/Linkedin.png";
import BigFacebook from "../../assets/img/BigFacebook.png";
import BigInstagram from "../../assets/img/BigInstagram.png";
import BigLinkedin from "../../assets/img/BigLinkedin.png";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";

function Footer() {
  const [bigIcon, setBigIcon] = useState(false);
  useEffect(() => {
    const windowWidth = window.innerWidth;
    console.log(windowWidth);
    if (windowWidth < 768) {
      setBigIcon(true);
    } else setBigIcon(false);
  });
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__logo">
          <div className="footer__logo-holder">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="footer__content row">
          <div className="col-md-4 footer__input">
            <div className="footer__input__inner">
              <div className="c-p-subtitle" style={{ color: "#3E5476" }}>
                {" "}
                Join our newsletter to stay up to date on features and releases
              </div>
              <div className="footer__input-field">
                <input type="text" placeholder="Enter your email address" />
              </div>
            </div>
          </div>
          <div className="col-md-4 footer__links">
            <div className="footer__links__inner row">
              <div className="col-6 footer__link-col">
                <Link to="/employees" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle ">How It Works</span>
                </Link>
                <Link to="/company" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle">For Company</span>
                </Link>
                <Link to="/ourstory" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle">Our Story</span>
                </Link>
              </div>
              <div className="col-6 footer__link-col">
                <Link to="/successstories" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle">Success Stories</span>
                </Link>
                <Link to="/marketreport" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle">Market Report</span>
                </Link>
                <Link to="/faq" style={{ marginBottom: 24 }}>
                  <span className="c-p-subtitle">FAQ</span>
                </Link>
              </div>
            </div>
          </div>
          {bigIcon ? (
            <div className="col-md-4 footer__social">
              <img src={BigInstagram} className="big-icon" alt="" />
              <a
                target="_blank"
                href="https://www.facebook.com/Fetch.Technology"
                className=""
              >
                <img src={BigFacebook} className="big-icon" lt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/fetchtechnology/"
              >
                {" "}
                <img src={BigLinkedin} className="big-icon" alt="" />
              </a>
            </div>
          ) : (
            <div className="col-md-4 footer__social">
              <div className="footer__platform">
                <div className="footer__icon">
                  <img src={Instagram} alt="" />
                </div>
                <Link to="">
                  <div className="footer__platform-name">Instagram</div>
                </Link>
              </div>
              <div className="footer__platform">
                <div className="footer__icon">
                  <img src={Facebook} alt="" />
                </div>
                <a
                  target="_blank"
                  href="https://www.facebook.com/Fetch.Technology"
                  className=""
                >
                  <div className="footer__platform-name">Facebook</div>
                </a>
              </div>
              <div className="footer__platform">
                <div className="footer__icon">
                  <img src={Linkedin} alt="" />
                </div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/fetchtechnology/"
                >
                  {" "}
                  <div className="footer__platform-name">Linkedin</div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="footer__copy-right">
        <Row className="ant-row footer__copy-right__row" gutter={[0, 11]}>
          <Col xs={24} md={18} lg={18} className="ant-col ant-col-md-18">
            <span className="c-p-subtitle">
              © 2018 Fetch Technology. All right reserved.
            </span>
          </Col>
          <Col
            xs={24}
            md={6}
            lg={6}
            className=" ant-col ant-col-md-6"
            style={{ display: "flex" }}
          >
            <span className="c-p-subtitle" style={{ marginRight: 20 }}>
              Privacy Policy
            </span>
            <span className="c-p-subtitle">Terms of Service</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
