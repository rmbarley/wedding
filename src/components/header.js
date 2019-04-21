import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link as NavLink } from "react-scroll"

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="/#home">Deerly Beloved</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <NavLink
          to="us"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Us
        </NavLink>
        <NavLink
          to="photos"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Photos
        </NavLink>
        <NavLink
          to="rsvp-form"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          RSVP
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
