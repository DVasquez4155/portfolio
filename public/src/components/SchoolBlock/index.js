import "./style.css";
import React from "react";
import Row from "../Row"

function SchoolBlock(props) {
    return (
        <div className="item">
            <Row>
                <div className="col-md-6">
                    <h3>{props.props.name}</h3>
                    {
                        props.props.subject !== "" &&
                        <p className="text-muted"><strong>{props.props.subject}</strong></p>
                    }
                </div>
                <div className="col-md-6"><span className="period">{props.props.time}<br /></span></div>
            </Row>
            <p className="text-muted" style={{whiteSpace: "pre-wrap"}}>{props.props.description}</p>
            {
                props.props.skills !== "" &&
                <p className="text-muted"><strong>Skills: {props.props.skills}</strong></p>
            }
        </div>
    );
}

export default SchoolBlock;
