import React from "react"
import Logo from '../components/Logo';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="footer__widget">
              <a
                className="footer-logo d-block mt-1"
                href="https://craftwork.design/"
              >
                <Logo />
              </a>
              <div className="footer-text mb-0 mt-3">
                <p>
                  High-quality digital resources which make your design workflow
                  faster and easier.
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

          <div className="col-lg-8 col-md-7 offset-md-1">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <strong className="footer__widget-title d-block">
                    UX/UI Tools
                  </strong>
                  <ul className="footer__widget-list">
                    <li>
                      <a href="https://method.blue/">Method</a>
                    </li>
                    <li>
                      <a href="https://craftwork.design/portland-ui-kit/">
                        Portland UI Kit
                      </a>
                    </li>
                    <li>
                      <a href="https://craftwork.design/run-templates/">
                        Run Templates
                      </a>
                    </li>
                    <li>
                      <a href="https://usebites.com/">Bites Popups</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <strong className="footer__widget-title d-block">
                    Illustrations
                  </strong>
                  <ul className="footer__widget-list">
                    <li>
                      <a target="_blank" href="https://stubborn.rocks/">
                        Stubborn Illustrations
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/silky-illustrations/"
                      >
                        Silky Illustrations
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/oslo-illustrations/"
                      >
                        OSLO Illustrations
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/no-comments-illustrations/"
                      >
                        No Comments
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://struct.rocks/">
                        Struct Illustrations
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/follow-me-illustrations/"
                      >
                        Follow Me Illustrations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <strong className="footer__widget-title d-block">
                    Legal
                  </strong>
                  <ul className="footer__widget-list">
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/license/"
                      >
                        Licence
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/refund-policy/"
                      >
                        Refund Policy
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/about-us/"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://craftwork.design/contact-us/"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <strong className="footer__widget-title d-block">
                    Socials
                  </strong>
                  <ul className="footer__widget-list">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.producthunt.com/@shepovalovdenis/made"
                      >
                        Producthunt
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://dribbble.com/Craftwork">
                        Dribbble
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.behance.net/getcraftwork"
                      >
                        Behance
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/getcraftwork/"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://twitter.com/GetCraftwork"
                      >
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://medium.com/@Shepovalovdenis"
                      >
                        Medium
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="footer-copyright__inner">
            <p>Copyright © 2020 — Made by Bigcapital Technologies.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
