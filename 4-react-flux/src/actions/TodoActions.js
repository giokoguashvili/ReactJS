import dispatcher from '../dispatcher';
import ActionTypes from '../Constants';

export function createTodo(inputData) {
    dispatcher.dispatch({
        type: ActionTypes.CREATE_TODO,
        text: inputData,
    });
}

export function removeTodo(id) {
    dispatcher.dispatch({
        type: ActionTypes.DELETE_TODO,
        id,
    });
}

export function completeTodo(id, complete) {
    dispatcher.dispatch({
        type: ActionTypes.COMPLETE_TODO,
        id,
        complete,
    });
}