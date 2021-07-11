import React from "react"
import { Plan, Plans, PlanFeatureLine } from "../Plans"
import className from "classnames"
import { FormattedMessage as T } from "react-intl"
import * as styles from "./PricingPlans.module.scss"

const PLANS = [
  {
    title: <T id={"Dafter 100"} />,
    description:
      <T id={"Suitable for organizations who do have small bank and cash transactions."} />,
    monthlyPrice: 750,
    features: [
      <T id={"Free accounting and point of sale software."} />,
      <T id={"Chart of accounts preparation suits your business activities."} />,
      <T id={"Preparing a profit and loss report containing purchases, sales, expenses, revenues and net income."} />,
      <T id={"Receivable/Payable balances report."} />,
    ],
  },
  {
    title: <T id={"Dafter 200"} />,
    description:
      <T id={"Suitable for organization that has big cash or bank transactions and have no multiple locations and branches."} />,
    monthlyPrice: 1000,
    features: [
      <T id={'All services in the previous plan Dafter 100.'} />,
      <T id={"Reconcile cash and bank accounts transactions."} />,
      <T id={"Deliver the balance sheet and cash flow report."} />,
      <T id={"Closing temporary accounts of income and expenses."} />,
      <T id={"Explain financial reports."} />,
    ],
    mostPopular: true,
  },
  {
    title: <T id={"Dafter 300"} />,
    description:
      <T id={"Suitable for businesses that have multi-warehouses and multi-branches."} />,
    monthlyPrice: 1500,
    features: [
      <T id={'All services in the previous plan Dafter 200.'} />,
      <T id={"Preparing a profit and loss report on a multi-branch and multi-location business."} />,
      <T id={"Tracking inventory on a multi-branch business."} />,
    ],
  },
  {
    title: <T id={"Dafter 400"} />,
    description:
      <T id={"For ganizations in end of the fiscal year to prepare the final reports for the new fiscal year."} />,
    monthlyPrice: 2000,
    features: [
      <T id={'All services in the previous plan Dafter 300.'} />,
      <T id={"Preparing the zakat report and tax budget."} />,
      <T id={"Preparing estimated budgets for all business activities."} />,
      <T id={"Providing accounting consulting to top-level managers and business owners."} />,
      <T id={"Monitoring all financial metrics."} />,
    ],
    
  }
]

/**
 * Pricing plans.
 */
export default function PricingPlans() {
  return (
    <div className={className(styles.pricingSection)} id="pricing">
      <div class="container">
        <h1 className={className(styles.pricingSection__title)}>
          <T id={'Choose the right plan for your business'} />
        </h1>

        <p className={className(styles.pricingSection__desc)}>
          <T id={"Our prices are suitable for small and medium businesses, join us and we will work to find the right plan for your business."} />
        </p>

        <Plans vertical={true}>
          {PLANS.map(plan => (
            <Plan
              title={plan.title}
              description={plan.description}
              price={plan.monthlyPrice}
              features={plan.features.map(feature => (
                <PlanFeatureLine>{feature}</PlanFeatureLine>
              ))}
              pricePostfix={<T id={"Per month."} />}
              mostPopular={plan.mostPopular}
            />
          ))}
        </Plans>
      </div>
    </div>
  )
}
