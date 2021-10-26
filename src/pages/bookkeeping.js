import React from "react"
import { graphql } from "gatsby"
import { useTranslation } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import HowWorks from "../components/Bookkeeping/HowWorks"
import PricingPlans from "../components/Bookkeeping/PricingPlans"
import FAQ from "../components/Bookkeeping/FAQ"
import FooterCTA from "../components/Bookkeeping/FooterCTA"
import Navbar from "../components/Bookkeeping/Navbar"
import Intro from "../components/Bookkeeping/Intro"
import SEO from "../components/seo"

import "../styles/bookkeeping.module.scss"

/**
 * Bookkeeping page.
 */
export default function BookkeepingPage() {
  const { t } = useTranslation()

  return (
    <Layout name={"bookkeeping"} afterNavbar={<Navbar />}>
      <SEO
        title={t("bookkeeping.seo.title")}
        description={t("bookkeeping.seo.description")}
      />
      <Intro />
      <HowWorks />
      <PricingPlans />
      <FAQ />
      <FooterCTA />
    </Layout>
  )
}

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
