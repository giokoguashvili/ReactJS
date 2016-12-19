import React, { Component } from 'react'
import store from './store'
import ActionTypes from './Constants'

class App extends Component {
    constructor() {
        super();
        this.state = { inputValue: '' };
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.setState({ inputValue: e.target.value })} value={this.state.inputValue}/>
                <button onClick={() => { 
                        store.dispatch({ type: ActionTypes.ADD_TODO, text: this.state.inputValue });
                        this.setState({ inputValue: ''});
                    }}
                >
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map((item) =>
                            <li 
                                key={item.id} 
                                style={{color: item.completed ? 'red' : 'blue' }}
                                onClick={() => {store.dispatch({type: ActionTypes.TOGGLE_TODO, todoId: item.id})}}
                            >
                                {item.text}
                                <button
                                    onClick={() => { store.dispatch({ type: ActionTypes.REMOVE_TODO, todoId: item.id })}} 
                                >
                                    X
                                </button>
                            </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default App;