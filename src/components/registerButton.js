import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal' 

const RegisterButton = () => {
	const [show, setShow] = useState(false);
	const handleShow = () => useState(false);
	return (
		<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

    </>
	)

}

export default RegisterButton