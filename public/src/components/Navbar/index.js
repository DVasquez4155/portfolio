import React from "react";

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
                      <a className="nav-link active" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/cv">CV</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
