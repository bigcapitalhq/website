import React from "react"
import { Img } from "react-image"
import className from "classnames"
import ReactWOW from "react-wow"
import { Trans } from "gatsby-plugin-react-i18next"
import BookkeepingCTA from "./CTA"
import * as styles from "./Intro.module.scss"

/**
 * Bookkeeping service introduction.
 */
export default function Intro() {
  return (
    <div id={"introduction"} className={className(styles.intro)}>
      <div className={className(styles.intro__background)}>
        <Img src={"blur/blue-white-background.png"} class="rotating" />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <ReactWOW animation="fadeIn" duration={"1s"} delay={"0.5s"}>
              <h1 className={className(styles.intro__title)}>
                <Trans>Bookkeeping & Accounting for growing businesses</Trans>
              </h1>

              <p className={className(styles.intro__desc)}>
                <Trans>
                  We provide accounting and financial bookkeeping services for
                  small and medium organizations that don't require hiring a
                  dedicated accountant, and at the same time, it needs accurate
                  financial reports, consultations and tax preparation.
                </Trans>
              </p>

              <div className={className(styles.intro__CTA)}>
                <BookkeepingCTA />
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    </div>
  )
}
