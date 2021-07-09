import React from "react"
import { FormattedMessage as T } from "react-intl"
import { Navbar, Nav } from "react-bootstrap"
import className from 'classnames'
import * as styles from "./Navbar.module.scss"

/**
 * Bookkeeping navigation bar.
 */
export default function BookkeepingNavbar() {
  return (
    <div className="container">
      <Navbar className={className(styles.navbarBookkeeping)} expand="lg">
        <Navbar.Brand href="#" className={className(styles.navbarTitle)}>
          <T id={"Bookkeeping services"} />
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="/#features-title">
                <T id={"Introduction"} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="/#pricing-section">
                <T id={"How we work"} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link>
                <T id={"Pricing"} />
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={"https://app.bigcapital.ly"}>
                <T id={"FAQ"} />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
