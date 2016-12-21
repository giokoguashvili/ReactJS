import ActionTypes from '../constants/ActionTypes'

export function deleteTodo(id){
    return { type: ActionTypes.DELETE_TODO, todoId: id }
}