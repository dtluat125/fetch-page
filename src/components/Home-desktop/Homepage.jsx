import React from "react";
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
import Footer from "../Footer/Footer";
function Homepage() {
  return (
    <div className="homepage">
      <Header></Header>
      <HomepageHeader />
      <TrustedCus />
      <div className="usp">
        <USP1
          uspTitle="A pioneer in the industry"
          uspSubtitle1="We’re experienced and reliable"
          uspText1="Being one of the first in the field, we have gained a strong grasp of the Vietnamese market."
          uspSubtitle2="We've streamlined the process"
          uspText2="Confidently purvey from our vetted professionals that have been thoroughly assessed prior."
          uspTheme={Usp3Theme}
        />

        <USP1
          uspTitle="We deliver results"
          uspSubtitle1="Everything is taken care of"
          uspText1="We eliminate all the administrative tasks and paperwork – simply interview and onboard your chosen candidate!"
          uspSubtitle2="100% transparency"
          uspText2="No hidden charges or unpleasant surprises – enjoy competitive rates without compromising on your hires’ quality."
          uspTheme={Usp1Theme}
        />

        <USP1
          uspTitle="We give you unrivalled solutions"
          uspSubtitle1="Unrestricted flexibility and access"
          uspText1="Our team is your team – get full control of your selected talent without constraints and hindering from a middle man."
          uspSubtitle2="On-site staff management"
          uspText2="We understand the challenges in managing a remote employee. That's why you only have to focus on the task at hand and leave your HR concerns to us."
          uspTheme={Usp2Theme}
        />
      </div>
      <Talents />
      <Feedbacks />
      <AboutFetch />
      <TrustedCus signUp={true} />
      <Footer />
    </div>
  );
}

export default Homepage;
