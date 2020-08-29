/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import PropTypes from "prop-types"
import React from "react"
import Header from "../header/header"
import IconEmail from "../icons/icon-email"
import IconGithub from "../icons/icon-github"
import IconLinkedIn from "../icons/icon-linkedin"
import IconTwitter from "../icons/icon-twitter"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header />
      <div className="main-content-container">
        <main>{children}</main>
        <footer>
          <OutboundLink href="https://github.com/jneterer" target="_blank" ><IconGithub /></OutboundLink>
          <OutboundLink href="https://www.linkedin.com/in/jacobneterer" target="_blank" ><IconLinkedIn /></OutboundLink>
          <OutboundLink href="https://twitter.com/jacobneterer" target="_blank" className="twitter-icon-container" ><IconTwitter /></OutboundLink>
          <OutboundLink href="mailto:jacobrneterer@gmail.com" ><IconEmail /></OutboundLink>
          <h2>Stay in touch!</h2>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
