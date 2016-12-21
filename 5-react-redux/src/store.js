import { createStore, combineReducers } from 'Redux'
import reducer from './reducer'
import { routerReducer } from 'react-router-redux'

const initialState = {
    tasks: {
        visibilityFilter: 'SHOW_ALL',
        todos: [
            {
                id: 1,
                text: 'React',
                completed: true
            },
            {
                id: 2,
                text: 'Redux',
                completed: false
            },
            {
                id: 3,
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