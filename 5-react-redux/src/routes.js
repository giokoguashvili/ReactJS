import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Welcome from './views/Welcome'
import Todos from './todos'
import App from './views/App'

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={Todos}/>
        <Route path="/Todos" component={Todos}/>
    </Route>
);

export default routes;