import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServiceHeader from "./Header/ServiceHeader";
import ServiceTheme1 from "../../assets/img/ServiceTheme1.png";
import ServiceBody from "./ServiceBody/ServiceBody";
function Service(props) {
  return (
    <div>
      <Header />
      <ServiceHeader
        theme={ServiceTheme1}
        headerTitle={props.title}
        headerSubtitle={props.subTitle}
      />
      <ServiceBody title = {props.title}/>
      <Footer />
    </div>
  );
}

export default Service;
