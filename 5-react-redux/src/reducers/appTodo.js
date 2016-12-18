import { combineReducers } from 'Redux'
import todos from './todos.js'

const appTodo = combineReducers({
    todos
});

export default appTodo;