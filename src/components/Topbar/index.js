import React from "react"
import { Link } from "gatsby"
import ReactWOW from "react-wow"
import Logo from "../Logo"

import "./index.scss"

export default function TopBar() {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className="topbar">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-inner">
              <a className="navbar-branch">
                <Logo />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"#"}>
                    Features
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"#"}>
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"#"}>
                    Support
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link className="btn btn-outline-secondary" to={"#"}>
                    Contact us
                  </Link>
                </li>
                <li className="nav-item nav-item-primary d-lg-none">
                  <Link className="nav-link" to={"#"}>
                    Contact us
                  </Link>
                </li>
                <li className="nav-divider mr-1 ml-1"></li>
                <li className="nav-item">
                  <Link className="nav-link" to={"#"}>
                    Signup
                  </Link>
                </li>
                <li className="nav-item nav-item-primary d-lg-none">
                  <Link className="nav-link" to={"#"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <Link className="nav-link" to={"#"}>
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </ReactWOW>
  )
}
