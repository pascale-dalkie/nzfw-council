/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"
import {Helmet} from "react-helmet"

import Header from "./header"
import logo from "../images/auckalandcouncillibraries-logo.png"
import nzgovt from "../images/nz-government.svg"
import linkimg from "../images/linkimg.jpg"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <script src="https://kit.fontawesome.com/de48045a4a.js"></script>
          <meta property="og:image" content={linkimg} />
        </Helmet>
        <Container fluid className="px-0 main">
          <Row noGutters className="justify-content-center">
            <Col>
              <Header siteTitle={data.site.siteMetadata.title} pageInfo={pageInfo} />
            </Col>
          </Row>
          
          <Row noGutters>
            <Col>
              <main>{children}</main>
            </Col>
          </Row>
        </Container>
        <Container fluid className="px-0">
          <footer>
            <Row className="row-eq-height">
              <Col md="4" className="footer-col">
                <div className="social-row">
                  <a href="https://www.facebook.com/aucklandlibraries" id="ctl00_g_57410c0d_7fa7_4af8_bf95_f38e4b17e397_facebookLink" target="_blank" title="Facebook">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                  <a href="https://twitter.com/auckland_libs" id="ctl00_g_57410c0d_7fa7_4af8_bf95_f38e4b17e397_twitterLink" target="_blank">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                  <a href="https://instagram.com/auckland_libs" id="ctl00_g_57410c0d_7fa7_4af8_bf95_f38e4b17e397_instagramLink" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.historypin.org/en/person/33636/" id="ctl00_g_57410c0d_7fa7_4af8_bf95_f38e4b17e397_historypinLink" target="_blank">
                    <i className="fas fa-map-pin"></i>
                  </a>
                  <a href="https://www.youtube.com/user/aucklandlibraries" id="ctl00_g_57410c0d_7fa7_4af8_bf95_f38e4b17e397_youtubeLink" target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </Col>


              <Col md="4" className="footer-col">
                <div>
                  <a href="https://www.aucklandcouncil.govt.nz/Pages/terms-and-conditions.aspx">Terms and conditions</a>
                  <a href="https://www.aucklandcouncil.govt.nz/Pages/privacy-policy.aspx">Privacy policy</a>
                  <p>© Auckland Council</p>
                  <img
                    src={nzgovt}
                    height="15"
                    className="d-inline-block align-top"
                    alt="Auckland City Council Libraries logo"
                  />
                </div>
              </Col>

              <Col md="4" className="footer-col">
                <a href="https://www.aucklandlibraries.govt.nz/">
                  <img
                      src={logo}
                      height="70"
                      className="d-inline-block align-top"
                      alt="Auckland City Council Libraries logo"
                    />
                  </a>
              </Col>
            </Row>
          </footer>
        </Container>
      </>
    )}
  />
)

export default Layout
