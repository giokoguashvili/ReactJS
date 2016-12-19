import { combineReducers } from 'Redux'
import todos from './todos'

const appTodo = combineReducers({
    todos
});

export default appTodo;