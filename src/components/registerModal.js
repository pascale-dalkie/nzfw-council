import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal' 
import Iframe from 'react-iframe'

const RegisterModal = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	(function a(d, w, u) {
		var h = d.getElementsByTagName("head")[0]
		var s = d.createElement("script")
		s.type = "text/javascript"
		s.src = "https://portal.form.io/lib/seamless/seamless.parent.min.js"
		s.onload = function b() {
			var f = d.getElementById("formio-form-5d3e5137c64cffc02e345bfb")
			if (!f || (typeof w.seamless === u)) {
				return setTimeout(b, 100)
			}
			w.seamless(f, {fallback:false}).receive(function(d, e) {})

		}
		h.appendChild(s)
	})(document, window)
	return (
		<>

      <Modal show={show} onHide={handleClose} className="blue-bg">
        <Modal.Header closeButton className="white-text">
          <Modal.Title>Register for an event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="formio-modal white-bg">
        	<Iframe url="https://formview.io/#/hcucgbyvxqtheli/registerforanevent?iframe=1&header=0"
			id="formio-form-5d3e5137c64cffc02e345bfb"
			 />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
	)

}

export default RegisterModal