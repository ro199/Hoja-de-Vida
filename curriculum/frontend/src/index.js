import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "../static/frontend/css/flexslider.css";
import "../static/frontend/css/index.css";
import "../static/frontend/css/animate.css";
import "../static/frontend/css/icomoon.css";
import "../static/frontend/css/owl.carousel.min.css";
import "../static/frontend/css/owl.theme.default.min.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
