import React from "react"
import Logo from "../Logo"

import "./index.scss"


function SocialWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">
        Socials
      </strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="#">Facebook</a>
        </li>
        <li>
          <a target="_blank" href="#">Twitter</a>
        </li>
        <li>
          <a target="_blank" href="#">Medium</a>
        </li>
        <li>
          <a target="_blank" href="#">LinkedIn</a>
        </li>
      </ul>
    </div>
  );
}

function CompanyWidget() {
  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">
        Legal
      </strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="#">Licence</a>
        </li>
        <li>
          <a target="_blank" href="#">Refund Policy</a>
        </li>
        <li>
          <a target="_blank" href="#">About Us</a>
        </li>
        <li>
          <a target="_blank" href="#">Contact Us</a>
        </li>
      </ul>
    </div>
  );
}

function PagesWidget() {

  return (
    <div className="footer__widget">
      <strong className="footer__widget-title d-block">
        Content
      </strong>
      <ul className="footer__widget-list">
        <li>
          <a target="_blank" href="#">
            Blog
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Translations
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Technical Suppert
          </a>
        </li>
        <li>
          <a target="_blank" href="#">
            Learning Center
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function Footer() {
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
                  Online accounting software, built to automate business financial processes.
                </p>
                <p className="mb-1">
                  <strong>Phone number</strong>: +218927918381
                </p>
                <p>
                  <strong>Email</strong>: info@bigcapital.com
                </p>
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
            <p>Copyright © 2021 — Made by Bigcapital Technologies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
