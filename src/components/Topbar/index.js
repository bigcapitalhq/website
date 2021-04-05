import React from "react"
import ReactWOW from "react-wow"
import { Navbar, Nav, Button } from "react-bootstrap"
import Logo from "../Logo"

import "./index.scss"

export default function TopBar() {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className="topbar" id="topbar">
        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand>
              <Logo width={200} />
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="#features-title">Features</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#pricing-section">Pricing</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>Support</Nav.Link>
                </Nav.Item>

                <li className="nav-divider mr-1 ml-1"></li>

                <Nav.Item>
                  <Nav.Link href={"https://app.bigcapital.ly"}>Login</Nav.Link>
                </Nav.Item>

                <Nav.Item className={"d-none d-lg-block"}>
                  <Button variant="primary" link={"#"}>
                    Contact us
                  </Button>
                </Nav.Item>

                <li className="nav-item nav-item-primary d-lg-none">
                  <Nav.Link>Contact us</Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </ReactWOW>
  )
}
