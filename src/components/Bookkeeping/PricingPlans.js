import React from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { Plan, Plans, PlanFeatureLine } from "../Plans"
import className from "classnames"
import * as styles from "./PricingPlans.module.scss"

const getPlans = () => [
  {
    title: <Trans>Dafter 100</Trans>,
    description: (
      <Trans>
        Suitable for organizations who do have small bank and cash transactions.
      </Trans>
    ),
    monthlyPrice: 750,
    features: [
      <Trans>Free accounting and point of sale software.</Trans>,
      <Trans>
        Chart of accounts preparation suits your business activities.
      </Trans>,
      <Trans>
        Preparing a profit and loss report containing purchases, sales,
        expenses, revenues and net income.
      </Trans>,
      <Trans>Receivable/Payable balances report.</Trans>,
    ],
  },
  {
    title: <Trans>Dafter 200</Trans>,
    description: (
      <Trans>
        Suitable for organization that has big cash or bank transactions and
        have no multiple locations and branches.
      </Trans>
    ),
    monthlyPrice: 1000,
    features: [
      <Trans>All services in the previous plan Dafter 100.</Trans>,
      <Trans>Reconcile cash and bank accounts transactions.</Trans>,
      <Trans>Deliver the balance sheet and cash flow report.</Trans>,
      <Trans>Closing temporary accounts of income and expenses.</Trans>,
      <Trans>Explain financial reports.</Trans>,
    ],
    mostPopular: true,
  },
  {
    title: <Trans>Dafter 300</Trans>,
    description: (
      <Trans>
        Suitable for businesses that have multi-warehouses and multi-branches.
      </Trans>
    ),
    monthlyPrice: 1500,
    features: [
      <Trans>All services in the previous plan Dafter 200.</Trans>,
      <Trans>
        Preparing a profit and loss report on a multi-branch and multi-location
        business.
      </Trans>,
      <Trans>Tracking inventory on a multi-branch business.</Trans>,
    ],
  },
  {
    title: <Trans>Dafter 400</Trans>,
    description: (
      <Trans>
        For ganizations in end of the fiscal year to prepare the final reports
        for the new fiscal year.
      </Trans>
    ),
    monthlyPrice: 2000,
    features: [
      <Trans>All services in the previous plan Dafter 300.</Trans>,
      <Trans>Preparing the zakat report and tax budget.</Trans>,
      <Trans>Preparing estimated budgets for all business activities.</Trans>,
      <Trans>
        Providing accounting consulting to top-level managers and business
        owners.
      </Trans>,
      <Trans>Monitoring all financial metrics.</Trans>,
    ],
  },
]

/**
 * Pricing plans.
 */
export default function PricingPlans() {
  const plans = getPlans()

  return (
    <div className={className(styles.pricingSection)} id="pricing">
      <div class="container">
        <h1 className={className(styles.pricingSection__title)}>
          <Trans>Choose the right plan for your business</Trans>
        </h1>

        <p className={className(styles.pricingSection__desc)}>
          <Trans>
            Our prices are suitable for small and medium businesses, join us and
            we will work to find the right plan for your business.
          </Trans>
        </p>

        <Plans vertical={true}>
          {plans.map(plan => (
            <Plan
              title={plan.title}
              description={plan.description}
              price={plan.monthlyPrice}
              features={plan.features.map(feature => (
                <PlanFeatureLine>{feature}</PlanFeatureLine>
              ))}
              pricePostfix={<Trans>Per month.</Trans>}
              mostPopular={plan.mostPopular}
            />
          ))}
        </Plans>
      </div>
    </div>
  )
}
