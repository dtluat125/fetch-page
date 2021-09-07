import "./App.css";
import Homepage from "./components/Home-desktop/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Company from "./components/Company/Company";
import Service from "./components/Services/Service";
import './App.scss';
import 'antd/dist/antd.css';
import Contact from './components/contact/Contact';
import Employees from './components/employees/Employees';
import Faq from './components/faq/Faq';
import NotFound from './components/404/NotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/services/1">
            <Service
              title="Talent acquisition"
              subTitle="Utilise your preferred talent for your projects."
            />
          </Route>
          <Route path="/services/2">
            <Service
              title="Service management"
              subTitle="Run your remote team and leave the HR aspects to us."
            />
          </Route>
          <Route path="/services/3">
            <Service
              title="Payroll and compliances"
              subTitle="Experience a seamless contracting and payroll process"
            />
          </Route>
          <Route path="/services/4">
            <Service
              title="Full-suite project consultancy"
              subTitle="Enjoy carefully curated management for your project from start to finish."
            />
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
          <Route exact path="/">
            <Homepage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
