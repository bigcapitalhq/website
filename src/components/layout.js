import * as React from "react"
import className from "classnames"
import PropTypes from "prop-types"
import { Img } from "react-image"

import TopBar from "./Topbar"
import Footer from "./Footer"

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
