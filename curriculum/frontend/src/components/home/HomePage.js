import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div>
    <h1>Pluralsight Administration</h1>
    <p>React, Redux and React Router for ultra-responsive web apps.</p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <div className="overlay"></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
              <div className="slider-text-inner js-fullheight">
                <div className="desc">
                  <h1>Hi! Im Jackson</h1>
                  <h2>100% html5 bootstrap templates Made by </h2>
                  <p>
                    <a className="btn btn-primary btn-learn">
                      Download CV <i className="icon-download4"></i>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;
