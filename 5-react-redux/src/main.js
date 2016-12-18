import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store.js'

const render = () => {
    ReactDOM.render(
        <App todos={store.getState().todos}/>,
        document.getElementById('app')
    );
};

store.subscribe(render);
render();
