import React from 'react';  
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import './index.css';
import { createBrowserHistory } from 'history';
import App from './Component/App';
import Secondpage from './Component/Secondpage';
import Product from './Component/Product';
import Feedback from './Component/Feedback';
import Thankyou from './Component/Thankyou';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
ReactDOM.render(
<Router history={history}>
    <Route path="/" exact component={App}></Route>
    <Route path="/Secondpage" component={Secondpage}></Route>
    <Route path="/Product" component={Product}></Route>
    <Route path="/Feedback" component={Feedback}></Route>
    <Route path="/Thankyou" component={Thankyou}></Route>
</Router> ,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
