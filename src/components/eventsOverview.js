import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "react-bootstrap"

const EventsOverview = () => {
	return (
		<Row id="events-overview" className="hundred-height">
			<Col lg="6" className="row-card">
	          <div className="subtitle secondary-text">Upcoming events</div>
	          <p>
				<strong>Speed Dating with Industry Professionals!</strong><br />
				<span className="mid-text grey-text">
					Join the Central City Library for an evening with fashion industry experts, who want to have a quick deep & meaningful with you about sustainability, makery, workmanship, tradition and business in the big little world of New Zealand fashion.
				</span>
	          </p>
	          <p>
				<strong>A Very Fashionable Talk</strong><br />
				<span className="mid-text grey-text">
					If you’re looking for an excuse to dress up during the day, dig out your finest and head over to the Central City Library for a very fashionable talk exploring the history of serving looks in New Zealand, and why dead peoples clothing should be your new wardrobe staple!
				</span>
	          </p>
	          <p>
				<strong>Swap It Like It's Hot 3.0</strong><br />
				<span className="mid-text grey-text">
					Come along to the Central City Library for our 3rd installation of Swap it Like it’s Hot! Simply bring along your pre-loved clothing items, exchange them for tokens, and swap those for brand-new-to-you garments.
				</span>
	          </p>
	            <Link to="/events" className="link-no-style" alt="View all NZFW Library Events">
	                View all NZFW Library Events
	            </Link>
	        </Col>
	        <Col lg="6" className="row-card light-grey-bg">
	          <div className="subtitle secondary-text">Workshops</div>
	          <p>
				<strong>Make, Do, Mend</strong><br />
				<span className="mid-text grey-text">
					The Make, Do and Mend program is a series of sewing, stitching and repurposing workshops, crafted by the teams at the Central City Library and New Zealand Fashion Week. 
				</span>
	          </p>
	          <p>
				<strong>Miniature Fashion – Sew Your Own!</strong><br />
				<span className="mid-text grey-text">
					If you’re always meaning to learn a craft, do more for the environment, take the kids out more, etc etc – we think you should start small. Tiny, even.
				</span>
	          </p>
	          <p>
				<strong>Migrant Zine Collective</strong><br />
				<span className="mid-text grey-text">
					Come along to the Central City Library and join Auckland’s Migrant Zine Collective in creating a publication based on the themes of sustainability and identity.
				</span>
	          </p>
	            <Link to="/events" className="link-no-style" alt="View all NZFW Library Events">
	                View all NZFW Library Events
	            </Link>
	          
	        </Col>
	    </Row>
	)

}

export default EventsOverview