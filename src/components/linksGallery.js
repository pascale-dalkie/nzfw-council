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
	          <GalleryItem img={tereo} title="Te Reo - Our Heritage" blurb="​Ngā kohikohinga me ngā rauemi Māori. Our kohinga Māori range from significant, to local and shared." link="https://www.aucklandlibraries.govt.nz/Pages/maori-collections-and-resources.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={kura} title="Kura - Collections Online" blurb="Explore the wealth of Auckland Libraries' heritage collections." link="https://kura.aucklandlibraries.govt.nz/digital/?_ga=2.8342330.962618177.1559772012-1498105232.1557437967" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={emagazines} title="eMagazine Access" blurb="Browse hundreds of magazines online or download a copy to your tablet, phone, laptop or computer." link="https://www.aucklandlibraries.govt.nz/Pages/emagazines.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={ebooks} title="eBooks" blurb="​You can read a huge range of quality New Zealand and international fiction and nonfiction on your favourite device." link="https://www.aucklandlibraries.govt.nz/Pages/ebooks.aspx" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={clifton} title="Clifton Firth Photography" blurb="​Clifton Firth and his wife Patricia opened a commercial photography studio in 1938. Over the next few decades he became known for his portraiture and fashion photography. Ref: Clifton Firth, Portrait of the writer Ngaio Marsh, 22 January 1947, Sir George Grey Special Collections, Auckland Libraries, 34-304" link="https://heritageetal.blogspot.com/2018/02/clifton-firths-portraiture-photographic.html" />
	        </Col>
			<Col lg="4" md="6">
	          <GalleryItem img={rykenberg} title="Rykenberg Photography" blurb="​John Rykenberg migrated to New Zealand from Holland in the mid-1950s and established a successful photography business in Albert Street, Central Auckland. Ref: Sir George Grey Special Collections, Auckland Libraries, 1269-E163-24" link="http://www.aucklandcity.govt.nz/dbtw-wpd/virt-exhib/rykenberg/index.html" />
	        </Col>
	    </Row>
	    </Container>
	)

}

export default LinksGallery