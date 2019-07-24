import React from 'react';  
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import App from './App';
import Secondpage from "./Secondpage";
import Feedback from "./Feedback";
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
ReactDOM.render(
<Router history={history}>
    <Route path="/" exact component={App}></Route>
    <Route path="/Secondpage" component={Secondpage}></Route>
    <Route path="/Feedback" component={Feedback}></Route>
</Router> ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
