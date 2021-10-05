import React from 'react';
import HomePage from './HomePage';
import Register from '../components/Login/Register';
import Mycart from '../components/Cart/Mycart';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

export default function index() {
    return (
        <Router>
           <Switch>
               <Route  path = "/" exact component = {HomePage}/>
               <Route  path = "/Register" component = {Register}/>
               <Route  path = "/Mycart" component = {Mycart}/>
           </Switch>
        </Router>
    )
}
