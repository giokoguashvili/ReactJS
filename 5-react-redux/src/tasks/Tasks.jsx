import React, { Component } from 'react'
import TodoList from './containers/TodoList'

class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div>
                <TodoList />
            </div>
        );
    }
}

export default Tasks;