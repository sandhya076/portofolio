import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";
export default function Skills() {
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
            <Link to = "/">
            <a className="nav-item nav-link active" href="#">
              Home
            </a>
            </Link>
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
      <div className="container mt-5">
        <div className="card">
          <div className="row no-gutters">
        
            <div className="col-md-8">
              <div className="rating-progress-bars p-3 mt-2">
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      C++ <i className="fa fa-star text-success" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>80%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Data Structures and algorithms<i className="fa fa-star text-custom" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-custom"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>85%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Python<i className="fa fa-star text-primary" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "55%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>85%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Html <i className="fa fa-star text-warning" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "35%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>90%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      CSS <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>90%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Java Script <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>90%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Node <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>90%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      Express <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>90%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      MongoDB <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>85%</span>{" "}
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  {" "}
                  <span className="stars">
                    {" "}
                    <span>
                      React <i className="fa fa-star text-danger" />
                    </span>{" "}
                  </span>
                  <div className="col px-2">
                    <div className="progress" style={{ height: "5px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "65%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>{" "}
                  <span className="percent">
                    {" "}
                    <span>95%</span>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
