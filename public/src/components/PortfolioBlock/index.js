import "./style.css";
import React from "react";
import avatar from './avatar.jpg';
function PortfolioBlock(props) {
    return (
        <section className="portfolio-block block-intro">
            <div className="container">
                <img src={avatar} className="avatar" alt='Avatar'></img>
                <div className="about-me">
                {props.children}
                </div>
            </div>
        </section>
    );
}

export default PortfolioBlock;
