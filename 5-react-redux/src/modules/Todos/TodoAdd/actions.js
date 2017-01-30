import ActionTypes from '../ActionTypes'

export const addTodo = (text) => {
    return { type: ActionTypes.ADD_TODO, text }
}
