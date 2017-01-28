import { combineReducers } from 'Redux'
import { routerReducer } from 'react-router-redux'
import { todoItems, visibilityFilter } from '../modules/todos/reducers'

class Reducer {
    init() {
        return combineReducers({
            todos: combineReducers({
                todoItems,
                visibilityFilter
            }),
            routing: routerReducer
        });
    }
}
export default Reducer