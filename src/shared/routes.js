import { Router, Route } from "react-router";
import { history } from 'react-router/lib/History'
import React from "react";

//import AppHandler from "./components/AppHandler";
import Layout from './containers/Layout'

export default (
    <Router history={ history }>
      <Route component={ Layout } path="/" />
    </Router>
);