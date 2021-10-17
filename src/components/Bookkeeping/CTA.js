import React from "react"
import * as yup from "yup"
import { Form, Button } from "react-bootstrap"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Field, Formik } from "formik"

// Validation schema.
const ValidationSchema = yup.object({
  phoneNumber: yup.string().required().label("Phone number"),
})

/**
 * Bookkeeping CTA.
 */
export default function BookkeepingCTA() {
  const { t } = useTranslation()

  // Initial values.
  const initialValues = {
    phoneNumber: "",
  }
  // Handle form submit.
  const handleSubmit = () => {}

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-8">
              <Field name="fullName">
                {({ field, meta: { error, touched } }) => (
                  <Form.Group controlId="fullName">
                    <Form.Control
                      type="text"
                      placeholder={t("Phone number")}
                      isInvalid={error && touched}
                      feedback={error}
                      {...field}
                    />
                    <Form.Control.Feedback type="invalid">
                      {error}
                    </Form.Control.Feedback>
                  </Form.Group>
                )}
              </Field>
            </div>

            <div class="col-4">
              <Button block={true} variant="primary">
                <Trans>Contact us</Trans>
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
