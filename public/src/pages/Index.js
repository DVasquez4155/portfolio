import React, { Component } from "react"
import PorfolioBlock from "../components/PortfolioBlock"

class Index extends Component {
    render() {
    return (
    <main className="page landing-page">
        <PorfolioBlock>
            <p>Hello! I am <strong>Daniel Vasquez</strong>. I enjoy computer coding and working.<br /> I am a passionate Restaurant Manager, dedicated to recruiting top talent, analyzing sales trends, and advocating for safety and quality. Currently, I am pursuing a bachelor's degree in Cyber Security at Western Governors University (WGU).</p>
            <p>Thank you for taking your time going through my website.</p>
        </PorfolioBlock>
        <div className="social-icons">
            <h2>Skills</h2>
            <hr />
            <figure className="figure"><i className="icon fab fa-microsoft"></i>
                <figcaption className="figure-caption">Microsoft Office</figcaption>
            </figure>
            <figure className="figure"><i className="icon fab fa-wordpress"></i>
                <figcaption className="figure-caption">Wordpress</figcaption>
            </figure>
            <figure className="figure"><i className="icon ion-social-html5"></i>
                <figcaption className="figure-caption">HTML 5</figcaption>
            </figure>
            <figure className="figure"><i className="icon ion-social-css3"></i>
                <figcaption className="figure-caption">CSS</figcaption>
            </figure>
            <figure className="figure"><i className="icon ion-social-javascript"></i>
                <figcaption className="figure-caption">Javascript</figcaption>
            </figure>
            <figure className="figure"><i className="fab fa-bootstrap"></i>
                <figcaption className="figure-caption">BootStrap 4</figcaption>
            </figure>
            <figure className="figure"><i className="icon ion-social-nodejs"></i>
                <figcaption className="figure-caption">Node.js</figcaption>
            </figure>
            <figure className="figure"><i className="fas fa-database"></i>
                <figcaption className="figure-caption">MySQL</figcaption>
            </figure>
            <figure className="figure"><i className="fab fa-linux"></i>
                <figcaption className="figure-caption">Linux</figcaption>
            </figure>
            <figure className="figure"><i className="fab fa-java"></i>
                <figcaption className="figure-caption">Java</figcaption>
            </figure>
        </div>

        <div className="social-icons">
            <h2>Certifications</h2>
            <hr />
            <div className="badge-holder">
                <div id="badge">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/7a4ee715-e7c2-4429-bb29-e75a57820ca2/embedded">
                        <img width="105" height="105" alt="" src="https://images.credly.com/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/CompTIA_A_2Bce.png" />
                            <span id="badge-name">CompTIA A+</span>
                    </a><div id="badge-issuer" title="CompTIA">
                    Issuer: CompTIA
                    </div>
                </div>
                <div id="provided">
                    <a target="_blank" href="/">PROVIDED BY
                    <span>Credly</span>
                    </a>
                </div>
            </div>
        </div>
        <br />
        {/* <div data-aos="fade" className="simple-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{backgroundImage: "url(assets/img/nature/forrest.png)"}}></div>
                    <div className="swiper-slide" style={{backgroundImage: "url(assets/img/nature/santa%20cruz.jpg)"}}></div>
                    <div className="swiper-slide" style={{backgroundImage: "url(assets/img/nature/sunset.jpg)"}}></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div> */}
    </main>
);
}}

export default Index;
