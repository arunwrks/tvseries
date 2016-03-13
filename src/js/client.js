import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Home from "./components/home/Home";
import Search from "./components/search/Search";
import Popular from "./components/popular/Popular";
import TopRated from "./components/top-rated/TopRated";
import OnTheAirToday from "./components/on-the-air-today/OnTheAirToday";
import AiringToday from "./components/airing-today/AiringToday";
import PlayGround from "./components/play-ground/PlayGround";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="search" name="search" component={Search}></Route>
      <Route path="popular" name="popular" component={Popular}></Route>
      <Route path="top-rated" name="top-rated" component={TopRated}></Route>
      <Route path="on-the-air-today" name="on-the-air-today" component={OnTheAirToday}></Route>
      <Route path="airing-today" name="airing-today" component={AiringToday}></Route>
      <Route path="play-ground" name="play-ground" component={PlayGround}></Route>
    </Route>
  </Router>,
app);