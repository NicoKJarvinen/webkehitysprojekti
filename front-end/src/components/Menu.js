import React, { Fragment } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { Button } from "./Buttons";

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  guestLinks = (
    <Fragment>
      <Button
        props="/Login"
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        onClick={() => this.closeMenu()}
        children="Login"
      ></Button>
      <Button
        props="/Signup"
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        onClick={() => this.closeMenu()}
        children="Signup"
      ></Button>
    </Fragment>
  );

  authLinks = (
    <Fragment>
      <Button
        className="button-mobile"
        buttonStyle="btn--primary"
        onClick={this.props.handleLogout}
        children="LOGOUT"
      ></Button>
    </Fragment>
  );

  signedInCarLinkMobile = (
    <Fragment>
      <li className="nav-item">
        <Button
          props="/listing"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => this.closeMenu()}
        >
          List your car
        </Button>
      </li>
    </Fragment>
  );

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState((state) => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <ReduxBurgerMenu
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        right
        width={"100%"}
        customBurgerIcon={<i className="fas fa-bars" />}
        customCrossIcon={<i className="fas fa-times" />}
      >
        <ul className="mobile-list">
          <li className="nav-item">
            <Button
              props="/"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={() => this.closeMenu()}
            >
              Home
            </Button>
          </li>
          <li className="nav-item">
            <Button
              props="/renting"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={() => this.closeMenu()}
            >
              Cars
            </Button>
          </li>
          {this.props.isAuth ? this.signedInCarLinkMobile : null}
          <li className="nav-item">
            <Button
              props="/about"
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
              onClick={() => this.closeMenu()}
            >
              About
            </Button>
          </li>
          {this.props.isAuth ? this.authLinks : this.guestLinks}
        </ul>
      </ReduxBurgerMenu>
    );
  }
}

export default MobileMenu;
