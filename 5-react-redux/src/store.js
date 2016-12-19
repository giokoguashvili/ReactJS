import { createStore } from 'Redux'
import appTodo from './reducers'

const store = createStore(appTodo);

export default store;