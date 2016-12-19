import React, { Component } from 'react'
import store from './store'

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
                        store.dispatch({ type: 'ADD_TODO', text: this.state.inputValue });
                        this.setState({ inputValue: ''});
                    }}
                >
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map((item) =>
                            <li key={item.id}>{item.text}</li>
                        )}
                </ul>
            </div>
        );
    }
}

export default App;