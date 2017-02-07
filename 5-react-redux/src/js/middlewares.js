import { applyMiddleware } from 'redux'

class Middlewares {
    constructor(...middlewares) {
        this._middlewares = middlewares;
    }
    init() {
        return this._middlewares;
        //return applyMiddleware(...this._middlewares);
    }
}

export default Middlewares;