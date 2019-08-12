import React from "react"
import { StaticQuery, graphql } from "gatsby"

const EventCard = ({ title }) => {
	return (
		<div className="row-card">
			<div className="subtitle">{ title }</div>
		</div>
	)

}

export default EventCard