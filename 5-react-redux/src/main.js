import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import routes from './routes'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'

// Provider.childContextTypes = {
//     store: React.PropTypes.shape({
//         todos: React.PropTypes.shape({
//             visibilityFilter: React.PropTypes.bool,
//             todoItems: React.PropTypes.arrayOf(
//                 React.PropTypes.shape({
//                     id: React.PropTypes.number.isRequired
//                 })
//             )
//         })
//     })
// }

// XXX.contextTypes

ReactDOM.render(
    <Provider store={store}> 
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);

