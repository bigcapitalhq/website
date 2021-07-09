import React from "react"
import { IntlProvider } from "react-intl"
import cookie from "cookie"
import queryParser from "querystring"
import { lowerCase } from "lodash"
import rtlDetect from "rtl-detect"
import intlMessagesEN from "../locals/en/index.json"
import intlMessagesAR from "../locals/ar/index.json"
import { Helmet } from "react-helmet"

// Localization context.
const LocalizationContext = React.createContext()

// Localization context.
export const useLocalization = () => React.useContext(LocalizationContext);

/**
 * I18n localization.
 */
export default function Localization({ children }) {
  const i18nConfig = initLocalization()
  const isRTL = rtlDetect.isRtlLang(i18nConfig.locale)
  const dir = isRTL ? "rtl" : "ltr"

  const provider = {
    isRTL,
    direction: dir,
    locale: i18nConfig.locale,
  }

  return (
    <IntlProvider
      messages={i18nConfig.messages}
      locale={i18nConfig.locale}
      defaultLocale="en"
    >
      <LocalizationContext.Provider value={provider}>
        <Helmet bodyAttributes={{ dir }} />
        {children}
      </LocalizationContext.Provider>
    </IntlProvider>
  )
}

function initLocalization(config = {}) {
  const i18nConfig = { locale: "en", messages: intlMessagesEN, ...config }
  const lang = detarmineLocalization()

  // Mutate the messages.
  switch (lang) {
    case "ar":
      i18nConfig.messages = intlMessagesAR
      break
    case "en":
      i18nConfig.messages = intlMessagesEN
      break
    default:
      i18nConfig.messages = intlMessagesEN
      break
  }
  // Mutate the localization code.
  i18nConfig.locale = lang

  return i18nConfig
}

function getLocaleFromURL() {
  const urlLocaleKey = "lang"

  if (urlLocaleKey) {
    let query = window.location.search.split("?")

    if (query.length >= 2) {
      let params = queryParser.parse(query[1])
      return params && params[urlLocaleKey]
    }
  }
}

function getLocaleFromCookie() {
  const cookieLocaleKey = "lang"

  if (cookieLocaleKey) {
    let params = cookie.parse(document.cookie)
    return params && params[cookieLocaleKey]
  }
}

function getLocaleFromLocalStorage() {
  const localStorageLocaleKey = "lang"

  if (localStorageLocaleKey && window.localStorage) {
    return window.localStorage.getItem(localStorageLocaleKey)
  }
}

function getLocaleFromBrowser() {
  return navigator.language || navigator.userLanguage
}

function detarmineLocalization() {
  return lowerCase(
    getLocaleFromURL() ||
      getLocaleFromCookie() ||
      getLocaleFromLocalStorage() ||
      getLocaleFromBrowser()
  )
}
