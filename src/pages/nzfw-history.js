import React from "react"
import { Link } from "gatsby"
import { Row, Col, Container, ListGroup } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NZFWHistory = () => (
  <Layout pageInfo={{ pageName: "NZFW History" }}>
    <SEO title="NZFW History" />
    <Container className="no-margin">
    	<Row className="row-eq-height">
    		<Col md="6" id="then-image">
				<div className="image-text blue-accent white-text">THEN</div>
    		</Col>
    		<Col md="6">
    			<div className="history-text-block">
    				<h1>NZFW Legacy</h1>
    				<p>Created in 2001, by Dame Pieter Stewart - NZFW forms the backbone of the New Zealand fashion and beauty industry.</p>
    				<p>As a platform that enables local and international designers to showcase and promote their collections and brand, the goal of NZFW is to provide a launching pad for designers to grow their business both nationally and internationally.</p>
    				<p>NZFW has evolved from a trade and industry event to become a multifaceted style showcase that engages thousands of fashion-focused delegates throughout the week before inviting the style-savvy public to the party during NZ Fashion Weekend.</p>
    				<p>The event not only drives brand awareness for the designers involved, but for a range of other fashion and lifestyle brands. These brands tap into the power of the event as a platform to talk directly to an audience of well over 30,000 attendees along with its wider reach through the millions of dollars of media coverage and social media engagement it generates.</p>
				</div>
    		</Col>
    	</Row>
    	<Row className="row-eq-height">
    		<Col md="6">
    			<div className="history-text-block">
    				<h2>Sustainability</h2>
    				<p>NZFW announces a fresh focus on sustainability for 2019</p>
    				<p>Green is set to be the new black at this year’s New Zealand Fashion Week, with a fresh focus on sustainability to be integrated across all elements of the event from designers, runway shows and seminars to workshops, markets, walking tours and onsite waste reduction.</p>
    				<p>One of the highlights of the programme for NZFW 2019 is a sustainability seminar held in partnership with the Ministry of Social Development with support from the Auckland Chamber of Commerce. To be hosted in the historic Concert Chamber in the Auckland Town Hall and projected live onto big screens in Aotea Square, the two-hour event will include a guest panel of soon-to-be-announced major names in the sustainability and sustainable fashion spheres, including Mindful Fashion NZ.</p>
    				<p>Since its inception in 2009, NZ Fashion Weekend has continued to establish itself as a premium, public-ticketed event offering attendees unforgettable brand experiences and insight into the local fashion industry.</p>
    				<p>In partnership with the Auckland Council and the Central City Library Tāmaki Pātaka Kōrero, the NZ Fashion Weekend Sustainability Show will also live beyond the Aotea Square precinct across the week, in an exciting collaboration that offers the sustainable designers the opportunity to show in an accompanying sustainable design exhibition within the library space.</p>
    				<p>Auckland Council and the Central City Library are also working on a range of free fashion activations around the city centre across NZ Fashion Week and Weekend, including sewing and textile upcycling workshops and the Swap it Like it’s Hot 3.0 Recycled Clothing Swap, while the NZ Fashion Museum will be running free guided fashion walking tours featuring current NZFW designers based in central Auckland, as well as those from the city’s fashionable past. </p>
				</div>
    		</Col>
    		<Col md="6" id="now-image">
				<div className="image-text blue-accent white-text">NOW</div>
    		</Col>
    	</Row>
    </Container>
  </Layout>
)

export default NZFWHistory
