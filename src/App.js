import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import CheckOut from './components/CheckOut/CheckOut';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/order">
              
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/fruits/:id">
              <CheckOut/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
