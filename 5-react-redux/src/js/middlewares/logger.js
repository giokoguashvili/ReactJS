
export const logger = store => next => action => {
    console.group(action.type);
    console.log("%c prev state", "color: red", store.getState());
    const returnValue = next(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
    return returnValue;
}