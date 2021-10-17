import * as React from "react"
import className from "classnames"
import { Img } from "react-image"
import BodyClassName from "react-body-classname"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Intro"
// import Customers from "../components/Customers"
import Showcase from "../components/Showcase"
import Features from "../components/Features"
import PricingPlans from "../components/PricingPlans"
import CTASection from "../components/CTA"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout name={"homepage"}>
    <div className={className("bg-grad")}>
      <Img src={"/blur/blur-1.jpeg"} class="rotating" />
    </div>
    <SEO
      title="Bigcapital"
      description="Financial Accounting Automation"
      lang="en"
    />
    <BodyClassName className="homepage" />
    <Intro />
    <Showcase />
    <Features />
    <PricingPlans />
    <CTASection />
  </Layout>
)

export default IndexPage

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
