import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import Customers from "../components/Customers"
import Showcase from "../components/showcase"
import Features from "../components/features"

const IndexPage = () => (
  <Layout>
    <SEO title="Bigcapital" />
    <Intro />
    <Customers /> 
    {/* <Features /> */}
{/*     <Showcase />
     */}
  </Layout>
)

export default IndexPage
