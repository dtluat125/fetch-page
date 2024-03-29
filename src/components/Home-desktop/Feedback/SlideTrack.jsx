import React from "react";
import Slide from "./Slide";
import feedbackPic1 from "../../../assets/img/feedbackPic1.svg";
import feedbackPic2 from "../../../assets/img/feedbackPic2.svg";
import feedbackPic3 from "../../../assets/img/feedbackPic3.svg";
import { Carousel } from "antd";
function SlideTrack({loading}) {
  // const [position, setPosition] = useState(0);

  // const moveLeft = (num) => {
  //   let step = (num==0)?0:num?num:1
  //   const slide = document.querySelector("#aa");
  //   const slideWidth = slide.clientWidth;
  //   setPosition(position + step*(slideWidth + 50));

  // };

  // const moveRight = (num) => {
  //   let step = (num==0)?0:num?num:1
  //   const slide = document.querySelector("#aa");
  //   const slideWidth = slide.clientWidth;
  //   setPosition(position - step*(slideWidth + 50));
  // };
  // const [leftDisable, setLeftDisable] = useState(false);
  // const [rightDisable, setRightDisable] = useState(false);

  // const [current, setCurrent] = useState(1);
  // const switchSlide = (num) => {
  //   moveLeft(current-num);
  //   setCurrent(num)
  //   //console.log(num)
  //   //console.log(position)
  // }
  // useEffect(() => {
  //   const slide = document.querySelector("#aa");
  //   const slideWidth = slide.clientWidth;
  //   if (position >= 0) {
  //     setLeftDisable(true);
  //   }
  //   else if (position <= -(slideWidth + 50) * 2) {
  //     setRightDisable(true);
  //   }
  //   else{
  //       //console.log("ALO")
  //       setLeftDisable(false);
  //       setRightDisable(false)
  //   }

  //   const activeDot = document.querySelector("#a"+current);
  //   activeDot?.classList.add("active");
  //   for(let i=1; i<=3; i++){
  //     if(current!= i){
  //       document.querySelector("#a"+i).classList.remove("active");
  //     }
  //   }
  // }, [position, current]);
  const settings = {
    className: "slick-cus-review",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: false,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="slide-track-container" data-aos="flip-up" data-aos-offset="300">
      <div className="slide-track__inner">
        <Carousel {...settings}>
          <Slide
            loading={loading}
            id="aa"
            photo={feedbackPic1}
            content="“Their team was incredibly helpful in helping us find the perfect Vietnamese colleague. We couldn't have been happier with the overall experience – excellent communication and stellar work. Best of all, we didn't waste precious time and resources to set up an office in Vietnam. Fetch handled all of that for us.”"
            name="Donald,"
            description="Co-founder"
          />

          <Slide
            loading={loading}
            photo={feedbackPic2}
            content="“Fetch is amazing! We were able to recruit talented developers in a matter of weeks instead of months. The quality of their staff is extremely high as these engineers can onboard almost immediately and ramp incredibly fast.”"
            name="Michael"
            description="Co-founder"
          />

          <Slide
            loading={loading}
            photo={feedbackPic3}
            content="“Hiring is costly – a portion goes to recruitment agencies, another to the recruitment process and another to the actual interviews. We haven't got down to other expenses such as office rent as well as operational costs. Fetch eliminates a significant chunk of these expenditures and helps overcome our past hiring difficulties.”"
            name="Qi Yu"
            description="Founder"
          />
          <Slide
            loading={loading}
            photo={feedbackPic3}
            content="“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”Gorgeous, high-quality video sharing on desktop, mobile, tablet”"
            name="Name here"
            description="des here"
          />
        </Carousel>
      </div>
      {/* <div className="switch-dots">
        <div  onClick={() =>switchSlide(1)} className="dot active" role="button" id="a1"></div>
        <div onClick={() =>switchSlide(2)} className="dot" role="button" id="a2"></div>
        <div onClick={() =>switchSlide(3)} className="dot" role="button" id="a3"></div>
      </div> */}
    </div>
  );
}

export default SlideTrack;
