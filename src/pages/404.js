import * as React from "react"
import { FormattedMessage as T } from 'react-intl';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1><T id={'404: Not Found'} /></h1>
    <p><T id={'You just hit a route that doesn&#39;t exist... the sadness.'} /></p>
  </Layout>
)

export default NotFoundPage
