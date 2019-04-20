import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const Header = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
    <Navbar.Brand href="#home">Deerly Beloved</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#">Us</Nav.Link>
        <Nav.Link href="#">Photos</Nav.Link>
        <Nav.Link href="#rsvp-form">RSVP</Nav.Link>
        <Nav.Link href="#">Info</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
