import { Component } from "react"
import Head from "next/head"
import Link from "next/link"
import "./style.styl"

class Layout extends Component {
  state = {
    navIsOpen: false
  }

  handleClick = () => {
    this.setState(({ navIsOpen }) => ({ navIsOpen: !navIsOpen }))
  }
  render() {
    const { children, user, toggleHelpModal } = this.props
    return (
      <div>
        <Head>
          <title>Cancha Martinez</title>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Navbar
          user={user}
          isOpen={this.state.navIsOpen}
          toggle={this.handleClick}
        />
        {/* Side button */}
        <div className="side-button">
          <button className="button is-primary" onClick={toggleHelpModal}>
            Consulta
          </button>
        </div>
        <section className="section">
          <div className="container">{children}</div>
        </section>
        {/* TODO: Notification goes here */}
        {/*<Notification />*/}
      </div>
    )
  }
}

const Navbar = ({ user, isOpen, toggle }) => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
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
              ¡Hola, {user.firstName} {user.lastName}!
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
)

export default Layout
