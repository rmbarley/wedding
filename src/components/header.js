import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-transparent d-flex">
      <Link className="navbar-brand" to="/">
        Deerly Beloved
      </Link>
      <div className="navbar-nav d-flex flex-row justify-content-between w-25">
        <Link className="nav-link nav-item" activeClassName="active" to="/us">
          Us
        </Link>
        <Link className="nav-link nav-item" activeClassName="active" to="/rsvp">
          RSVP
        </Link>
        <Link className="nav-link nav-item" activeClassName="active" to="/faq">
          FAQ
        </Link>
        <a
          className="nav-link nav-item"
          href="https://registry.theknot.com/-october-2019/20709649"
          target="_blank"
          rel="noopener noreferrer"
        >
          Registry
        </a>
      </div>
    </nav>
  )
}

export default Header
