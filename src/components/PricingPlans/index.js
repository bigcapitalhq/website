import React from "react"
import className from "classnames"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Form } from "react-bootstrap"
import { Plan, Plans, PlanFeatureLine } from "../Plans"
import * as styles from "./PricingPlans.module.scss"

const getPricingPlans = () => [
  {
    title: "Capital Essentials",
    description: (
      <Trans>
        Suitable for business has no multi-currency invoices and branches.
      </Trans>
    ),
    monthlyPrice: 95,
    annuallyPrice: 950,
    features: [
      <Trans>Sale and purchase invoices.</Trans>,
      <Trans>Customers/vendors accounts.</Trans>,
      <Trans>Inventory management.</Trans>,
      <Trans>Manual journals.</Trans>,
      <Trans>Advanced Financial reports.</Trans>,
      <Trans>For two users and accountant.</Trans>,
    ],
    mostPopular: true,
  },
  {
    title: "Capital Plus",
    description: (
      <Trans>
        Suitable for business pay in foreign currencies and has
        multi-warehouses.
      </Trans>
    ),
    monthlyPrice: 185,
    annuallyPrice: 1900,
    features: [
      <>
        All <strong>Capital Starter</strong> features.
      </>,
      <Trans>Multi-currency</Trans>,
      <Trans>Purchase and sell orders.</Trans>,
      <Trans>Multi-stocks management.</Trans>,
      <Trans>Four users with your accountant.</Trans>,
      <Trans>Custom roles and permissions.</Trans>,
    ],
  },
  {
    title: "Capital Enterprise",
    description: (
      <Trans>
        Suitable for business has projects or multi-branches transactions.
      </Trans>
    ),
    monthlyPrice: 275,
    annuallyPrice: 2000,
    features: [
      <>
        All <strong>Capital Essential</strong> features.
      </>,
      <Trans>Track multi-branches and locations.</Trans>,
      <Trans>Projects accounting and timesheets.</Trans>,
      <Trans>Accounting dimensions.</Trans>,
    ],
  },
]

/**
 * Pricing plans.
 */
export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = React.useState(false)
  const { t } = useTranslation()

  // Handle switch change.
  const handlSwitchChange = value => {
    const isChecked = value.target.checked
    setIsAnnual(isChecked)
  }

  return (
    <div className={className(styles.pricingSection)} id={"pricing"}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <h1 className={className(styles.pricingSection__title)}>
              <Trans>Choose the right plan for your business</Trans>
            </h1>

            <div className={className(styles.pricingSection__billingCycle)}>
              <Form.Label for={"billing-cycle-switch"}>
                <span><Trans>Billing cycle:</Trans> </span>
                <span
                  className={className(
                    "billing-cycle__item",
                    "billing-cycle__item--month",
                    {
                      active: !isAnnual,
                    }
                  )}
                >
                  <Trans>Monthly</Trans>
                </span>
              </Form.Label>
              <Form.Check
                type="switch"
                id="billing-cycle-switch"
                onChange={handlSwitchChange}
                checked={isAnnual}
              />
              <Form.Label
                for={"billing-cycle-switch"}
                className={className(
                  "billing-cycle__item",
                  "billing-cycle__item--month",
                  {
                    active: isAnnual,
                  }
                )}
              >
                <Trans>Annually</Trans>
              </Form.Label>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-12">
            <p className={className(styles.pricingSection__desc)}>
              <Trans>
                With Bigcapital only pay for what services and features you use.
              </Trans>
            </p>

            <p class="period-note">
              <Trans>6 Months the minimum period you can subscribe.</Trans>
            </p>
          </div>
        </div>

        <Plans>
          {getPricingPlans().map(plan => (
            <Plan
              title={plan.title}
              description={plan.description}
              price={isAnnual ? plan.annuallyPrice : plan.monthlyPrice}
              features={plan.features.map(feature => (
                <PlanFeatureLine>{feature}</PlanFeatureLine>
              ))}
              pricePostfix={isAnnual ? t("Per year.") : t("Per month.")}
              mostPopular={plan.mostPopular}
            />
          ))}
        </Plans>
      </div>
    </div>
  )
}
