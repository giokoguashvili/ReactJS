import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

class App {
    constructor(store, routes) {
        this._routes = routes;
        this._store = store;
    }

    init() {
        ReactDOM.render(
            <Provider store={this._store.init()}>
                {this._routes.init()}
            </Provider>,
            document.getElementById('app')
        )
    }
}

export default App