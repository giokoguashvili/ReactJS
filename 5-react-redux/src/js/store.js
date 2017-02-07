import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mySaga from '../modules/Todos/VisibleTodoList/saga'

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
        var middles = this._middleware.init();
        const sagaMiddleware = createSagaMiddleware();
        const store = createStore(
            this._reducer.init(),

            applyMiddleware(sagaMiddleware)
        );
        sagaMiddleware.run(mySaga);
        store.subscribe(() => {
            this._state.saveState(store.getState());
        });
        return store;
    }
}

export default Store