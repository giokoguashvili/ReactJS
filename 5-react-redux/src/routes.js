import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Welcome from './views/Welcome'
import Tasks from './tasks'
import App from './views/App'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Tasks}/>
        <Route path="/tasks" component={Tasks}/>
    </Route>
);

export default routes;