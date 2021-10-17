import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Localization from "./Localization"
import TopBar from "./Topbar"
import Footer from "./Footer"

const Layout = ({ name, afterNavbar, beforeNavbar, children }) => {
  return (
    <Localization>
      <div id="layout" class="layout">
        <TopBar beforeNavbar={beforeNavbar} afterNavbar={afterNavbar} />

        <main id="main" className={classNames("main", `main--${name}`)}>
          {children}
        </main>
        <Footer />
      </div>
    </Localization>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
