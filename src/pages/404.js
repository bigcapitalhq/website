import * as React from "react"
import { graphql } from "gatsby"

import { Trans } from "gatsby-plugin-react-i18next"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      <Trans>404: Not Found</Trans>
    </h1>
    <p>
      <Trans>You just hit a route that doesn&#39;t exist... the sadness.</Trans>
    </p>
  </Layout>
)

export default NotFoundPage

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
