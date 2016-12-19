import { combineReducers } from 'Redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const appTodo = combineReducers({
    todos
});

export default appTodo;