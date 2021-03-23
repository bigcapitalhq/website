import * as React from "react"
import PropTypes from "prop-types"

import TopBar from "./Topbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <div class="bg-grad rotating">
        <img src="https://method.blue/images/04.jpg" />
      </div>
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
