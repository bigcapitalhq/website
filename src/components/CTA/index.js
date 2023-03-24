import React from "react"
import * as yup from "yup"
import axios from "axios"
import { Form, Button } from "react-bootstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Formik, Field } from "formik"

import "./style.scss"

const InitialValues = {
  email: "",
}

const ApiService = axios.create({
  baseURL: "/",
})

export default function CTASection() {
  const { t } = useTranslation()
  const [success, setSuccess] = React.useState(false)

  const ValidationSchema = yup.object({
    email: yup.string().email().required().label(t("Email")),
  })

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    let timeoutId

    clearTimeout(timeoutId)
    setSubmitting(true)
    ApiService.post("/api/mail-subscribe", values)
      .then(() => {
        setSubmitting(false)
        setSuccess(true)
        setTimeout(() => setSuccess(false), 3000)
        resetForm()
      })
      .catch(() => {
        setSubmitting(false)
      })
  }

  return (
    <div class="CTA-section">
      <h1 class="CTA-section__title">
        <Trans>
          Let's see what Bigcapital software can do for your business.
        </Trans>
      </h1>

      <div class="CTA-section__body">
        <Formik
          initialValues={InitialValues}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-8">
                  <Field name="email">
                    {({ field, meta: { error, touched } }) => (
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder={t("Email address")}
                          isInvalid={error && touched}
                          feedback={error}
                          isValid={success}
                          {...field}
                        />
                        <Form.Control.Feedback type={"valid"}>
                          Your email has been submit successfully!
                        </Form.Control.Feedback>

                        <Form.Control.Feedback type="invalid">
                          {error}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                  </Field>
                </div>

                <div class="col-4">
                  <Button
                    block={true}
                    variant="primary"
                    type={"submit"}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : <Trans>Subscribe</Trans>}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
