import { combineReducers } from 'Redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const tasks = combineReducers({
    todos,
    visibilityFilter
});

export default tasks;