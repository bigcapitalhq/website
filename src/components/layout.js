import * as React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import Localization from "./Localization"
import TopBar from "./Topbar"
import Footer from "./Footer"

function AnnouncmentBar() {
  return (
    <div className={"announcement-bar"}>
      <span class="new">New</span> We've launched the Bigcapital Cloud, the 200
      early adopter subscribers will get all the features and unlimited users.{" "}
      <a href="https://app.bigcapital.ly/auth/register">Subscribe $29</a>
    </div>
  )
}

const Layout = ({ name, afterNavbar, beforeNavbar, children }) => {
  return (
    <Localization>
      <div id="layout" class="layout">
        <TopBar beforeNavbar={beforeNavbar} afterNavbar={afterNavbar} />
        <AnnouncmentBar />

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
