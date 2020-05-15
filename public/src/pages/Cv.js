import React, { Component } from "react"
import PorfolioBlock from "../components/PortfolioBlock"
import Row from "../components/Row"
import Container from "../components/Container"
class Error extends Component {
    render() {
    return (
    <main className="page cv-page">
        <PorfolioBlock>
            <p>Hello! I am <strong>Daniel V. Talavera</strong>. I enjoy learning new things and working with others. I'm very dependent and knowledgeful of what I'm working at.</p>
        </PorfolioBlock>
        <section className="portfolio-block cv">
            <Container>
                <div data-aos="fade" className="work-experience group">
                    <div className="heading">
                        <h2 className="text-center">Work Experience</h2>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>Retail Market</h3>
                                <h4 className="organization">The Fish Market San Jose</h4>
                                <h4 className="organization">The Fish Market Palo Alto</h4>
                            </div>
                            <div className="col-md-6"><span className="period">Sep 2016 - Nov 2019</span></div>
                        </Row>
                        <p className="text-muted">Manage takeout orders, Portion&nbsp; and Invetory Control,&nbsp; Answered telephone inquiries<br /><br />Conduct seafood orders, Trained and Mentored future staff and&nbsp;<strong>management</strong>, Assisted <strong>management </strong>with
                            excel projects, Recognized as a top performer.<br /><br /><em>"You're on your way to management"</em> - Human Recources<br /><em>"You were one of the best"</em> - Retail Market Manager</p>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-6 col-md-9">
                                <h3>Line Cook</h3>
                                <h4 className="organization">The Fish Market San Jose</h4>
                                <h4 className="organization">Fryer</h4>
                                <h4 className="organization">Sushi&nbsp;</h4>
                                <h4 className="organization">Grill*</h4>
                                <h4 className="organization">Saute*</h4>
                                <h4 className="organization">Salad*</h4><span style={{fontSize: "small"}}><br /><em>*&nbsp; means&nbsp;Some Experience</em><br /></span></div>
                            <div className="col-md-3"><span className="period">Jan 2018 – Jan 2019<br /></span></div>
                        </Row>
                        <Row>
                            <div className="col">
                                <p className="text-muted">Prepare orders, Quick Coordination, Active Thinking<br /></p>
                            </div>
                        </Row>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-6">
                                <h3>Busser/Dishwasher</h3>
                                <h4 className="organization">The Fish Market San Jose</h4>
                            </div>
                        </Row>
                        <p className="text-muted">Helped cover empty shifts upon managers request<br /></p>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>Food Server</h3>
                                <h4 className="organization">The Fish Market San Jose</h4>
                            </div>
                            <div className="col-md-6"><span className="period">Dec 2019 – Present<br /></span></div>
                        </Row>
                        <p className="text-muted">Provide <strong>product </strong>suggestions, upsell <strong>products</strong>, Able to describe <strong>product </strong>in detail<br /></p>
                    </div>
                </div>
                <div data-aos="fade" className="education group">
                    <div className="heading">
                        <h2 className="text-center">Education</h2>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>High School</h3>
                                <h4 className="organization">Oak Grove High School</h4>
                            </div>
                            <div className="col-6"><span className="period">09/2013 - 05/2017</span></div>
                        </Row>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>Mobile App Design &amp; Computer Coding<br /></h3>
                                <h4 className="organization">Silicon Valley Career Technical Education<br /></h4>
                            </div>
                            <div className="col-md-6"><span className="period">09/2016 - 05/2017</span></div>
                        </Row>
                        <p className="text-muted">HTML, CSS, JavaScript, Swift</p>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>Computer Science<br /></h3>
                                <h4 className="organization">De Anza College<br /></h4>
                            </div>
                            <div className="col-md-6"><span className="period">09/2017 - 12/2019</span></div>
                        </Row>
                        <p className="text-muted">C++, Java, Linux</p>
                    </div>
                    <div className="item">
                        <Row>
                            <div className="col-md-6">
                                <h3>Coding Bootcamp<br /></h3>
                                <h4 className="organization">UC Davis<br /></h4>
                            </div>
                            <div className="col-md-6"><span className="period">12/2019 - 06/2020</span></div>
                        </Row>
                        <p className="text-muted">HTML, CSS, JavaScript, Node.js, MySQL, NoSQL</p>
                    </div>
                </div>
                <div className="text-center"><a data-bs-hover-animate="pulse" className="btn btn-secondary" href="assets/downloads/resume.pdf">Download my Resume</a>
                    <hr />
                </div>
                <div className="contact-info portfolio-info-card">
                    <h2>Contact Info</h2>
                    <Row>
                        <div className="col-1"><i className="icon ion-person icon"></i></div>
                        <div className="col-9"><span>Daniel Vasquez Talavera</span></div>
                    </Row>
                    <Row>
                        <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                        <div className="col-9"><span>+1 (323) 457-4224</span></div>
                    </Row>
                    <Row>
                        <div className="col-1"><i className="icon ion-at icon"></i></div>
                        <div className="col-9"><span>main@dvasquez4155.com</span></div>
                    </Row>
                </div>
            </Container>
        </section>
    </main>
    );
}}

export default Error;