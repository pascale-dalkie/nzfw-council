import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"

import logo from "../images/auckalandcouncillibraries-logo.png"
import NZFW from "../images/NZFW logo.png"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar expand="lg" id="site-navbar">
        {/* <Container> */}
        <Link to="/" className="link-no-style">
          <Navbar.Brand as="span">
            <img
                    src={logo}
                    height="60"
                    className="d-inline-block align-top"
                    alt="Auckland City Council Libraries logo"
                  />
          </Navbar.Brand>
        </Link>
        <Navbar.Brand as="span">
          <img
                  src={NZFW}
                  height="60"
                  className="d-inline-block align-top"
                  alt="New Zealand Fashion Week logo"
                />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" activeKey={pageInfo && pageInfo.pageName}>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/" className="blue-text">
              <Nav.Link as="span" eventKey="Home">
                Home
              </Nav.Link>
            </Link>
            <Link to="/events" className="blue-text">
              <Nav.Link as="span" eventKey="events">
                Events
              </Nav.Link>
            </Link>
            <Link to="/about" className="blue-text">
              <Nav.Link as="span" eventKey="about">
                About
              </Nav.Link>
            </Link>              
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
  )
}

export default CustomNavbar
