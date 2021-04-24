import * as React from "react"
import { Form, Button } from "react-bootstrap"
import classNames from "classnames"
import { mapKeys, snakeCase } from 'lodash';
import { Formik, Field } from "formik"
import ReactWOW from "react-wow"
import * as yup from "yup"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/request-demo-page.scss"

const ApiService = axios.create({
  baseURL: 'http://localhost:1337'
});

const ValidationSchema = yup.object({
  fullName: yup.string().required().label("Full name"),
  businessName: yup.string().required().label("Business name"),
  phoneNumber: yup.string().required().label("Phone number"),
  businessEmail: yup.string().required().label("Business email"),
});

const InitialValues = {
  fullName: "",
  businessName: "",
  phoneNumber: "",
  businessEmail: "",
};

function RequestDemoForm({ onSubmitSuccess }) {

  const handleSubmit = (values, { setSubmitting }) => {
    const formattedValues = mapKeys(values, (value, key) => snakeCase(key));

    setSubmitting(true)
    ApiService.post("/free-demo-requests", formattedValues)
      .then(() => {
        onSubmitSuccess()
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  };

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
                  placeholder="Full Name"
                  isInvalid={error && touched}
                  feedback={error}
                  {...field}
                />
                <Form.Control.Feedback type="invalid">
                  {error}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  We'll never share your information with anyone else.
                </Form.Text>
              </Form.Group>
            )}
          </Field>

          <Field name="businessName">
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="businessName">
                <Form.Control
                  type="text"
                  placeholder="Business Name"
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

          <Field name={"phoneNumber"}>
            {({ field, meta: { error, touched } }) => (
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
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
                  placeholder="Business Email"
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

          <p className="footer-hint">
            Please note, we are currently experiencing higher than normal
            contact request volumes. Thanks for your understanding!
          </p>

          <Button variant="primary" type="submit">
            Get in Touch
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

  return (
    <Layout>
      <SEO
        title="Bigcapital"
        description="Financial Accounting Automation"
        lang="en"
      />
      <div class="container">
        <div class="request-demo">
          {success ? (
            <h1 class="request-demo__thanks-title">
              Thank you. We received the contact request from you.
            </h1>
          ) : (
            <>
              <ReactWOW animation="fadeIn" duration={"1s"} delay={'0.2s'}>
                <h1 className="request-demo__title">Become a client</h1>
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration={"1s"} delay={'0.3s'}>
                <p className="request-demo__desc">
                  Request product free tour to see how our comprehensive financial accounting software can help your organization to help automate your accounting processes.
                </p>
              </ReactWOW>

              <ReactWOW animation="fadeIn" duration={"1s"} delay={'0.4s'}>
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
