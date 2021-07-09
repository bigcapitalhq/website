import React from "react"
import className from "classnames"
import { FormattedMessage as T } from 'react-intl'
import { useLocalization } from '../Localization';
import * as styles from "./plans.module.scss"

/**
 * Plan feature line.
 */
export function PlanFeatureLine({ children }) {
  return (
    <li>
      <span className={styles.icon}>
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
      <span className={styles.text}>{children}</span>
    </li>
  )
}

/**
 * Pricing plan.
 */
export function Plan({
  title,
  primary,
  features,
  price,
  description,
  pricePostfix,
  mostPopular,
}) {
  const { isRTL } = useLocalization();

  return (
    <div
      class={className(styles.plan, {
        [styles.isPrimary]: primary,
        [styles.isMostPopular]: mostPopular,
      })}
    >
      {mostPopular && (
        <div className={className(styles.plan__mostPopular)}><T id={'Most popular'} /></div>
      )}
      <div className={className(styles.plan__titleWrap)}>
        <h1 className={className(styles.plan__title)}>{title}</h1>
        <p className={className(styles.plan__desc)}>{description}</p>
      </div>
      <ul className={className(styles.plan__features)}>{features}</ul>

      <div className={className(styles.plan__price)}>
        <h1 className={className(styles.amount)}>
          {isRTL ? price : ''}
          <T id={'LD'} />
          {!isRTL ? price : ''}
        </h1>
        <p>{pricePostfix}</p>
      </div>
    </div>
  );
}

/**
 * Plans wrapper.
 */
export function Plans({ children, vertical }) {
  return (
    <div
      className={className(styles.plans, {
        [styles.plansVertical]: vertical
      })}
    >
      {children}
    </div>
  );
}
