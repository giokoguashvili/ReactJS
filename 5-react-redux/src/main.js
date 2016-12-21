import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}> 
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

