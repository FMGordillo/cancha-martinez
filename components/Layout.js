import { Component } from "react";
import Link from "next/link";
import "./style.styl";

class Layout extends Component {
  state = {
    navIsOpen: false
  };

  handleClick = () => {
    this.setState(({ navIsOpen }) => ({ navIsOpen: !navIsOpen }));
  };
  render() {
    const { children, user } = this.props;
    return (
      <div>
        <Navbar
          user={user}
          isOpen={this.state.navIsOpen}
          toggle={this.handleClick}
        />
        {/* Side button */}
        <div className="side-button">
          <button
            className="button"
            onClick={() => {
              console.log("pending");
            }}
          >
            Consulta
          </button>
        </div>
        <section className="section">
          <div className="container">{children}</div>
        </section>
        {/* TODO: Notification goes here */}
        {/*<Notification />*/}
      </div>
    );
  }
}

const Navbar = ({ user, isOpen, toggle }) => (
  <nav
    className="navbar is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          {/*<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />*/}
        </a>
        <span
          className={`navbar-burger ${isOpen ? "is-active" : ""}`}
          data-target="navbarMenu"
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </span>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${isOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          {(user && (
            <span className="navbar-item">
              ¡Hola, {user.firstName} {user.lastName}! (
              <a style={{ textDecoration: "line-through" }}>Cerrar sesión</a>)
            </span>
          )) || (
            <a className="navbar-item">
              <a href="/login">Iniciar sesión</a>
            </a>
          )}
        </div>
      </div>
    </div>
  </nav>
);

export default Layout;
