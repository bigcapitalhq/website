import React from "react"
import ChartSVG from "../../assets/svg/chart.svg"
import CloudSVG from "../../assets/svg/cloud.svg"
import InventorySVG from "../../assets/svg/inventory.svg"
import MoneySVG from "../../assets/svg/money.svg"
import PaymentSVG from "../../assets/svg/payment.svg"
import ReceiptSVG from "../../assets/svg/receipt.svg"
import PeopleSVG from "../../assets/svg/people.svg"
import HelpSVG from "../../assets/svg/help.svg"
import ShoppingBagSVG from "../../assets/svg/ShoppingBag.svg"
import "./index.scss"

/**
 * Feature component.
 */
function Feature({ icon, title, desc }) {
  return (
    <div
      class="features__feature active"
      data-target="#appCarousel"
      data-slide-to="0"
    >
      {icon && <div class="features__feature-icon">{icon}</div>}
      <h4 class="features__feature-title">{title}</h4>
      <p class="features__feature-desc">{desc}</p>
    </div>
  )
}

/**
 * Features section.
 */
export default function Features() {
  return (
    <div class="features" id="features">
      <div class="bg-gradient position-relative">
        <img
          class="gradient-2 position-absolute"
          src="https://method.blue/images/02.jpg"
        />
      </div>

      <div class="container">
        <h1 class="features__title" id="features-title">
          Discover the features you need
        </h1>

        <div class="row">
          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<PaymentSVG />}
              title={"Sales & Purchases Invoicing"}
              desc={
                "Create your sell invoices with your customers or purchase invoices with your vendors, manage recurring invoices and easily track customers/vendors payments."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<ChartSVG />}
              title={"Financial Reports"}
              desc={
                "You don't have to wait to end of the month to generate business reports. Bigcapital has financial reports to run your business with intelligence."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<InventorySVG />}
              title={"Inventory"}
              desc={
                "Easily track your inventory items, and when you purchase or sell for an item the stock amount will be automatically incremented or decremented with smart inventory reports."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<PeopleSVG />}
              title={"Accountants & Bookkeepers"}
              desc={
                "The software should facilitate collaboration with your accountant, Bigcapital allows to invite users to your organization with role-based permissions."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<ReceiptSVG />}
              title={"Expense Accounting"}
              desc={
                "The software gives you a single place to track all business expenses from employee payroll to office renting and categorize them on accounts and bill them to your customers."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<MoneySVG />}
              title={"Multi-currency Accounting"}
              desc={
                "Pay and get paid and do manual journals in any currency with real time exchange rates conversions."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<HelpSVG />}
              title={"Customer Success"}
              desc={
                "Bigcapital provides free online support, 12 hours a day seven days a week, as part of your subscription plan."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<CloudSVG />}
              title={"Cloud Accounting"}
              desc={
                "Your account information is securely stored in the cloud, available anytime on all your devices and track business transactions to see what business is doing from anywhere."
              }
            />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <Feature
              icon={<ShoppingBagSVG />}
              title={"Easy-to-use Software"}
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
