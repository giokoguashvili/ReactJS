import { createStore } from 'redux'

class Store {
    constructor(reducer, state, middleware) {
        this._reducer = reducer;
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
            this._reducer.init(),
            this._state.init(),
            this._middleware.init()
        );

        store.subscribe(() => {
            this._state.saveState(store.getState());
        });
        return store;
    }
}

export default Store