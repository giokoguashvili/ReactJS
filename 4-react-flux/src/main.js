
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import About from './About';
import Repos from './Repos';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/About" component={About}/>
        <Route path="/Repos" component={Repos}/>
    </Router>,
    document.getElementById("app")
);
