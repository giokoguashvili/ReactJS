import dispatcher from '../dispatcher';

export function createTodo(inputData) {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text: inputData,
    });
}

export function removeTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id,
    });
}