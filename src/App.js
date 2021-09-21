import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "animate.css";
import "./App.scss";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import Homepage from "./components/Home-desktop/Homepage";
import Company from "./components/Company/Company";
import Service from "./components/Services/Service";
import Contact from "./components/contact/Contact";
import Employees from "./components/employees/Employees";
import Faq from "./components/faq/Faq";
import NotFound from "./components/404/NotFound";
import Salary from "./components/Services/salary/Salary";
import Story from "./components/story/Story";
import AOS from "aos";
import ServiceTheme1 from "./assets/img/ServiceTheme1.png"
import ServiceTheme2 from "./assets/img/ServiceTheme2.png"
import ServiceTheme3 from "./assets/img/ServiceTheme3.png"
import ServiceTheme4 from "./assets/img/ServiceTheme4.png"

function App() {

  useEffect(() => {
    AOS.init({

  
    });
  }, )
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Homepage  />
          </Route>
          <Route path="/company">
            <Company  />
          </Route>
          <Route path="/services/1">
            <Service
              title="Talent acquisition"
              subTitle="Utilise your preferred talent for your projects."
              id={1}
              serviceTheme = {ServiceTheme1}
              
            />
          </Route>
          <Route path="/services/2">
            <Service
              title="Service management"
              subTitle="Run your remote team and leave the HR aspects to us."
              id={2}
              serviceTheme = {ServiceTheme2}
            />
          </Route>
          <Route path="/services/3">
            <Service
              title="Payroll and compliances"
              subTitle="Experience a seamless contracting and payroll process"
              id={3}
              serviceTheme = {ServiceTheme3}
              
            />
          </Route>
          <Route path="/services/4">
            <Service
              title="Full-suite project consultancy"
              subTitle="Enjoy carefully curated management for your project from start to finish."
              id={4}
              serviceTheme = {ServiceTheme4}
              
            />
          </Route>
          <Route exact path="/ourstory">
            <Story />
          </Route>
          <Route path="/services/salary">
            <Salary />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          <Route exact path="/facebook" component={() => {
            window.location.href = "https://www.facebook.com/Fetch.Technology";
            return null
          }}>

          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
