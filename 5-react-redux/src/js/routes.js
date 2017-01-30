import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Tasks from '../views/Tasks'
import Dashboard from '../views/Dashboard'


class Routes {
    constructor(root) {
        this._root = root;
    }
    init() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={this._root.init()}>
                    <IndexRoute component={Dashboard} />
                    <Route path="/Tasks(/:filter)" component={Tasks} />
                </Route>
            </Router>
        );
    }
}

export default Routes;