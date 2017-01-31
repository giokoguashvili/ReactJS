import { createStore } from 'redux'

class Store {
    constructor(state) {
        this._state = state;
    }
    init() {
        const store = createStore(
            this._state.combinedReducers(),
            this._state.loadState()
        );

        store.subscribe(() => {
            this._state.saveState(store.getState());
        });

        const addLogginingToDispatch = (store) => {
            const rawDispatch = store.dispatch;

            return (action) => {
                console.group(action.type);
                console.log("%c prev state", "color: red", store.getState());
                const returnValue = rawDispatch(action);
                console.log("%c next state", "color: green", store.getState());
                console.groupEnd(action.type);
                return returnValue;
            }
        }

        const addPromiseSupportToDispatch = (store) => {
            const rawDispatch = store.dispatch;
            return (action) => {
                if (typeof action.then === 'function') {
                    return action.then(rawDispatch);
                } else {
                    return rawDispatch(action);
                }
            }
        }

        store.dispatch = addLogginingToDispatch(store);
        store.dispatch = addPromiseSupportToDispatch(store);
        
        return store;
    }
}

export default Store