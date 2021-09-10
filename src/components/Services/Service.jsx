import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceHeader from "./Header/ServiceHeader";
import ServiceTheme1 from "../../assets/img/ServiceTheme1.png";
import ServiceBody from "./ServiceBody/ServiceBody";
import LogoWhite from "../../assets/img/LogoWhite.png";
function Service(props) {
  return (
    <div>
      <Header theme = "#FFBE16" logoProp={LogoWhite}/>
      <ServiceHeader
        theme={ServiceTheme1}
        headerTitle={props.title}
        headerSubtitle={props.subTitle}
      />
      <ServiceBody title = {props.title}
      id = {props.id}
      />
      <Footer />
    </div>
  );
}

export default Service;
