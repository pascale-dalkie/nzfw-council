import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navBar"

const Header = ({ siteTitle, pageInfo }) => (
  <header>
    <Navbar pageInfo={pageInfo} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
