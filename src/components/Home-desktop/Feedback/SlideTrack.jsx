import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import feedbackPic1 from "../../../assets/img/feedbackPic1.png";
import LeftArrow from "../../../assets/img/LeftArrow.png";
import RightArrow from "../../../assets/img/RightArrow.png";
function SlideTrack() {
  const [position, setPosition] = useState(0);

  const moveLeft = () => {
    const slide = document.querySelector("#aa");
    const slideWidth = slide.clientWidth;
    setPosition(position + (slideWidth + 50));

  };

  const moveRight = () => {
    const slide = document.querySelector("#aa");
    const slideWidth = slide.clientWidth;
    setPosition(position - (slideWidth + 50));
  };
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);
  useEffect(() => {
    const slide = document.querySelector("#aa");
    const slideWidth = slide.clientWidth;
    if (position >= 0) {
      setLeftDisable(true);
    }
    else if (position <= -(slideWidth + 50) * 2) {
      setRightDisable(true);
    }
    else{
        console.log("ALO")
        setLeftDisable(false);
        setRightDisable(false)
    }
  }, [position]);
  
  return (
    <div className="slide-track-container">
      <div
        className={leftDisable?"slide-arrow left-arrow disabled":"slide-arrow left-arrow"}
        role="button"
        onClick={moveLeft}
      >
        <img src={LeftArrow} alt="" />
      </div>
      <div
        className={rightDisable?"slide-arrow right-arrow disabled":"slide-arrow right-arrow"}
        role="button"
        onClick={moveRight}
        disabled={rightDisable}
      >
        <img src={RightArrow} alt="" />
      </div>
      <div
        className="slide-track__inner"
        style={{ transform: `translateX(${position + "px"})` }}
      >
        <Slide
          id="aa"
          photo={feedbackPic1}
          content="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”"
          name="Name here"
          description="des here"
        />

        <Slide
          photo={feedbackPic1}
          content="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”"
          name="Name here"
          description="des here"
        />

        <Slide
          photo={feedbackPic1}
          content="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”"
          name="Name here"
          description="des here"
        />
      </div>
    </div>
  );
}

export default SlideTrack;
