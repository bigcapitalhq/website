import * as React from "react"
import { Form, Button } from "react-bootstrap"
import { graphql } from "gatsby"
import classNames from "classnames"
import { mapKeys, snakeCase } from "lodash"
import { Formik, Field } from "formik"
import ReactWOW from "react-wow"
import * as yup from "yup"
import axios from "axios"
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/request-demo-page.scss"

const ApiService = axios.create({
  baseURL: "http://localhost:1337",
})

const InitialValues = {
  fullName: "",
  businessName: "",
  phoneNumber: "",
  businessEmail: "",
}

const ExternalLink = props => {
  const { defaultLanguage, language } = useI18next()
  const toPath =
    defaultLanguage === language ? props.to : `/${language}${props.to}`

  return (
    <a href={toPath} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}

function TermsAndConditionsMessage() {
  return (
    <Trans i18nKey={"requestTrial.termsConditionsMsg"}>
      By continuing, you agree to Bigcapital's
      <ExternalLink to={"/legal/terms-of-use"}>Terms of Service</ExternalLink>
      and
      <ExternalLink to={"/legal/privacy-policy"}>Privacy Policy</ExternalLink>.
    </Trans>
  )
}

function RequestDemoForm({ onSubmitSuccess }) {
  const { t } = useTranslation()

  const ValidationSchema = yup.object({
    fullName: yup.string().required().label(t("Full name")),
    businessName: yup.string().required().label(t("Business name")),
    phoneNumber: yup.string().required().label(t("Phone number")),
    businessEmail: yup.string().required().label(t("Business email")),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    const formattedValues = mapKeys(values, (value, key) => snakeCase(key))

    setSubmitting(true)
    ApiService.post("/free-demo-requests", formattedValues)
      .then(() => {
        onSubmitSuccess()
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  }

  return (
    <Formik
      initialValues={InitialValues}
      onSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      {({ handleSubmit }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className={classNames("request-demo__form", "request-demo-form")}
        >
          <Field name="fullName">
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="fullName">
                <Form.Control
                  type="text"
                  placeholder={t("Full Name")}
                  isInvalid={error && touched}
                  feedback={error}
                  {...field}
                />
                <Form.Control.Feedback type="invalid">
                  {error}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  <Trans>
                    We'll never share your information with anyone else.
                  </Trans>
                </Form.Text>
              </Form.Group>
            )}
          </Field>

          <Field name="businessName">
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="businessName">
                <Form.Control
                  type="text"
                  placeholder={t("Business Name")}
                  isInvalid={error && touched}
                  feedback={error}
                  {...field}
                />

                <Form.Control.Feedback type="invalid">
                  {error}
                </Form.Control.Feedback>

                <Form.Text className="text-muted">
                  <Trans>Should be correct.</Trans>
                </Form.Text>
              </Form.Group>
            )}
          </Field>

          <Field name={"phoneNumber"}>
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  placeholder={t("Phone Number")}
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

          <Field name={"businessEmail"}>
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="businessEmail">
                <Form.Control
                  type="text"
                  placeholder={t("Business Email")}
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

          <p className={"terms-conditions"}>
            <TermsAndConditionsMessage />
          </p>

          <p className="footer-hint">
            <Trans>
              Please note, we are currently experiencing higher than normal
              contact request volumes. Thanks for your understanding!
            </Trans>
          </p>

          <Button variant="primary" type="submit">
            <Trans>Get in Touch</Trans>
          </Button>
        </Form>
      )}
    </Formik>
  )
}

const RequestDemoPage = () => {
  const [success, setSuccess] = React.useState(false)

  const handleSubmitSuccess = () => {
    setSuccess(true)
  }

  const { t } = useTranslation()

  return (
    <Layout>
      <SEO
        title={t("request_demo.seo.title")}
        description={t("request_demo.seo.description")}
        lang="en"
        keywords={["request", "demo", "trial"]}
      />
      <div class="container">
        <div class="request-demo">
          {success ? (
            <h1 class="request-demo__thanks-title">
              <Trans>
                Thank you. We received the contact request from you.
              </Trans>
            </h1>
          ) : (
            <>
              <ReactWOW animation="fadeIn" duration={"1s"} delay={"0.2s"}>
                <h1 className="request-demo__title">
                  <Trans>Request free trial</Trans>
                </h1>
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration={"1s"} delay={"0.3s"}>
                <p className="request-demo__desc">
                  <Trans>
                    Request product free tour to see how our comprehensive
                    financial accounting software can help your organization to
                    help automate your accounting processes.
                  </Trans>
                </p>
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration={"1s"} delay={"0.4s"}>
                <RequestDemoForm onSubmitSuccess={handleSubmitSuccess} />
              </ReactWOW>
            </>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default RequestDemoPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
