import React, { useEffect, useState } from "react";
import "../../assets/css/homepage.css";
import AboutFetch from "./About Fetch/AboutFetch";
import Feedbacks from "./Feedback/Feedbacks";
import Header from "../Header/Header";
import HomepageHeader from "./Homepage Header/HomepageHeader";
import Talents from "./Talents/Talents";
import TrustedCus from "./Trusted Cus/TrustedCus";
import USP1 from "./USP/USP1";
import USP2 from "./USP/USP2";
import Usp1Theme from "./../../assets/img/Usp1Theme.png";
import Usp2Theme from "./../../assets/img/Usp2Theme.png";
import Usp3Theme from "./../../assets/img/Usp3Theme.png";
import Usp3MobileTheme from "./../../assets/img/Usp3MobileTheme.png";
import Footer from "../Footer/Footer";
import RedTheme from "../RedTheme";
import AOS from "aos";
function Homepage({}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkImg = () => {
      var images = homepage.querySelectorAll("img");
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
            AOS.refresh();
          },);
        }
      }
    };
    var homepage = document.querySelector(".homepage");
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
    <div className="homepage">
      <Header></Header>
      <HomepageHeader loading={loading} />
      <TrustedCus loading={loading} />
      <div className="usp">
        <USP1
          animation="left"
          loading={loading}
          uspTitle="A pioneer in the industry"
          uspSubtitle1="We’re experienced and reliable"
          uspText1="Being one of the first in the field, we have gained a strong grasp of the Vietnamese market."
          uspSubtitle2="We've streamlined the process"
          uspText2="Confidently purvey from our vetted professionals that have been thoroughly assessed prior."
          uspTheme={Usp3Theme}
          uspMobileTheme={Usp3MobileTheme}
        />

        <USP1
          animation="right"
          loading={loading}
          uspTitle="We deliver results"
          uspSubtitle1="Everything is taken care of"
          uspText1="We eliminate all the administrative tasks and paperwork – simply interview and onboard your chosen candidate!"
          uspSubtitle2="100% transparency"
          uspText2="No hidden charges or unpleasant surprises – enjoy competitive rates without compromising on your hires’ quality."
          uspTheme={Usp1Theme}
        />

        <USP1
          animation="left"
          loading={loading}
          uspTitle="We give you unrivalled solutions"
          uspSubtitle1="Unrestricted flexibility and access"
          uspText1="Our team is your team – get full control of your selected talent without constraints and hindering from a middle man."
          uspSubtitle2="On-site staff management"
          uspText2="We understand the challenges in managing a remote employee. That's why you only have to focus on the task at hand and leave your HR concerns to us."
          uspTheme={Usp2Theme}
        />
      </div>
      <Talents loading={loading} />
      <Feedbacks loading={loading} />
      <AboutFetch loading={loading} />
      <RedTheme
        title="Find the perfect fit with Fetch"
        subtitle="Find the perfect fit with Fetch"
        buttonText="Sign Up"
        to = "/contact"
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default Homepage;
