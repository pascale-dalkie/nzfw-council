import React from "react"
import { Row, Col, Container } from "react-bootstrap"


const FeatureRow = () => {
	return (
		<Container>
		<Row className="row-eq-height">
			<Col md="6" className="feature-column">
			  <div className="feature-text">
			    <h3 className="blue-accent">The Vogue Archive</h3>
			    <p>Setting the standard for over 100 years has made Vogue the best selling fashion magazine in the world. Image credit: Firth, Clifton, 1940-1949, <a href="http://www.aucklandcity.govt.nz/dbtw-wpd/exec/dbtwpub.dll?BU=http%3A%2F%2Fwww.aucklandcity.govt.nz%2Fdbtw-wpd%2FHeritageImages%2Findex.htm&AC=QBE_QUERY&TN=heritageimages&QF0=ID&NP=2&MR=5&RF=HIORecordSearch&QI0=%3D%2234-M7E3%22">image record link</a>.</p>
			    <a href="http://auckland.rbdigitalglobal.com/magazine/3624/432602" alt="View Vogue now">View Vogue now</a>
			  </div>
			</Col>
			<Col md="6" id="vogue-image">
			</Col>
	    </Row>
	    </Container>
	)

}

export default FeatureRow