import React from "react"
import className from "classnames"
import { Trans } from "gatsby-plugin-react-i18next"
import * as styles from "./FAQ.module.scss"

/**
 * Question.
 */
function Quation({ question, answer }) {
  const [toggle, setToggle] = React.useState(false)

  // Handle header click.
  const handleHeaderClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className={className(styles.questionBox)}>
      <div
        className={className(styles.questionBox__header)}
        onClick={handleHeaderClick}
      >
        <h5 className={className(styles.questionBox__title)}>{question}</h5>
        <div className={className(styles.questionBox__icon)}>
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          )}
        </div>
      </div>
      <div
        className={className(styles.questionBox__content, {
          [styles.isOpen]: toggle,
        })}
      >
        {answer}
      </div>
    </div>
  )
}

const getQuestions = () => [
  {
    question: <Trans>What is the benefit of financial reports?</Trans>,
    answer: (
      <Trans>
        Financial reports reflects the financial activity of any organization, A
        balance sheet or statement of financial position, reports on a company's
        assets, liabilities, and owners equity at a given point in time, and
        income statement reports on a company's income, expenses, and profits
        over a stated period, and cash flow statement reports on a company's
        cash flow activities.
      </Trans>
    ),
  },
  {
    question: (
      <Trans>What is the difference between bookkeeping and accounting?</Trans>
    ),
    answer: (
      <Trans>
        The accounting job is more general and comprehensive than the bookkeeper
        job, and the main difference between the accountant and the bookkeeper
        is that the accountant prepares financial reports (financial
        statements), while the bookkeeper is the person who records all
        financial transactions based on agreed accounting principles and
        standards.
      </Trans>
    ),
  },
  {
    question: (
      <Trans>How is the import of all receipts and invoices daily?</Trans>
    ),
    answer: (
      <Trans>
        The daily communication with the organization takes place through two
        methods, using softwares, that made by us, that saves the trouble of
        transportation to import all daily invoices and receipts, and through
        personal attendance to the organization headquarter to make inventory
        adjustments and cash treasury, these tasks carried out by the
        bookkeeper.
      </Trans>
    ),
  },
  {
    question: <Trans>Can the plan be changed at any time?</Trans>,
    answer: (
      <Trans>
        Sure! Each plan has a set of specific services to meet your business
        needs, and it is normal for business requirements to change over time,
        so the plan can be changed at any time to a plan of more or less
        services.
      </Trans>
    ),
  },
]

/**
 * FAQ
 */
export default function FAQ() {
  const questions = getQuestions()

  return (
    <div id="FAQ" className={className(styles.FAQSection)}>
      <div class="container">
        <h1 className={className(styles.FAQSection__title)}>
          <Trans>Frequently Asked Questions</Trans>
        </h1>
      </div>

      <div class="FAQ">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {questions.map(question => (
                <Quation
                  question={question.question}
                  answer={question.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
