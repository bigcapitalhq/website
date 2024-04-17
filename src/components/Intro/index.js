import React from "react"
import ReactWOW from "react-wow"
import className from "classnames"
import { Trans, Link } from "gatsby-plugin-react-i18next"
import * as styles from "./Intro.module.scss"

/**
 * Homepage - Introduction.
 */
export default function Intro() {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"}>
      <div className={className("intro", styles.intro)} id="intro">
        <div className="container">
          <h1 className={className(styles.intro__title)}>
            <Trans>
              Online accounting software, built to automate business financial
              processes.
            </Trans>
          </h1>

          <h2 className={className(styles.intro__subtitle)}>
            <Trans>
              Control your business bookkeeping with automated accounting, to
              run intelligent reports for faster decision-making.
            </Trans>
          </h2>

          <div className={className(styles.intro__buttons)}>
            <Link
              className={className(styles.btn, "btn-primary", "btn-lg")}
              to="https://app.bigcapital.ly/auth/register"
            >
              <Trans>Start Accounting</Trans>
            </Link>
          <Link
              className={className(
                styles.btn,
                "btn-outline-secondary",
                "btn-lg"
              )}
              to="https://docs.bigcapital.ly/deployment/docker"
              target="_blank"
            >
              <Trans>Self Host</Trans>
            </Link>
          </div>
        </div>
      </div>
    </ReactWOW>
  )
}
