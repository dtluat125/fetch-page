import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import feedbackPic1 from "../../../assets/img/feedbackPic1.png";
import LeftArrow from "../../../assets/img/LeftArrow.png";
import RightArrow from "../../../assets/img/RightArrow.png";
function SlideTrack() {
  const [position, setPosition] = useState(0);

  const moveLeft = (num) => {
    let step = (num==0)?0:num?num:1
    const slide = document.querySelector("#aa");
    const slideWidth = slide.clientWidth;
    setPosition(position + step*(slideWidth + 50));

  };

  const moveRight = (num) => {
    let step = (num==0)?0:num?num:1
    const slide = document.querySelector("#aa");
    const slideWidth = slide.clientWidth;
    setPosition(position - step*(slideWidth + 50));
  };
  const [leftDisable, setLeftDisable] = useState(false);
  const [rightDisable, setRightDisable] = useState(false);

  const [current, setCurrent] = useState(1);
  const switchSlide = (num) => {
    moveLeft(current-num);
    setCurrent(num)
    console.log(num)
    console.log(position)
  }
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

    const activeDot = document.querySelector("#a"+current);
    activeDot?.classList.add("active");
    for(let i=1; i<=3; i++){
      if(current!= i){
        document.querySelector("#a"+i).classList.remove("active");
      }
    }
  }, [position, current]);
  
  return (
    <div className="slide-track-container">
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
      <div className="switch-dots">
        <div  onClick={() =>switchSlide(1)} className="dot active" role="button" id="a1"></div>
        <div onClick={() =>switchSlide(2)} className="dot" role="button" id="a2"></div>
        <div onClick={() =>switchSlide(3)} className="dot" role="button" id="a3"></div>
      </div>
    </div>
  );
}

export default SlideTrack;
