import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppRoute } from './../common/constants';
import HomePage from './../screens/home_page';
import RgbToHex from './../screens/rgb_to_hex';
import RenderMarkdown from './../screens/render_markdown';
import Counter from './../screens/counter';
import Percentage from "../screens/Percentage";
import Header from '../components/header';

export default function () {
  return (
    <Router>
      <>
        <Header />
        {/* A <Switch> looks through its children <Route>s and */}
        {/* renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path={AppRoute.HomePage}><HomePage /></Route>
          <Route path={AppRoute.RgbToHex}><RgbToHex /></Route>
          <Route path={AppRoute.RenderMarkdown}><RenderMarkdown /></Route>
          <Route path={AppRoute.Counter}><Counter /></Route>
          <Route path={AppRoute.Percentage}><Percentage /></Route>
          <Redirect from='*' to={AppRoute.HomePage} />
        </Switch>
      </>
    </Router>
  );
}