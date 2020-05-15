import React from "react";
import "./style.css";
function Navbar() {
  return (
    <footer className="bg-dark page-footer">
        <div className="social-icons">
          <a className="text-secondary" href="https://github.com/DVasquez4155">
            <i className="fab fa-github"></i>
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/dvasquez4155">
            <i className="icon ion-social-linkedin"></i>
          </a>
          <a className="text-success" href="mailto:main@dvasquez4155.com">
            <i className="icon ion-email"></i>
          </a>
          <a className="instagram" href="https://www.instagram.com/dvasquez4155/">
            <i className="icon ion-social-instagram"></i>
          </a>
        </div>
        <div className="container">
            <div className="links">
              <a href="/about">About me</a>
              <a href="/contact">Contact me</a>
              <a href="/projects">Projects</a>
            </div>
        </div>
    </footer>
  );
}

export default Navbar;
