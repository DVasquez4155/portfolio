import React, { Component } from "react"
import PorfolioBlock from "../components/PortfolioBlock"

class Index extends Component {
    render() {
    return (
    <main className="page landing-page">
        <PorfolioBlock>
            <p>Hello! I am <strong>Daniel V. Talavera</strong>. I enjoy computer coding and working.<br />Thank you for taking your time going through my website.</p>
        </PorfolioBlock>
        <div className="social-icons">
            <h2>Skills</h2>
            <hr />
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
        <div data-aos="fade" className="simple-slider">
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
        </div>
    </main>
);
}}

export default Index;
