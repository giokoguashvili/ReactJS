import React, { Component } from 'react'
import VisibleTodoList from './containers/VisibleTodoList'
import TodoAdd from './containers/TodoAdd'

class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div>
                <TodoAdd />
                <VisibleTodoList />
            </div>
        );
    }
}

export default Tasks;