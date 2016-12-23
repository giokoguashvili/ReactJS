import { createStore, combineReducers } from 'Redux'
import reducer from './reducer'
import { routerReducer } from 'react-router-redux'

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

const store = createStore(
    reducer, 
    initialState
);

export default store;