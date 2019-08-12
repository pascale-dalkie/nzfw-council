import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal' 
import Form from 'react-bootstrap/Form'
import RegisterForm from "../components/registerForm"

const EventSubscribe = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
      <Button variant="primary" onClick={handleShow} className="btn-round">
        Register Now
      </Button>

      <Modal show={show} onHide={handleClose} className="blue-header">
        <Modal.Header closeButton className="white-text">
          <Modal.Title>Register for an event</Modal.Title>
        </Modal.Header>
        <Modal.Body className="formio-modal white-bg">
          <RegisterForm />
        </Modal.Body>
      </Modal>

    </>
	)

}

export default EventSubscribe