import React from "react"
import ReactWOW from "react-wow"
import { Link } from "gatsby-plugin-react-i18next"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Trans } from "gatsby-plugin-react-i18next"
import Logo from "../Logo"

import "./index.scss"

/**
 * Top navigation bar.
 */
export default function TopBar({ beforeNavbar, afterNavbar }) {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className="topbar" id="topbar">
        {beforeNavbar}

        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand>
              <Link to={"/"}>
                <Logo width={200} />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <Nav className="ml-auto">
                <NavDropdown
                  title={<Trans>Products</Trans>}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/">
                    <div class="title">Bigcapital</div>
                    <small>
                      <Trans>Accounting software</Trans>
                    </small>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/bookkeeping">
                    <div class="title">
                      <Trans>Bookkeeping</Trans>
                    </div>
                    <small>
                      <Trans>Bookkeeping & accounting services</Trans>
                    </small>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link href="/#features">
                    <Trans>Features</Trans>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/#pricing">
                    <Trans>Pricing</Trans>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link>
                    <Trans>Support</Trans>
                  </Nav.Link>
                </Nav.Item>

                <li className="nav-divider mr-1 ml-1"></li>

                <Nav.Item>
                  <Nav.Link href={"https://app.bigcapital.ly"}>
                    <Trans>Login</Trans>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className={"d-none d-lg-block"}>
                  <a class="btn btn-primary" href={"/request-demo"}>
                    <Trans>Contact us</Trans>
                  </a>
                </Nav.Item>

                <li className="nav-item nav-item-primary d-lg-none">
                  <Nav.Link>
                    <Trans>Contact us</Trans>
                  </Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {afterNavbar}
      </div>
    </ReactWOW>
  )
}
