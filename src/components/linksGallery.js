import React from "react"
import { Row, Col, Container } from "react-bootstrap"
import GalleryItem from "../components/galleryItem"

import kura from "../images/kura.jpg"
import emagazines from "../images/magazines.jpg"
import ebooks from "../images/ebooks.jpg"
import clifton from "../images/clifton.jpg"
import rykenberg from "../images/rykenberg.jpg"
import tereo from "../images/tereo.jpg"

const LinksGallery = () => {
	return (
		<Container>
		<Row className="row-eq-height links-gallery">
			<Col lg="4" md="6">
	          <GalleryItem img={tereo} title="Te reo - Our heritage" blurb="​Ngā kohikohinga me ngā rauemi Māori. Our kohinga Māori range from significant, to local and shared." link="https://www.aucklandlibraries.govt.nz/Pages/maori-collections-and-resources.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={kura} title="Kura Heritage Collections Online" blurb="Explore the wealth of Auckland Libraries' heritage collections." link="https://kura.aucklandlibraries.govt.nz/digital/?_ga=2.8342330.962618177.1559772012-1498105232.1557437967" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={emagazines} title="eMagazine access" blurb="Browse hundreds of magazines online or download a copy to your tablet, phone, laptop or computer." link="https://www.aucklandlibraries.govt.nz/Pages/emagazines.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={ebooks} title="eBooks" blurb="​You can read a huge range of quality New Zealand and international fiction and nonfiction on your favourite device." link="https://www.aucklandlibraries.govt.nz/Pages/ebooks.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={clifton} title="Clifton Firth photography" blurb="​Clifton Firth and his wife Patricia opened a commercial photography studio in 1938. Over the next few decades he became known for his portraiture and fashion photography." link="https://heritageetal.blogspot.com/2018/02/clifton-firths-portraiture-photographic.html" imageRef="http://www.aucklandcity.govt.nz/dbtw-wpd/exec/dbtwpub.dll?BU=http%3A%2F%2Fwww.aucklandcity.govt.nz%2Fdbtw-wpd%2FHeritageImages%2Findex.htm&AC=QBE_QUERY&TN=heritageimages&QF0=ID&NP=2&MR=5&RF=HIORecordSearch&QI0=%3D%2234-304%22" imageRefText="Auckland Libraries Heritage Collections 34-304" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={rykenberg} title="Rykenberg photography" blurb="​John Rykenberg migrated to New Zealand from Holland in the mid-1950s and established a successful photography business in Albert Street, Central Auckland." link="http://bit.ly/RykenbergCollection" imageRef="http://www.aucklandcity.govt.nz/dbtw-wpd/exec/dbtwpub.dll?BU=http%3A%2F%2Fwww.aucklandcity.govt.nz%2Fdbtw-wpd%2FHeritageImages%2Findex.htm&AC=QBE_QUERY&TN=heritageimages&QF0=ID&NP=2&MR=5&RF=HIORecordSearch&QI0=%3D%221269-E163-24%22" imageRefText="Auckland Libraries Heritage Collections 1269-E163-24" />
	        </Col>
	    </Row>
	    </Container>
	)

}

export default LinksGallery