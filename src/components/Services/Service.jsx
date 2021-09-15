import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceHeader from "./Header/ServiceHeader";
import ServiceTheme1 from "../../assets/img/ServiceTheme1.png";
import ServiceBody from "./ServiceBody/ServiceBody";
import LogoWhite from "../../assets/img/LogoWhite.png";
import LogoMobileWhite from "../../assets/img/LogoMobileWhite.png";
function Service(props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const checkImg = () => {
      var images = service.querySelectorAll("img");
      var imagesArr = Array.from(images);
      console.log(imagesArr.length);
      let count = 0;
      imagesArr.forEach((img) => {
        if (img.complete) incrementCounter();
        else img.addEventListener("load", incrementCounter);
      });
      function incrementCounter() {
        count++;
        console.log(loading);
        if (count === imagesArr.length) {
          setTimeout(() => {
            setLoading(false);
          }, 800);
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
        theme={ServiceTheme1}
        headerTitle={props.title}
        headerSubtitle={props.subTitle}
        loading={loading}
      />
      <ServiceBody title={props.title} id={props.id} loading={loading} />
      <Footer />
    </div>
  );
}

export default Service;
