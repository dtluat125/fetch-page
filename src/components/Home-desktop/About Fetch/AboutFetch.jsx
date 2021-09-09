import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import "../../../assets/css/about.css";
import AboutTheme from "../../../assets/img/AboutTheme.png";
function AboutFetch() {
  const [position, setPosition] = useState(0);
  const [current, setCurrent] = useState(1);

  const moveLeft = (num) => {
    let step = num == 0 ? 0 : num ? num : 1;
    const slide = document.querySelector("#cc");
    const slideWidth = slide.clientWidth;
    setPosition(position + step * (slideWidth + 120));
  };
  const switchSlide = (num) => {
    moveLeft(current - num);
    setCurrent(num);
  };

  useEffect(() => {
    const activeDot = document.querySelector("#c" + current);
    activeDot?.classList.add("active");
    for (let i = 1; i <= 3; i++) {
      if (current != i) {
        document.querySelector("#c" + i).classList.remove("active");
      }
    }
  }, [position, current]);
  return (
    <div className="about-container c-cus-container">
      <div
        className="about-container__inner"
        style={{ backgroundImage: `url(${AboutTheme})` }}
      >
        <div className="about-container__text-group">
          <div className="c-h3-title">A leader in tech</div>
          <div className="c-h6-subtitle" style={{ color: "#A4B7C8" }}>
            From humble beginnings with just 12 persons in 2014, Fetch is now an
            established name in the tech industry with an enrolment of over 150
            employees today.
          </div>
        </div>
        <Row
          className="feature__track"
          id = "c"
          style={{ transform: `translateX(${position + "px"})` }}
        >
          <Col id="cc" md={6} offset={6} className="about__feature">
            <div className="feature-num">500+</div>
            <div className="c-h6-subtitle feature-des">
              successful deployments
            </div>
          </Col>
          <Col md={6} offset={6} className="about__feature">
            <div className="feature-num">7+</div>
            <div className="c-h6-subtitle feature-des">
              years in the business
            </div>
          </Col>
          <Col md={6} className="about__feature">
            <div className="feature-num">USD 5 million</div>
            <div className="c-h6-subtitle feature-des">remunerated to date</div>
          </Col>
          <Col md={6} offset={6} className="about__feature">
            <div className="feature-num">100+</div>
            <div className="c-h6-subtitle feature-des">
              partnerships and growing
            </div>
          </Col>
        </Row>
        <div className="switch-dots">
          <div
            onClick={() => switchSlide(1)}
            className="dot active"
            role="button"
            id="c1"
          ></div>
          <div
            onClick={() => switchSlide(2)}
            className="dot"
            role="button"
            id="c2"
          ></div>
          <div
            onClick={() => switchSlide(3)}
            className="dot"
            role="button"
            id="c3"
          ></div>
          <div
            onClick={() => switchSlide(4)}
            className="dot"
            role="button"
            id="c4"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default AboutFetch;
