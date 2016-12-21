import { combineReducers } from 'Redux'
import tasks from './todos/reducers'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
    tasks,
    routing: routerReducer
});

export default reducer