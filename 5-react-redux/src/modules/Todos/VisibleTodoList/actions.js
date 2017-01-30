import ActionTypes from '../ActionTypes'

export const deleteTodo = (id) => {
    return { type: ActionTypes.DELETE_TODO, todoId: id }
}

export const toggleTodo = (id) => {
    return { type: ActionTypes.TOGGLE_TODO, todoId: id }
}

