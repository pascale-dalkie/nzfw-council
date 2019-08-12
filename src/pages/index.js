import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventsOverview from "../components/eventsOverview"
import NewsletterSubscribe from "../components/newsletterSubscribe"
import EventSubscribe from "../components/eventSubscribe"
import LinksGallery from "../components/linksGallery"
import FeatureRow from "../components/featureRow"
import EventSchedule from "../components/eventSchedule"
import Button from 'react-bootstrap/Button'


const IndexPage = () => (

  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Auckland City Council Libraries" keywords={[`Libraries`, `NZFW`]} />
    <Container className="no-margin">
      <Row className="title-row" id="homepage-hero">
        <Col md="8">
          <div className="subtitle">
            Kia ora
          </div>
          <h1>
            Central City Library<br/>Tāmaki Pātaka Kōrero
          </h1>
          <a className="btn-round btn btn-primary title-btn" href="https://www.aucklandlibraries.govt.nz/Pages/join-the-library.aspx">
            JOIN OUR LIBRARY
          </a>
        </Col>
        <Col md="4" className="row-card black-bg white-text margin-top">
          <h3>Register now for NZFW events at Central City Library</h3>
          <p>Check out our awesome line up and sign up now to secure your spot!</p>
          <EventSubscribe />
        </Col>
      </Row>
      <Row className="row-eq-height">
        <Col lg="8">
          <EventsOverview /> 
        </Col>
        <Col lg="4" className="row-card">
          <p>Our newsletter</p>
          <div className="subtitle">Subscribe for news</div>
          <div className="mid-text">Sign up for ‘What’s on’ – a free monthly newsletter of events at Auckland Libraries, delivered straight to your inbox.</div>
          <NewsletterSubscribe />
        </Col>
      </Row>
      <LinksGallery />
      <FeatureRow />
      <EventSchedule />
      <div className="text-center margin-bottom">
        <Link to="/events" className="btn btn-primary btn-round">
            View NZFW Library Events
        </Link>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
