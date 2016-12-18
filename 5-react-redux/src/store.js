import { createStore } from 'Redux'
import appTodo from './reducers/appTodo.js'

const store = createStore(appTodo);

export default store;