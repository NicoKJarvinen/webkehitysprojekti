import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Renting from "./components/pages/Renting";
import About from "./components/pages/About";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Mycars from "./components/pages/MycarsP";
import Listing from "./components/pages/Listing";
import { useDispatch } from "react-redux";
import { userLogin } from "./reducers/user";
import carService from "./services/cars";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(userLogin(user));
      carService.setToken(user.token);
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/renting" component={Renting} />
          <Route path="/about" component={About} />
          <Route path="/listing" component={Listing} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/mycars" component={Mycars} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
