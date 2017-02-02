import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import routes from './routes'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    (state = []) => state,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

render(
    <Provider store={store}>
        <Router
            history={browserHistory}
            routes={routes}
            />
    </Provider>,
    document.getElementById('app')
);
