import React from "react";
import "../styles/styles.css";
import Gallery from "./Gallery";
import Landing from "./Landing/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactGA from "react-ga";
// Initialize google analytics using the tracking
ReactGA.initialize("G-CJDBYS8RY6");
ReactGA.pageview(window.location.pathname + window.location.search);
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/home">
          <Landing />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
      </Switch>
    </Router>
  );
}
