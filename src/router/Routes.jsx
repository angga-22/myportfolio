import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HomePage from "../layouts/HomePage/HomePage";
import Projects from "../layouts/Projects/Projects";
import About from "../layouts/About/About";

const Routes = () => {
  return (
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/about" exact component={About} />
    </Fragment>
  );
};

export default Routes;
