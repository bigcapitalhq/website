import React from "react"
import { Form, Button } from "react-bootstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

import "./style.scss"

export default function CTASection() {
  const { t } = useTranslation()

  return (
    <div class="CTA-section">
      <h1 class="CTA-section__title">
        <Trans>
          Let's see what Bigcapital software can do for your business.
        </Trans>
      </h1>

      <div class="CTA-section__body">
        <div class="row">
          <div class="col-8">
            <Form.Group>
              <Form.Control type="text" placeholder={t("Phone number")} />
            </Form.Group>
          </div>

          <div class="col-4">
            <Button block={true} variant="primary">
              <Trans>Call me</Trans>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
