import './App.scss';
import 'antd/dist/antd.css';
import Contact from './components/contact/Contact';
import Employees from './components/employees/Employees';
import Faq from './components/faq/Faq';
import NotFound from './components/404/NotFound';

function App() {
  return (
    <div className="App">
      {/* <Employees /> */}
      {/* <Faq /> */}
      {/* <Contact /> */}
      <NotFound />
    </div>
  );
}

export default App;
