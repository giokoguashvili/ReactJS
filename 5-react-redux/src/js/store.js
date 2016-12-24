import { createStore } from 'redux'

class Store {
    constructor(reducer, state) {
        this._reducer = reducer;
        this._state = state;
    }
    init() {
        const store = createStore(
            this._reducer.init(),
            this._state.loadState()
        );
        store.subscribe(() => {
            this._state.saveState(store.getState());
        });
        return store;
    }
}

export default Store