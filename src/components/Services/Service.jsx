import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceHeader from "./Header/ServiceHeader";
import ServiceTheme1 from "../../assets/img/ServiceTheme1.png";
import ServiceBody from "./ServiceBody/ServiceBody";
import LogoWhite from "../../assets/img/LogoWhite.svg";
import LogoMobileWhite from "../../assets/img/LogoMobileWhite.svg";
import AOS from "aos";
function Service(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkImg = () => {
      var images = service.querySelectorAll("img");
      var imagesArr = Array.from(images);
      //console.log(imagesArr.length);
      let count = 0;
      imagesArr.forEach((img) => {
        if (img.complete) incrementCounter();
        else img.addEventListener("load", incrementCounter);
      });
      function incrementCounter() {
        count++;
        //console.log(loading);
        if (count === imagesArr.length) {
          setTimeout(() => {
            setLoading(false);
            AOS.refresh();
          }, );
        }
      }
    };
    var service = document.querySelector(".service");
    if (document.readyState === "complete") {
      checkImg();
    } else window.addEventListener("load", checkImg);
    return () => {
      window.removeEventListener("load", () => {
        setLoading(true);
      });
    };
  });
  return (
    <div className="service">
      <Header
        theme="#FFBE16"
        logoProp={LogoWhite}
        logoMobileProp={LogoMobileWhite}
      />
      <ServiceHeader
        theme={props.serviceTheme}
        headerTitle={props.title}
        headerSubtitle={props.subTitle}
        loading={loading}
        touchBottom = {props.id===1||props.id===4}
      />
      <ServiceBody title={props.title} id={props.id} loading={loading} />
      <Footer />
    </div>
  );
}

export default Service;
