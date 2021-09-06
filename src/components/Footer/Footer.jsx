import React from "react";
import Logo from "../../assets/img/Logo.png";
import "../../assets/css/footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
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
              <div className="footer__input-text">
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
                <span className="footer__link">How It Works</span>
                <span className="footer__link">For Company</span>
                <span className="footer__link">For Company</span>
                <span className="footer__link">Our Story</span>
              </div>
              <div className="col-6 footer__link-col">
                <span className="footer__link">Success Stories</span>
                <span className="footer__link">Market Report</span>
                <span className="footer__link">FAQ</span>
              </div>
            </div>
          </div>
          <div className="col-md-4 footer__social">
            <div className="footer__platform">
              <div className="footer__icon">
                <InstagramIcon />
              </div>
              <div className="footer__platform-name">Instagram</div>
            </div>
            <div className="footer__platform">
              <div className="footer__icon">
                <FacebookIcon />
              </div>
              <div className="footer__platform-name">Facebook</div>
            </div>
            <div className="footer__platform">
              <div className="footer__icon">
                <TwitterIcon />
              </div>
              <div className="footer__platform-name">Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copy-right">
        <div className="footer__copy-right__inner">
          <div className="footer__copy-right__left">
            <span className="copy-right-text">
              © 2018 Acme. All right reserved.
            </span>
          </div>
          <div className="footer__copy-right__right">
            <span className="copy-right-text">Privacy Policy</span>
            <span className="copy-right-text">Terms of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
