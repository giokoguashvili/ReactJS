import ActionTypes from '../constants/ActionTypes'

export function deleteTodo(id){
    return { type: ActionTypes.DELETE_TODO, todoId: id }
}

export function toggleTodo(id){
    return { type: ActionTypes.TOGGLE_TODO, todoId: id }
}

export function addTodo(text){
    return { type: ActionTypes.ADD_TODO, text }
}