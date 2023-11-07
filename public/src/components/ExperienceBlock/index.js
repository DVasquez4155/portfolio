import "./style.css";
import React from "react";
import Row from "../Row"

function PortfolioBlock(props) {
    return (
        <div className="item">
            <Row>
                <div className="col-md-6">
                    <h3>{props.props.position}</h3>
                    <h4 className="organization">{props.props.location}</h4>
                </div>
                <div className="col-md-6"><span className="period">{props.props.time}<br /></span></div>
            </Row>
            <p className="text-muted" style={{whiteSpace: "pre-wrap"}}>{props.props.description}</p>
            <p className="text-muted"><strong>Skills: {props.props.skills}</strong></p>
        </div>
    );
}

export default PortfolioBlock;
