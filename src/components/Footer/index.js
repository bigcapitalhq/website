import React from "react"
import { Dropdown } from "react-bootstrap"
import { Trans, Link, useI18next } from "gatsby-plugin-react-i18next"
import Logo from "../Logo"

import "./index.scss"

/**
 * Social media links widget.
 */
function SocialWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">
        <Trans>Socials</Trans>
      </strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="https://discord.gg/c8nPBJafeb">
            Discord
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/BigcapitalHQ">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/bigcpaitalhq">
            Medium
          </a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/linkedin">
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}

function CompanyWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">Legal</strong>
      <ul className="footer__widget-list">
        <li>
          <Link to={"/legal/terms-of-use"}>
            <Trans>Terms & conditions</Trans>
          </Link>
        </li>
        <li>
          <Link to={"/legal/privacy-policy"}>
            <Trans>Privacy policy</Trans>
          </Link>
        </li>
        <li>
          <a target="_blank" href="https://discord.gg/c8nPBJafeb">
            <Trans>Contact Us</Trans>
          </a>
        </li>
      </ul>
    </div>
  )
}

function PagesWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">
        <Trans>Content</Trans>
      </strong>
      <ul className="footer__widget-list">
        <li>
          <Link to={"/"}>
            <Trans>Home</Trans>
          </Link>
        </li>
        <li>
          <a target="_blank" href="https://docs.bigcapital.ly">
            <Trans>Documentation</Trans>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  const { changeLanguage } = useI18next()

  // Handle language change.
  const onChangeLanguage = React.useCallback(
    language => () => {
      changeLanguage(language)
    },
    []
  )

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="footer__widget">
              <a className="footer-logo d-block mt-1" href="#">
                <Logo />
              </a>
              <div className="footer-text mb-0 mt-3">
                <p>
                  <Trans>
                    Online accounting software, built to automate business
                    financial processes.
                  </Trans>
                </p>
                <p>
                  <strong>
                    <Trans>Email</Trans>
                  </strong>
                  : ahmed@bigcapital.ly
                </p>
              </div>

              <div>
                {/* <Dropdown size="md" className={"dropdown--change-language"}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Trans>Change language</Trans>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={onChangeLanguage("en")}>
                      English
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onChangeLanguage("ar")}>
                      عربية
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6 offset-md-2">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <PagesWidget />
              </div>
              <div className="col-lg-5 col-md-6 col-sm-6">
                <CompanyWidget />
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <SocialWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="footer-copyright__inner">
            <p>
              <Trans>Copyright © 2023 — Made by Bigcapital Technologies.</Trans>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
