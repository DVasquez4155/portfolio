import React from "react";

import { Link } from "react-router-dom";
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg fixed-top bg-dark portfolio-navbar">
        <div className="container">
          <a className="navbar-brand logo" href="/">Daniel Vasquez Talavera</a>
          <button data-toggle="collapse" className="navbar-toggler" data-target="#navbarNav">
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/cv">CV</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
