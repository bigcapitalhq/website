import React from "react";
import className from 'classnames';
import "./index.scss"
// import "../Topbar/style.scss"

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

function PricingPlan({
  title,
  primary,
  features,
  price
}) {
  return (
    <div class={className(
      'pricing-plan',
      {
        'is-primary': primary,
      }
    )}>
      <h1 class="pricing-plan__title">{ title }</h1>
      <p class="pricing-plan__desc">
        Ge beyond email and customize your workflow.
      </p>

      <ul class="pricing-plan__features">{ features }</ul>
      <div class="pricing-plan__price">
        <h1 class="amount">{ price }</h1>
        <p>Per month</p>
      </div>
    </div>
  )
}

export default function PricingPlans() {
  return (
    <div class="pricing-section">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1 class="pricing-section__title">
              Choose the right plan for <br /> your business
            </h1>
          </div>
          <div class="col-5 offset-1">
            <p class="pricing-section__desc">
              Exploring and understanding team, legacy, or foreign projects
              takes.
            </p>
          </div>
        </div>

        <div class="pricing-plans">
          
              <PricingPlan
                title={"Capital Starter"}
                features={
                  <>
                    <FeatureLine>Sale and purchase invoices.</FeatureLine>
                    <FeatureLine>Customers/vendors accounts.</FeatureLine>
                    <FeatureLine>Expense tracking</FeatureLine>
                    <FeatureLine>Manual journals.</FeatureLine>
                    <FeatureLine>Financial reports.</FeatureLine>
                    <FeatureLine>For one user and accountant.</FeatureLine>
                  </>
                }
                price={'LD1,200LD'}
              />
            
              <PricingPlan title={"Capital Plus"} primary={true} features={
                <>
                  <FeatureLine>All <strong>Capital Starter</strong> features.</FeatureLine>
                  <FeatureLine>Multi-currency.</FeatureLine>
                  <FeatureLine>Purchase and sell orders.</FeatureLine>
                  <FeatureLine>Inventory management.</FeatureLine>
                  <FeatureLine>Three users with your accountant.</FeatureLine>
                  <FeatureLine>Advanced financial reports.</FeatureLine>
                </>
              }
              price={'LD2,400'}/>
            
              <PricingPlan title={"Capital Enterprise"} features={
                <>
                  <FeatureLine>All <strong>Capital Essential</strong> features.</FeatureLine>
                  <FeatureLine>Track multi-branches and locations.</FeatureLine>
                  <FeatureLine>Projects accounting and timesheets.</FeatureLine>
                  <FeatureLine>Accounting dimensions.</FeatureLine>
                </>
              } price={'LD3400'} />
            
        </div>
      </div>
    </div>
  )
}
