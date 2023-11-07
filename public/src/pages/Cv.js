import React, { Component } from "react"
import PorfolioBlock from "../components/PortfolioBlock"
import Row from "../components/Row"
import Container from "../components/Container"
import ExperienceBlock from "../components/ExperienceBlock"
import SchoolBlock from "../components/SchoolBlock"
import Experiences from "./Experience.json"
import School from "./School.json"
class Error extends Component {
    render() {
    return (
    <main className="page cv-page">
        <PorfolioBlock>
            <p>
                Hello! I am <strong>Daniel Vasquez</strong>. I enjoy learning new things and working with others.
                <br/>
                <strong>Passionate Restaurant Manager | Recruiting Top Talent | Sales Trend Analyst | Safety & Quality Advocate</strong>
            </p>
        </PorfolioBlock>
        <section className="portfolio-block cv">
            <Container>
                <div data-aos="fade" className="work-experience group">
                    <div className="heading">
                        <h2 className="text-center">Work Experience</h2>
                    </div>
                    {Experiences === undefined ? (
                        <p></p>
                        ) : (
                        Experiences.map(experience => {
                            return (
                            <ExperienceBlock props={experience} />
                            )
                        })
                    )}
                </div>
                <div data-aos="fade" className="education group">
                    <div className="heading">
                        <h2 className="text-center">Education</h2>
                    </div>
                    {School === undefined ? (
                        <p></p>
                        ) : (
                            School.map(experience => {
                            return (
                            <SchoolBlock props={experience} />
                            )
                        })
                    )}
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
                    {/* <Row>
                        <div className="col-1"><i className="icon ion-ios-telephone icon"></i></div>
                        <div className="col-9"><span>+1 (323) 457-4224</span></div>
                    </Row> */}
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