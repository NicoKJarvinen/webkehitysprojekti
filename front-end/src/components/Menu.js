import React, { Fragment } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import { Button } from "./Buttons";

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

/**
 * Mobiili näkymässä esiin tulevan menun komponentti
 *
 * @component
 */

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
  /**
   * Pitää valikon tilan tasalla siitä onko se auki vai kiinni.
   * Eli onko painettu rastia vai menu painiketta.
   * @param {state} state menun tila.
   */
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  /**
   * Asettaa valikon tilan suljetuksi, joka myös sulkee valikon.
   *
   */
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  /**
   * Asettaa valikon tilan auki, jolloin valikko aukeaa.
   *
   */
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
