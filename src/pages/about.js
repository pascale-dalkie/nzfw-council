import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "About NZFW and Auckland Council Libraries" }}>
    <SEO title="NZFW Library Events" />
    <Container className="no-margin">
      <Row className="title-row" id="about-hero">
        <Col lg="5" md="6">
          <h1 className="blue-accent">About</h1>
        </Col>
      </Row>
    	<Row className="row-eq-height">
            <Col md="4" id="about-image">
            </Col>
            <Col md="8" className="row-card">
              <h1>Green is the new black!</h1>
              <h3>Tāmaki Pātaka Kōrero (Central City Library) is bringing you a New Zealand Fashion Week experience like never before. This August will see the library reach the peak of its fashion potential - all while championing a sustainable approach to self-expression!</h3>
              <p>Green is set to be the new black at this year’s New Zealand Fashion Week, with a fresh focus on sustainability to be integrated across all elements of the event from designers, runway shows and seminars to workshops, markets, walking tours and onsite waste reduction.</p>
              <p>Since its inception in 2009, NZ Fashion Weekend has continued to establish itself as a premium, public-ticketed event offering attendees unforgettable brand experiences and insight into the local fashion industry.</p>
              <p>In partnership with the Auckland Council and the Central City Library Tāmaki Pātaka Kōrero, the NZ Fashion Weekend Sustainability Show will also live beyond the Aotea Square precinct across the week, in an exciting collaboration that offers the sustainable designers the opportunity to show in an accompanying sustainable design exhibition within the library space.</p>
              <p>Auckland Council and the Central City Library are also working on a range of free fashion activations around the city centre across NZ Fashion Week and Weekend, including daily sewing workshops, 3D-printable jewellery pieces, a speed dating evening with industry professionals, a Vintage Fashion talk, upcycling workshops, nightly projections onto the St James Theatre and the return of Swap it Like it’s Hot 3.0 (the fast and furious clothes swap event), there are plenty of chances to be part of the fun that is New Zealand Fashion Week!</p>
              <h2>Climate Change Emergency</h2>
              <p>Auckland Council has joined a growing community of cities around the world who have formally and publicly recognised the urgency for action on climate change by declaring a climate emergency. <a href="https://ourauckland.aucklandcouncil.govt.nz/articles/news/2019/06/auckland-council-declares-climate-emergency/">Read more about it here!</a></p>
            </Col>
        </Row>
    </Container>
  </Layout>
)

export default About
