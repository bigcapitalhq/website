import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import Customers from "../components/Customers"
import Showcase from "../components/Showcase"
import Features from "../components/Features"
import PricingPlans from '../components/PricingPlans'

const IndexPage = () => (
  <Layout>
    <SEO title="Bigcapital" />
    <Intro />
    <Customers /> 
    <Showcase />
    <Features />
    <PricingPlans />
    {/*  */}
{/*     <Showcase />
     */}
  </Layout>
)

export default IndexPage
