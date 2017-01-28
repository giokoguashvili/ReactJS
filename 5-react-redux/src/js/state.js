import { combineReducers } from 'Redux'

class State {
    constructor(reducer, initialState) {
        this._reducer = reducer;
        this._initialState = initialState;
    }
    combinedReducers() {
        return this._reducer.init();
    }
    loadState() {
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) {
                if (this._initialState)
                    return this._initialState;
                return undefined;
            }
            return JSON.parse(serializedState);
        }
        catch (error) {
            console.log(error);
        }
    }

    saveState(state) {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('state', serializedState);
        } catch (error) {
            console.log(error);
        }
    }
}

export default State