import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/Intro"
import Customers from "../components/Customers"
import Showcase from "../components/Showcase"
import Features from "../components/Features"
import PricingPlans from "../components/PricingPlans"
import CTASection from '../components/CTA';

import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Bigcapital"
      description="Financial Accounting Automation"
      lang="en"
    />
    <Intro />
    <Showcase />
    <Features />
    <PricingPlans />
    <CTASection />
  </Layout>
)

export default IndexPage
