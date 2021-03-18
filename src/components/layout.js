import * as React from "react"
import PropTypes from "prop-types"

import TopBar from "./topbar"
import Footer from "./footer"
// import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
