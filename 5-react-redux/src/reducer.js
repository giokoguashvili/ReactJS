import { combineReducers } from 'Redux'
import { routerReducer } from 'react-router-redux'

import { todoItems, visibilityFilter } from './todos/reducers'

const reducer = combineReducers({
    todos: combineReducers({
        todoItems,
        visibilityFilter
    }),
    routing: routerReducer
});

export default reducer