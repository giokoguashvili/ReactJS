import ActionTypes from '../ActionTypes'
import * as api from '../../../js/API'

export const deleteTodo = (id) => ({
    type: ActionTypes.DELETE_TODO,
    todoId: id
})

export const toggleTodo = (id) => ({
    type: ActionTypes.TOGGLE_TODO,
    todoId: id
})

const receiveTodos = (filter, response) => ({
    type: ActionTypes.RECEIVE_TODOS,
    filter,
    response
})

export const fetchTodos = (filter) =>
    api.fetchTodos(filter)
        .then((response) =>
            receiveTodos(filter, response)
        );

