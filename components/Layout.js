import { Component } from "preact";
import Link from "next/link";
import "./style.styl";

class Layout extends Component {
  handleLogin = () => {};

  render() {
    const { children } = this.props;
    return (
      <div>
        <Navbar />
        {/* Side button */}
        <div className="side-button">
          <button className="button">Consulta</button>
        </div>
        <section className="section">
          <div className="container">{children}</div>
        </section>
      </div>
    );
  }
}

const Navbar = () => (
  <navbar className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
        </a>
        <span className="navbar-burger burger" data-target="navbarMenuHeroB">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          <a className="navbar-item">
            <a>Login</a>
          </a>
        </div>
      </div>
    </div>
  </navbar>
);

export default Layout;
