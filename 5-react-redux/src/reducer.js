import { combineReducers } from 'Redux'
import { routerReducer } from 'react-router-redux'

import { todos, visibilityFilter } from './tasks/reducers'

const reducer = combineReducers({
    tasks: combineReducers({
        todos,
        visibilityFilter
    }),
    routing: routerReducer
});

export default reducer