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

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 200,

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
              
            />
          </Route>
          <Route path="/services/2">
            <Service
              title="Service management"
              subTitle="Run your remote team and leave the HR aspects to us."
              id={2}
              
            />
          </Route>
          <Route path="/services/3">
            <Service
              title="Payroll and compliances"
              subTitle="Experience a seamless contracting and payroll process"
              id={3}
              
            />
          </Route>
          <Route path="/services/4">
            <Service
              title="Full-suite project consultancy"
              subTitle="Enjoy carefully curated management for your project from start to finish."
              id={4}
              
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
