import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/">Home</Nav.Link>
    <Nav.Link href="#portfolio">Portfolio</Nav.Link>
    <Nav.Link href="#about">Skills</Nav.Link>
    <Nav.Link href="#resume">Resume & Certifications</Nav.Link>
  </Fragment>
)

const Header = () => (
  <Navbar collapseOnSelect id="navbar" expand="md" className="nav justify-content-center">
    <Navbar.Brand href="#/" id="logo">
      <b>katiecodes</b>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
