import dispatcher from '../dispatcher';

export function createTodo() {
    dispatcher.dispatch({
        type: 'CREATE_TODO',
        text: Date.now(),
    });
}

export function removeTodo(id) {
    dispatcher.dispatch({
        type: 'DELETE_TODO',
        id,
    });
}