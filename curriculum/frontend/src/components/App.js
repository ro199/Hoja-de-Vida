import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import About from "./about/About";
import Certificate from "./certificate/Certificate";
import Curriculum from "./curriculum/Curriculum";
import Contact from "./contact/Contact";

function App() {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <Header />
        <div id="colorlib-main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/certificate" component={Certificate} />
            <Route exact path="/curriculum" component={Curriculum} />
            <Route exact path="/contact" component={Contact} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
