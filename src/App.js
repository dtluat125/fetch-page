import "./App.css";
import Homepage from "./components/Home-desktop/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Company from "./components/Company/Company";
import Service from "./components/Services/Service";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
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
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
