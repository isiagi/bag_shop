import React from "react";
import HomePage from "./HomePage";
import Register from "../components/Login/Register";
// import Mycart from "../components/Cart/Mycart";
import Detail from "../components/Detail/Detail";
import Reset from "../components/Reset/ResetPasswordScreen";
import ScrollToTop from "react-router-scroll-top";
import { Context } from "../components/Context/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cat from "../components/cat/Cat";

export default function index() {
  return (
    <Router>
      <Switch>
        <ScrollToTop>
          <Route path="/Register" component={Register} />
          <Route path="/passwordreset/:id" exact component={Reset} />
          <Context>
            <Route path="/" exact component={HomePage} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/Mycart" component={Cat} />
            <Route path="/cart" component={Cat} />
          </Context>
        </ScrollToTop>
      </Switch>
    </Router>
  );
}
