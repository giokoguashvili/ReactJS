import ActionTypes from '../constants/ActionTypes'

export const deleteTodo = (id) => {
    return { type: ActionTypes.DELETE_TODO, todoId: id }
}

export const toggleTodo = (id) => {
    return { type: ActionTypes.TOGGLE_TODO, todoId: id }
}

export const addTodo = (text) => {
    return { type: ActionTypes.ADD_TODO, text }
}

export const setVisibilityFilter = (filter) => {
    return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
}