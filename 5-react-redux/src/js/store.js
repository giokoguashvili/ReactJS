import { createStore } from 'redux'

class Store {
    constructor(state, middleware) {
        this._state = state;
        this._middleware = middleware;
    }

    // wrapDispatchWithMiddlewares(store, middlewares) {
    //     middlewares.slice().reverse().forEach(middlewares => {
    //         store.dispatch = middlewares(store)(store.dispatch);
    //     });
    // }

    init() {
        const store = createStore(
            this._state.combinedReducers(),
            this._state.loadState(),
            this._middleware.init()
        );

        store.subscribe(() => {
            this._state.saveState(store.getState());
        });
        return store;
    }
}

export default Store