import React from "react"
import { Dropdown } from "react-bootstrap"
import {  FormattedMessage as T } from 'react-intl';
import Logo from "../Logo"

import "./index.scss"

/**
 * Social media links widget.
 */
function SocialWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block"><T id={'Socials'} /></strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="https://www.facebook.com/bigcapitalHQ">
            Facebook
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/BigcapitalHQ">
            Twitter
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Medium
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
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
          <a target="_blank" href="#">
            Licence
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Refund Policy
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <T id={'About Us'} />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <T id={'Contact Us'} />
          </a>
        </li>
      </ul>
    </div>
  )
}

function PagesWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block"><T id={'Content'} /></strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="#">
            <T id={'Blog'} />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Translations
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <T id={'Technical Support'} />
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            <T id={'Learning Center'} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default function Footer() {
  // Handle language change.
  const onChangeLanguage = React.useCallback(
    local => () => {
      window.localStorage.setItem("lang", local)

      setTimeout(() => {
        window.scrollTo(0, 0)
      })
      window.location.reload()
    },
    []
  );

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
                  <T id={'Online accounting software, built to automate business financial processes.'} />
                </p>
                <p className="mb-1">
                  <strong><T id={'Phone number'} /></strong>: +218-927381987
                </p>
                <p>
                  <strong><T id={'Email'} /></strong>: info@bigcapital.com
                </p>
              </div>

              <div>
                <Dropdown size="md" className={'dropdown--change-language'}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <T id={'Change language'} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={onChangeLanguage("en")}>
                      English
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onChangeLanguage("ar")}>
                      عربية
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
            <p><T id={'Copyright © 2021 — Made by Bigcapital Technologies.'} /></p>
          </div>
        </div>
      </div>
    </div>
  )
}
