import React, { useEffect, useState } from "react";
import "../../../assets/css/talents.css";
import Map from "../../../assets/img/Map.png";
import Vietnam from "../../../assets/img/Vietnam.png";
import Card from "./Card";
import InterviewPic from "../../../assets/img/InterviewPic.png";
import Star from "../../../assets/img/Star.png";
import Card1 from "../../../assets/img/Card1.png";
import Card2 from "../../../assets/img/Card2.png";
import { Carousel } from "antd";

function Talents() {
  const [position, setPosition] = useState(0);
  const [current, setCurrent] = useState(1);
  const settings = {
    className: "slick-trusted-cus",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: true,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 5,
      //     slidesToScroll: 3,
      //     dots: true,
      //     autoplay: true,
      //     centerMode: false,
      //   },
      // },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 952,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
        },
      },

      {
        breakpoint: 624,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: true,
          centerPadding: "0"
        },
      },
    ],
  };
  // const moveLeft = (num) => {
  //   let step = num == 0 ? 0 : num ? num : 1;
  //   const slide = document.querySelector("#bb");
  //   const slideWidth = slide.clientWidth;
  //   setPosition(position + step * (slideWidth + 30));
  // };
  // const switchSlide = (num) => {
  //   moveLeft(current - num);
  //   setCurrent(num);
  // };

  // useEffect(() => {
  //   const activeDot = document.querySelector("#b" + current);
  //   activeDot?.classList.add("active");
  //   for (let i = 1; i <= 3; i++) {
  //     if (current != i) {
  //       document.querySelector("#b" + i).classList.remove("active");
  //     }
  //   }
  // }, [position, current]);
  return (
    <div className="talents-container">
      <div className="talents__inner">
        <div className="talents__map">
          <div className="talents__map__content">
            <div className="star-holder">
              <img src={Star} alt="" />
            </div>
            <div className="c-h1-title talents__map__content__title">
              Get the best talents in Vietnam with us
            </div>
            <div className="c-h6-title talents__map__content__text">
              Whether you're looking for a software developer, tester or
              designer, we got you covered.
            </div>
            <div className="c-large-button" role="button">
              Find out more
            </div>
          </div>

          <div
            className="talents__map-holder"
            style={{ backgroundImage: `url(${Map})` }}
          >
            <img src={Vietnam} className="map-img"></img>
          </div>
        </div>

        <div className="talents__cards">
          <div
            className="talents__cards__inner"
            style={{ transform: `translateX(${position + "px"})` }}
          >
            <Carousel {...settings}>
              <Card
                photo={InterviewPic}
                title="Interview Process"
                content="No staff delegation – enjoy absolute control over the entire hiring process"
              />
              <Card
                photo={Card1}
                title="No staff delegation"
                content="Get absolute control over the entire hiring process"
              />
              <Card
                photo={Card2}
                title="Probational term guarantee"
                content="Switch to find your perfect fit (within a trial period)"
              />
            </Carousel>
          </div>
          {/* <div className="switch-dots">
            <div
              onClick={() => switchSlide(1)}
              className="dot dot--dark active"
              role="button"
              id="b1"
            ></div>
            <div
              onClick={() => switchSlide(2)}
              className="dot dot--dark"
              role="button"
              id="b2"
            ></div>
            <div
              onClick={() => switchSlide(3)}
              className="dot dot--dark"
              role="button"
              id="b3"
            ></div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Talents;
