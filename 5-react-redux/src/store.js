import { createStore, combineReducers } from 'Redux'
import reducer from './reducer'
import { routerReducer } from 'react-router-redux'

const initialState = {
    tasks: {
        visibilityFilter: 'SHOW_ALL',
        todos: [
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
                id: 993,
                text: '.net core',
                completed: false
            }
        ],
    },
}

const store = createStore(
    reducer, 
    initialState
);

export default store;