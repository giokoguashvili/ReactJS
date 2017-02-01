import React from 'react'
import App from './js/app'
import Store from './js/store'
import Reducer from './js/reducer'
import State from './js/state'
import Routes from './js/routes'
import Root from './js/root'
import Middlewares from './js/middlewares'

// import { logger } from './js/middlewares/logger'
// import { promise } from './js/middlewares/promise'
import createLogger from 'redux-logger'
import promise from 'redux-promise'

const initialState = {
    todos: {
        visibilityFilter: 'SHOW_ALL',
        todoItems: [
            {
                id: 'f54c9475-7bd5-40f1-ac9a-c7fa285c385a',
                text: 'React',
                completed: true
            },
            {
                id: 'db72b4e7-a476-4fd4-a16f-fb3e67566139',
                text: 'Redux',
                completed: false
            },
            {
                id: 'df5590ad-0e54-4e8c-80f5-d84941e1e0da',
                text: '.Net Core',
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
        ),
        new Middlewares(
            promise,
            createLogger()
        )
    ),
    new Routes(
        new Root()
    )
).init();