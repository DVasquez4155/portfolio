import React, { Component } from "react"
import Row from "../components/Row"
import ProjectCard from "../components/ProjectCard"

// Database
import projects from "../projects.json";

class Projects extends Component {
    state = {
        projects,
    };
    render() {
    this.state.projects.reverse()
    return (
    <main className="page projects-page">
        <section className="portfolio-block projects-cards">
            <div className="container">
                <div className="heading">
                    <h2>Recent Work</h2>
                </div>
                <div id="sites">
                    <Row>
                    {this.state.projects.map(project => (
                        <ProjectCard
                            name={project.name}
                            url={project.url}
                            github={project.github}
                            image={project.image}
                            time={project.time}
                        />
                    ))}
                    </Row>
                </div>
            </div>
        </section>
    </main>
    );
}}

export default Projects;