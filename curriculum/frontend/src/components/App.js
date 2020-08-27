import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import About from "./about/About";
import Certificate from "./certificate/Certificate";
import Curriculum from "./curriculum/Curriculum";
import Contact from "./contact/Contact";
import Project from "./project/Project";

function App() {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <Header />
        <div id="colorlib-main">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/certificate" component={Certificate} />
            <Route exact path="/curriculum" component={Curriculum} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/project" component={Project} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
