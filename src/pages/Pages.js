import React from "react";
import HomePage from "./HomePage";
import Register from "../components/Login/Register";
import Mycart from "../components/Cart/Mycart";
import Detail from "../components/Detail/Detail";
import ScrollToTop from "react-router-scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function index() {
  return (
    <Router>
      <Switch>
        <ScrollToTop>
          <Route path="/" exact component={HomePage} />
          <Route path="/Register" component={Register} />
          <Route path="/Mycart" component={Mycart} />
          <Route path="/detail" component={Detail} />
        </ScrollToTop>
      </Switch>
    </Router>
  );
}
