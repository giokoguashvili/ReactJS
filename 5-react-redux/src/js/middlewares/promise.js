export const promise = store => next => action => {
    if (typeof action.then === 'function') {
        return action.then(next);
    } else {
        return next(action);
    }
}