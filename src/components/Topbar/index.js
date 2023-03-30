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
                <Nav.Item className={"topbar__start-item"}>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=bigcapitalhq&repo=bigcapital&type=star&size=large&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="140"
                    height="30"
                    title="Bigcapital Github Repository"
                  ></iframe>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link to="/#features" as={Link}>
                    <Trans>Features</Trans>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href={'https://discord.gg/c8nPBJafeb'} target="_blank">
                    <Trans>Support</Trans>
                  </Nav.Link>
                </Nav.Item>

                <li className="nav-divider mr-1 ml-1"></li>

                <Nav.Item className={"d-none d-lg-block"}>
                  <a class="btn btn-primary" href={"https://app.bigcapital.ly"}>
                    <Trans>Sign In</Trans>
                  </a>
                </Nav.Item>

                <li className="nav-item nav-item-primary d-lg-none">
                  <Nav.Link as={Link} to={"https://app.bigcapital.ly"}>
                    <Trans>Sign In</Trans>
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
