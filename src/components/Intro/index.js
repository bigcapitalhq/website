import React from "react"
import ReactWOW from "react-wow"
import className from "classnames"
import { FormattedMessage as T } from "react-intl"
import * as styles from "./intro.module.scss"

/**
 * Homepage - Introduction.
 */
export default function Intro() {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className={className("intro", styles.intro)} id="intro">
        <div className="container">
          <h1 className={className(styles.intro__title)}>
            <T
              id={
                "Online accounting software, built to automate business financial processes."
              }
            />
          </h1>

          <h2 className={className(styles.intro__subtitle)}>
            <T
              id={
                "Control your business bookkeeping with automated and manual accounting, to create smarter reports for making the right decisions."
              }
            />
          </h2>

          <div className={className(styles.intro__buttons)}>
            <a
              className={className(styles.btn, "btn-primary", "btn-lg")}
              href="/request-demo"
            >
              <T id={"Request demo"} />
            </a>
            <a
              className={className(
                styles.btn,
                "btn-outline-secondary",
                "btn-lg"
              )}
              href="/request-demo"
            >
              <T id={"Signup"} />
            </a>
          </div>
        </div>
      </div>
    </ReactWOW>
  )
}
