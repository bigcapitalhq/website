import React from "react"
import ReactWOW from "react-wow"
import { FormattedMessage as T } from 'react-intl';
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap"
import Logo from "../Logo"

import "./index.scss"

/**
 * Top navigation bar.
 */
export default function TopBar({
  beforeNavbar,
  afterNavbar,
}) {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className="topbar" id="topbar">
        { beforeNavbar }

        <div className="container">
          <Navbar expand="lg">
            <Navbar.Brand>
              <a href="/">
                <Logo width={200} />
              </a>
            </Navbar.Brand>

            <Navbar.Toggle />

            <Navbar.Collapse>
              <Nav className="ml-auto">
                <NavDropdown title={<T id={'Products'} />} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">
                    <div class="title">Bigcapital</div>
                    <small><T id={'Accounting software'} /></small>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/bookkeeping">
                    <div class="title"><T id={'Bookkeeping'} /></div>
                    <small><T id={'Bookkeeping & accounting services'} /></small>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Item>
                  <Nav.Link href="/#features-title"><T id={'Features'} /></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="/#pricing-section"><T id={'Pricing'} /></Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link><T id={'Support'} /></Nav.Link>
                </Nav.Item>

                <li className="nav-divider mr-1 ml-1"></li>

                <Nav.Item>
                  <Nav.Link href={"https://app.bigcapital.ly"}><T id={'Login'} /></Nav.Link>
                </Nav.Item>

                <Nav.Item className={"d-none d-lg-block"}>
                  <a class="btn btn-primary" href={"/request-demo"}>
                    <T id={'Contact us'} />
                  </a>
                </Nav.Item>

                <li className="nav-item nav-item-primary d-lg-none">
                  <Nav.Link><T id={'Contact us'} /></Nav.Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Navbar>         
        </div>
        { afterNavbar }
      </div>
    </ReactWOW>
  )
}
