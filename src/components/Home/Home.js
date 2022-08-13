import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
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

      <div>
        <link
          rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,300"
          rel="stylesheet"
          type="text/css"
        />
        <div className="box">
          <div id="overlay">
            <div className="image">
              <div className="trick"></div>
            </div>
            <ul className="text">SANDHYA LAVURI</ul>
            <div className="text1">
              COMPITATIVE PROGRAMMER | FULL STACK DEVELOPER
            </div>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
