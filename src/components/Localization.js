import React from "react"
import { IntlProvider } from "react-intl"
import cookie from "cookie"
import queryParser from "querystring"
import { lowerCase, startsWith } from "lodash"
import rtlDetect from "rtl-detect"
import intlMessagesEN from "../locals/en/index.json"
import intlMessagesAR from "../locals/ar/index.json"
import { Helmet } from "react-helmet"

// Localization context.
const LocalizationContext = React.createContext()

// Localization context.
export const useLocalization = () => React.useContext(LocalizationContext)

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

  if (startsWith(lang, 'ar')) {
    i18nConfig.messages = intlMessagesAR
  }
  // Mutate the localization code.
  i18nConfig.locale = lang

  return i18nConfig
}

// Retrieve the local from browser url query params.
function getLocaleFromURL() {
  const urlLocaleKey = "lang"

  if (urlLocaleKey && typeof window !== "undefined") {
    let query = window.location.search.split("?")

    if (query.length >= 2) {
      let params = queryParser.parse(query[1])
      return params && params[urlLocaleKey]
    }
  }
}

// Retrieve the local from browser cookies.
function getLocaleFromCookie() {
  const cookieLocaleKey = "lang"

  if (cookieLocaleKey && typeof document !== "undefined") {
    let params = cookie.parse(document.cookie)
    return params && params[cookieLocaleKey]
  }
}

// Retrieves the local from local storage.
function getLocaleFromLocalStorage() {
  const localStorageLocaleKey = "lang"

  if (localStorageLocaleKey && typeof window !== "undefined") {
    return window.localStorage.getItem(localStorageLocaleKey)
  }
}

// Retrieves the local from the navigator browser or browser user language.
function getLocaleFromBrowser() {
  return typeof navigator !== "undefined"
    ? navigator.language || navigator.userLanguage
    : null
}

function detarmineLocalization() {
  return (
    getLocaleFromURL() ||
    getLocaleFromCookie() ||
    getLocaleFromLocalStorage() ||
    getLocaleFromBrowser()
  )
}
