import { Component } from "react";
import Link from "next/link";
import "./style.styl";

class Layout extends Component {
  render() {
    const { children, user } = this.props;
    return (
      <div>
        <Navbar user={user} />
        {/* Side button */}
        <div className="side-button">
          <button className="button">Consulta</button>
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

const Navbar = ({ user }) => (
  <navbar className="navbar is-dark">
    <div className="container">
      <div className="navbar-brand">
        <a className="navbar-item">
          {/*<img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />*/}
        </a>
        <span className="navbar-burger burger" data-target="navbarMenu">
          <span />
          <span />
          <span />
        </span>
      </div>

      <div id="navbarMenu" className="navbar-menu">
        <div className="navbar-end">
          {(user && (
            <span className="navbar-item">
              Welcome, {user.name.split(" ")[0]}! (
              <Link href={"/logout"}>
                <a>Sign out</a>
              </Link>
              )
            </span>
          )) || (
            <a className="navbar-item">
              <a href="/login">Login</a>
            </a>
          )}
        </div>
      </div>
    </div>
  </navbar>
);

export default Layout;
