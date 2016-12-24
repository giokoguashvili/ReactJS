import { createStore, combineReducers } from 'Redux'
import reducer from './reducer'
import { routerReducer } from 'react-router-redux'
import { saveState, loadState } from './localStorage'

const initialState = {
    todos: {
        visibilityFilter: 'SHOW_ALL',
        todoItems: [
            {
                id: 991,
                text: 'React',
                completed: true
            },
            {
                id: 992,
                text: 'Redux',
                completed: false
            },
            {
                id: 93,
                text: '.net core',
                completed: false
            }
        ],
    },
}
const persistState = loadState();
const store = createStore(
    reducer, 
    persistState || initialState
);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;