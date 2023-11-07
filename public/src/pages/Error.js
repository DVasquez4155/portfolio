import React, { Component } from "react"
import PorfolioBlock from "../components/PortfolioBlock"
class Error extends Component {
    render() {
    return (
    <main className="page landing-page">
        <PorfolioBlock>
            <h1>404</h1>
            <div className="about-me">
                <p>Sorry, this page doesn't exist</p>
            </div>
        </PorfolioBlock>
    </main>
    );
}}

export default Error;