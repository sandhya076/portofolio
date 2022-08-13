import React from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
export default function AboutMe() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1200px-Eo_circle_light-blue_white_letter-s.svg.png"
          alt=""
          width={30}
          height={30}
          className="d-inline-block align-text-top"
        />
        <a className="navbar-brand profile" href="#">
          My Profile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse nav" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
            <Link to="/Skills">
              <a className="nav-item nav-link" href="#">
                Skills <span className="sr-only"></span>
              </a>
            </Link>
            <Link to="/Projects">
              <a className="nav-item nav-link" href="#">
                Projects <span className="sr-only"></span>
              </a>
            </Link>
            <Link to="/Contact">
              <a className="nav-item nav-link " href="#">
                Contact <span className="sr-only"></span>
              </a>
            </Link>
            <Link to="/AboutMe">
              <a className="nav-item nav-link " href="#">
                AboutMe <span className="sr-only"></span>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="about-section">
        <h1>About Me</h1>
        <p>
          My self SANDHYA LAVURI I from Telangana I did my school in Nalgonda
         with CGPA of 9.3. I Did my intermediate in Khammam with Score of 974/1000.
          Now iam pursuing B-Tech 4th year in the Stream of COMPUTER SCIENCE I
          have a lot of interest in FULL STACK DEVELOPMENT and I did internship in 
          IEZAL PVT LTD as a software developer in Full stack filed and am also good
          in DATASTRUCTURE AND ALGORITHMS in C++.
        </p>
      </div>
    </>
  );
}
