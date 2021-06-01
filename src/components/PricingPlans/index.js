import React from "react";
import className from 'classnames';
import { Form, Badge } from 'react-bootstrap';
import "./index.scss"

const PLANS = [
  {
    title: 'Capital Starter',
    description: 'Suitable for business has no multi-currency invoices.',
    monthlyPrice: 100,
    annuallyPrice: 1200,
    features: [
      'Sale and purchase invoices.',
      'Customers/vendors accounts.',
      'Expense tracking.',
      'Manual journals.',
      'Financial reports.',
      'For one user and accountant.'
    ],
  },
  {
    title: 'Capital Starter',
    description: 'Suitable for business pay in foreign currencies and has multi-warehouses.',
    monthlyPrice: 200,
    annuallyPrice: 2400,
    features: [
      <>All <strong>Capital Starter</strong> features.</>,
      'Multi-currency',
      'Purchase and sell orders.',
      'Inventory management.',
      'Three users with your accountant.',
      'Advanced financial reports.'
    ],
  },
  {
    title: 'Capital Enterprise',
    description: 'Suitable for business has projects or multi-branches transactions.',
    monthlyPrice: 300,
    annuallyPrice: 3400,
    features: [
      <>All <strong>Capital Essential</strong> features.</>,
      'Track multi-branches and locations.',
      'Projects accounting and timesheets.',
      'Accounting dimensions.',
    ],
  }
]

/**
 * Feature line.
 */
function FeatureLine({ children }) {
  return (
    <li>
      <span class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          width="18px"
          height="18px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      </span>
      <span class="text">{ children }</span>
    </li>
  )
}

/**
 * Pricing plan.
 */
function PricingPlan({
  title,
  primary,
  features,
  price,
  description,
  pricePostfix
}) {
  return (
    <div class={className(
      'pricing-plan',
      { 'is-primary': primary }
    )}>
      <h1 class="pricing-plan__title">{ title }</h1>
      <p class="pricing-plan__desc">{ description }</p>
      <ul class="pricing-plan__features">{ features }</ul>

      <div class="pricing-plan__price">
        <h1 class="amount">LD{ price }</h1>
        <p>{ pricePostfix }</p>
      </div>
    </div>
  )
}

/**
 * Pricing plans.
 */
export default function PricingPlans() {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const handlSwitchChange = (value) => {
    const isChecked = value.target.checked;
    setIsAnnual(isChecked);
  };
  return (
    <div class="pricing-section" id="pricing-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12">
            <h1 class="pricing-section__title">
              Choose the right plan for your business
            </h1>

            <div class="pricing-section__billing-cycle">
              <Form.Label for={"billing-cycle-switch"}>
                <span>Billing cycle: </span>
                <span className={className(
                  'billing-cycle__item',
                  'billing-cycle__item--month',
                  {
                    active: !isAnnual,
                  })}>
                  3 Months
                </span>
              </Form.Label>
              <Form.Check type="switch" id="billing-cycle-switch" onChange={handlSwitchChange} />
              
              <Form.Label
                for={"billing-cycle-switch"}
                  className={className(
                  'billing-cycle__item',
                  'billing-cycle__item--month',
                  {
                    active: isAnnual,
                  })}>
                Annually
              </Form.Label>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1 col-md-12">
            <p class="pricing-section__desc">
              With Bigcapital only pay for what services and features you use.
            </p>

            <p class="period-note">The minimum period you can subscribe is 3 months</p>
          </div>
        </div>

        <div class="pricing-plans">
         { PLANS.map((plan) => (
           <PricingPlan
             title={plan.title}
             description={plan.description}
             price={isAnnual ? plan.annuallyPrice : plan.monthlyPrice}
             features={
               plan.features.map((feature) => (
                 <FeatureLine>{ feature }</FeatureLine>
              ))
             }
             pricePostfix={isAnnual ? 'Per year.' : 'Per month.'}
           />
         )) }
        </div>
      </div>
    </div>
  )
}
