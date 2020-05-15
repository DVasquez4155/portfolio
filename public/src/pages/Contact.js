import React, { Component } from "react"
class Contact extends Component {
    render() {
    return (
    <main className="page contact-page">
        <section className="portfolio-block contact">
            <div className="container">
                <div className="heading">
                    <h2>Contact me</h2>
                </div>
                <form name="form" action="/api/contact" method="post">
                    <div className="form-group"><label htmlFor="name">Your Name</label><input className="form-control item" type="text" id="name" required="" name="name" /></div>
                    <div className="form-group"><label htmlFor="email">Email</label><input className="form-control item" type="email" id="email" required="" name="email" /></div>
                    <div className="form-group"><label htmlFor="subject">Subject</label><input className="form-control item" type="text" id="subject" name="subject" required="" /></div>
                    <div className="form-group"><label htmlFor="message">Message</label><textarea className="form-control item" id="message" name="message" required=""></textarea></div>
                    <div className="form-group"><button className="btn btn-primary btn-block btn-lg" id="submit" type="button">Submit Form</button></div>
                </form>
            </div>
        </section>
        <div className="modal fade" role="dialog" tabIndex="-1" id="statusBody">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Status</h4><button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div>
                <div className="modal-body">
                    <p id="statusMessage"></p>
                </div>
                <div className="modal-footer"><button className="btn btn-primary" type="button" data-dismiss="modal">Close</button></div>
            </div>
        </div>
    </div>
    </main>
    );
}}

export default Contact;