import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import className from "classnames"
import { Trans } from "gatsby-plugin-react-i18next"
import * as styles from "./Navbar.module.scss"

/**
 * Bookkeeping navigation bar.
 */
export default function BookkeepingNavbar() {
  return (
    <div className="container">
      <Navbar className={className(styles.navbarBookkeeping)} expand="lg">
        <Navbar.Brand href="#" className={className(styles.navbarTitle)}>
          <Trans>Bookkeeping services</Trans>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#introduction">
                <Trans>Introduction</Trans>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#how-works">
                <Trans>How we work</Trans>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={"#pricing"}>
                <Trans>Pricing</Trans>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={"#FAQ"}>
                <Trans>FAQ</Trans>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
