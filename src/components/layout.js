import * as React from "react"
import className from 'classnames';
import PropTypes from "prop-types"

import TopBar from "./Topbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <>
      <div className={className('bg-grad', {
        'is-loaded': isLoaded
      })}>
        <img
          onLoad={() => {
            setIsLoaded(true)
          }}
          src={"blur/blur-1.jpeg"}
          class="rotating"
        />
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
