import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import API from "../utils/API";

const Contact = () => {
    const [buttonStyle, setButtonStyle] = useState({});
    const [modalStyle, showModal] = useState(false);
    const [disabled, disableForm] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    function handleClose ()  {
        showModal(false)
    };
    function handleShow ()  {
        showModal(true)
    };
    function success ()  {
        setModalMessage('Thank you for taking the time on contacting me!');
        setButtonStyle({'display': 'none'});
        disableForm(true);
        handleShow()
    };
    function error()  {
        setModalMessage('Oops! There was a problem.')
        handleShow();
    };
    function handleSubmit (e)  {
        // Send data to the backend via POST
        e.preventDefault();
        const data = {
            name: e.target.name.value.trim(),
            email: e.target.email.value.trim(),
            subject: e.target.subject.value.trim(),
            message: e.target.message.value.trim(),
        }
        API.send(data)
        .then(function (e) {
            success()
        })
        .catch(function (e) {
            error()
        });
    }
    return (
    <main className="page contact-page">
        <section className="portfolio-block contact">
            <div className="container">
                <div className="heading">
                    <h2>Contact me</h2>
                </div>
                <form name="form" onSubmit={handleSubmit}>
                    <div className="form-group"><label htmlFor="name">Your Name</label><input className="form-control item" disabled={disabled} type="text" id="name" required="" name="name" /></div>
                    <div className="form-group"><label htmlFor="email">Email</label><input className="form-control item" disabled={disabled} type="email" id="email" required="" name="email" /></div>
                    <div className="form-group"><label htmlFor="subject">Subject</label><input className="form-control item" disabled={disabled} type="text" id="subject" name="subject" required="" /></div>
                    <div className="form-group"><label htmlFor="message">Message</label><textarea className="form-control item" disabled={disabled} id="message" name="message" required=""></textarea></div>
                    <div className="form-group"><button className="btn btn-primary btn-block btn-lg " style={buttonStyle} id="submit" type="submit">Submit Form</button></div>
                </form>
            </div>
        </section>
        <Modal show={modalStyle} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Status</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalMessage}</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    </main>
    );
}

export default Contact;