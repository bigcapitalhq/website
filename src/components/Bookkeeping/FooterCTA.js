import React from "react"
import { Form, Button } from "react-bootstrap"
import { FormattedMessage as T } from "react-intl"
import className from "classnames"
import * as styles from "./FooterCTA.module.scss"

export default function CTASection() {
  return (
    <div className={className(styles.footerCTA)}>
      <h1 className={className(styles.footerCTA__title)}>
        <T
          id={"Let's see what Bigcapital software can do for your business."}
        />
      </h1>

      <div className={className(styles.footerCTA__body)}>
        <div class="row">
          <div class="col-8">
            <Form.Group>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
          </div>

          <div class="col-4">
            <Button block={true} variant="primary">
              <T id={"Call me"} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
