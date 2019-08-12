import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const serviceID = "sendgrid";
const templateID = "nzfw_registration"
var templateParams = {};
const userID = "user_TtUlkrMa1uN22xPuOjzTo";
const eventNames = {
  "AVeryFashionableTalk": "A Very Fashionable Talk",
  "MakeSewDo": "Make, Do, Mend",
  "MigrantZineCollective": "Migrant Zine Collective",
  "MiniatureFashion": "Miniature Fashion",
  "SwapitLikeItsHot": "Swap it Like It’s Hot",
  "Speed-datingSustainableFashionLeaders": "Make/Haste: Speed-dating Sustainable Fashion Leaders",
  "PrintingFashionAccessories": "NZFW: 3D Printing Fashion Accessories"
}

const emailjs = require('emailjs-com');

export default class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: "AVeryFashionableTalk", name: " ", email: " ", time: "Mon 26  10.00am - 02.00pm", submitted: false };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(e) {
    e.preventDefault();

    var tempTime = " ";

    if (this.state.selectValue === "MakeSewDo") {
      tempTime = this.state.time;
    }

    templateParams = {
      event: eventNames[this.state.selectValue],
      name: this.state.name,
      email: this.state.email,
      time: tempTime
    };
    
    emailjs.send(serviceID, templateID, templateParams, userID);

    this.setState({submitted: true});
      
  }

  render() {
      const handleChange = (e) => {
        this.setState({selectValue: e.target.value});
      }
      const setName = (e) => {
        this.setState({name: e.target.value});
      }
      const setEmail = (e) => {
        this.setState({email: e.target.value});
      }
      const setTime = (e) => {
        this.setState({time: e.target.value});
      }
      return (
        <>
          {!this.state.submitted && 
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="eventSelect">
                <Form.Label>Select the event you would like to attend</Form.Label>
                <Form.Control required as="select" onChange={handleChange} name="eventSelect">
                  <option value="AVeryFashionableTalk">A Very Fashionable Talk</option>
                  <option value="MakeSewDo">Make, Do, Mend</option>
                  <option value="MigrantZineCollective">Migrant Zine Collective</option>
                  <option value="MiniatureFashion">Miniature Fashion</option>
                  <option value="SwapitLikeItsHot">Swap it Like It’s Hot</option>
                  <option value="Speed-datingSustainableFashionLeaders">Make/Haste: Speed-dating Sustainable Fashion Leaders</option>
                  <option value="PrintingFashionAccessories">NZFW: 3D Printing Fashion Accessories</option>
                </Form.Control>
              </Form.Group>
              {this.state.selectValue != "PrintingFashionAccessories" ? (
                <>
                <Form.Group required controlId="eventName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" onChange={setName} name="name" />
                </Form.Group>
                <Form.Group required controlId="eventEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={setEmail} name="email" />
                </Form.Group>
                {this.state.selectValue === "MakeSewDo" &&
                  <Form.Group controlId="optionalTime">
                    <Form.Label>Select the time you would like to attend</Form.Label>
                    <Form.Control required as="select" onChange={setTime} name="timeSelect">
                      <option>Mon 26  10.00am - 02.00pm</option>
                      <option>Mon 26  04.00pm - 08.00pm</option>
                      <option>Tue 27  10.00am - 02.00pm</option>
                      <option>Wed 28  10.00am - 02.00pm</option>
                      <option>Wed 28  04.00pm - 08.00pm</option>
                      <option>Thu 29  10.00am - 02.00pm</option>
                      <option>Fri 30  10.00am - 02.00pm</option>
                    </Form.Control>
                  </Form.Group>
                }
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                </>
                ) : (
                  <>
                  <p>To register for the 3D Printing Fashion Accessories click on the button below to register via Google Forms.</p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScbt68f8f_QtnqV8Rsh4oEJ0zODriTIuXThKbZ90DWN6-H0Pg/viewform" className="btn btn-primary btn-round">Open Google Doc</a>
                  </>
                )}
            </Form>
          }

          {this.state.submitted && <h3>Thank you for registering</h3>}
        </>
      )
  }
}