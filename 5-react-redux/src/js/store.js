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
        return store;
    }
}

export default Store