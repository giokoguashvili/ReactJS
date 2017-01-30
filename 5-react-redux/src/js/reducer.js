import { combineReducers } from 'Redux'
import { routerReducer as routing } from 'react-router-redux'
import  todos from '../modules/todos/reducers'

class Reducer {
    init() {
        return combineReducers({
            todos,
            routing
        });
    }
}
export default Reducer