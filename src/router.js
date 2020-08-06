import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/home/index";
import List from "./pages/list/index";
// import store from "./Redux/Store/index";

const router = (
  //   <Provider store={store}>
  <Router>
    <App>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect from="/" to="/home"></Redirect>
      </Switch>
    </App>
  </Router>

  //   </Provider>
);

export default router;
