import React from 'react';
import Detail from '../components/Detail/Detail';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'

export default function index() {
  return (
    <div>
      <Router>
      <Switch>
      <ScrollToTop>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:id" component={Detail}  exact/>
      </ScrollToTop>
      </Switch>
      </Router>
    </div>
  );
}
