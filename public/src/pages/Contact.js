import React, { Component } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

class Contact extends Component {
    state = {
        buttonStyle: {},
        modalStyle: false,
        disabled: false,
        modalMessage: ""
    }
    handleClose = () => this.setState({modalStyle : false});
    handleShow = () => this.setState({modalStyle : true});
    success() {
        this.setState({modalMessage : 'Thank you for taking the time on contacting me!'});
        this.setState({buttonStyle : {'display': 'none'}});
        this.setState({disabled : true});
        this.handleShow()
    }
    error() {
        this.setState({modalMessage : 'Oops! There was a problem.'})
        this.handleShow();
    }
    handleSubmit(e) {
        // Send data to the backend via POST
        e.preventDefault();
        const data = {
            name: e.target.name.value.trim(),
            email: e.target.email.value.trim(),
            subject: e.target.subject.value.trim(),
            message: e.target.message.value.trim(),
        }
        API.send(data)
        .then(function (response) {
            this.success()
        })
        .catch(function (error) {
            this.error()
        });
    }
    render() {
    return (
    <main className="page contact-page">
        <section className="portfolio-block contact">
            <div className="container">
                <div className="heading">
                    <h2>Contact me</h2>
                </div>
                <form name="form" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group"><label htmlFor="name">Your Name</label><input className="form-control item" disabled={this.state.disabled} type="text" id="name" required="" name="name" /></div>
                    <div className="form-group"><label htmlFor="email">Email</label><input className="form-control item" disabled={this.state.disabled} type="email" id="email" required="" name="email" /></div>
                    <div className="form-group"><label htmlFor="subject">Subject</label><input className="form-control item" disabled={this.state.disabled} type="text" id="subject" name="subject" required="" /></div>
                    <div className="form-group"><label htmlFor="message">Message</label><textarea className="form-control item" disabled={this.state.disabled} id="message" name="message" required=""></textarea></div>
                    <div className="form-group"><button className="btn btn-primary btn-block btn-lg " style={this.state.buttonStyle} id="submit" type="submit">Submit Form</button></div>
                </form>
            </div>
        </section>
        <Modal show={this.state.modalStyle} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.state.modalMessage}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </main>
    );
}}

export default Contact;