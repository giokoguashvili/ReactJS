import { combineReducers } from 'Redux'

import todoItems from './todoItems'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    todoItems,
    visibilityFilter
})