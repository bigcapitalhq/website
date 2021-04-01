import React from "react"
import ReactWOW from "react-wow"

import "./index.scss"

export default function Intro() {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className="intro">
        <div className="container">
          <h1 className="intro__title">
            Online accounting software, built to automate business financial processes.
          </h1>

          <h2 className="intro__subtitle">
          Control your business bookkeeping with automated and manual accounting, to create smarter reports for making the right decisions.
          </h2>

          <div className="intro__buttons">
            <a className="btn btn-primary btn-lg mr-lg-3 mb-3 mb-lg-0" href="">
              Request demo
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="">
              Signup
            </a>
          </div>
        </div>
      </div>
    </ReactWOW>
  )
}
