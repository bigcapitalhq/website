import React from "react"
import Layout from "../components/layout"
import Intro  from '../components/Bookkeeping/Intro';
import HowWorks from '../components/Bookkeeping/HowWorks';
import PricingPlans from '../components/Bookkeeping/PricingPlans';
import FAQ from '../components/Bookkeeping/FAQ';
import FooterCTA from '../components/Bookkeeping/FooterCTA';
import Navbar from '../components/Bookkeeping/Navbar';
import SEO from '../components/seo';

import '../styles/bookkeeping.module.scss';

/**
 * Bookkeeping page.
 */
export default function BookkeepingPage() {
  return (
    <Layout name={'bookkeeping'} afterNavbar={<Navbar />}>
      <SEO />
      <Intro />
      <HowWorks />
      <PricingPlans />
      <FAQ />
      <FooterCTA />
    </Layout>
  );
}
