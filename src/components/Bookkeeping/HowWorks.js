import React from "react"
import className from "classnames"
import ReactWOW from "react-wow"
import { Img } from "react-image"
import { Trans } from "gatsby-plugin-react-i18next"
import * as styles from "./HowWorks.module.scss"

/**
 * How work box.
 */
function HowWorkBox({ desc, title, image }) {
  return (
    <ReactWOW animation="fadeIn" duration={"1s"} delay={"0.8s"}>
      <div className={className(styles.howWorksBox)}>
        <div className={className(styles.howWorksBox__image)}>{image}</div>
        <h4 className={className(styles.howWorksBox__title)}>{title}</h4>
        <p className={className(styles.howWorksBox__desc)}>{desc}</p>
      </div>
    </ReactWOW>
  )
}

/**
 * How works process.
 */
export default function HowWorks() {
  return (
    <div id={"how-works"} className={className(styles.howWorks)}>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <HowWorkBox
              image={<Img src="../images/illustrator-delivery.png" />}
              title={<Trans>Recoding financial transactions</Trans>}
              desc={
                <Trans>
                  The first step is by sending all invoices and documents daily
                  to take over the bookkeeper recoding financial transactions to
                  the accounting software based on standards and principles of
                  accounting.
                </Trans>
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <HowWorkBox
              image={<Img src="../images/illustrator-work.png" />}
              title={<Trans>Financial reports preparation</Trans>}
              desc={
                <Trans>
                  Preparing accurate monthly financial reports based on the data
                  accumulated from the bookkeeping process, with cash and bank
                  accounts reconciliation at the end of each period.
                </Trans>
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <HowWorkBox
              image={<Img src="../images/illustrator-boxes.png" />}
              title={<Trans>Delivering financial reports</Trans>}
              desc={
                <Trans>
                  Deliver accurate and complete financial reports, to business
                  owners with necessary consulting.
                </Trans>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
