import React from "react"
import rtlDetect from "rtl-detect"
import { Helmet } from "react-helmet"
import { useI18next } from "gatsby-plugin-react-i18next"

// Localization context.
const LocalizationContext = React.createContext()

// Localization context.
export const useLocalization = () => React.useContext(LocalizationContext)

/**
 * I18n localization.
 */
export default function Localization({ children }) {
  const { language } = useI18next()
  const isRTL = rtlDetect.isRtlLang(language)
  const dir = isRTL ? "rtl" : "ltr"

  const provider = {
    isRTL,
    direction: dir,
    locale: "en",
  }

  return (
    <LocalizationContext.Provider value={provider}>
      <Helmet bodyAttributes={{ dir }} />
      {children}
    </LocalizationContext.Provider>
  )
}
