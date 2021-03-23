import React from "react"

import "./index.scss"

function Feature({ title, desc }) {
  return (
    <div
      class="features__feature active"
      data-target="#appCarousel"
      data-slide-to="0"
    >
      <h4 class="features__feature-title">{title}</h4>
      <p class="features__feature-desc">{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <div class="features">
      <div class="bg-gradient position-relative">
        <img
          class="gradient-2 position-absolute"
          src="https://method.blue/images/02.jpg"
        />
      </div>

      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              title={"Accounts Receivable, payable and customers"}
              desc={
                "Exploring and understanding team, legacy, or foreign projects takes a lot of time and effort, implementations, usages, declarations."
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
