import React from "react"
import { Form, Button } from "react-bootstrap"
import "./style.scss"

export default function CTASection() {
  return (
    <div class="CTA-section">
      <h1 class="CTA-section__title">
        Let's see what Bigcapital software can do for your business.
      </h1>

      <div class="CTA-section__body">
        <div class="row">
          <div class="col-8">
            <Form.Group>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
          </div>

          <div class="col-4">
            <Button block={true} variant="primary">
              Call me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
