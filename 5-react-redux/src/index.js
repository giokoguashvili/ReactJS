import React from 'react'
import App from './js/app'
import Store from './js/store'
import Reducer from './js/reducer'
import State from './js/state'
import Routes from './js/routes'
import Root from './js/root'

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

new App(
    new Store(
        new Reducer(),
        new State(
            initialState
        )
    ),
    new Routes(
        new Root()
    )
).init();
