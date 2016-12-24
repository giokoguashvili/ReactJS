import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from '../views/Home'
import Welcome from '../views/Welcome'


class Routes {
    constructor(root) {
        this._root = root;
    }
    init() {
        return(
            <Router history={browserHistory}>
                <Route path="/" component={this._root.init()}>
                    <IndexRoute component={Welcome} />
                    <Route path="/Home" component={Home} />
                </Route>
            </Router>
        );
    }
}

export default Routes;