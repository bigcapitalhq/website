import React from "react"
import * as yup from "yup"
import axios from "axios"
import { Formik, Field } from "formik"
import { Form, Button } from "react-bootstrap"
import className from "classnames"
import * as styles from "./FooterCTA.module.scss"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const InitialValues = {
  email: "",
}

const ApiService = axios.create({
  baseURL: "/",
})

export default function CTASection() {
  const { t } = useTranslation()

  const ValidationSchema = yup.object({
    email: yup.string().required().label(t("Email")),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(true)
    ApiService.post("/api/mail-subscribe", values)
      .then(() => {
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  }

  return (
    <div className={className(styles.footerCTA)}>
      <h1 className={className(styles.footerCTA__title)}>
        <Trans>
          Let's see what Bigcapital software can do for your business.
        </Trans>
      </h1>

      <div className={className(styles.footerCTA__body)}>
        <Formik
          initialValues={InitialValues}
          onSubmit={handleSubmit}
          validationSchema={ValidationSchema}
        >
          {({ handleSubmit }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <div class="row">
                <div class="col-8">
                  <Field name={"email"}>
                    {({ field, meta: { error, touched } }) => (
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Phone number"
                          isInvalid={error && touched}
                          feedback={error}
                          {...field}
                        />
                      </Form.Group>
                    )}
                  </Field>
                </div>

                <div class="col-4">
                  <Button block={true} variant="primary" type={"submit"}>
                    <Trans>Call me</Trans>
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
