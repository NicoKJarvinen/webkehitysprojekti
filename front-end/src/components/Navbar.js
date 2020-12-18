import React, { Fragment, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "./Buttons";
import "./Navbar.css";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../reducers/user";
import carService from "../services/cars";
/**
 * Navigointibarin komponentti
 * @component
 */
function Navbar() {
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  /**
   * Näyttää napin.
   */
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const userstate = useSelector((state) => state.user);
  let isAuthenticated = userstate.logged;
  /**
   * Tapahtumankäsittelijä uloskirjautumiselle
   * @param {object} e tapahtuma. 
   */
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
    carService.setToken(null);
    window.localStorage.removeItem("loggedUser");
  };

  const authLinks = (
    <Fragment>
      <Button
        className="button-mobile"
        buttonStyle="btn--primary"
        onClick={handleLogout}
      >
        LOGOUT
      </Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Button
        props="/Login"
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Login
      </Button>
      <Button
        props="/Signup"
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
      >
        Signup
      </Button>
    </Fragment>
  );

  const signedInCarLink = (
    <Fragment>
      <NavLink
        exact
        to="/listing"
        activeClassName="main-nav-active"
        className="nav-links"
      >
        List your car
      </NavLink>
    </Fragment>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink exact to="/" className="navbar-logo">
            RECAR <i className="fas fa-car" />
          </NavLink>
          <Menu isAuth={isAuthenticated} handleLogout={handleLogout}></Menu>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="main-nav-active"
                className="nav-links"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/renting"
                activeClassName="main-nav-active"
                className="nav-links"
              >
                Renting
              </NavLink>
            </li>
            <li className="nav-item">
              {isAuthenticated ? signedInCarLink : null}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="main-nav-active"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
            <li className="nav-links-btn">
              {isAuthenticated ? authLinks : guestLinks}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
