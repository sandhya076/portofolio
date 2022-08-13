import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";
export default function Projects() {
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
            <Link to="/">
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

      <div>
        <title>Bootstrap 4 Flip Card</title>

        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Vidaloka"
          rel="stylesheet"
        />
        <section>
          {/* <div className="container">
           
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project 1</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://png.pngtree.com/thumb_back/fh260/background/20220309/pngtree-indian-traditional-wedding-pattern-decorative-background-image_1066383.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title"> TRADITIONAL_EMART</h4>
                        <p className="card-text">
                          This is a ECOMMERCE website which sells the TRADITIONAL
                      clothes for both men and women which is built using MERN-
                      stack , people who looking for traditional clothes they can pur-
                      chase from women collection,men collection and wedding collec-
                      tion. this application has been deployed and hosted in heroku
                                              </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href= "https://traditional-emart-client2-8k3nsxwv4-sandhya076.vercel.app/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project 1</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://web-static.wrike.com/blog/content/uploads/2020/01/Five-Features-of-a-Good-Monthly-Employee-Work-Schedule-Template.jpg?av=718acbc1e2b21264368f12b5cc57c0e2"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Work Schedule</h4>
                        <p className="card-text">
                          This is a Full Stack MERN application with FOUR CRUD
                          operations.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://work-schedules.herokuapp.com/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-2</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://www.orangemantra.com/wp-content/themes/lespaul-child/images/ml-banner.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Multi-Merchant</h4>
                        <p className="card-text">
                          This is a Full Stack MERN application In this I have
                          provided a online selling opportunity for merchants to
                          sell their farming products through in this site.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://multi-merchant-client.herokuapp.com/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-3</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://thumbs.dreamstime.com/b/retro-camera-photo-memorie-nostalgia-fall-retro-camera-photo-memorie-nostalgia-fall-autumn-memories-121992593.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Memories</h4>
                        <p className="card-text">
                          This is a Full stack MERN application with FOUR CRUD
                          operation. in this application we can store our
                          memories with description ,place,title,hashtag .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://memory-client-18wj1o03i-sandhya076.vercel.app/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-4</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ay-c6YIuP2VysYG2QmDRr-ZwDwwT6rLP-w&usqp=CAU"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">To-DO</h4>
                        <p className="card-text">
                          This is a Full stack MERN application with FOUR CRUD
                          operation. in this application we can store our todo
                          works
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://to-do-client-sigma.vercel.app/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-5</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-10-SQL-Query-Optimization-Techniques.jpg"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Atlan</h4>
                        <p className="card-text">
                          This is a react application which takes input as a sql
                          quires and gives the appropriate output.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://atlan-task.vercel.app/">APP LINK</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-6</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://qph.fs.quoracdn.net/main-qimg-f01f4313bd6dc835677c629efa82b1f3-pjlq"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">E-commerce</h4>
                        <p className="card-text">
                          This is a Full stack MERN application in this
                          application we Provided service of PEM ,work for PEM
                          and PEM related
                          requirements.(PEM-Plumber,Electrician,Mechanic)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://pem-joy-app.herokuapp.com/ ">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-7</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYdIejJSiopwUW7_4VH64b2SxgpBveHddzA&usqp=CAU"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">E-commerce</h4>
                        <p className="card-text">
                          This is a ECOMMERCE website which sells the
                          TRADITIONAL clothes for both men and women which is
                          built using MERN- stack , people who’s looking for
                          traditional clothes they can pur- chase from women
                          collection,men collection and wedding collec- tion.
                          this application has been deployed and hosted in
                          heroku
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://traditional-emart-client2-8k3nsxwv4-sandhya076.vercel.app/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <h3 className="text-center mb-5">Project-8</h3>
                <div className="card-flipper effect__hover" data-id={1}>
                  <div className="card__front">
                    <div className="card card-01">
                      <div className="profile-box-01">
                        <img
                          className="card-img-top"
                          src="https://corkboardconcepts.com/wp-content/uploads/2021/04/GFLogo-1024x965.png"
                          alt="Card image cap"
                        />
                      </div>
                      <div className="card-body text-center">
                        <span className="badge-box">
                          <i className="fa fa-check" />
                        </span>
                        <h4 className="card-title">Google-Form</h4>
                        <p className="card-text">
                          This is a google form which was created by using MERN
                          and also implemented multer for uploading resume inthe
                          fome
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card__back">
                    <div className="card card-01">
                      <div className="card-body text-center">
                        <h4 className="card-title"></h4>
                        <a href="https://google-form-client.vercel.app/">
                          APP LINK
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
