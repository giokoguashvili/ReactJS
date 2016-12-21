import React from 'react'
import { Route, IndexRoute, browserHistory } from 'react-router'
import Welcome from './Welcome'
import Tasks from './tasks'
import App from './App'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Tasks}/>
        <Route path="/tasks" component={Tasks}/>
    </Route>
);

export default routes;