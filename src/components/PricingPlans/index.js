import React from "react"
import "./index.scss"
// import "../Topbar/style.scss"

function FeatureLine() {
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
      <span class="text">Contrary to popular belief</span>
    </li>
  )
}

function PricingPlan() {
  return (
    <div class="pricing-plan">
      <h1 class="pricing-plan__title">Starter</h1>
      <p class="pricing-plan__desc">
        Ge beyond email and customize your workflow.
      </p>

      <ul class="pricing-plan__features">
        <FeatureLine />
        <FeatureLine />
        <FeatureLine />
        <FeatureLine />
        <FeatureLine />
      </ul>

      <div class="pricing-plan__price">
        <h1 class="amount">$189</h1>
        <p>Per month</p>
      </div>
    </div>
  )
}

export default function PricingPlans() {
  return (
    <div class="pricing-section">
      <div class="bg-gradient position-relative">
        <img
          class="gradient-4 position-absolute"
          src="https://method.blue/images/04.jpg"
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1 class="pricing-section__title">
              Build the right plan for <br /> your team
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
          <div class="row">
            <div class="col-4">
              <PricingPlan />
            </div>
            <div class="col-4">
              <PricingPlan />
            </div>
            <div class="col-4">
              <PricingPlan />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
