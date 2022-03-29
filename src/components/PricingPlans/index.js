import React from "react"
import className from "classnames"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { Form } from "react-bootstrap"
import { Plan, Plans, PlanFeatureLine } from "../Plans"
import * as styles from "./PricingPlans.module.scss"

const getPricingPlans = () => [
  {
    title: "Capital Basic",
    description: (
      <Trans>
        Good for service businesses have no inventory or multiply currencies.
      </Trans>
    ),
    monthlyPrice: 55,
    annuallyPrice: 595,
    features: [
      <Trans>Sales Invoices</Trans>,
      <Trans>Sales Estimates</Trans>,
      <Trans>Customers</Trans>,
      <Trans>Credit notes</Trans>,
      <Trans>Manual Journals</Trans>,
      <Trans>Expenses Tracking</Trans>,
      <Trans>Basic Financial Reports</Trans>,
    ],
  },
  {
    title: "Capital Plus",
    description: (
      <Trans>Good for businesses need more financial reports and control</Trans>
    ),
    monthlyPrice: 75,
    annuallyPrice: 795,
    features: [
      <Trans>All Capital Basic features</Trans>,
      <Trans>Predefined User Roles</Trans>,
      <Trans>Custom Tables Views</Trans>,
      <Trans>Transactions Locking</Trans>,
      <Trans>Plus Financial Reports</Trans>,
      <Trans>Custom Fields & Resources</Trans>,
    ],
  },
  {
    title: "Capital Essential",
    description: (
      <Trans>Good for businesses have inventory and multiply currencies</Trans>
    ),
    monthlyPrice: 95,
    annuallyPrice: 995,
    features: [
      <Trans>All Capital Plus features</Trans>,
      <Trans>Sales & Purchases Order</Trans>,
      <Trans>Purchase Invoices</Trans>,
      <Trans>Inventory Tracking</Trans>,
      <Trans>Custom Roles</Trans>,
      <Trans>Multiply Currency Transcations</Trans>,
      <Trans>Inventory Reports</Trans>,
      <Trans>Landed cost</Trans>,
    ],
    mostPopular: true,
  },
  {
    title: "Capital Enterprise",
    description: (
      <Trans>
        Good for growing businesses have multiply branches and warehouses
      </Trans>
    ),
    monthlyPrice: 120,
    annuallyPrice: 1195,
    features: [
      <Trans>All Capital Essential features</Trans>,
      <Trans>Multiply Branches</Trans>,
      <Trans>Multiply Warehouses</Trans>,
      <Trans>Accounting Dimensions</Trans>,
      <Trans>Warehouses Reports</Trans>,
      <Trans>Branches Reports</Trans>,
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
                <span>
                  <Trans>Billing cycle:</Trans>{" "}
                </span>
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
