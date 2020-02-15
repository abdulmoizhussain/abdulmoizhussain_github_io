import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppRoute } from './../common/constants';
import HomePage from './../screens/home_page';
import RgbToHex from './../screens/rgb_to_hex';

export default function () {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and */}
      {/* renders the first one that matches the current URL. */}
      <Switch>
        <Route path={AppRoute.RgbToHex}><RgbToHex /></Route>
        <Route path={AppRoute.HomePage}><HomePage /></Route>
      </Switch>
    </Router>
  );
}