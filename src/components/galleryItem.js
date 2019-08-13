import React from "react"

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

const GalleryItem = ({ img, title, blurb, link}) => {
  return (
    <div className="gallery-item">
      <div className="gallery-item-image" style={{backgroundImage: `url(${img})`}}></div>
      <div className="subtitle">{title}</div>
      <div className="mid-text">{blurb}</div>
      <a href={link} alt={title} className="mid-text">SEE MORE</a>
    </div>
  )
}

export default GalleryItem
