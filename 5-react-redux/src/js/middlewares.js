import { applyMiddleware } from 'redux'

class Middlewares {
    constructor(...middlewares) {
        this._middlewares = middlewares;
    }
    init() {
        return applyMiddleware(...this._middlewares);
    }
}

export default Middlewares;