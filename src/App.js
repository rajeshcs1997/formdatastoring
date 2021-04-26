import './App.css';
import Form from './components/form/Form';
import Data from './components/table/Data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/data">formdata</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Form/>
          </Route>
          <Route exact path="/data">
            <Data/>
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
