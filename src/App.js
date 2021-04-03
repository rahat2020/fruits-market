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
import AddProducts from './components/AddProducts/AddProducts';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/order/:_id">
              <Order/>
          </PrivateRoute>
          <Route path="/login">
              <Login/>
          </Route>
          <PrivateRoute path="/checkOut/:_id">
              <CheckOut/>
          </PrivateRoute>
          <PrivateRoute path="/addProducts">
              <AddProducts/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
              <Admin/>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
