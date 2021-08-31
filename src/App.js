import './App.scss';
import 'antd/dist/antd.css';
import Contact from './components/contact/Contact';
import Employees from './components/employees/Employees';
import Faq from './components/faq/Faq';
import NotFound from './components/404/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/employees">
            <Employees />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
        </Switch>
        
        
        
        
      </div>
    </Router>
  );
}

export default App;
