import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import App from "./Component/App";
import Product from "./Component/Product";
import Feedback from "./Component/Feedback";
import Thankyou from "./Component/Thankyou";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Route path="/home" exact component={App} />
    <Route path="/home/:id" exact component={App} />
    <Route path="/Product" component={Product} />
    <Route path="/Feedback" component={Feedback} />
    <Route path="/Thankyou" component={Thankyou} />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
