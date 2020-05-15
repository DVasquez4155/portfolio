import React from "react";

function ProjectCard(props) {
    let link;
    if(props.url != null) {
        link = 
        <a className="col btn btn-sm btn-outline-secondary" href={props.url}>
            View&nbsp;<i className="fa fa-eye"></i>&nbsp;
        </a>
    }
    return (
        <div className="col col-md-6 col-lg-4">
            <div className="card border-0">
                <a href={props.url}>
                    <img alt={"Image of " + props.name}  className="card-img-top scale-on-hover" src={props.image} />
                </a>
                <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <div className="d-flex justify-content-between align-items-center btn-group">
                        {link}
                        <a className="col btn btn-sm btn-outline-secondary" href={props.github}>
                            View on GitHub&nbsp;<i className="fa fa-github"></i>&nbsp;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;