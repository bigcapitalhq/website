import React from "react"
import className from "classnames"
import { FormattedMessage as T, useIntl } from "react-intl"
import { Form } from "react-bootstrap"
import { Plan, Plans, PlanFeatureLine } from "../Plans"
import * as styles from "./PricingPlans.module.scss"

const PLANS = [
  {
    title: "Capital Essentials",
    description: (
      <T
        id={
          "Suitable for business has no multi-currency invoices and branches."
        }
      />
    ),
    monthlyPrice: 100,
    annuallyPrice: 1200,
    features: [
      <T id={"Sale and purchase invoices."} />,
      <T id={"Customers/vendors accounts."} />,
      <T id={"Inventory management."} />,
      <T id={"Manual journals."} />,
      <T id={"Advanced Financial reports."} />,
      <T id={"For two users and accountant."} />,
    ],
    mostPopular: true,
  },
  {
    title: "Capital Plus",
    description: (
      <T
        id={
          "Suitable for business pay in foreign currencies and has multi-warehouses."
        }
      />
    ),
    monthlyPrice: 200,
    annuallyPrice: 2400,
    features: [
      <>
        All <strong>Capital Starter</strong> features.
      </>,
      <T id={"Multi-currency"} />,
      <T id={"Purchase and sell orders."} />,
      <T id={"Multi-stocks management."} />,
      <T id={"Four users with your accountant."} />,
      <T id={"Custom roles and permissions."} />,
    ],
  },
  {
    title: "Capital Enterprise",
    description: (
      <T
        id={
          "Suitable for business has projects or multi-branches transactions."
        }
      />
    ),
    monthlyPrice: 300,
    annuallyPrice: 3400,
    features: [
      <>
        All <strong>Capital Essential</strong> features.
      </>,
      <T id={"Track multi-branches and locations."} />,
      <T id={"Projects accounting and timesheets."} />,
      <T id={"Accounting dimensions."} />,
    ],
  },
] 

/**
 * Pricing plans.
 */
export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = React.useState(true)
  const { formatMessage } = useIntl()

  // Handle switch change.
  const handlSwitchChange = value => {
    const isChecked = value.target.checked
    setIsAnnual(isChecked)
  }

  return (
    <div className={className(styles.pricingSection)} id={'pricing'}>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <h1 className={className(styles.pricingSection__title)}>
              <T id={"Choose the right plan for your business"} />
            </h1>

            <div className={className(styles.pricingSection__billingCycle)}>
              <Form.Label for={"billing-cycle-switch"}>
                <span>Billing cycle: </span>
                <span
                  className={className(
                    "billing-cycle__item",
                    "billing-cycle__item--month",
                    {
                      active: !isAnnual,
                    }
                  )}
                >
                  <T id={"Monthly"} />
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
                <T id={"Annually"} />
              </Form.Label>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-12">
            <p className={className(styles.pricingSection__desc)}>
              <T
                id={
                  "With Bigcapital only pay for what services and features you use."
                }
              />
            </p>

            <p class="period-note">
              <T id={"Annually the minimum period you can subscribe."} />
            </p>
          </div>
        </div>

        <Plans>
          {PLANS.map(plan => (
            <Plan
              title={plan.title}
              description={plan.description}
              price={isAnnual ? plan.annuallyPrice : plan.monthlyPrice}
              features={plan.features.map(feature => (
                <PlanFeatureLine>{feature}</PlanFeatureLine>
              ))}
              pricePostfix={
                isAnnual
                  ? formatMessage({ id: "Per year." })
                  : formatMessage({ id: "Per month." })
              }
              mostPopular={plan.mostPopular}
            />
          ))}
        </Plans>
      </div>
    </div>
  )
}
